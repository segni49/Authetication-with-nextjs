import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default function Home() {
  return (
    <>
    <main className="flex h-full flex-col items-center justify-center bg-radial from-sky-400 to-blue-800">
         <div className="space-y-6 text-center">
            <h1 className={cn("text-6xl fot-semibold text-white drop-shadow-md",
            font.className,

            )}>🔐Auth</h1>
            <p className="text-white text-lg">
              A simple authentication service
            </p>
            <div>
             <LoginButton mode="redirect" >
              <Button variant="secondary" size="lg">
                Sign In
              </Button>
              </LoginButton>
            </div>
         </div>
    </main>

    </>);
}
