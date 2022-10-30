import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList.js";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
    </div>
  );
}

export default App;
