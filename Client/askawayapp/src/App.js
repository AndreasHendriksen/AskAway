import './App.css';
import { Route, Switch } from "react-router-dom";

//  Components
//Layout
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

//Pages


function App() {
  return (
    <div className="App">
      <Header />
      <main style={{minHeight:window.innerHeight-58, backgroundColor:"#f4f4f4"}} >
        <Switch>
          <Route path="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
