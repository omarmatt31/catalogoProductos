import { Container, Row, Form } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState } from "react";

const Inicio = ({productos}) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')

  const handleInputChange = (e)=>{
    setTerminoBusqueda(e.target.value)
  }

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicSearch">
            <Form.Label>Buscar Producto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre de un producto" onChange={handleInputChange} value={terminoBusqueda}></Form.Control>
          </Form.Group>
        </Form>
        <Row>
          {

            productos.map((producto)=> <CardProducto key={producto.id} producto={producto}></CardProducto>)

          }
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
