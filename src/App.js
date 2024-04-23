import { AuthProvider } from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div>
                   
      <AuthProvider>
      <ProductProvider> 
        <AppRouter />
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
