import { useState } from 'react'
import { SearchReactInput } from './SearchReactInput'
import { ItemCard } from './ItemCard'

export const ListProductos = ({ medicines }) => {

    const [productos, setproductos] = useState(medicines)

    const filterProducts = (inputSearch) => {
        
        setproductos(medicines.filter((product) => product.data.name.toLowerCase().includes(inputSearch.toLowerCase())))
    }


  return (
    <>
    <SearchReactInput filterProducts={filterProducts} />
    <div className="bg-transparent">
        <div className="mx-auto max-w-2xl px-0 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-black font-bold text-3xl mb-4">Medicamentos</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">       
                {
                    productos.map( ({ data, id }) => (
                        <ItemCard
                            key={id}
                            name={data.name}
                            price={data.price}
                            image={data.image}
                            suggestion={data.suggestion}
                        />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}
