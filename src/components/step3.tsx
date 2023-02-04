export const Step3 = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-between">
        <div>
          <label htmlFor="meal">Please Select a Restaurant</label>
          <select
            id="meal"
            className="w-full p-2 rounded border cursor-pointer"
          >
            <option>1</option>
          </select>
        </div>
        <div>
          <label htmlFor="meal">Please Select a Restaurant</label>
          <input
            id="people"
            type="number"
            min={1}
            max={10}
            className="w-full p-2 rounded border"
            defaultValue={1}
          />
        </div>
      </div>
      <button className="bg-green-500 rounded-full text-white font-bold w-10 h-10 my-4">
        +
      </button>
    </div>
  );
};
