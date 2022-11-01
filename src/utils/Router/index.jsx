import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Lodging from '../../pages/Lodging';
import NotFound from '../../pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/P11-kasa-OPC/"
        element={<Navigate replace to="/home" />}
      />
      <Route exact path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/apropos" element={<About />} />
      <Route path="/logements/:id" element={<Lodging />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
