import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { Suspense } from "react";

function App() {
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <RouteLayout path={routes()} />
    </Suspense>
  );
}

export default App;
