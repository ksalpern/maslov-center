import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app ">
      <div className="max-w-screen-xl w-full mx-auto ">
        <div className="fixed w-[100vw] h-[100vw] opacity-20  dark:opacity-5 top-[20%] pointer-events-none flex justify-center items-start">
          <img className="w-1/2" src="/logo.svg" alt="" />
        </div>
        <Header t={t} i18n={i18n} />
        <Routes>
          <Route path="/" element={<Home t={t} i18n={i18n} />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
