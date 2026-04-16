
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* default route */}
        <Route index element={<Dashboard />} />

        {/* dashboard route */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* 404 inside layout */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;