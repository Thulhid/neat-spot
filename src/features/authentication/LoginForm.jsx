import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validationSchema";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import { Link } from "react-router";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login, isPending } = useLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto w-fit space-y-4"
      >
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

        <Button
          buttonType="submit"
          variant="primary"
          className="rounded bg-slate-800 px-4 py-2 text-white"
          disabled={isPending || isSubmitting}
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up here
        </Link>
      </p>
    </>
  );
}
