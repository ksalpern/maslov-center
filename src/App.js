import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Service from './pages/Service';
import Error from './pages/Error';
import Header from './components/Header/Header'
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app ">
      <div className="max-w-screen-xl w-full mx-auto ">
      <div className='fixed h-screen w-full opacity-10 left-1/2 top-1/2 -translate-x-1/2 pointer-events-none flex justify-center items-start'>
        <img className='w-1/2' src='/logo.svg' alt='' />
      </div>
        <Header t={t} i18n={i18n} />
        <Routes>
          <Route path='/' element={<Home t={t} i18n={i18n}/>} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
