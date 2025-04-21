import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"
import { forgotPassword } from "@/lib/api/auth"

// Form validation schema
const passwordRecoverySchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type PasswordRecoveryFormValues = z.infer<typeof passwordRecoverySchema>

const PasswordRecovery = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordRecoveryFormValues>({
    resolver: zodResolver(passwordRecoverySchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: PasswordRecoveryFormValues) => {
    try {
          const res = await forgotPassword(data.email);
          console.log('Send email success:', res);
          localStorage.setItem('token', res.access_token); 
          // Lưu token vào localStorage hoặc context
        } catch (err: any) {
          alert(err.message || 'Send thất bại');
        }
       
    console.log("Form submitted:", data)

    // Add your password recovery logic here
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-md border border-gray-200 rounded-2xl">
        <CardHeader className="space-y-1 pt-6">
          <h1 className="text-3xl font-bold text-blue-600 text-center">OctalTask</h1>
          <h2 className="text-xl font-semibold text-gray-700 text-center">Reset your password</h2>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <Alert className="bg-green-50 border-green-200 text-green-800">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>
                If an account exists with that email, we've sent a password reset link. Please check your inbox.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <Button type="submit" className="w-full py-2 rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <a href="./login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PasswordRecovery
