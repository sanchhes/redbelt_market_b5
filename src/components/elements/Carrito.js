import React from 'react';
import {
  // Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  // Input,
  // InputGroup,
  // InputGroupAddon,
  // Button,
  // Card
 } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Carrito=({children,productInfo:{nombre,precio,descripcion,existencias,perecedero}})=>{
  return (
      <Col className="carrito_super mb-5" xs={{size:12,order:1}} sm={{size:4,order:2}}>
        <Row className="mb-5">
          <Col >
            {children}
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="w-100">
               <ListGroupItem>
                  <p className="d-flex justify-content-between">
                    <b>
                      Nombre producto
                    </b>
                    <span className="text-muted font-weight-bold">
                      {nombre}
                    </span>
                  </p>
               </ListGroupItem>
               <ListGroupItem>
                  <p className="d-flex justify-content-between">
                    <b>
                      Precio
                    </b>
                    <span className="text-muted font-weight-bold">
                      {precio}
                    </span>
                  </p>
               </ListGroupItem>
               <ListGroupItem>
                    <Row>
                      <Col>
                        <b>
                          Descripción
                        </b>
                      </Col>
                    </Row>
                  <Row>
                    <Col>
                      <p className="text-break">
                        {descripcion}
                      </p>
                    </Col>
                  </Row>
               </ListGroupItem>
               <ListGroupItem>
                  <p className="d-flex justify-content-between">
                    <b>
                      Existencias
                    </b>
                    <span className="text-muted font-weight-bold">
                      {existencias}
                    </span>
                  </p>
               </ListGroupItem>
               <ListGroupItem>
                 <p className="d-flex justify-content-between">
                   <b>
                     Perecedero
                   </b>
                   <span className="text-muted font-weight-bold">
                      {perecedero
                        ?
                        <FontAwesomeIcon icon={['fas','square']}/>
                        // <span>&check;</span>
                        :
                        <FontAwesomeIcon icon={['far','square']}/>
                        // <span>&times;</span>
                      }
                   </span>
                 </p>
               </ListGroupItem>

             </ListGroup>
             {/* <Card body className="mt-3 p-2">
               <InputGroup>
                 <Input />
                 <InputGroupAddon addonType="append">
                   <Button>I'm a button</Button>
                 </InputGroupAddon>
                </InputGroup>
             </Card> */}
          </Col>
        </Row>
      </Col>

  )
}

export default Carrito
