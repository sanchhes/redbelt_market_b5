import React from 'react';
import {Col,Row,ListGroup,ListGroupItem,Input,InputGroup, InputGroupAddon,Badge,Button,Card} from 'reactstrap';

const Carrito=({children})=>{
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
                      $30
                    </span>
                  </p>
                  <small className="text-muted">
                    Descripción
                  </small>
               </ListGroupItem>

             </ListGroup>
             <Card body className="mt-3 p-2">
               <InputGroup>
                 <Input />
                 <InputGroupAddon addonType="append">
                   <Button>I'm a button</Button>
                 </InputGroupAddon>
                </InputGroup>
             </Card>
          </Col>
        </Row>
      </Col>

  )
}

export default Carrito
