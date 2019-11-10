import React,{Component} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  Badge

} from 'reactstrap';
import {Carrito} from './components/elements'
import 'whatwg-fetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{
  constructor(props){
    super(props)
    // this.getValue = this.getValue.bind(this)
    this.state={
      // fail:{}
      email:'',
      another:'',
      myCheckbox:true,
      city:'',
      casilla:false,
      itemsLength:3
    }
  }
  componentDidUpdate=(prevProps,prevState)=>{
    if(this.state.another!==''&&this.state.myCheckbox===true){
      this.setState({
        myCheckbox:false
      })
    }
    if(this.state.another===''&&this.state.myCheckbox===false){
      this.setState({
        myCheckbox:true
      })
    }

  }
  getValue=(e)=>{
    const val = e.target.type ==="checkbox"?e.target.checked:e.target.value
    const name = e.target.name
    this.setState({
      [name]:val
    })
  }
  render(){
    const {email,another,myCheckbox,city,casilla,itemsLength} = this.state
    return(
      <main className="App bg-light">
        <Container>
          <Row>
            <Col>
              <h3>
                Super Mercado
              </h3>
            </Col>
          </Row>
          <Row className="mt-5 mb-3">
            <Col className="forma_super" xs={{size:12,order:2}} sm={{size:8,order:1}}>
              <Row className="mb-5">
                <Col>
                  <h3>
                    Forma de pago
                  </h3>
                </Col>
              </Row>
              <Form>
               <Row form>
                 <Col md={6}>
                   <FormGroup>
                     <Label for="exampleEmail">Email</Label>
                     <Input value={email}
                       // onChange={(e)=>this.getValue(e)} es equivalente a
                       onChange={this.getValue}
                       type="email"
                       name="email"
                       id="campanita" placeholder="with a placeholder" />
                   </FormGroup>
                 </Col>
                 <Col md={6}>
                   <FormGroup>
                     <Label for="examplePassword">Password</Label>
                     <Input
                       value={another}
                       onChange={this.getValue}
                       type="text" name="another" id="another" placeholder="otro" />
                   </FormGroup>
                 </Col>
               </Row>
                 <FormGroup>
                   <Label for="exampleAddress">Address</Label>
                   <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                 </FormGroup>
               <FormGroup>
                 <Label for="exampleAddress2">Address 2</Label>
                 <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
               </FormGroup>
               <Row form>
                 <Col md={6}>
                   <FormGroup>
                     <Label for="exampleCity">City</Label>
                     <Input onChange={this.getValue} type="select" value={city} name="city" id="exampleCity">
                       <option value="">Seleccionar una opción</option>
                       <option value="puebla">Pue</option>
                       <option value="monterrey">Mty</option>
                       <option value="guadalajara">Gdl</option>
                       <option value="morelos">Mor</option>
                     </Input>
                   </FormGroup>
                 </Col>
                 <Col md={4}>
                   <FormGroup>
                     <Label for="exampleState">State</Label>
                     <Input type="text" name="state" id="exampleState"/>
                   </FormGroup>
                 </Col>
                 <Col md={2}>
                   <FormGroup>
                     <Label for="exampleZip">Zip</Label>
                     <Input type="text" name="zip" id="exampleZip"/>
                   </FormGroup>
                 </Col>
               </Row>
               <hr/>
               <FormGroup check>
                 <Label check>
                   <Input defaultChecked value={myCheckbox} type="checkbox" /> Check me out
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input onChange={this.getValue} value={casilla} name="casilla" type="checkbox" /> Casilla
                 </Label>
               </FormGroup>
               <hr/>
               <Button className="mt-5" color="primary" block>Pagar</Button>
             </Form>
            </Col>


            <Carrito itemsLength={3}>
              <h3 className="d-flex justify-content-between w-100">Carrito <Badge color="dark" pill>{itemsLength}</Badge></h3>
            </Carrito>
          </Row>
        </Container>
        <Container tag={"footer"} className="footer text-center px-2 py-4">
          <Row>
            <Col>

            </Col>
          </Row>
          <Row >
            <Col>
              <a href="/">
                Privacidad
              </a>
              &nbsp;
              &nbsp;
              <a href="/">
                Términos
              </a>
              &nbsp;
              &nbsp;
              <a href="/">
                Soporte
              </a>

            </Col>
            {/* <Col>
              <a href="#">
                Privacidad
              </a>
            </Col>
            <Col>
              <a href="#">
                Términos
              </a>
            </Col>
            <Col>
              <a href="#">
                Soporte
              </a>
            </Col> */}
          </Row>
          <Row>
            <Col className="text-muted">
              © 2016 - {new Date().getFullYear()} Súper Mercado <span role="img" aria-label="genie emoji male">🧞‍♂️</span>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }

}

export default App;
