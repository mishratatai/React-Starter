import React, { lazy, Suspense } from "react";
import ProtectedRoute from "@/middleware/protected-route";

const Dashboard = lazy(() => import("@/app/user/dashboard/page"));

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
          loader: () => ProtectedRoute(["noc"]),
          element: handleSuspense(Dashboard),
     },
];

export default UserRoutes;
