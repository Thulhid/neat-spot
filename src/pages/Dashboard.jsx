import { Link } from "react-router";
import BookingTable from "../features/dashboard/BookingTable";
import { useMyBookings } from "../features/dashboard/useMyBookings";
import Empty from "../ui/Empty";

function Dashboard() {
  const { bookings, isPending } = useMyBookings();

  return (
    <>
      <h1 className="mb-6 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl">
        Dashboard
      </h1>

      <div className="mr-4 mb-4 flex justify-end">
        <Link
          to="/create-booking"
          className="font-medium text-blue-600 hover:underline"
        >
          Create New Booking
        </Link>
      </div>
      {isPending && <p className="ml-4 text-slate-500">Loading bookings...</p>}

      {!isPending && bookings.length === 0 && <Empty resourceName="Bookings" />}
      {!isPending && bookings.length !== 0 && (
        <BookingTable bookings={bookings} />
      )}
    </>
  );
}

export default Dashboard;
