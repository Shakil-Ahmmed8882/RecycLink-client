"use client";

import RKInput from "@/src/shared/form/RKInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

export default function CreatePost() {
  const methods = useForm();
  const { handleSubmit, control } = methods;
  const { append, remove, fields } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RKInput name="title" label="Title" />
        <div className="flex justify-between items-center gap-3">
          <h1 className="text-xl ">Owner Verification Questions.</h1>
          <Button onClick={() => handleFieldAppend()}>Append</Button>
        </div>
        <Divider className="my-5" />
        <div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-3">
              <RKInput name={`questions.${index}.value`} label="Questions" />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}
        </div>

        <Divider className="my-5" />
        <Button type="submit">Post</Button>
      </form>
    </FormProvider>
  );
}
