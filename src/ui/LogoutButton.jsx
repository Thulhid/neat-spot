import { useLogout } from "../features/authentication/useLogout";
import Button from "./Button";

function LogoutButton() {
  const { logout, isPending } = useLogout();

  return (
    <div className="mx-5 my-4 flex justify-end">
      <Button variant="secondary" onClick={logout} disabled={isPending}>
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;
