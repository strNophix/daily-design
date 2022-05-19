import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day1 from "./components/day1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Day1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
