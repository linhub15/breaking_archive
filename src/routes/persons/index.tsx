import { listPersonsFn } from "@/features/list_persons.fn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/persons/")({
  component: RouteComponent,
  loader: async () => {
    return await listPersonsFn();
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div>
      {data.map((person) => (
        <div key={person.id}>
          <a href={`/persons/${person.id}`}>{person.name}</a>
        </div>
      ))}
    </div>
  );
}
