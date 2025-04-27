"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean,
};

export const LoginButton = ({ 
    children,
     mode = "redirect", 
     asChild 
    }: LoginButtonProps) => {
        const router = useRouter();
        const onClick = () => {
            console.log("Login button clicked");
            router.push("/auth/login");
            if (mode === "redirect") {
                console.log("Redirecting to login page...");
            } else {
                console.log("Opening login modal...");
            }
        };

        if (asChild) {
            return (
                <button onClick={onClick} className="cursor-pointer">
                    {children}
                </button>
            );
        }

        return (
            <span onClick={onClick} className="cursor-pointer"> 
               {children}
            </span>
        )
     } 