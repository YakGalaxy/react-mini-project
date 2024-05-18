import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/task/:taskId" element={<ItemDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
