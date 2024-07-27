import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import '../styles/list.css'




function List({id,desc,title,user,time,deleteItem,updateItem}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
   <>
   <div className='col-12 col-md-3  mx-auto center'>
   <div className="card text-dark   mb-2 gy-1 "  style={{maxWidth :"30rem"}}>
   <h5 className="card_header" onClick={handleShow}>{title?.length >20 ? title.slice(0,20)+"..." : title}</h5>
  <div className="card-body">
   
    <div className='mb-3' onClick={handleShow}>{desc.length>30 ? desc.slice(0,20)+"..." : desc}</div>
    
    <div className='row  gx-1' >
      <div className="col-8 col-md-8 col-sm-8" onClick={handleShow}>
      <p className="card-text" >{time}</p>
      </div>
      <div className="col-4 col-md-4 col-sm-4  mx-auto d-flex  align-item-center list_btn">
      <span class="material-symbols-outlined update " onClick={()=>{updateItem(id,desc,title)}}>
update
</span>
      <span class="material-symbols-outlined delete" onClick={()=>{deleteItem(id)}}>
      
delete
</span>

      </div>
    </div>
   
   
  </div>
</div>
</div>
{/*--------- Modal--------- */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><textarea>{desc}</textarea></Modal.Body>
        <Modal.Footer>
          
          <button className='btn btn-primary' variant="primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default List