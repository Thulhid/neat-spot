import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/validationSchema";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";
import { Link } from "react-router";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { signup, isPending } = useSignup();

  const onSubmit = (data) => {
    signup(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto w-fit space-y-4"
      >
        <div>
          <label className="block text-lg font-medium">Full Name</label>
          <input type="text" {...register("full_name")} className="input" />
          {errors.full_name && (
            <p className="text-sm text-red-500">{errors.full_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium">Username</label>
          <input type="text" {...register("username")} className="input" />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium">Password</label>
          <input type="password" {...register("password")} className="input" />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("password_confirm")}
            className="input"
          />
          {errors.password_confirm && (
            <p className="text-sm text-red-500">
              {errors.password_confirm.message}
            </p>
          )}
        </div>

        <Button
          buttonType="submit"
          variant="primary"
          className="rounded bg-slate-800 px-4 py-2 text-white"
          disabled={isPending || isSubmitting}
        >
          {isPending ? "Signing up..." : "Signup"}
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:underline">
          Sign in here
        </Link>
      </p>
    </>
  );
}
