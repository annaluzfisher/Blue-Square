import CreateAccountForm from "./components/Forms/CreateAccount/CreateAccountForm";

import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="app">
        <NavBar/>
        <Routes>
          <Route path="Create-Account" element={<CreateAccountForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


