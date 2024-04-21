import notFound from "../components/assets/notFound.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  mt-5 flex-col justify-center items-center gap-4">
      <h1 className="text-2xl uppercase text-primary">
        The page you are looking for does not exist!!!
      </h1>
      <img src={notFound} alt="Not Found" className="w-[70%] h-[50%] " />
      <div className="flex  justify-center container gap-2">
        <button
          className="w-[10%] bg-primary text-secondary  mt-6 p-2  hover:opacity-90"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          className="w-[10%] bg-primary text-secondary  mt-6 p-2  hover:opacity-90"
          onClick={() => {
            navigate("/home");
          }}
        >
          HOME
        </button>
      </div>
    </div>
  );
};

export default NotFound;
