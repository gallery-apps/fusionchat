import * as z from "zod";

export const MessageValidation = z.object({
  messageContent: z.string().min(3).max(100),
});
