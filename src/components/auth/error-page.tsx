import { Header } from "./header"
import { BackButton } from "./back-button";
import {
  Card,
  CardFooter,
  CardHeader
} from "@/components/ui/card"

export default function ErrorCard() {
  return (
    <Card className= "w-[400px] shadow-md">
        <CardHeader>
            <Header label="Oops Something wend Wrong!"/>
        </CardHeader>
        <CardFooter>
          <BackButton label="Bakc to login"
          href="/auth/login"/>
        </CardFooter>
    </Card>
  )
}
