import React, { lazy, Suspense } from "react";
import PageLoader from "@/components/ui/page-loader";
import ProtectedRoute from "@/middleware/protected-route";

const Dashboard = lazy(() => import("@/app/user/dashboard/page"));

const handleSuspense = (SuspenseComponent) => {
     return (
          <Suspense fallback={<PageLoader />}>
               <SuspenseComponent />
          </Suspense>
     );
};

const AdminRoutes = [
     {
          path: "/admin/dashboard",
          loader: () => ProtectedRoute(["noc"]),
          element: handleSuspense(Dashboard),
     },
];

export default AdminRoutes;
