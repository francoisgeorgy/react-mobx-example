import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../hooks/use-stores'

export const ThemeToggler = observer(() => {

    const {themeStore} = useStores();

    return (
        <div>
            ThemeToggler
            <div>
                <button onClick={() => themeStore.setTheme('dark')}>
                    set theme: dark
                </button>
                <button onClick={() => themeStore.setTheme('light')}>
                    set theme: light
                </button>
                {' '}
                {themeStore.theme}
            </div>
        </div>
    )

});
