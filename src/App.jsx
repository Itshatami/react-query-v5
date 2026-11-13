import { useQuery } from "@tanstack/react-query";

function App() {
  const queryKey = ["products"];
  const queryFn = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const { isPending, isLoading, data, error } = useQuery({ queryKey, queryFn });
  // isLoading => isPending && isFetching
  console.log({ isPending, isLoading, data, error });

  return (
    <div>
      <h3>App</h3>
    </div>
  );
}

export default App;
