import './App.scss';
import {Color} from "./components/Color.tsx"
import {useState} from "react";
import AppiIcon from "./Images/APPI_icon.png"
const ImgItem = ({src}) => {
    const [color, setColor] = useState("");
    console.log(color)
    return (
        <div className="imgItem">
            <Color src={src} hook={setColor}/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <h1>React color surge</h1>
            <ImgItem src={AppiIcon}/>
        </div>
    );
}

export default App;
