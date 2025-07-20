import { Link } from "react-router";
import Button from "../ui/Button";
import CreateBookingForm from "../features/create-booking/CreateBookingForm";

function CreateBooking() {
  return (
    <>
      <h1 className="mb-6 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl">
        Create Booking
      </h1>
      <div className="mr-4 mb-4 flex justify-end">
        <Link
          to="/dashboard"
          className="font-medium text-blue-600 hover:underline"
        >
          Dashboard
        </Link>
      </div>
      <CreateBookingForm />
    </>
  );
}

export default CreateBooking;
