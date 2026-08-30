import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// Prisma 7 requiere un driver adapter explícito (ya no lee DATABASE_URL
// automáticamente). DATABASE_URL es un Postgres pooled estándar (no
// prisma://), por eso corresponde @prisma/adapter-pg y no Accelerate.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Singleton de PrismaClient para evitar agotar conexiones con el hot-reload
// de Next.js en desarrollo (cada recarga de módulo crearía una instancia nueva).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
