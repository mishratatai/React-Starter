import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import {
     Field,
     FieldDescription,
     FieldGroup,
     FieldLabel,
} from "@/components/ui/field";
import {
     InputOTP,
     InputOTPGroup,
     InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export default function OTPForm({ ...props }) {
     return (
          <Card {...props}>
               <CardHeader className="text-center">
                    <CardTitle className="text-xl">
                         Enter verification code
                    </CardTitle>
                    <CardDescription>
                         We sent a 6-digit code to your email.
                    </CardDescription>
               </CardHeader>
               <CardContent>
                    <form>
                         <FieldGroup>
                              <Field>
                                   <FieldLabel
                                        htmlFor="otp"
                                        className="sr-only"
                                   >
                                        Verification code
                                   </FieldLabel>
                                   {/* <InputOTP
                                        maxLength={6}
                                        id="otp"
                                        required
                                        className="justify-center"
                                   >
                                        <InputOTPGroup
                                             className="
                                         gap-2.5
                                         [data-slot='input-otp-slot']:[&>input]:border
                                         [data-slot='input-otp-slot']:[&>input]:border-input
                                         [data-slot='input-otp-slot']:[&>input]:rounded-md
                                         [data-slot='input-otp-slot']:[&>input]:text-center
                                       "
                                        >
                                             <InputOTPSlot index={0} />
                                             <InputOTPSlot index={1} />
                                             <InputOTPSlot index={2} />
                                             <InputOTPSlot index={3} />
                                             <InputOTPSlot index={4} />
                                             <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                   </InputOTP>*/}
                                   <div className="flex justify-center">
                                        <InputOTP
                                             maxLength={6}
                                             pattern={
                                                  REGEXP_ONLY_DIGITS_AND_CHARS
                                             }
                                        >
                                             <InputOTPGroup>
                                                  <InputOTPSlot index={0} />
                                                  <InputOTPSlot index={1} />
                                                  <InputOTPSlot index={2} />
                                                  <InputOTPSlot index={3} />
                                                  <InputOTPSlot index={4} />
                                                  <InputOTPSlot index={5} />
                                             </InputOTPGroup>
                                        </InputOTP>
                                   </div>
                                   <FieldDescription className="text-center">
                                        Enter the 6-digit code sent to your
                                        email.
                                   </FieldDescription>
                              </Field>
                              <Button type="submit">Verify</Button>
                              <FieldDescription className="text-center">
                                   Didn&apos;t receive the code?{" "}
                                   <a href="#">Resend</a>
                              </FieldDescription>
                         </FieldGroup>
                    </form>
               </CardContent>
          </Card>
     );
}
