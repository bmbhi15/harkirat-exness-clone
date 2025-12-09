"use server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";
import { SignUpFormData, SignInFormData } from "@/types/global";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { success } from "better-auth";

export async function signupWithEmail(formData: SignUpFormData) {
  try {
    const { headers, response } = await auth.api.signUpEmail({
      returnHeaders: true,
      body: {
        email: formData.email,
        password: formData.password,
        name: formData.fullName,
      },
    });
    await inngest.send({
      name: "user/created",
      data: formData,
    });
    return { success: true, data: response };
  } catch (error) {
    console.log("failed to create user !!");
    console.log(error);
  }
}
export async function signInWithEmail({ email, password }: SignInFormData) {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      headers: await headers(),
    });
    console.log(response);
    return { success: true };
  } catch (error) {
    console.error("Failed to Sign In", error);
  }
}

export async function signOut() {
  try {
    const response = await auth.api.signOut({
      headers: await headers(),
    });
    console.log(response);
    return { success: true };
  } catch (error) {
    console.error("Failed to sign out", error);
  }
}

export async function getServerSession() {
  const res = await auth.api.getSession({
    headers: await headers(), // some endpoints might require headers
  });
  console.log("res");
  console.log(res);
  if (!res) return null;
  return await res;
}
// export async function deleteUser() {
//   console.log("inside user delete function");
//   try {
//     const response = await auth.api.removeUser({
//       headers: await headers(),
//       body: {
//         userId: "69305f709cb3791df905539a", // required
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.log("failed to delete user !!");
//     console.log(error);
//   }
// }
