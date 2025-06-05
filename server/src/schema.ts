
import { z } from 'zod';

// Minimal schema for healthcheck only
export const healthcheckSchema = z.object({
  status: z.string(),
  timestamp: z.string()
});

export type Healthcheck = z.infer<typeof healthcheckSchema>;
