import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/organisms/Layout';
import {
  HomePage,
  RoomsPage,
  ToursPage,
  AboutPage,
  CafeteriaPage,
  ContactPage,
} from './components/pages';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<HomePage />} />
          <Route path="habitaciones" element={<RoomsPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="cafeteria" element={<CafeteriaPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}