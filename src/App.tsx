import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventosPage from "./pages/Eventos";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={ <EventosPage /> } />
      </Routes>
    </BrowserRouter>
  );
}
