import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import C from './pages/c';
import Error from './pages/Error';
import Header from './components/header/Header'


function App() {
  return (
    <div className="app ">
      <div className="sticky top-0 max-w-screen-xl w-full mx-auto">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='/c' element={<C />} ></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
