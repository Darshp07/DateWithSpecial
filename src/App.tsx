
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './component/Home.tsx';
import './App.css'

function App() {
 
  return (
     <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
