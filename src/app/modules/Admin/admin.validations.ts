import { z } from "zod";
// before send data, this function update if right format data is send or not
// used in route
const update = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});

export const adminValidationSchemas = {
  update,
};
