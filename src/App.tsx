import "./App.css";

//components
import Navbar from "./Components/Navbar/Navbar";

//routing
import { Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";
import { HOME_ROUTE } from "./consts/routeConsts";

// rtl
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

function App() {

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <div className="App">
      <CacheProvider value={cacheRtl}>
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
      </CacheProvider>
    </div>
  );
}

export default App;
