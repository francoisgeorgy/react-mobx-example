import React, {Component} from "react";
import {observer} from 'mobx-react';

const ObserverComponent = observer(
    class ObserverComponent extends Component {
    state = {
        count: 0
    };
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
