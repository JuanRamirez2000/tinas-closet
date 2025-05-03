import ItemCard from "@/components/ItemCard";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="card  border-2 border-primary w-72 bg-base-100 card-sm shadow-sm flex items-center justify-center">
        <PlusIcon className="size-32" />
      </div>
      {[...Array(10)].map((_, index) => (
        <ItemCard key={index} />
      ))}
    </div>
  );
}
