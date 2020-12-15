import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChoosePatient from "./views/ChoosePatient";

const App = () => {
    return (
        <>
            <div className={"header-bar"}>Created by David Wilson (2020)</div>
            <div className='App'>
                <ChoosePatient />
            </div>
        </>
    );
};

export default App;
