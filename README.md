### Doc:

- https://mobx.js.org/
- https://mobx-react.js.org/

### Install:

    yarn add mobx mobx-react
    
### Patterns:

Store:

    import {observable, action, decorate} from 'mobx';
    export class ThemeStore {
        theme = 'light';
        setTheme(newTheme) {
            this.theme = newTheme
        }
    }
    decorate(ThemeStore, {
        theme: observable,
        setTheme: action
    });
    
Context:

    import {ThemeStore} from "../stores/theme-store";
    export const storesContext = React.createContext({
        themeStore: new ThemeStore()
    });
    
Hook:

    import { storesContext } from '../contexts'
    export const useStores = () => React.useContext(storesContext);
    
Functional component fully observed:
        
    import {observer} from 'mobx-react'
    import {useStores} from '../hooks/use-stores'
    export const ThemeToggler = observer(() => {
        const {themeStore} = useStores();
        return (
            <div>
                <button onClick={() => themeStore.setTheme('dark')}>set theme: dark</button>
                {themeStore.theme}
            </div>
        )
    });
    
Class component fully observed:
    
    import {observer} from 'mobx-react';
    const ObserverComponent = observer(
        class ObserverComponent extends Component {
        state = { count: 0 };
        inc = () => this.setState({ count: this.state.count + 2 });
        render() {
            return (
                <div>
                    <div>ObserverComponent count:{this.props.counterStore.count}</div>
                    <div>local state: {this.state.count} <button type="button" onClick={this.inc}>inc</button></div>
                </div>
            );
        }
    });
    export default ObserverComponent;

Class component partially observed:

    import {Observer} from 'mobx-react';
    class PartialObserverComponent extends Component {
        render() {
            return (
                <div>
                    <div>not observed count:{this.props.counterStore.count}</div>
                    <Observer>{() => <div>observed count:{this.props.counterStore.count}</div>}</Observer>
                </div>
            );
        }
    }
    export default PartialObserverComponent;
    
App:
    
    import React from 'react';
    import {Counter} from "./components/Counter";
    import {ThemeToggler} from "./components/ThemeToggler";
    import {useStores} from "./hooks/use-stores";
    import ObserverComponent from "./components/ObserverComponent";
    import PartialObserverComponent from "./components/PartialObserverComponent";
    const App = () => {
        const {counterStore} = useStores();
        return (
            <div className="App">
                <Counter/>
                <ThemeToggler/>
                App not observed: {counterStore.count}
                <ObserverComponent counterStore={counterStore}/>
                <PartialObserverComponent counterStore={counterStore}/>
            </div>
        );
    };
    export default App;
    
App observed:
    
    import React from 'react';
    import './App.css';
    import {Counter} from "./components/Counter";
    import {useStores} from "./hooks/use-stores";
    import {observer} from "mobx-react";
    import ObserverComponent from "./components/ObserverComponent";
    import PartialObserverComponent from "./components/PartialObserverComponent";
    
    const App = observer(() => {
        const {counterStore} = useStores();
        return (
            <div className="App">
                app
                <Counter/>
                <ThemeToggler/>
                <div>{counterStore.count}</div>
            </div>
        );
    });
    export default App;
    