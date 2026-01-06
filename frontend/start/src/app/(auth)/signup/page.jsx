"use client";

import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className=" text-xl font-bold text-secondary-500 text-center mb-6">
        صفحه ثبت نام
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className=" space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          type="email"
          register={register}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
        />
        <Button type="submit" className="w-full" variant="primary">
          {" "}
          ثبت نام
        </Button>
      </form>
    </div>
  );
}

export default Signup;
