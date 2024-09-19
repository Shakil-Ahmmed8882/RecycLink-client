"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const RegisterUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const LoginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const Logout = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  let decodedUser = null;
  const accessToken = cookies().get("accessToken")?.value;
  if (accessToken) {
    decodedUser = await jwtDecode(accessToken);

    return {
      _id: decodedUser._id,
      name: decodedUser.name,
      email: decodedUser.email,
      mobileNumber: decodedUser.mobileNumber,
      role: decodedUser.role,
      status: decodedUser.status,
    };
  }
};
