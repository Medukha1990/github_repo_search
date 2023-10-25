import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:userName" element={<UserPage />} />
    </Routes>
  );
};

export default App;
