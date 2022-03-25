import { Routes, Route } from "react-router";

import Home from "./pages";
import NotFoundPage from "./pages/404";
import Health from "./pages/api/health";
import Version from "./pages/api/version";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/api/health" element={<Health />} />
    <Route path="/api/version" element={<Version />} />
    {/* ELSE */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default Routing;