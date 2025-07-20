import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../ui/Button";
import { useCreateService } from "./useCreateService";
import { serviceCreateSchema } from "../../../utils/validationSchema";

function CreateServiceForm({ onCloseModal }) {
  const { createService, isPending } = useCreateService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(serviceCreateSchema),
  });

  const onSubmit = (data) => {
    createService(data, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-4 py-6">
      <div className="flex flex-col gap-2">
        <label className="label">Service Name</label>
        <input type="text" {...register("name")} className="input" />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          variant="primary"
          buttonType="submit"
          disabled={isSubmitting || isPending}
        >
          {isSubmitting || isPending ? "Creating..." : "Create Service"}
        </Button>
      </div>
    </form>
  );
}

export default CreateServiceForm;
