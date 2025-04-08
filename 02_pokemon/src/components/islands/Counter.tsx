import { Children, useState, type JSX } from 'react'

interface CounterProps {
	initialCount: number
	children?: JSX.Element | JSX.Element[]
}

export function Counter({ initialCount, children }: CounterProps) {
	const [count, setCount] = useState(initialCount)
	const increment = () => {
		setCount(prevCount => prevCount + 1)
	}
	const decrement = () => {
		setCount(prevCount => prevCount - 1)
	}
	return (
		<>
			{children}
			<div className='flex flex-row items-center flex-start'>
				<button className='bg-blue-500 rounded px-4 py-2 btn-primary cursor-pointer' onClick={increment}>
					+
				</button>
				<p className='m-2 px-4'>Count: {count}</p>
				<button className='bg-blue-500 rounded px-4 py-2 btn-primary cursor-pointer' onClick={decrement}>
					-
				</button>
			</div>
		</>
	)
}
