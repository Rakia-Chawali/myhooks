import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
function AddMovie({newMovie,setNewMovie,setMovies,movies,stars,search,}) {
     const [show, setShow] = useState(false);
     
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    if (e.target.name === "trailer") {
      setNewMovie({
        ...newMovie,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
    console.log(e);
  };
   const handleAdd = (e)=> {
  setNewMovie({
    ...newMovie, [e.target.name]:e.target.value
  });
 
 };

  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        className="size"
        style={{
          fontFamily: "'Arvo', serif",
          fontSize: "18px",
        }}
      >
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="case">
            <label>Title</label>
            <input type="text" name="Title" onChange={handleAdd} />
            <label>Description</label>
            <input type="text" name="description" onChange={handleAdd} />
            <label>URL</label>
            <input type="text" name="img" onChange={handleAdd} />
            <label>Rating</label>
            <input type="number" name="rating" onChange={handleAdd} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
      };
   
  
  

export default AddMovie