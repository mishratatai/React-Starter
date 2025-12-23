import AppLogo from "@/components/app-logo";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
     Card,
     CardAction,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Clipboard, SquareArrowOutUpRight } from "lucide-react";
import {
     InputGroup,
     InputGroupAddon,
     InputGroupButton,
     InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";

export default function CardDemo() {
     const { copyToClipboard, isCopied } = useState("");

     const features = [
          {
               desc: "Prebuilt dashboard layout with Dark/Light theme support.",
          },
          {
               desc: "Prebuilt authentication templates (Register, Login, Forgot Password, OTP Verification).",
          },
          {
               desc: "Preconfigured lazy-loaded routes using React Router.",
          },
          {
               desc: "Preconfigured react router, axios, tailwindcss v4, shadcn ui, lucide icons.",
          },
          {
               desc: "Open-source and MIT licensed.",
          },
     ];

     return (
          <div className="h-screen w-full flex items-center justify-center">
               <Card className="w-full max-w-5xl radial-object">
                    <CardHeader>
                         <div className="flex items-center justify-start">
                              <AppLogo />
                         </div>
                         <CardTitle>React Starter Kit</CardTitle>
                         <CardDescription>
                              {/* This React starter kit is developed by ORMRooms
                              (ORM App). Most of the technologies used are
                              open-source, and more features will be added soon
                              — stay tuned!*/}
                              Version 0.0.1 is now Out for public review —
                              One-click setup to save weeks of work!
                              <br />
                              <br />
                              A high-performance React starter kit built with
                              Vite and SWC for faster builds using a JSX-first
                              approach. Perfect for dashboards and SaaS apps, it
                              comes with:
                              <br />
                              <br />
                              <ul className="pl-[15px]">
                                   {features.map((feature, index) => (
                                        <li className="list-disc!" key={index}>
                                             {feature.desc}
                                        </li>
                                   ))}
                              </ul>
                              <div className="pt-5 flex items-center gap-2">
                                   <Link to={"/login"}>
                                        <Button size="sm" variant="outline">
                                             Login
                                        </Button>
                                   </Link>
                                   <Link to={"/register"}>
                                        <Button size="sm">Register</Button>
                                   </Link>
                              </div>
                         </CardDescription>

                         <CardAction>
                              <Link
                                   to={
                                        "https://github.com/mishratatai/React-Starter"
                                   }
                                   target="_blank"
                              >
                                   <Button variant="link">
                                        Github <SquareArrowOutUpRight />
                                   </Button>
                              </Link>
                              <Link
                                   to={"https://www.ormrooms.com/react-starter"}
                                   target="_blank"
                              >
                                   <Button variant="link">
                                        Documentation <SquareArrowOutUpRight />
                                   </Button>
                              </Link>
                              <Link
                                   to={"https://www.ormrooms.com"}
                                   target="_blank"
                              >
                                   <Button variant="link">
                                        2025 Highlights{" "}
                                        <SquareArrowOutUpRight />
                                   </Button>
                              </Link>
                         </CardAction>
                    </CardHeader>
                    <CardContent>
                         <div className="flex flex-wrap justify-between items-center gap-2.5">
                              <div className="w-full">
                                   <h2>Technologies used.</h2>
                              </div>
                              <div>
                                   <svg
                                        width="200"
                                        height="100%"
                                        viewBox="-10.5 -9.45 21 18.9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
                                   >
                                        <circle
                                             cx="0"
                                             cy="0"
                                             r="2"
                                             fill="#087ea4"
                                        ></circle>
                                        <g
                                             stroke="#087ea4"
                                             strokeWidth="1"
                                             fill="none"
                                        >
                                             <ellipse
                                                  rx="10"
                                                  ry="4.5"
                                             ></ellipse>
                                             <ellipse
                                                  rx="10"
                                                  ry="4.5"
                                                  transform="rotate(60)"
                                             ></ellipse>
                                             <ellipse
                                                  rx="10"
                                                  ry="4.5"
                                                  transform="rotate(120)"
                                             ></ellipse>
                                        </g>
                                   </svg>
                              </div>
                              <div>
                                   <img
                                        src="https://vite.dev/logo.svg"
                                        className="max-w-[200px] max-h-[50px] object-contain object-center"
                                   />
                              </div>
                              <div>
                                   <svg
                                        width="188"
                                        height="28"
                                        viewBox="0 0 188 28"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path
                                             d="M93.295 3.65206L86.356 9.30495H90.8876V27.68L93.295 25.7411V3.65206Z"
                                             fill="currentColor"
                                        ></path>
                                        <path
                                             d="M95.295 24.0997L102.356 18.305H97.6975V0.350052L95.295 2.02275V24.0997Z"
                                             fill="currentColor"
                                        ></path>
                                        <path
                                             d="M182.695 6.95295C183.495 7.36895 184.071 7.72095 184.423 8.00895L186.919 3.25695C185.671 2.48895 184.167 1.80095 182.407 1.19295C180.679 0.584955 178.807 0.280952 176.791 0.280952C174.871 0.280952 173.095 0.600952 171.463 1.24095C169.863 1.88095 168.583 2.82495 167.623 4.07295C166.695 5.32095 166.231 6.87295 166.231 8.72895C166.231 10.809 166.887 12.409 168.199 13.529C169.543 14.617 171.591 15.513 174.343 16.217C176.551 16.793 178.327 17.321 179.671 17.801C181.047 18.249 181.735 19.001 181.735 20.057C181.735 21.625 180.263 22.409 177.319 22.409C175.847 22.409 174.455 22.233 173.143 21.881C171.831 21.529 170.679 21.097 169.687 20.585C168.727 20.073 168.039 19.609 167.623 19.193L165.031 24.233C166.695 25.289 168.599 26.121 170.743 26.729C172.887 27.337 175.047 27.641 177.223 27.641C179.111 27.641 180.871 27.385 182.503 26.873C184.135 26.329 185.447 25.465 186.439 24.281C187.463 23.065 187.975 21.4649 187.975 19.4809C187.975 17.8489 187.591 16.537 186.823 15.545C186.087 14.521 185.015 13.705 183.607 13.097C182.231 12.489 180.599 11.945 178.711 11.465C176.567 10.953 174.935 10.489 173.815 10.073C172.727 9.65695 172.183 8.95295 172.183 7.96095C172.183 6.26495 173.687 5.41695 176.695 5.41695C177.815 5.41695 178.903 5.57695 179.959 5.89695C181.015 6.18495 181.927 6.53695 182.695 6.95295Z"
                                             fill="currentColor"
                                        ></path>
                                        <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M132.182 27.497C130.07 27.497 128.15 27.129 126.422 26.393C124.694 25.625 123.205 24.601 121.957 23.321C120.709 22.009 119.749 20.537 119.077 18.905C118.406 17.273 118.069 15.593 118.069 13.865C118.069 12.105 118.421 10.409 119.125 8.77695C119.829 7.14495 120.822 5.70496 122.102 4.45695C123.382 3.17695 124.885 2.16895 126.613 1.43295C128.341 0.696953 130.229 0.328949 132.277 0.328949C134.389 0.328949 136.31 0.728952 138.038 1.52895C139.766 2.29695 141.238 3.33695 142.454 4.64895C143.702 5.92895 144.661 7.38495 145.333 9.01695C146.005 10.649 146.342 12.3129 146.342 14.0089C146.342 15.7689 145.99 17.465 145.286 19.097C144.582 20.697 143.589 22.137 142.309 23.417C141.061 24.665 139.574 25.657 137.846 26.393C136.118 27.129 134.23 27.497 132.182 27.497ZM123.925 13.913C123.925 15.353 124.262 16.729 124.934 18.041C125.605 19.321 126.549 20.361 127.765 21.161C129.013 21.961 130.501 22.361 132.229 22.361C133.989 22.361 135.477 21.945 136.693 21.113C137.91 20.249 138.837 19.177 139.477 17.8969C140.117 16.5849 140.438 15.241 140.438 13.865C140.438 12.425 140.102 11.0649 139.43 9.78495C138.758 8.50495 137.798 7.48095 136.549 6.71295C135.333 5.91295 133.878 5.51295 132.182 5.51295C130.422 5.51295 128.917 5.92895 127.669 6.76095C126.453 7.59295 125.525 8.64896 124.885 9.92896C124.245 11.209 123.925 12.537 123.925 13.913Z"
                                             fill="currentColor"
                                        ></path>
                                        <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M0 27.305L11.712 0.472954H16.464L28.128 27.305H21.984L19.296 21.017H8.88L6.192 27.305H0ZM14.112 7.52895L10.176 15.977H17.904L14.112 7.52895Z"
                                             fill="currentColor"
                                        ></path>
                                        <path
                                             d="M50.8211 0.472954L58.2131 9.97695L65.6051 0.472954H71.8931L61.2851 14.057L71.5571 27.305H65.2691L58.2131 18.185L51.2051 27.305H44.8211L55.1411 14.057L44.4851 0.472954H50.8211Z"
                                             fill="currentColor"
                                        ></path>
                                   </svg>
                              </div>
                              <div>
                                   <img
                                        src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Lockup/Dark.svg"
                                        className="max-w-[200px] max-h-[50px]"
                                   />
                              </div>

                              <div>
                                   <svg
                                        viewBox="0 0 167 21"
                                        fill="none"
                                        className="h-5 text-black dark:text-white"
                                   >
                                        <path
                                             className="fill-sky-400"
                                             d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
                                        ></path>
                                        <path
                                             fill="currentColor"
                                             d="M51.547 8.688h-3v5.803c0 1.548 1.016 1.524 3 1.427v2.346c-4.015.483-5.611-.629-5.611-3.773V8.688H43.71V6.172h2.225V2.925l2.612-.774v4.021h2.998v2.516Zm11.43-2.516h2.61v12.092h-2.61v-1.741c-.92 1.28-2.346 2.055-4.233 2.055-3.288 0-6.021-2.78-6.021-6.36 0-3.603 2.733-6.36 6.021-6.36 1.886 0 3.313.774 4.233 2.032V6.172Zm-3.821 9.915c2.176 0 3.82-1.62 3.82-3.87 0-2.248-1.644-3.868-3.82-3.868-2.177 0-3.821 1.62-3.821 3.869s1.644 3.87 3.82 3.87ZM69.94 4.36a1.687 1.687 0 0 1-1.668-1.669c.002-.443.179-.868.491-1.18a1.662 1.662 0 0 1 2.354 0c.312.312.49.737.491 1.18 0 .895-.75 1.669-1.668 1.669Zm-1.306 13.905V6.172h2.612v12.092h-2.612Zm5.635 0V.609h2.611v17.654H74.27ZM93.834 6.172h2.757l-3.797 12.092h-2.563l-2.516-8.15-2.539 8.15h-2.563L78.816 6.172h2.757l2.346 8.343 2.54-8.343h2.49l2.514 8.343 2.37-8.343ZM99.83 4.36c-.92 0-1.669-.774-1.669-1.669.002-.443.18-.868.492-1.18a1.661 1.661 0 0 1 2.354 0c.313.312.49.737.492 1.18 0 .895-.75 1.669-1.669 1.669Zm-1.306 13.905V6.172h2.612v12.092h-2.612ZM110.52 5.858c2.708 0 4.643 1.838 4.643 4.982v7.423h-2.612v-7.158c0-1.838-1.064-2.804-2.708-2.804-1.717 0-3.071 1.015-3.071 3.482v6.48h-2.612V6.174h2.612V7.72c.798-1.257 2.103-1.862 3.748-1.862Zm17.024-4.522h2.612v16.927h-2.612v-1.741c-.918 1.282-2.345 2.055-4.231 2.055-3.289 0-6.022-2.78-6.022-6.36 0-3.603 2.733-6.36 6.022-6.36 1.886 0 3.313.774 4.231 2.032V1.336Zm-3.821 14.751c2.177 0 3.821-1.62 3.821-3.87 0-2.248-1.644-3.868-3.821-3.868-2.176 0-3.82 1.62-3.82 3.869s1.644 3.87 3.82 3.87Zm15.187 2.49c-3.651 0-6.384-2.78-6.384-6.36 0-3.602 2.733-6.359 6.384-6.359 2.37 0 4.426 1.233 5.393 3.12l-2.249 1.306c-.532-1.137-1.717-1.863-3.168-1.863-2.128 0-3.748 1.62-3.748 3.797 0 2.176 1.62 3.797 3.748 3.797 1.451 0 2.636-.75 3.216-1.863l2.249 1.282c-1.015 1.91-3.071 3.144-5.441 3.144Zm9.746-9.068c0 2.201 6.505.87 6.505 5.345 0 2.419-2.104 3.724-4.716 3.724-2.418 0-4.159-1.089-4.933-2.83l2.249-1.305c.387 1.088 1.355 1.74 2.684 1.74 1.161 0 2.056-.386 2.056-1.354 0-2.151-6.505-.942-6.505-5.27 0-2.274 1.959-3.701 4.425-3.701 1.983 0 3.628.92 4.474 2.515l-2.2 1.233c-.436-.943-1.283-1.378-2.274-1.378-.943 0-1.765.41-1.765 1.281Zm11.148 0c0 2.201 6.505.87 6.505 5.345 0 2.419-2.104 3.724-4.716 3.724-2.418 0-4.158-1.089-4.933-2.83l2.249-1.305c.387 1.088 1.354 1.74 2.684 1.74 1.161 0 2.056-.386 2.056-1.354 0-2.151-6.505-.942-6.505-5.27 0-2.274 1.959-3.701 4.426-3.701 1.982 0 3.627.92 4.473 2.515l-2.2 1.233c-.435-.943-1.282-1.378-2.273-1.378-.944 0-1.766.41-1.766 1.281Z"
                                        ></path>
                                   </svg>
                              </div>
                              <div className="flex items-center gap-3">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        className="size-5"
                                   >
                                        <rect
                                             width="256"
                                             height="256"
                                             fill="none"
                                        ></rect>
                                        <line
                                             x1="208"
                                             y1="128"
                                             x2="128"
                                             y2="208"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="32"
                                        ></line>
                                        <line
                                             x1="192"
                                             y1="40"
                                             x2="40"
                                             y2="192"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="32"
                                        ></line>
                                   </svg>
                                   shadcn ui
                              </div>
                              <div>
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="lucide-logo"
                                   >
                                        <path
                                             d="M14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 8.446 20.455 5.25285 18 3.05557"
                                             stroke="#2D3748"
                                        />
                                        <path
                                             d="M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 15.5841 3.57127 18.8012 6.06253 21"
                                             stroke="#F56565"
                                        />
                                   </svg>
                              </div>
                         </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                         <InputGroup>
                              <InputGroupInput
                                   placeholder="https://github.com/mishratatai/React-Starter"
                                   value="https://github.com/mishratatai/React-Starter"
                                   readOnly
                              />
                              <InputGroupAddon align="inline-end">
                                   <InputGroupButton
                                        aria-label="Copy"
                                        title="Copy"
                                        size="icon-xs"
                                        onClick={() => {
                                             copyToClipboard(
                                                  "https://github.com/mishratatai/React-Starter",
                                             );
                                        }}
                                   >
                                        {isCopied ? <Check /> : <Clipboard />}
                                   </InputGroupButton>
                              </InputGroupAddon>
                         </InputGroup>
                    </CardFooter>
               </Card>
          </div>
     );
}
