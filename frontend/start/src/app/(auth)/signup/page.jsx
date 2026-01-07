"use client";
import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "نام باید حداقل ۳ حرف باشد")
      .max(30, "نام نامعتبر است")
      .required("نام و نام خانوادگی را وارد کنید"),
    email: yup.string().email().required("ایمیل را وارد کنید"),
    password: yup.string().required("رمز عبور را وارد کنید"),
  })
  .required();
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

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
          type="text"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
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
