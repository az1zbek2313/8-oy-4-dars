import StoreItem from '../../components/StoreItem'
import storeItems from '../../data/item.json'
import {Row, Col} from "react-bootstrap"
function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {
          storeItems && storeItems.map((item, index) => (
            <Col key={item.id}>
              <StoreItem {...item}/>  
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Store