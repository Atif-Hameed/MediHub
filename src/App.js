import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import SkinCondition from './Pages/SkinCondition/SkinCondition';
import MentalHealth from './Pages/MentalHealth/MentalHealth';
import Digestive from './Pages/Digestive/Digestive';
import SexualHealth from './Pages/SexualHealth/SexualHealth';
import AboutUs from './Pages/AboutUs.jsx/AboutUs';
import ContactUs from './Pages/ContactUs.jsx/ContactUs';
import AvailableDoctors from './Pages/AvailableDoctors/AvailableDoctors';
import AppointBoking from './Pages/AppointBoking/AppointBoking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SkinCondition' element={<SkinCondition/>} />
        <Route path='/MentalHealth' element={<MentalHealth/>} />
        <Route path='/Digestive' element={<Digestive/>} />
        <Route path='/SexualHealth' element={<SexualHealth/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/AvailableDoctors' element={<AvailableDoctors/>} />
        <Route path='/AppointBoking' element={<AppointBoking/>} />
      </Routes>
      
    </div>
  );
}

export default App;
