import * as React from "react";
import {
     LayoutGrid,
     Users,
     FolderOpen,
     Frame,
     LifeBuoy,
     Map,
     PieChart,
     Send,
     ChartPie,
     Settings,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
     Sidebar,
     SidebarContent,
     SidebarFooter,
     SidebarHeader,
     SidebarMenu,
     SidebarMenuButton,
     SidebarMenuItem,
} from "@/components/ui/sidebar";
import AppLogo from "@/components/app-logo";

const data = {
     user: {
          name: "ORM App",
          email: "info@ormrooms.com",
          avatar: "/avatars/shadcn.jpg",
     },
     navMain: [
          {
               title: "Dashboard",
               url: "/dashboard",
               icon: LayoutGrid,
               isActive: false,
          },
          {
               title: "Manage customers",
               url: "/manage-customers",
               icon: Users,
               isActive: false,
          },
          {
               title: "Manage files",
               url: "/manage-files",
               icon: FolderOpen,
               isActive: false,
          },
          {
               title: "Analytics",
               url: "#",
               icon: ChartPie,
               isActive: false,
               items: [
                    {
                         title: "Customers",
                         url: "/customers",
                    },
                    {
                         title: "Files",
                         url: "/files",
                    },
               ],
          },
          {
               title: "Settings",
               url: "/settings",
               icon: Settings,
               isActive: false,
          },
          {
               title: "Documentation",
               url: "/documentation",
               icon: Map,
               isActive: false,
          },
     ],
     navSecondary: [
          {
               title: "Support",
               url: "#",
               icon: LifeBuoy,
          },
          {
               title: "Feedback",
               url: "#",
               icon: Send,
          },
     ],
};

export function AppSidebar({ ...props }) {
     return (
          <Sidebar variant="inset" {...props}>
               <SidebarHeader>
                    <SidebarMenu>
                         <SidebarMenuItem>
                              <SidebarMenuButton size="lg" asChild>
                                   <AppLogo />
                              </SidebarMenuButton>
                         </SidebarMenuItem>
                    </SidebarMenu>
               </SidebarHeader>
               <SidebarContent>
                    <NavMain items={data.navMain} />

                    <NavSecondary
                         items={data.navSecondary}
                         className="mt-auto"
                    />
               </SidebarContent>
               <SidebarFooter>
                    <NavUser user={data.user} />
               </SidebarFooter>
          </Sidebar>
     );
}
