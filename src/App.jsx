import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = useQueryClient();

  const queryKey = ["products"];
  const queryFn = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const { isPending, isLoading, data, error } = useQuery({ queryKey, queryFn });
  // isLoading => isPending && isFetching
  console.log({ isPending, isLoading, data, error });

  const mutationFn = (product) => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const { mutate } = useMutation({ mutationFn });

  const clickHandler = () => {
    const product = { title: "New Product", price: 29.99 };
    return mutate(product, {
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
      onError: (error) => console.log("error", error),
    });
  };

  return (
    <div>
      <h3>App</h3>
      <button onClick={clickHandler}>Post Product </button>
    </div>
  );
}

export default App;
