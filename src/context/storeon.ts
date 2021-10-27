import { createStoreon } from 'storeon'

import { counter } from './states/counter'
import { CounterStore } from './@types/CounterStore'
import { CounterEvent } from './@types/CounterEvent'

export type Store = CounterStore
export type Event = CounterEvent

export const store = createStoreon<Store, Event>([
  counter,
])
