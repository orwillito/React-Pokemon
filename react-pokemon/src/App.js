import { Routes, Route } from 'react-router-dom';
import Devs from './pages/devs';
import Home from './pages/home';
import Navigation from './pages/navigation';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='devs' element={<Devs />} />
      </Route>

      
    </Routes>
  )
}



export default App;
