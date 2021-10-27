import { NextPage } from 'next'

import { useStoreon } from '../context'
import { Memo } from '../core/components/memo'


const Page: NextPage = () => {
  const { counter, dispatch } = useStoreon('counter')
  return (
    <div className="pt-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Hello</h1>
      <Memo />
      <p className="text-gray-700 pt-4">{counter}</p>
      <div className="mt-4">
        <button
          type="button"
          onClick={() => dispatch('counter/count')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Count
        </button>
      </div>
    </div>
  )
}

export default Page
