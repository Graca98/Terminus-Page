export default function Task({ taskText, date, id, btnDelete }) {
  return (
    <>
      <label
        htmlFor={id}
        className="flex gap-4 lg:gap-8 items-center  block w-full bg-gray-100 py-2 px-4 my-2 cursor-pointer"
      >
        <input id={id} type="checkbox" className="w-4 h-4" />
        <div className="">
          <h3>{taskText}</h3>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <div className="flex gap-2 justify-self-end ml-auto mr-2 lg:mr-8">
          <button
            className="px-2 py-1 outline outline-yellow-400 text-yellow-500 rounded hover:bg-yellow-400 hover:text-white active:bg-yellow-500 active:outline-yellow-500 mr-2"
            type="button"
            onClick={(e) => {
              // Mělo by zabránit zakliknutí checkboxu
              // kliknutím na tlačítko
              e.stopPropagation();
            }}
          >
            {/* Edit icon here */}
            Edit
          </button>

          <button
            className="px-2 py-1 outline outline-red-500 text-red-500 rounded hover:bg-red-500 active:bg-red-600 active:outline-red-600 hover:text-white"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              btnDelete();
            }}
          >
            {/* Delete icon here */}
            Smazat
          </button>
        </div>
      </label>
    </>
  );
}
