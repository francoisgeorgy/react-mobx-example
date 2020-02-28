import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

export const Counter = observer(() => {

    const { counterStore } = useStores();

    return (
        <div>
            Counter
            <div>
                <button onClick={() => counterStore.decrement()}>--</button> {counterStore.count}  <button onClick={() => counterStore.increment()}>++</button>
            </div>
        </div>
    )
});