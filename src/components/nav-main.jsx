import { ChevronRight } from "lucide-react";
import {
     Collapsible,
     CollapsibleContent,
     CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
     SidebarGroup,
     SidebarGroupLabel,
     SidebarMenu,
     SidebarMenuAction,
     SidebarMenuButton,
     SidebarMenuItem,
     SidebarMenuSub,
     SidebarMenuSubButton,
     SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useLocation, Link } from "react-router";

export function NavMain({ items }) {
     const normalize = (path) => path.replace(/^\/|\/$/g, "");
     const location = normalize(useLocation().pathname);

     return (
          <SidebarGroup>
               <SidebarGroupLabel>Platform</SidebarGroupLabel>

               <SidebarMenu>
                    {items.map((item) => {
                         const itemPath = normalize(item.url);

                         const isActive =
                              location === itemPath ||
                              location.startsWith(itemPath + "/");

                         return (
                              <Collapsible
                                   key={item.title}
                                   asChild
                                   defaultOpen={isActive}
                              >
                                   <SidebarMenuItem>
                                        <SidebarMenuButton
                                             asChild
                                             tooltip={item.title}
                                             isActive={isActive}
                                        >
                                             <Link to={item.url}>
                                                  <item.icon />
                                                  <span>{item.title}</span>
                                             </Link>
                                        </SidebarMenuButton>

                                        {item.items &&
                                             item.items.length > 0 && (
                                                  <>
                                                       <CollapsibleTrigger
                                                            asChild
                                                       >
                                                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                                                 <ChevronRight />
                                                            </SidebarMenuAction>
                                                       </CollapsibleTrigger>

                                                       <CollapsibleContent>
                                                            <SidebarMenuSub>
                                                                 {item.items.map(
                                                                      (
                                                                           subItem,
                                                                      ) => {
                                                                           const subPath =
                                                                                normalize(
                                                                                     subItem.url,
                                                                                );
                                                                           const subActive =
                                                                                location ===
                                                                                     subPath ||
                                                                                location.startsWith(
                                                                                     subPath +
                                                                                          "/",
                                                                                );

                                                                           return (
                                                                                <SidebarMenuSubItem
                                                                                     key={
                                                                                          subItem.title
                                                                                     }
                                                                                >
                                                                                     <SidebarMenuSubButton
                                                                                          asChild
                                                                                          isActive={
                                                                                               subActive
                                                                                          }
                                                                                     >
                                                                                          <Link
                                                                                               to={
                                                                                                    subItem.url
                                                                                               }
                                                                                          >
                                                                                               <span>
                                                                                                    {
                                                                                                         subItem.title
                                                                                                    }
                                                                                               </span>
                                                                                          </Link>
                                                                                     </SidebarMenuSubButton>
                                                                                </SidebarMenuSubItem>
                                                                           );
                                                                      },
                                                                 )}
                                                            </SidebarMenuSub>
                                                       </CollapsibleContent>
                                                  </>
                                             )}
                                   </SidebarMenuItem>
                              </Collapsible>
                         );
                    })}
               </SidebarMenu>
          </SidebarGroup>
     );
}
