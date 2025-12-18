import React, { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbList,
     BreadcrumbPage,
     BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
     SidebarInset,
     SidebarProvider,
     SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children, breadcrumbs }) {
     const [sidebar, setSidebar] = useState(() => {
          const sidebarPosition = localStorage.getItem("sidebar");
          if (sidebarPosition) {
               return sidebarPosition === "open";
          }
          return true;
     });
     const handleSidebar = () => {
          setSidebar((prevSidebarState) => {
               const newState = !prevSidebarState;
               localStorage.setItem("sidebar", newState ? "open" : "close");
               return newState;
          });
     };

     return (
          <SidebarProvider defaultOpen={sidebar}>
               <AppSidebar />
               <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                         <div className="flex items-center gap-2 px-4">
                              <SidebarTrigger
                                   onClick={handleSidebar}
                                   className="-ml-1"
                              />
                              <Separator
                                   orientation="vertical"
                                   className="mr-2 data-[orientation=vertical]:h-4"
                              />
                              <Breadcrumb>
                                   <BreadcrumbList>
                                        {breadcrumbs.map((item, index) => {
                                             const isLast =
                                                  index ===
                                                  breadcrumbs.length - 1;
                                             return (
                                                  <React.Fragment key={index}>
                                                       <BreadcrumbItem className="hidden md:block">
                                                            {isLast ? (
                                                                 <BreadcrumbPage>
                                                                      {
                                                                           item.title
                                                                      }
                                                                 </BreadcrumbPage>
                                                            ) : (
                                                                 <BreadcrumbLink
                                                                      href={
                                                                           item.href
                                                                      }
                                                                 >
                                                                      {
                                                                           item.title
                                                                      }
                                                                 </BreadcrumbLink>
                                                            )}
                                                       </BreadcrumbItem>

                                                       {isLast ? (
                                                            ""
                                                       ) : (
                                                            <BreadcrumbSeparator className="hidden md:block" />
                                                       )}
                                                  </React.Fragment>
                                             );
                                        })}
                                   </BreadcrumbList>
                              </Breadcrumb>
                         </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                         <div className="border rounded-2xl p-4">
                              {children}
                         </div>
                    </div>
               </SidebarInset>
          </SidebarProvider>
     );
}
