import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/components/Home.js";
import Service from "../src/components/Service.js";
import List from "../src/components/List.js";
import CustCard from "../src/components/CustCard.js";
import EditCust from "./components/EditCust.js";

function App() {
  return (
    <BrowserRouter>
    <List/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/custcard" element={<CustCard/>}/>
      <Route path="edit/:id" element={<EditCust/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
