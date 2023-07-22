import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Pages/LoginPage/LoginPage";
import HomePage from "./Assets/Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
