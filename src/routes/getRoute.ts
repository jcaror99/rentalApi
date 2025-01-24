import { Routes } from "../types/types";

const getRoute = (route: string) => {
  const routes: Routes = {
    user: "/user",
  };

  return routes[route];
};

export default getRoute;
