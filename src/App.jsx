import {
    Home1,
    Home2,
    About,
    Blog,
    Contact,
    Gallery,
    Service,
    Team,
    Footer,
} from "./containers";
import { Navbar, CTA, Title, ListItem } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home1 />} />
                    <Route path="/home2" element={<Home2 />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
