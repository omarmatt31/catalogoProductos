import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { productosData } from "../data/productosPrueba";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { leerProductos } from "../../helpers/queries";

const Administrador = ({setProductos, productos, borrarProducto}) => {

  const [listaProductos, setListaProductos] = useState([]);
  useEffect(()=>{
    obtenerProductos()
  }, [])

  const obtenerProductos = async ()=>{
    const respuesta = await leerProductos()
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      setListaProductos(datos)
    }else{
      console.info('Ocurrio un error al buscar un producto')
    }
  }
    const cargarProductosPrueba = ()=>{
      //cargar datos de prueba
      setProductos(productosData)
      //setProductos()
    }

    return (
        <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={'/administrador/crear'}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button className="btn btn-info ms-2 text-light" onClick={cargarProductosPrueba} >
            <i className="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaProductos.map((producto, indice)=><ItemProducto key={producto._id} producto={producto} fila={indice+1} borrarProducto={borrarProducto} setListaProductos={setListaProductos}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;