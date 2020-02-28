import React, {Component} from "react";
import {Observer} from 'mobx-react';

class PartialObserverComponent extends Component {

    render() {
        return (
            <div>
                PartialObserverComponent
                <div>not observed count:{this.props.counterStore.count}</div>
                <Observer>{() =>
                    <div>observed count:{this.props.counterStore.count}</div>}
                </Observer>
            </div>
        );
    }

}

export default PartialObserverComponent;
