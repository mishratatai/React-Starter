import React, { lazy, Suspense } from "react";

const Welcome = lazy(() => import("@/app/welcome"));
const Register = lazy(() => import("@/app/auth/register"));
const Login = lazy(() => import("@/app/auth/login"));
const ForgotPassword = lazy(() => import("@/app/auth/forgot-password"));
const OtpVerification = lazy(() => import("@/app/auth/otp-verification"));

const handleSuspense = (SuspenseComponent) => {
     return (
          <Suspense fallback={<h2>Loading...</h2>}>
               <SuspenseComponent />
          </Suspense>
     );
};

const PublicRoutes = [
     {
          path: "/",
          element: handleSuspense(Welcome),
     },
     {
          path: "/register",
          element: handleSuspense(Register),
     },
     {
          path: "/login",
          element: handleSuspense(Login),
     },
     {
          path: "/forgot-password",
          element: handleSuspense(ForgotPassword),
     },
     {
          path: "/otp-verification",
          element: handleSuspense(OtpVerification),
     },
];

export default PublicRoutes;
