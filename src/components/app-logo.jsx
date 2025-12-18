import { Link } from "react-router";
import { Circle } from "lucide-react";

export default function Logo() {
     return (
          <>
               <Link
                    to="/dashboard"
                    className="p-3 rounded-md hover:bg-sidebar-accent flex items-center gap-2"
               >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                         <Circle className="size-5" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                         <span className="truncate font-semibold">
                              React Starter kit
                         </span>
                         <span className="truncate text-xs">ORM App</span>
                    </div>
               </Link>
          </>
     );
}
