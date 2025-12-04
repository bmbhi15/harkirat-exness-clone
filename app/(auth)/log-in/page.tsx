"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInFormData } from "@/types/global";
import InputField from "@/components/form/InputField";
import { deleteUser } from "@/lib/actions/auth.actions";
export default function LogIn() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      const res = await deleteUser();
      console.log("user deleted !!");
    } catch (error) {
      console.log("Failed to delete !!");
    }
  };

  return (
    <div className="h-full mt-10  2xl:mx-10">
      <h1 className="form-title">Log In Your Account</h1>
      <div className="w-full space-y-8 mt-5 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-auto gap-4"
        >
          <InputField
            name="email"
            label="Email"
            placeholder="Enter your email"
            register={register}
            type="email"
            validation={{
              required: "Email address is required",
              pattern: {
                value: "^[^s@]+@[^s@]+.[^s@]+$",
                message: "Invalid Email Address",
              },
            }}
            error={errors}
          />
          <InputField
            name="password"
            label="Password"
            placeholder="Enter your password"
            register={register}
            type="password"
            validation={{
              required: "Password is required",
              pattern: {
                value: "^(?=.*[A-Za-z])(?=.*d)(?=.*[^A-Za-z0-9]).{8,}$",
                message:
                  "Password should have atleast 8 characters, 1 number, 1 special character and 1 alphabet",
              },
            }}
            error={errors}
          />
          <Button type="submit" className="yellow-btn w-full mt-10">
            {isSubmitting ? "Logging In ..." : "Log In"}
          </Button>
        </form>
        <div className="flex flex-row w-full space-x-2 items-center justify-center">
          <p>Don't have an account ? Join us now</p>
          <Link href="./sign-up">
            <p className="text-white">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
