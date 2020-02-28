import React, {Component} from "react";
import {observer} from 'mobx-react';

const ObserverComponent = observer(
    class ObserverComponent extends Component {

    render() {
        return (
            <div>ObserverComponent count:{this.props.counterStore.count}</div>
        );
    }

});

export default ObserverComponent;
