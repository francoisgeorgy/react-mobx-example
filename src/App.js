import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {ThemeToggler} from "./components/ThemeToggler";
import {useStores} from "./hooks/use-stores";
// import {observer} from "mobx-react";
import ObserverComponent from "./components/ObserverComponent";
import PartialObserverComponent from "./components/PartialObserverComponent";

// const App = observer(() => {
const App = () => {
    const {counterStore} = useStores();
    // const {themeStore} = useStores();
    return (
        <div className="App">
            app
            <Counter/>
            <ThemeToggler/>
{/*
            <div>{themeStore.theme}</div>
            <div>{counterStore.count}</div>
*/}
            App not observed: {counterStore.count}
            <ObserverComponent counterStore={counterStore}/>
            <PartialObserverComponent counterStore={counterStore}/>
        </div>
    );
};
//});

export default App;
