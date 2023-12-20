import './inputsearch.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsBook } from "react-icons/bs";


const Inputsearch = ({search,setSearch,searchbook}) => {
  
    return (
    <div className='bgimg'>
        <Row>
         <Col></Col> 
         <Col>  
        <div className='pt-5'><h2 className='text-center text-white' style={{}}>Find your book <span style={{marginLeft:"5px"}}><BsBook /></span></h2></div>
        <div className='d-flex justify-content-center'>
            <input
            placeholder='Enter book name...'
            className='w-75 mt-5 searchinput'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onKeyPress={(searchbook)}/>
        </div>
        <div className='quote'>
            <h5 className='text-center text-danger fs-1 text1'>A room without books is like </h5>
            <h5 className='text-center text-danger fs-1 text2'> a body without a soul</h5>
        </div>
        </Col>
        </Row>
    </div>
  )
}

export default Inputsearch