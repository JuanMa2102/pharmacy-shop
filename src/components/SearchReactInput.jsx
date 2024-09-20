import { useState } from 'react'

export const SearchReactInput = ( { filterProducts } ) => {

  const [inputValue, setinputValue] = useState('');   

  const onInputChange = ({target}) => {
    setinputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setinputValue('')
    filterProducts(inputValue)
  }

  return (
    <div>
    <div className="relative mt-2 rounded-md shadow-sm max-w-2xl mx-auto">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm"></span>
      </div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="search" 
          id="search" 
          className="block w-full rounded-md border-0 py-4 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
          placeholder="¿Que esta buscando?"
          value={inputValue}
          onChange= { onInputChange }
        />
      </form>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <label  className="sr-only"> </label>
        <button className="ml-2 mr-3" onClick={onSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </button>
      </div>
    </div>
    </div>
  )
}
