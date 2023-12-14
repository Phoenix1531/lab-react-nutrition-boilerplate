import "./App.css";
import Search from "./components/Search";
import Foodbox from "./components/Foodbox";
import FoodData from "../resources/FoodData.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1 style={{ color: "white", fontSize: "45px" }}> PRO NUTRITION 😋</h1>
      <Search setSearch={setSearch} />
      {FoodData.filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase());
      }).length==0?(<h1>No results</h1>):FoodData.filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase());
      }).map((e, i) => {
        return <Foodbox data={e} index={i} />;
      })}
    </>
  );
}

export default App;