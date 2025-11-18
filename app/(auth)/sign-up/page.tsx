"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormData } from "@/types/global";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
    },
  });
  const onSubmit: SubmitHandler<SignUpFormData> = (data) =>
    console.log("form submitted", data);

  return (
    <div className="h-full mt-10  2xl:mx-10">
      <h1 className="form-title">Sign Up & Personalize</h1>
      <div className="w-full space-y-8 mt-5 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-auto gap-4"
        >
          <InputField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            register={register}
            type="text"
            validation={{ required: "Name is required" }}
            error={errors}
          />
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
                message:
                  "Password should have atleast 8 characters, 1 number, 1 special character and 1 alphabet",
              },
            }}
            error={errors}
          />
          <InputField
            name="password"
            label="Password"
            placeholder="Enter a strong password"
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
          <SelectField
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goal"
            control={control}
            required={true}
            options={INVESTMENT_GOALS}
          />
          <SelectField
            name="riskTolerance"
            label="riskTolerance"
            placeholder="Select your risk tolerance"
            control={control}
            required={true}
            options={RISK_TOLERANCE_OPTIONS}
          />
          <SelectField
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your preferred industry"
            control={control}
            required={true}
            options={PREFERRED_INDUSTRIES}
          />
          <Button type="submit" className="yellow-btn w-full mt-10">
            {isSubmitting
              ? "Starting your journey ..."
              : "Start your investment journey"}
          </Button>
        </form>
        <div className="flex flex-row w-full space-x-2 items-center justify-center">
          <p>Already have an account ?</p>
          <Link href="./log-in">
            <p className="text-white">Log In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
