import React,{useState,useEffect} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {setHJson,fetchStatus} from '../../utils';

function ListAllProducts(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    let config
    config = setHJson(config,'GET')
    try{
      const response = await fetch('http://localhost:4000/articles',config).then(fetchStatus).then(r=>r)
      setProducts(response)
    } catch (error){

    }
  }
  return(
    <div>
      {
        products.length
        ?<ListGroup>
          {products.map(({nombre,precio,descripcion,existencias},i)=><ListGroupItem key={i}>
                  <ListGroupItemHeading>
                    {nombre}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {precio}&nbsp;&nbsp; {existencias} <br/>
                    {descripcion}
                  </ListGroupItemText>

            </ListGroupItem>)}
        </ListGroup>
        : <FontAwesomeIcon size="3x" spin icon="compact-disc"/>
      }
    </div>
  )
}

export default ListAllProducts
