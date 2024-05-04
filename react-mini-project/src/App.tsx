import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
      <DashboardPage />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/task/:taskId" element={<ItemDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
