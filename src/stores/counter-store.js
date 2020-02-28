import {observable, action, computed, decorate} from 'mobx';

export class CounterStore {

    // @observable
    count = 0;

    // @action
    increment() {
        this.count++
    }

    // @action
    decrement() {
        this.count--
    }

    // @computed
    get doubleCount() {
        return this.count * 2
    }

}
// https://mobx.js.org/README.html#observable-state
// we use decorate() until we had the support for decorators in CRA
decorate(CounterStore, {
    count: observable,
    increment: action,
    decrement: action,
    doubleCount: computed
});
