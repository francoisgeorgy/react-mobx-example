import {observable, action, decorate} from 'mobx';

export class ThemeStore {

    // @observable
    theme = 'light';

    // @action
    setTheme(newTheme) {
        this.theme = newTheme
    }

}
// https://mobx.js.org/README.html#observable-state
// we use decorate() until we had the support for decorators in CRA
decorate(ThemeStore, {
    theme: observable,
    setTheme: action
});
