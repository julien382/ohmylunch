import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

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