import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

function Signup() {
  return (
    <div className="h-dvh bg-slate-50 p-5">
      <div className="flex flex-col gap-10">
        <Logo />
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
