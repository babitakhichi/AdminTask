import { Dashboard, Login } from "../pages";


export default function route() {
  return [
    {
      path: "/",
      name: "Login",
      key: "/",

      element: <Login />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      key: "/dashboard",

      element: <Dashboard />,
    },
  ];
}
