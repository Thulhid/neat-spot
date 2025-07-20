import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button";
import { useCreateMyBooking } from "./useCreateMyBooking";
import { bookingCreateSchema } from "../../utils/validationSchema";
import { useServices } from "../../hooks/useServices";

export default function CreateBookingForm() {
  const { services, isPending: isPendingServices } = useServices();
  const { createBooking, isPending: isPendingBooking } = useCreateMyBooking();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingCreateSchema),
    defaultValues: {
      service_id: "",
      address: "",
      date_time: new Date(Date.now() + 60 * 60 * 1000)
        .toISOString()
        .slice(0, 16),
    },
  });

  const onSubmit = (data) => {
    createBooking(data);
  };
  if (isPendingServices)
    return <div className="text-xl text-slate-700">Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-3xl space-y-6 rounded-md bg-white p-6 shadow-md"
    >
      {/* Grid wrapper for responsive layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Service */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Service
          </label>
          <select
            {...register("service_id")}
            className="rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">-- Select a service --</option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.service_id && (
            <p className="mt-1 text-xs text-red-500">
              {errors.service_id.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            className="rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Date & Time */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Date & Time
          </label>
          <input
            type="datetime-local"
            {...register("date_time")}
            className="rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            min={new Date().toISOString().slice(0, 16)}
          />
          {errors.date_time && (
            <p className="mt-1 text-xs text-red-500">
              {errors.date_time.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          buttonType="submit"
          disabled={isPendingBooking}
        >
          {isPendingBooking ? "Creating..." : "Create Booking"}
        </Button>
      </div>
    </form>
  );
}
