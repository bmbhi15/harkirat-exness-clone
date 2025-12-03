"use server";

import { NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";
import { SignUpFormData } from "@/types/global";
import { auth } from "@/lib/better-auth/auth-client";
import { headers } from "next/headers";

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
  } catch (error) {
    console.log("failed to create user !!");
    console.log(error);
  }
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
