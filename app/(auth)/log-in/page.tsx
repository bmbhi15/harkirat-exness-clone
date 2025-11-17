import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LogIn() {
  return (
    <div className="space-y-4 mx-40">
      <p className="form-title">Log In your Account</p>
      <div className="form w-full">
        <Button className="yellow-btn w-full">Log In</Button>
      </div>
      <div className="flex flex-row w-full space-x-2 items-center justify-center">
        <p>Don't have an account ?</p>
        <Link href="./sign-up">
          <p className="text-white">Sign Up</p>
        </Link>
      </div>
    </div>
  );
}
