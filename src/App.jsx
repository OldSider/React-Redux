import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Pages/LoginPage/LoginPage";
import HomePage from "./Assets/Pages/HomePage/HomePage";
import RegisterPage from "./Assets/Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
