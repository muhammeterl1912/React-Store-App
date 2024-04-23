import { useProductsContext } from "../context/ProductProvider";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const { setSearch, search } = useProductsContext();
  return (
    <div className="">
      <div className="relative w-6/12 mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch />
        </div>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-primary  focus:text-black"
          placeholder="Search products..."
          value={search}
        />
      </div>
    </div>
  );
};
export default SearchInput;
