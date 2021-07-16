import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin", path: "/admin" },
];

const Navigation = () => {
  const nav = list.map((e) => {
    return (
      <li key={e.name}>
        <NavLink to={e.path} exact={e.exact && e.exact}>
          {e.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="main">
      <ul>{nav}</ul>
    </nav>
  );
};

export default Navigation;
