import ForgotPasswordForm from "@/components/forgot-password-form";
import AppLogo from "@/components/app-logo";

export default function Page() {
     return (
          <>
               <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                         <div className="mx-auto">
                              <AppLogo />
                         </div>
                         <ForgotPasswordForm />
                    </div>
               </div>
          </>
     );
}
