import { db } from "@/lib/db/db_middleware";
import { createServerFn } from "@tanstack/react-start";

export const getPersonFn = createServerFn({ method: "GET" })
  .middleware([db])
  .validator((data: { id: string }) => data)
  .handler(async ({ context, data }) => {
    const { db } = context;

    const person = await db.query.person.findFirst({
      where: (person, { eq }) => eq(person.id, data.id),
    });

    return person;
  });
