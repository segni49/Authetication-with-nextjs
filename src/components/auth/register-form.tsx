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
    import { RegisterSchema }from "@/schemas/index";
  import { Input } from "../ui/input";  
  import * as z from "zod";
  import {Button} from "../ui/button"
  import {FormError} from "../form-error"
  import {FormSuccess} from "../form-success"
   import {useState} from "react";
import { register } from "@/actions/register";
import {useRouter} from 'next/navigation'

  


export const RegisterForm = () => {
       const [error, setError] = useState<string | undefined>("");
       const [success, setSuccess] = useState<string | undefined>("");
       const router = useRouter();
    



    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    })

    const OnSubmit =async (values: z.infer<typeof RegisterSchema>) => {
      register(values);
      const res= await register(values);
        if (res?.success) {
            setSuccess("Account created successfully");
            setError("");
            router.push("/auth/login")
      
        } else {
            setError(res?.error);
            setSuccess("");
        }
     
           
    }
    return(
        <CardWrapper
            headerLabel = "create an account "
            backButtonLabel="Already have an account ?"
            backButtonHref="/auth/login"
            showSocial
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(OnSubmit)}
                    className="space-y-6">
                   <div className="space-y-4">
                 
                    
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} placeholder="Enter your name"  className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}  />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} placeholder="Enter your email"  className="input" />
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
                                    <Input type="password" {...field} placeholder="********" className="input"  />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}  />
                        
                
                    </div>   
                    <FormError message={error} />
                    <FormSuccess message={success}/>
                    <Button type="submit" className="w-full">Register</Button>
                </form>
              </Form>
            </CardWrapper>

    )
}