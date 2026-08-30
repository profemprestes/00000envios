"use server";

import { calculatePrice, type PriceRangeProp, type ServiceTypeProp } from "@/src/lib/pricing";

export interface QuoteState {
  success: boolean;
  price: number | "consultar" | null;
  error: string | null;
}

const VALID_SERVICE_TYPES: ServiceTypeProp[] = ["EXPRESS", "LOW_COST"];

/**
 * Server Action de los cotizadores (Express / LowCost). Recibe la distancia ya
 * calculada por Google Directions (desde el cliente, vía useGoogleRoute) y los
 * priceRanges cargados en la página (RSC → prop), y devuelve el precio.
 *
 * No vuelve a golpear Prisma acá: priceRanges ya viene resuelto desde el
 * Server Component padre (evita una segunda consulta redundante a la misma
 * tabla en cada submit).
 */
export async function calculateQuoteAction(
  _prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const distanceKmRaw = formData.get("distanceKm");
  const serviceTypeRaw = formData.get("serviceType");
  const priceRangesRaw = formData.get("priceRanges");

  const distanceKm = Number(distanceKmRaw);
  if (!Number.isFinite(distanceKm) || distanceKm < 0) {
    return { success: false, price: null, error: "Distancia inválida." };
  }

  if (typeof serviceTypeRaw !== "string" || !VALID_SERVICE_TYPES.includes(serviceTypeRaw as ServiceTypeProp)) {
    return { success: false, price: null, error: "Tipo de servicio inválido." };
  }
  const serviceType = serviceTypeRaw as ServiceTypeProp;

  let priceRanges: PriceRangeProp[] = [];
  if (typeof priceRangesRaw === "string") {
    try {
      const parsed = JSON.parse(priceRangesRaw);
      if (Array.isArray(parsed)) {
        priceRanges = parsed;
      }
    } catch {
      return { success: false, price: null, error: "No se pudieron leer las tarifas." };
    }
  }

  if (priceRanges.length === 0) {
    return { success: false, price: null, error: "No hay tarifas cargadas para este servicio." };
  }

  const price = calculatePrice(distanceKm, serviceType, priceRanges);

  return { success: true, price, error: null };
}
