import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import itemsData from "./assets/items.json";
import "./App.css";

function App() {
  const [items, setItems] = useState(itemsData);

  function addItem(text) {
    const newItem = {
      id: Date.now(), // Ensure ID is a number
      item: text,
      completed: false,
    };
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function toggleCompleted(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                items={items}
                addItem={addItem}
                deleteItem={deleteItem}
                toggleCompleted={toggleCompleted}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailsPage items={items} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
