import { MainContent } from "./components/MainContent/MainContent";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
            <Menu />
            <MainContent />
            <div className={'shadow'} id='shadow'></div>
        </div>
    </div>
  );
}

export default App;
