import AppLayout from "@/components/app-layout";
import ThemeSwitch from "@/components/theme-switch";

const breadcrumbs = [{ title: "Settings", href: "/settings" }];

export default function Page() {
     return (
          <>
               <AppLayout breadcrumbs={breadcrumbs}>
                    <div className="grid grid-cols-3 gap-3">
                         <div className="col-span-3">
                              <div className="grid grid-cols-1 gap-3">
                                   <h3>Change your current theme</h3>
                                   <ThemeSwitch />
                              </div>
                         </div>
                         <div className="col-span-3"></div>
                    </div>
               </AppLayout>
          </>
     );
}
