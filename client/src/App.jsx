import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import NewResults from "./components/NewResults";
import LeftForm from "./components/LeftForm";
import OptionHeader from "./components/OptionHeader";
import AllResults from "./components/AllResults";
import Saved from "./components/Saved";
import Loading from "./components/Loading";

function App() {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    topic: "",
    audience: "",
    keyword: "",
    tone: "",
    additionalKeywords: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("New Results");
  const [intros, setIntros] = useState([]);
  const [saved, setSaved] = useState([]);
  const [allIntros, setAllIntros] = useState([]);

  useEffect(() => {
    console.log(saved);
    console.log(allIntros);
  }, [saved, allIntros]);

  const loadRightPage = (currentPage) => {
    switch (currentPage) {
      case "New Results":
        return (
          <NewResults loading={loading} intros={intros} setSaved={setSaved} />
        );
      case "Saved":
        return <Saved loading={loading} saved={saved} setSaved={setSaved} />;
      case "All Results":
        return (
          <AllResults
            loading={loading}
            allIntros={allIntros}
            setSaved={setSaved}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="App bg-black relative overflow-hidden">
      <div
        className="bg-[#2F6348] w-[250px] h-[350px] absolute"
        style={{
          backgroundImage: "white",
          filter: "blur(100px)",
          top: "-100px",
          left: "-100px",
        }}
      ></div>
      <div
        className="bg-[#2F6348] w-[250px] h-[601px] absolute"
        style={{
          backgroundImage: "white",
          filter: "blur(125px)",
          top: "125px",
          right: "-115px",
        }}
      ></div>

      <div className="absolute w-full h-full overflow-auto flex items-center px-24 gap-10">
        <div className="flex w-full gap-4 h-[625px]">
          <LeftForm
            count={count}
            setCount={setCount}
            formData={formData}
            setFormData={setFormData}
            loading={loading}
            setLoading={setLoading}
            setIntros={setIntros}
            setAllIntros={setAllIntros}
          />
          <div className="h-full w-full flex flex-col">
            <OptionHeader
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              saved = {saved}
            />
            <div
              className="h-full flex-grow-[1] py-6 border-[1px] border-[#414141] flex flex-col justify-center items-center"
              style={{
                background:
                  "linear-gradient(to bottom right, #111111, rgba(17, 17, 17, 0.3))",
              }}
            >
              {loadRightPage(currentPage)}
              {/* <NewResults /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
