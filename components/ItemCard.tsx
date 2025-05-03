import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const clothingTypes = "shirt";

const clothingColor = "red";

export default function ItemCard() {
  return (
    <div className="card w-72 bg-base-100 card-sm shadow-sm ">
      <figure className="relative h-64 w-full overflow-hidden">
        <Image src="https://picsum.photos/200" alt="Item" fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p>This is where quick description is</p>
        <div className="card-actions justify-between">
          <div className="flex space-x-2">
            <div className="tooltip tooltip-primary" data-tip="Edit Item">
              <button className="btn btn-primary btn-square btn-sm">
                <PencilSquareIcon className="size-4" />
              </button>
            </div>
            <div className="tooltip tooltip-error" data-tip="Delete Item">
              <button className="btn btn-error btn-square btn-sm">
                <TrashIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <p className="badge badge-primary">{clothingTypes}</p>
            <p className="badge badge-secondary">{clothingColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
