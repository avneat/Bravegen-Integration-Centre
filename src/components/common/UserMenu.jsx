export default function UserMenu() {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border text-sm z-20">
      
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Account Settings
      </div>

      <div className="px-4 py-2 border-t hover:bg-gray-100 cursor-pointer">
        Sign Out
      </div>

    </div>
  );
}
