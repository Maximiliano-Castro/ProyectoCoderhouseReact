import React from "react";
import {Routes,Route} from "react-router-dom";
import {Inicio} from "./Inicio"
import {Productolista} from "./Productos/index";
import {ProductosDetalles} from "./Productos/ProductoDetalles";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/productos" element={<Productolista/>} />
                <Route path="/producto/:id" element={<ProductosDetalles/>} />
            </Routes>
        </section>
    )
}