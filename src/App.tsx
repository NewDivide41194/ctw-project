import Form from "./components/form";
import { NavigationButton } from "./components/navigationButton";
import Pagination from "./components/pagination";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white md:w-[50%] shadow-lg rounded p-8  mx-auto">
        <div className="flex justify-center">
          <Pagination />
        </div>
        <Form />
        <NavigationButton />
      </div>
    </div>
  );
};

export default App;
