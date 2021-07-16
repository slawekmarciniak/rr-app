import { Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <Route
        path="/"
        exact
        render={(props) => (
          <p>
            Jestes na <span>stronie głównej</span>
          </p>
        )}
      />

      <Route
        path="/:page"
        exact
        render={(props) => (
          <p>
            Jesteś na <span>{props.match.params.page}</span>
            {/* Jesteś na <span>{props.match.url}</span>
            Jesteś na <span>{props.match.path}</span> */}
          </p>
        )}
      />

      <Route
        path="/:page/:idProduct"
        excact
        render={(props) => (
          <p>
            Jesteś na <span>{props.match.params.idProduct}</span>
            {/* Jesteś na <span>{props.match.url}</span>
            Jesteś na <span>{props.match.path}</span> */}
          </p>
        )}
      />
    </div>
  );
};

export default Footer;
