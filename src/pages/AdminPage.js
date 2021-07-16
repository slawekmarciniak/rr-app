import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() => {
        if (permission) {
          return <h3>dzień dobry adminie</h3>;
        } else {
          return <Redirect to="/login/" />;
        }
      }}
    />
  );
};

export default AdminPage;
