import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import UserProgressContextProvider from "./store/UserProgressContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
