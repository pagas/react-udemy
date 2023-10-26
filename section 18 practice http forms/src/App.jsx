import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import UserProgressContextProvider from "./store/UserProgressContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
