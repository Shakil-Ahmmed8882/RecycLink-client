"use client"


import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface Iprops {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  reqired?: boolean;
  type?: string;
  label: string;
  name: string;
}

const RKInput = ({
  variant = "bordered",
  size = "md",
  reqired = false,
  type = "text",
  label,
  name
}: Iprops) => {
  const { register, formState:{errors} } = useFormContext();


  return <Input 

  isInvalid={!!errors[name]}
  label={name}
  errorMessage={errors[name]?errors[name].message as string: ""}
  {...register(name)} {...{ variant, type, size, reqired}} />;
};

export default RKInput;
