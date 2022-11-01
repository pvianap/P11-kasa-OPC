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
        element={<Navigate replace to="/P11-kasa-OPC/home" />}
      />
      <Route path="/P11-kasa-OPC/home" element={<Home />} />
      <Route path="/P11-kasa-OPC/apropos" element={<About />} />
      <Route path="/P11-kasa-OPC/logements/:id" element={<Lodging />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
