import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation(); // Récupère les infos sur la route actuelle

  useEffect(() => {
    window.scrollTo(0, 0); // Définit le défilement en haut de la page
  }, [location.pathname]); // S'exécute chaque fois que l'URL change

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Panier" element={<CartPage />} />
          <Route path="/Histoire" element={<HistoryPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;