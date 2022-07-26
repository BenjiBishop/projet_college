import Acceuil from "./Components/Acceuil";
import ChoixNiveau from "./Components/ChoixNiveau"
import MatiereItem from './Components/MatiereItem'
import ChoixSerie from "./Components/ChoixSerie"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      
        <h1> Navigation de votre app </h1>
        <nav>
          <Link to="/choixniveau">Choix niveau </Link>
          <Link>Choix Serie </Link>
          <Link to="/matiere">Matiere</Link>
        </nav>



        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/choixniveau" element={<ChoixNiveau />} />
          <Route path="/matiere" element={<MatiereItem />} />
          <Route path="/choixserie" element={<ChoixSerie />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}