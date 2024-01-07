import Carte from "./Carte";
import Entete from "./Entete";
import Navbaar from "./Navbaar";


function App() {
    return (
        <>
            <div className="app">
                <Navbaar></Navbaar>
                <Entete></Entete>
                <div className="carte">
                    <Carte></Carte>
                    <Carte></Carte>
                    <Carte></Carte>


                </div>
            </div>
        </>
    );
}

export default App;
