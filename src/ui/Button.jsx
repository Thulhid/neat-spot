function Button({
  children,
  disabled,
  onClick,
  buttonType,
  variant,
  configStyles,
}) {
  const base =
    "flex cursor-pointer items-center gap-1 rounded-md  text-sm  transition-colors duration-300 disabled:cursor-not-allowed disabled:border-none";

  const styles = {
    primary:
      base +
      " bg-sky-500  text-sky-50 hover:brightness-105  font-semibold  p-1.5 shadow-md",
    secondary:
      base +
      " border text-slate-800 font-semibold p-1.5 active:bg-slate-200",
    small:
      base +
      " text-slate-800 hover:bg-sky-100 w-full p-0.5 sm:p-1.5 text-sm",
    danger:
      base +
      " text-red-50 bg-red-700 p-2 font-semibold text-sm hover:brightness-105",

    header:
      base +
      " text-slate-800 hover:bg-sky-100 w-full p-0.5 sm:p-1 text-sm",
  };

  //border border-sky-600
  return (
    <button
      type={buttonType}
      className={`${styles[variant]} ${configStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
