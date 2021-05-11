import './App.css';
import { Route, Switch } from "react-router-dom";

//  Components
//Layout
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

//Pages
import HomePage from "./Components/Pages/HomePage";
import RoomPage from "./Components/Pages/RoomPage";
import EnterPinPage from "./Components/Pages/EnterPinPage";
import CreateRoomPage from "./Components/Pages/CreateRoomPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{minHeight:window.innerHeight-58, backgroundColor:"#f4f4f4"}} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/room/:id" component={RoomPage} />
          <Route path="/" component={HomePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
