import { useMutation } from "@tanstack/react-query";
import { LoginUser, RegisterUser } from "../services/authServices";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useRegiterUser = () => {
  return  useMutation<any,Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await RegisterUser(userData),
        onSuccess:() => {
          toast.success("User is created successfully.")
        }
      });
  
};


export const useUserLogin = () => {
  return  useMutation<any,Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (userData) => await LoginUser(userData),
        onSuccess:() => {
          toast.success("User is logged in successfully.")
        }
      });
  
};

