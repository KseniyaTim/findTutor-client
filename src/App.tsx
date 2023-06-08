
//routing
import { Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";
import { HOME_ROUTE } from "./consts/routeConsts";
import { FC } from "react";

const App: FC = () => {

  return (
    <div className="App">
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.path}
            render={() => <routeElement.component />}
          />
        ))}
        <Redirect from="*" to={HOME_ROUTE} />
      </Switch>
    </div>
  );
}

export default App;
