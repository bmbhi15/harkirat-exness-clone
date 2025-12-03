import { betterAuth } from "better-auth"; // make sure to import from better-auth/react
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dbConnect } from "../dbConnect";
import { admin } from "better-auth/plugins";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await dbConnect();
  const db = mongoose.connection.db;

  if (!db) throw new Error("MongoDB connection not found");

  authInstance = betterAuth({
    appName: "Exness clone",
    baseURL: process.env.BETTER_AUTH_URL,
    database: mongodbAdapter(db as any),
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    user: {
      deleteUser: {
        enabled: true,
      },
    },
    plugins: [nextCookies(), admin()],
  });
  return authInstance;
};

export const auth = await getAuth();
