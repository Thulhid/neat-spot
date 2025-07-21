import { ImSpinner2 } from "react-icons/im";
import Button from "./Button";

function ConfirmDelete({ onCloseModal, disabled, onConfirm, resource }) {
  return (
    <div>
      <h2 className="text-md font-semibold md:text-2xl">Cancel {resource}</h2>
      <p className="my-5 flex w-xs items-center justify-center rounded-md border-2 border-red-700 bg-red-200 p-2 pl-5 text-[12px] font-semibold text-slate-800 sm:my-10 sm:h-20 sm:w-auto sm:rounded-2xl sm:px-12 sm:text-sm">
        Are you sure you want to Cancel this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex w-full justify-end gap-3 px-7">
        <Button variant="secondary" onClick={onCloseModal}>
          Back
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={disabled}>
          {disabled ? (
            <>
              <span>Cancelling..</span>
              <ImSpinner2 size={20} className="animate-spin" />
            </>
          ) : (
            "Cancel Order"
          )}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
