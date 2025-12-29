import AppLogo from "@/components/app-logo";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldDescription } from "@/components/ui/field";

export default function pageNotFound() {
     return (
          <>
               <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                         <div className="mx-auto">
                              <AppLogo />
                         </div>
                         <Card>
                              <CardHeader className="text-center">
                                   <CardTitle className="text-xl">
                                        404 Page Not Found!
                                   </CardTitle>
                                   <CardDescription>
                                        The page you're looking for is not
                                        found.
                                   </CardDescription>
                              </CardHeader>
                              <CardContent>
                                   <form>
                                        <div className="grid gap-6">
                                             <div className="grid gap-6">
                                                  <Link to={"/"}>
                                                       <Button
                                                            type="button"
                                                            className="w-full"
                                                       >
                                                            Go back to homepage
                                                       </Button>
                                                  </Link>
                                             </div>
                                             <FieldDescription className="text-center">
                                                  Don&apos;t have an account?{" "}
                                                  <Link to={"/register"}>
                                                       Sign up
                                                  </Link>
                                             </FieldDescription>
                                        </div>
                                   </form>
                              </CardContent>
                         </Card>
                    </div>
               </div>
          </>
     );
}
