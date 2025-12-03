"use server";
import { SignUpFormData } from "@/types/global";
import { auth } from "@/lib/better-auth/auth-client";

export async function signupWithEmail(formData: SignUpFormData) {
  console.log("inside sign up");
  try {
    const { headers, response } = await auth.api.signUpEmail({
      returnHeaders: true,
      body: {
        email: formData.email,
        password: formData.password,
        name: formData.fullName,
      },
    });
    console.log("user created successfully !!");
    console.log(headers);
    console.log(response);
  } catch (error) {
    console.log("failed to create user !!");
    console.log(error);
  }
}
