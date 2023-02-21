import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import B from './pages/b';
import C from './pages/c';
import D from './pages/d';
import Header from './components/header/Header'


function App() {
  return (
    <div className="app ">
      <div className="sticky top-0 max-w-screen-xl w-full mx-auto">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/b' element={<B />} ></Route>
          <Route path='/c' element={<C />} ></Route>
          <Route path='*' element={<D />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
