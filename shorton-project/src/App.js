import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

//라우터 연결 
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>

  );
}

export default App;
