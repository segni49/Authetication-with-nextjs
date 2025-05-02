  "use client";
import { CardWrapper } from "./card-wrapper"
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {   Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "@/components/ui/form";
    import {LoginSchema }from "@/schemas/index";
  import { Input } from "../ui/input";  
  import * as z from "zod";
  import {Button} from "../ui/button"
  import {FormError} from "../form-error"
  import {FormSuccess} from "../form-success"
  import {login} from "@/actions/login"
   import {useState} from "react";
   import { useRouter } from "next/navigation";
  


export const LoginForm = () => {
       const [error, setError] = useState<string | undefined>("");
       const [success, setSuccess] = useState<string | undefined>("");
       const [loading, setLoading] = useState(false);
       const router = useRouter();


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const OnSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setLoading(true);
        setError("");
        setSuccess("");
      login(values);
     const response = await login(values);
     if(response.success) {
         router.push("/settings")
     } 
      
    }
    return(
        <CardWrapper
            headerLabel = "welcome back"
            backButtonLabel="Don't have an account"
            backButtonHref="/auth/register"
            showSocial
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(OnSubmit)}
                    className="space-y-6">
                   <div className="space-y-4">
                    {loading && <p className="text-center">Loading...</p>}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} placeholder="Enter your email" disabled={loading} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}  />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} placeholder="********" className="input" disabled={loading} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}  />
                
                    </div>   
                    <FormError message={error} />
                    <FormSuccess message={success}/>
                    <Button type="submit" className="w-full">Login</Button>
                </form>
              </Form>
            </CardWrapper>

    )
}