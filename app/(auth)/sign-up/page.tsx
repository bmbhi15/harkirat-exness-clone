import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="space-y-4 mx-40">
      <p className="form-title">Sign Up & Personalize</p>
      <div className="form w-full">
        <Button className="yellow-btn w-full">
          Start Your Investing Journey
        </Button>
      </div>
      <div className="flex flex-row w-full space-x-2 items-center justify-center">
        <p>Already have an account ?</p>
        <Link href="./log-in">
          <p className="text-white">Log In</p>
        </Link>
      </div>
    </div>
  );
}
