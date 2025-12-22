import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/contexts/theme-context";

export default function themeSwitch() {
     const { darkMode, toggleDarkMode } = useTheme();

     return (
          <>
               <Tabs
                    value={darkMode ? "dark" : "light"}
                    onValueChange={toggleDarkMode}
               >
                    <TabsList>
                         <TabsTrigger value="light">Light theme</TabsTrigger>
                         <TabsTrigger value="dark">Dark theme</TabsTrigger>
                    </TabsList>
               </Tabs>
          </>
     );
}
