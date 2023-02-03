import Form from "../components/form";
import Pagination from "../components/pagination";

const MainPage = () => {
  return (
    <div className="bg-white shadow-md rounded p-8">
      <div className="flex justify-center">
        <Pagination />
      </div>
      <div className="p-8">
        <Form />
      </div>
    </div>
  );
};

export default MainPage;
