import { useEffect, useState } from 'react'

export const ItemCard = ( { name, price, suggestion, image } ) => {

    const [src, setSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setSrc(image);  // Si la imagen existe, usa la imagen proporcionada
    };
    img.onerror = () => {
      setSrc('/default-image.png');  // Si no existe, usa la imagen predeterminada
    };
    img.src = image;
  }, [image]);

  return (
    <a href="#" className="group bg-white p-2 rounded-lg ring-1 ring-inset ring-gray-300">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-red xl:aspect-h-8 xl:aspect-w-7">
            <img src={src} alt={name} className="h-60 w-50 object-cover object-center group-hover:opacity-75" />
        </div>
        <div className="flex align-middle">
            <h3 className="text-md text-gray-700">{name}</h3>
        </div>
        <h3 className="text-lg text-gray-700 font-medium">${price}</h3> 
        <p className="text-sm text-gray-500 mt-2">* {suggestion}</p>
    </a>
  )
}
