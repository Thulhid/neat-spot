import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateBooking } from "../hooks/useUpdateBooking";
import toast from "react-hot-toast";
import Button from "./Button";
import { bookingUpdateSchema } from "../utils/validationSchema";
import { useServices } from "../hooks/useServices";

export default function UpdateBooking({ booking, onCloseModal }) {
  const { services, isPending } = useServices();
  const { updateBooking, isUpdating } = useUpdateBooking();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingUpdateSchema),
    defaultValues: {
      service_id: booking?.service_id?._id || "",
      address: booking?.address || "",
      date_time: booking?.date_time?.slice(0, 16) || "", // format to yyyy-MM-ddTHH:mm
    },
  });

  const onSubmit = (data) => {
    updateBooking(
      {
        id: booking._id,
        payload: data,
      },
      {
        onSuccess: () => {
          toast.success("Booking updated");
          onCloseModal?.(); // Close the modal
        },
      },
    );
  };
  if (isPending)
    return <div className="text-xl text-slate-700">Loading...</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-2 py-4">
      {/* Service Dropdown */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Service
        </label>
        <select
          {...register("service_id")}
          className="input"
          disabled={isUpdating}
        >
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.service_id && (
          <p className="text-xs text-red-500">{errors.service_id.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Address
        </label>
        <input
          type="text"
          {...register("address")}
          className="input"
          disabled={isUpdating}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* Date & Time */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Date & Time
        </label>
        <input
          type="datetime-local"
          {...register("date_time")}
          className="input"
          disabled={isUpdating}
          min={new Date().toISOString().slice(0, 16)}
        />
        {errors.date_time && (
          <p className="text-xs text-red-500">{errors.date_time.message}</p>
        )}
      </div>

      <div className="pt-2 text-right">
        <Button
          buttonType="submit"
          variant="primary"
          className="rounded bg-sky-600 px-4 py-2 text-white disabled:opacity-60"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Booking"}
        </Button>
      </div>
    </form>
  );
}
