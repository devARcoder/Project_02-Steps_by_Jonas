import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    const date = new Date()
    date.setDate(date.getDate() + count)

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="bg-gray-100 px-12 py-6 shadow-lg rounded-lg">
    <div className=''>
        <button onClick={() => setStep((c) =>c-1)} className="border border-gray-600 px-3 py-1 rounded-md shadow shadow-xl hover:bg-gray-200 hover:text-gray-500 hover:border hover:border-gray-800 hover:rounded-full">-</button>
        <span className='mx-6 text-xl font-bold'>Steps: {step}</span>
        <button onClick={() => setStep((c) =>c+1)} className="border border-gray-600 px-3 py-1 rounded-md shadow shadow-xl hover:bg-gray-200 hover:text-gray-500 hover:border hover:border-gray-800 hover:rounded-full">+</button>
    </div>
    <div className='my-4'>
        <button onClick={() => setCount((c) =>c-step)} className="border border-gray-600 px-3 py-1 rounded-md shadow shadow-xl hover:bg-gray-200 hover:text-gray-500 hover:border hover:border-gray-800 hover:rounded-full">-</button>
        <span className='mx-6 text-xl font-bold'>Count: {count}</span>
        <button onClick={() => setCount((c) =>c+step)} className="border border-gray-600 px-3 py-1 rounded-md shadow shadow-xl hover:bg-gray-200 hover:text-gray-500 hover:border hover:border-gray-800 hover:rounded-full -ml-1.5">+</button>
    </div>
    <hr/>
    <p className='text-center text-lg text-gray-500 font-semibold shadow shadow-gray-500 px-3 py-2 bg-gray-50'>
        <span>
            {count === 0 ? "Today is " : count > 0 ? `${count} days from today is `: `${Math.abs(count)} days ago was `}
        </span>
        <span>
            {date.toDateString()}
        </span>
    </p>
    <hr/>
    </div>
    </div>
    </>
  )
}

export default Counter
