import { getPersonFn } from "@/features/get_person.fn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/persons/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const id = params.id;
    const person = await getPersonFn({ data: { id } });
    return person;
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const data = Route.useLoaderData();

  return (
    <div>
      <div>
        <pre>

        {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
