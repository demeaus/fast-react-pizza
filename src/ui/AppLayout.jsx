import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <Main>
        <Outlet />
      </Main>
      <CartOverview />
    </div>
  );
}

function Main({ children }) {
  return (
    <div className="overflow-scroll">
      <main className="mx-auto max-w-3xl">{children}</main>
    </div>
  );
}

export default AppLayout;
