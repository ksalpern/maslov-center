import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import C from './pages/c';
import Error from './pages/Error';
import Header from './components/header/Header'
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app ">
      <div className="max-w-screen-xl w-full mx-auto">
        <Header t={t} i18n={i18n} />
        <Routes>
          <Route path='/' element={<Home t={t} i18n={i18n}/>} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='/c' element={<C />} ></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
