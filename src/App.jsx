import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h3>App</h3>
      </div>
    </QueryClientProvider>
  );
}

export default App;
