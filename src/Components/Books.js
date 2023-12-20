import React from 'react'
import './books.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



const Books = ({book}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
 
    
  return (
    
    <div className='cardbg pt-5'>
        <Row className='mx-auto'>
        {  book.map((item) => {
             let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
             let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            return(
            <>    
            <Col lg={3} md={6} sm={12} className="d-flex justify-content-center">
            <Card style={{ width: '16rem', height:'22rem' }} className='my-4 card'>
            <Card.Img variant="top" className="cardimg" src={thumbnail}/>
            <Card.Body className='cardbody'>
                <Card.Title className='cardtitle mt-1'>{item.volumeInfo.title}</Card.Title>
                <Button variant="primary" className='w-100 cardamount amountbtn mt-2' onClick={handleShow}>{amount?<p>&#8377;{amount}</p>:<p>&#8377;1560</p>}</Button>
                <Modal show={show} onHide={handleClose} >
                      <Modal.Header >
                        <Modal.Title><p className='text-center' style={{color:"brown",fontWeight:"700"}}>{item.volumeInfo.title}</p></Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                             <Row>
                                 <Col><div className='text-center'><img src={thumbnail} /></div></Col>
                                 <Col><div className='text-center mt-5'><p className='text-info '><u>Published Date</u></p><p >{item.volumeInfo.publishedDate}</p></div></Col></Row>
                                <Row>
                                 <Col><p className='text-center mt-3 text-info' ><u>Author</u></p><p className='text-center'>{item.volumeInfo.authors}</p></Col>
                                 <Col><p className='text-center mt-3 text-info'><u>Publisher</u></p><p className='text-center'> {item.volumeInfo.publisher}</p></Col></Row>
                                 <p>{item.volumeInfo.description}</p>
                                 <div className='text-center' ><a href={item.volumeInfo.previewLink}><button type="button" className="btn btn-info">More Information</button></a></div>
                    </Modal.Body>
               </Modal>
    

           </Card.Body>
           </Card>
           </Col> </>
           
          )})
       }
       </Row>
       
       
    </div>
    
        
  )
}

export default Books