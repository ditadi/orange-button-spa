
import { z } from 'zod';

// Simple UI state schema for the button
export const buttonStateSchema = z.object({
  id: z.string(),
  label: z.string(),
  clicked: z.boolean(),
  color: z.string(),
  created_at: z.coerce.date()
});

export type ButtonState = z.infer<typeof buttonStateSchema>;

// Input schema for getting button state
export const getButtonStateInputSchema = z.object({
  id: z.string().optional()
});

export type GetButtonStateInput = z.infer<typeof getButtonStateInputSchema>;
