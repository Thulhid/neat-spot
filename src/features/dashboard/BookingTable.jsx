import Table from "../../ui/Table";
import BookingRow from "./BookingRow";

function BookingTable({ bookings }) {
  return (
    <Table>
      <Table.Header
        styles="hidden sm:grid gap-2 text-xs sm:text-sm md:text-base uppercase font-semibold
              grid-cols-2 sm:grid-cols-3 sm:grid-cols-[1fr_1fr_1fr_0.2fr] px-2 py-2 text-gray-800"
      >
        <div>Service</div>
        <div>Date and Time</div>
        <div>Address</div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow booking={booking} key={booking._id} />}
      />
    </Table>
  );
}

export default BookingTable;
