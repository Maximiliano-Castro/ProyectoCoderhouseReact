import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const params = useParams();

  useEffect(() =>{
    productos.forEach(producto =>{
        console.log(producto.id, parseInt(params.id))
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
      }
    })
  },[params.id, productos])


  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          <p className="nuevo">Nuevo</p>
          
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          <img src={detalle.image} alt={detalle.title} />
          <div className="description">
          <p><b>descripción: </b></p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
          </div>
          
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          description={producto.description}
          id={producto.id}
          />
        
          
        
        })
      }
     
    </div>
    </>
  )
}