import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                Hello World with Sang &amp; Tran Duc Sang
                <MyComponent></MyComponent>
            </div>
        );
    }
}

export default App;
