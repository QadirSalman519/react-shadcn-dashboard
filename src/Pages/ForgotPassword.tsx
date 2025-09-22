import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/images/logo.png";

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="mb-6 text-center">
            <img src={Logo} alt="Logo" className="h-15 w-auto mx-auto" />
          </div>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Enter your email and we’ll send you a reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
          <a
            href="/login"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to login
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ForgotPassword;
