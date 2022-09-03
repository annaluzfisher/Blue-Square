import CreateAccountForm from "./components/Forms/CreateAccount/CreateAccountForm";

import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";

function App() {
  return (
    <>
    <div className="app"></div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="Create-Account" element={<CreateAccountForm />} />
      </Routes>
    </>
  );
}

export default App;


