import SearchBox from "./components/SearchBox";
import ResultSection from "./components/ResultSection";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-5/6">
        <SearchBox />
        <ResultSection /> 
      </div>
    </div>
  );
}
