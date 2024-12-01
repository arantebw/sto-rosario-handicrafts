import NewAddressModal from "../new-address-modal";

export default function AddressListing() {
  return (
    <div className="flex-grow p-4 rounded-md border">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">List of Address</h3>
        <NewAddressModal />
      </div>
      <hr className="my-4" />
    </div>
  );
}
