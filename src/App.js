import { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Industria from "./pages/Industria";
import Iluminacion from "./pages/Iluminacion";
import Conductores from "./pages/Conductores";
import Terminales from "./pages/Terminales";
import Normalizados from "./pages/Normalizados";
import Instrumentos from "./pages/Instrumentos";
import LineaAerea from "./pages/LineaAerea";
import ConjuntosArmados from "./pages/ConjuntosArmados";
import LucesEmergencia from "./pages/LucesEmergencia";
import Herramientas from "./pages/Herramientas";
import Morceteria from "./pages/Morceteria";
import Contact from "./pages/Contact";

import {logos, topic, iluminacionT, normalizadosT, instrumentosT, aereoT, emergenciaT, armadosT, armadosSica, armadosJeluz, armadosXx1, armadosXxii, armadosBauhaus, herramientasT, morceteriaT} from './exports/data'

class App extends Component {

  state = {
    logos: [
      { id: 1, name: "logo", img: "/images/logos/logo-ele-centro-three.png" },
    ],
  };
  render() {
    return (
      <HashRouter>
          <Navbar logos={this.state.logos} toppic={topic} logo={logos}/>
          <Routes>
            <Route path="/" element={<Home topicSection={this.state.topicSection} toppic={topic}/>}/>
            <Route path="/industria" element={<Industria topic={topic}/>} />
            <Route path="/iluminacion" element={<Iluminacion iluminacionT={iluminacionT}/>} />
            <Route path="/conductores" element={<Conductores topic={topic}/>} />
            <Route path="/terminales" element={<Terminales topic={topic}/>} />
            <Route path="/normalizados" element={<Normalizados topic={topic} normalizadosT={normalizadosT}/>} />
            <Route path="/instrumentos-de-medicion"element={<Instrumentos topic={topic} instrumentosT={instrumentosT}/>}/>
            <Route path="/linea-aerea" element={<LineaAerea topic={topic} aereoT={aereoT}/>} />
            <Route path="/conjuntos-armados" element={<ConjuntosArmados topic={topic} armadosT={armadosT} armadosSica={armadosSica} armadosJeluz={armadosJeluz} armadosXx1={armadosXx1} armadosXxii={armadosXxii} armadosBauhaus={armadosBauhaus}/>} />
            <Route path="/luces-emergencia" element={<LucesEmergencia topic={topic} emergenciaT={emergenciaT}/>} />
            <Route path="/herramientas" element={<Herramientas topic={topic} herramientasT={herramientasT}/>} />
            <Route path="/morceteria" element={<Morceteria topic={topic} morceteriaT={morceteriaT}/>} />
            <Route path="/contacto" element={<Contact/>}/>
          </Routes>
      </HashRouter>
    );
  }
}
export default App;
