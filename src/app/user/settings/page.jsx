import AppLayout from "@/components/app-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const breadcrumbs = [{ title: "Settings", href: "/settings" }];

export default function Page() {
     return (
          <>
               <AppLayout breadcrumbs={breadcrumbs}>
                    <div className="flex w-full max-w-sm flex-col gap-6">
                         <Tabs defaultValue="account">
                              <TabsList>
                                   <TabsTrigger value="account">
                                        Light theme
                                   </TabsTrigger>
                                   <TabsTrigger value="password">
                                        Dark theme
                                   </TabsTrigger>
                              </TabsList>
                         </Tabs>
                    </div>
               </AppLayout>
          </>
     );
}
