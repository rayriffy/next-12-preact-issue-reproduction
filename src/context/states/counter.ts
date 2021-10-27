import { StoreonModule } from 'storeon'

import { CounterStore } from '../@types/CounterStore'
import { CounterEvent } from '../@types/CounterEvent'

export const counter: StoreonModule<
  CounterStore,
  CounterEvent
> = store => {
  store.on('@init', () => ({
    counter: {
      count: 0,
    },
  }))

  store.on('counter/count', (state) => ({
    counter: {
      count: state.counter.count + 1,
    }
  }))
}
