import { Fragment } from "react";
import Register from "./Auth/Register/Register";
import Authenticate from "./Pages/Authenticate/Authenticate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Config/routes";

function App() {
  return (
    <Fragment>

      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            let Layout = Fragment;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );

          })}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
