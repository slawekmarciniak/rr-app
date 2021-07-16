import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPageList from "../pages/ProductsPageList";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPageList} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route render={ErrorPage} component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
