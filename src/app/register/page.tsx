"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import RKForm from "@/src/shared/form/RKForm";
import RKInput from "@/src/shared/form/RKInput";

import { TFieldValues } from "@/src/types";
import { registerValidationSchema } from "@/src/schema/register.validation";
import { useRegiterUser } from "@/src/hooks/auth";
import Loading from "@/src/components/ui/Loading";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useRegiterUser();
  const router = useRouter();

  const RegisterHanlder = async (data: TFieldValues) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    handleUserRegistration(userData);
  };

  if (!isPending && isSuccess) {
    router.push("/");
  }

  // for development
  const defaultValues = {
    name: "shakil",
    email: "shakilahmmed8882@gmail.com",
    mobileNumber: "0123434783",
    password: "123456",
  };

  return (
    <>
      {isPending && <Loading />}
      <section className="w-1/2 mx-auto text-center">
        <div className="pb-4">
          <h1 className="mt-32 text-3xl font-bold">
            Sign up with <span className="text-[#00bfff] ">RecycLink....</span>
          </h1>
          <p className="py-2">Welcome to back. Let's get started</p>
        </div>
        <RKForm
          defaultValues={defaultValues}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={RegisterHanlder}
        >
          {/* name, email, password */}
          <div className="my-4">
            <RKInput type="text" label="name" name="name" />
          </div>
          <div className="my-4">
            <RKInput type="email" label="Email" name="email" />
          </div>
          <div className="my-4">
            <RKInput type="number" label="Mobile Number" name="mobileNumber" />
          </div>
          <div className="my-4">
            <RKInput type="password" label="Password" name="password" />
          </div>

          <Button type="submit" className="w-full bg-[#414141]  font-bold">
            Register
          </Button>
        </RKForm>
        <p className="text-default-600 text-sm pb-6 pt-5">
          Already have an account?{" "}
          <Link href={"/login"} className="underline text-blue-500">
            Login
          </Link>
        </p>
      </section>
    </>
  );
};

export default RegisterPage;
