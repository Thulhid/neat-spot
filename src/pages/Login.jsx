import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="h-dvh p-5">
      <div className="flex flex-col gap-10">
        <Logo />
        <LoginForm />
      </div>
      {/* <LoginForm /> */}
    </div>
  );
}

export default Login;
