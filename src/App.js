import React,{Component} from 'react';
import {
  UncontrolledAlert as UAlert,
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {Carrito,ListAllProducts} from './components/elements';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fetchStatus,setHJson} from './utils';
import 'whatwg-fetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(fas,far)

const wait = 5000

class App extends Component{
  constructor(props){
    super(props)
    // this.getValue = this.getValue.bind(this)
    this.state={
      // fail:{}
      nombre:'',
      precio:'',
      existencias:'',
      descripcion:'',
      procedencia:'',
      perecedero:false,
      sending:false,
      localMessage:'',
      apiMsg:''
    }
  }
  componentDidMount=()=>{
    console.log('env',process.env)
  }
  componentDidUpdate=(prevProps,prevState)=>{

  }
  setLocalMessage=(localMessage)=>{
    this.setState({
      localMessage
    })
    setTimeout(()=>{
      this.setState({
        localMessage:false
      })
    },wait)
  }
  getValue=(e)=>{
    const val = e.target.type ==="checkbox"?e.target.checked:e.target.value
    const name = e.target.name
    this.setState({
      [name]:val
    })
  }
  sendData=async(data)=>{
    let config
    config = setHJson(config,'POST',data)
    try {
      const response = await fetch('http://localhost:4000/articles',config).then(fetchStatus).then(r=>r)
      this.setState({
        apiMsg:response.message,
        apiMsgType:response.message?'message':'error',
        sending:false
      })
    } catch(error){

    }
  }
  startSend=(e)=>{
    const {
      nombre,
      precio,
      existencias,
      descripcion,
      procedencia,
      perecedero,
    } = this.state
    e.preventDefault()
    if(existencias<10){
      this.setLocalMessage('No puede haber menos de 10 existencias')
    } else {
      const data = {
        nombre,
        precio,
        existencias,
        descripcion,
        procedencia,
        perecedero,
      }
      this.setState({
        sending:true
      })
      setTimeout(()=>{
        this.sendData(data)
      },3000)
    }

  }
  render(){
    const {
      nombre,
      precio,
      existencias,
      perecedero,
      descripcion,
      procedencia,
      localMessage,
      apiMsgType,
      apiMsg,
      sending
    } = this.state
    return(
      <main className="App bg-light">
        <Container>
          <Row>
            <Col>
              <h3>
                Super Mercado <FontAwesomeIcon className="ml-5" icon="shopping-basket"/>
              </h3>
            </Col>
          </Row>
          <Row className="mt-5 mb-3">
            <Col className="forma_super" xs={{size:12,order:2}} sm={{size:8,order:1}}>
              <Row className="mb-5">
                <Col>
                  <h3>
                    Añadir producto
                  </h3>
                </Col>
              </Row>
              <Form onSubmit={this.startSend} id="addProduct">
               <Row form>
                 <Col md={6}>
                   <FormGroup>
                     <Label for="nombre">Nombre del producto</Label>
                     <Input value={nombre}
                       // onChange={(e)=>this.getValue(e)} es equivalente a
                       onChange={this.getValue}
                       required
                       type="nombre"
                       name="nombre"
                       id="nombre" placeholder="Nombre del producto" />
                   </FormGroup>
                 </Col>
                 <Col md={6}>
                   <FormGroup>
                     <Label for="precio">Precio</Label>
                     <Input
                       value={precio}
                       required
                       onChange={this.getValue}
                       type="number" min={0} max={999} name="precio" id="precio" placeholder="Precio del producto" />
                   </FormGroup>
                 </Col>
               </Row>
                 <FormGroup>
                   <Label for="existencias">Existencias</Label>
                   <Input value={existencias}
                   required
                   min={1} max={999}
                   onChange={this.getValue} type="number" name="existencias" id="existencias" placeholder="Existencias actuales"/>
                 </FormGroup>
               <Row form>
                 <Col>
                   <FormGroup>
                     <Label for="procedencia">Procedencia</Label>
                     <Input onChange={this.getValue}
                           type="select"
                           value={procedencia}
                           name="procedencia"
                           id="procedencia">
                       <option value="">Seleccionar una opción</option>
                       <option value="puebla">Pue</option>
                       <option value="monterrey">Mty</option>
                       <option value="guadalajara">Gdl</option>
                       <option value="morelos">Mor</option>
                     </Input>
                   </FormGroup>
                 </Col>
               </Row>
               <FormGroup>
                 <Label for="descripcion">Descripción</Label>
                 <Input value={descripcion}
                   // onChange={(e)=>this.getValue(e)} es equivalente a
                   onChange={this.getValue}
                   type="textarea"
                   name="descripcion"
                   id="descripcion" placeholder="Descripción del producto" />
               </FormGroup>
               <hr/>
               <FormGroup check>
                 <Label for="perecedero" check>
                   <Input name="perecedero" id="perecedero"
                   onChange={this.getValue} value={perecedero}
                   type="checkbox" /> Perecedero
                 </Label>
               </FormGroup>
               <hr/>
                 {localMessage
                   ? <UAlert>{localMessage}</UAlert>
                   :null
                 }
                 {apiMsg
                   ? <UAlert color={apiMsgType==='message'?'success':'danger'}>{apiMsg}</UAlert>
                   :null
                 }
                 {sending
                   ? <Row className="justify-content-center">
                       <FontAwesomeIcon spin icon="cog"/>
                   </Row>
                   :null
                 }
               <Button form="addProduct" className="mt-5" color="primary" block>Agregar producto</Button>
             </Form>
            </Col>


            <Carrito productInfo={{
              nombre,
              precio,
              existencias,
              perecedero,
              procedencia,
              descripcion
            }}>
              <h3 className="d-flex justify-content-between w-100">
              Producto
              <Badge color="dark" pill>{existencias}</Badge>
              </h3>
            </Carrito>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
                <h3>
                  Productos disponibles
                </h3>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col xs={8}>
              <ListAllProducts/>
            </Col>
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
