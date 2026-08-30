/**
 * Tipos y lógica de cálculo de tarifas para los cotizadores de Envíos Express
 * y Envíos LowCost. `PriceRangeProp` es la forma serializable del modelo
 * `PriceRange` de Prisma (schema.prisma) tal como llega a un Client Component
 * después de pasar por un Server Component (fechas/decimales ya son JSON-safe).
 */

export type ServiceTypeProp = "EXPRESS" | "LOW_COST";

export interface PriceRangeProp {
  id: number;
  /** En BD es texto plano con un CHECK constraint (no un enum de Prisma), ver schema.prisma. */
  serviceType: string;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

/**
 * Busca el rango de precio que corresponde a una distancia y tipo de servicio.
 * Devuelve el precio del rango o "consultar" si la distancia excede todos los
 * rangos cargados (no inventamos una tarifa fuera del rango definido en BD).
 */
export function calculatePrice(
  distanceKm: number,
  serviceType: ServiceTypeProp,
  priceRanges: PriceRangeProp[]
): number | "consultar" {
  const rangesForService = priceRanges.filter((r) => r.serviceType === serviceType);

  const match = rangesForService.find(
    (r) => distanceKm >= r.distanciaMinKm && distanceKm < r.distanciaMaxKm
  );

  if (match) return match.precioRango;

  // Distancia mayor al rango más alto cargado: no inventamos precio, se consulta.
  return "consultar";
}
