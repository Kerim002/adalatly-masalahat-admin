import { Link } from "react-router-dom";

const LawsPage = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <h1 className="text-center h-16 py-2 font-semibold text-4xl">Kanunlar</h1>
      <div className="xl:w-[80%] overflow-auto h-[calc(100vh-8rem)] w-full m-auto pb-10">
        {[...Array(50)].map((_, index) => (
          <Link to={`${index + 1}`}>
            <div
              key={index}
              className="border-b text-xl font-medium py-2 px-1 border-black"
            >
              <p>{index + 1}.Konsullyk gullugy hakynda</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LawsPage;
