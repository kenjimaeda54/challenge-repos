import { Routes, Route, BrowserRouter } from "react-router-dom";
import Details from "../pages/details";
import Home from "../pages/home";

export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:owner/:repos" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
