import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app ">
      <div className="max-w-screen-xl w-full mx-auto ">
        <div className="fixed w-[100vw] h-[100vh] max-w-[1440px] max-h-[1440px]  pointer-events-none flex justify-center items-center opacity-20  dark:opacity-5">
          <img className="w-1/2" src="/logo.svg" alt="" />
        </div>
        <Header t={t} i18n={i18n} />
        <Home t={t} i18n={i18n} />
        <Footer t={t} i18n={i18n} />
      </div>
    </div>
  );
}

export default App;
