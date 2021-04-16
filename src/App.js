// Importing the Bootstrap CSS. Sem isso você tem os componentes, mas eles ficam feios.
//import 'bootstrap/dist/css/bootstrap.min.css';
import './config/bootstrap/custom.scss' //Import com custom theme

//A ordem importa. Você aqui está dando override no default do Bootstrap acima.
import "./global styles/global.css"

//Components
import { Home } from "./pages/Home/Home.js"

function App() {
  return (
    <Home />
  );
}

export default App;
