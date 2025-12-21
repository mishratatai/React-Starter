import React, { lazy, Suspense } from "react";
import ProtectedRoute from "@/middleware/protected-route";

const Dashboard = lazy(() => import("@/app/user/dashboard/page"));
const Settings = lazy(() => import("@/app/user/settings/page"));

const handleSuspense = (SuspenseComponent) => {
     return (
          <Suspense fallback={<h2>Loading...</h2>}>
               <SuspenseComponent />
          </Suspense>
     );
};

const UserRoutes = [
     {
          path: "/dashboard",
          loader: () => ProtectedRoute(["user"]),
          element: handleSuspense(Dashboard),
     },
     {
          path: "/settings",
          loader: () => ProtectedRoute(["user"]),
          element: handleSuspense(Settings),
     },
];

export default UserRoutes;
