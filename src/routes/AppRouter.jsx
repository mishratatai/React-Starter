import { createBrowserRouter } from "react-router";
import PublicRoutes from "@/routes/PublicRoutes";
import AdminRoutes from "@/routes/AdminRoutes";
import UserRoutes from "@/routes/UserRoutes";
import PageNotFound from "@/app/page-not-found";

const routes = createBrowserRouter([
     ...PublicRoutes,
     ...AdminRoutes,
     ...UserRoutes,
     {
          path: "*",
          Component: PageNotFound,
     },
]);

export default routes;
