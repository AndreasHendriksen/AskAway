import "./App.css";
import { Route, Switch } from "react-router-dom";

//  Components
import OptionsModal from "./Components/OptionsModal";
import RoomCodeModals from "./Components/RoomCodeModals";

//Layout
import MainHeader from "./Components/Layout/MainHeader";
import MainFooter from "./Components/Layout/MainFooter";
import RoomHeader from "./Components/Layout/RoomHeader";
import RoomFooter from "./Components/Layout/RoomFooter";

//Pages
import HomePage from "./Components/Pages/HomePage";
import RoomPage from "./Components/Pages/RoomPage";
import CreateRoomPage from "./Components/Pages/CreateRoomPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={MainHeader} />
                <Route path="/room/*" component={RoomHeader} />
            </Switch>
            <main style={{ minHeight: window.innerHeight, backgroundColor: "#f4f4f4", paddingTop: 58, paddingBottom: 200 }}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/room/:id" component={RoomPage} />
                </Switch>
            </main>
            <Switch>
                <Route exact path="/" component={MainFooter} />
                <Route path="/room/*" component={RoomFooter} />
            </Switch>

            {/* Modals */}
            <OptionsModal />
            <RoomCodeModals />
        </div>
    );
}

export default App;
