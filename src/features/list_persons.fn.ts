import { db } from "@/lib/db/db_middleware";
import { createServerFn } from "@tanstack/react-start";

export const listPersonsFn = createServerFn({ method: "GET" })
  .middleware([db])
  .handler(async ({ context, data }) => {
    const { db } = context;

    const result = await db.query.person.findMany({
      limit: 10,
    });

    return result;
  });
