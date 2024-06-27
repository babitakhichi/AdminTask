import Layout from "../layout";
import route from "./route";

export const routes = () => {
  return [
    {
      element: <Layout />,
      children: [...route()],
    },
  ];
};
