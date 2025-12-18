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

export default function LoginForm({ className, ...props }) {
     return (
          <div className={cn("flex flex-col gap-6", className)} {...props}>
               <Card>
                    <CardHeader className="text-center">
                         <CardTitle className="text-xl">
                              Forgot password
                         </CardTitle>
                         <CardDescription>
                              Enter your email to receive a password reset link
                         </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form>
                              <div className="grid gap-6">
                                   <div className="grid gap-6">
                                        <div className="grid gap-2">
                                             <Label htmlFor="email">
                                                  Email
                                             </Label>
                                             <Input
                                                  id="email"
                                                  type="email"
                                                  placeholder="m@example.com"
                                                  required
                                             />
                                        </div>
                                        <Button
                                             type="submit"
                                             className="w-full"
                                        >
                                             Email password reset link
                                        </Button>
                                   </div>
                                   <div className="text-center text-sm">
                                        {/* <a
                                             href="#"
                                             className="underline underline-offset-4"
                                        >
                                             Login
                                        </a>*/}
                                        <FieldDescription className="text-center">
                                             Or return to{" "}
                                             <Link to={"/login"}>Login</Link>
                                        </FieldDescription>
                                   </div>
                              </div>
                         </form>
                    </CardContent>
               </Card>
          </div>
     );
}
