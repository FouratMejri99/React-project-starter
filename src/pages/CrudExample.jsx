import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export default function CrudExample() {
  const { data, isLoading } = useQuery(["items"], () =>
    api.get("/items").then((res) => res.data)
  );

  const mutation = useMutation((newItem) => api.post("/items", newItem));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">CRUD Example</h1>
      <button
        onClick={() => mutation.mutate({ name: "New Item" })}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
      <ul className="mt-4 space-y-2">
        {data?.map((item) => (
          <li key={item.id} className="p-2 border rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
