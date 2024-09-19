"use client";

import RKForm from "@/src/shared/form/RKForm";
import RKInput from "@/src/shared/form/RKInput";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schema/login.validation";
import { TFieldValues } from "@/src/types";
import Link from "next/link";
import { useUserLogin } from "@/src/hooks/auth";
import Loading from "@/src/components/ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {
  const { mutate: handleLoginUser, isPending, isSuccess } = useUserLogin();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const { setIsLoading: UserLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLoginUser(data);
    UserLoading(true);
  };

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      {isPending && <Loading />}
      <section className="w-1/2 mx-auto text-center">
        <h1 className="mt-32 text-3xl font-bold mb-8">
          Login with <span className="text-[#00bfff] ">RecycLink</span>
        </h1>

        {/* <p className="text-default-600 text-[19px] pb-6 pt-2">
        welcome back! Let's get started
      </p> */}

        <RKForm
          defaultValues={{
            email: "shakilahmmed88821@gmail.com",
            password: "123456",
          }}
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className="my-4">
            <RKInput type="email" label="Email" name="email" />
          </div>
          <div className="my-4">
            <RKInput type="password" label="Password" name="password" />
          </div>
          <Button type="submit" className="w-full bg-[#414141]  font-bold">
            Login
          </Button>
        </RKForm>
        <p className="text-default-600 text-sm pb-6 pt-5">
          Don't have account?{" "}
          <Link href={"/register"} className="underline text-blue-500">
            Register
          </Link>
        </p>
      </section>
    </>
  );
};

export default LoginPage;
