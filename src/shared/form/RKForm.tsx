"use client"

import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formconfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formconfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const RKForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const formConfig: formconfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const submitHanlder = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHanlder(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default RKForm;
