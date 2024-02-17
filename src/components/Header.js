import {auth , googleProvider} from "../config/firebase.js";
import { getAuth, createUserWithEmailAndPassword, doc, signInWithPopup,signOut, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';

export function Header(){
  const[sign,setSign] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function SignUpPopUp(){
      const [registerEmail, setRegisterEmail] = useState(""); 
      const [registerPassword, setRegisterPassword] = useState(""); 
      const [registerFirstName, setRegisterFirstName] = useState(""); 
      const [registerLastName, setRegisterLastName] = useState(""); 
      const [registerDateOfBirth, setRegisterDateOfBirth] = useState(0);
      const createUser = async (email, password, firstName, lastName) => {
        try { 
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser; const userId = user.uid; // Store names in Firestore
          await addDoc(collection(getFirestore(), "users"), {
            uid: userId,
            firstName: firstName,
            lastName: lastName
          }
          );
          console.log("User created and names stored successfully!"); 
        }
        catch (error) {
          console.error("Error creating user:", error); 
        } 
      }
      const signInWithGoogle = async () =>{
        try{ 
          await signInWithPopup(auth,googleProvider)
        }
        catch(err){
          console.error(err);
        }
      }

      return(
        <div id="sign-up-form">
          <div className="mb-3 mt-3">
            <label htmlFor="fname" className="form-label">First name:</label>
              <input type="fname" className="form-control" id="fname" placeholder="Enter first name" name="fname" onChange={(e)=>setRegisterFirstName(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="lname" className="form-label">Last name:</label>
              <input type="lname" className="form-control" id="lname" placeholder="Enter last name" name="lname" onChange={(e)=>setRegisterLastName(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3"> {/*to change to date*/ }
          <div className="mb-3 mt-3">
            <label htmlFor="date-of-birth">Date of Birth:</label>
            <input type="date" className="form-control" id="date-of-birth" name="date_of_birth"onChange={(e)=>{setRegisterDateOfBirth(e.target.value);console.log(registerDateOfBirth)}}/>
          </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="register-email" placeholder="Enter email" name="email" onChange={(e)=>setRegisterEmail(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="register-pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setRegisterPassword(e.target.value)}/>
          </div>
          <div className="sign-btn">
            <button className="btn btn-success" onClick={()=>createUser(registerEmail,registerPassword,registerFirstName,registerLastName)}>Sign up
            </button>
            <button className="btn btn-success" onClick={signInWithGoogle}>Sign Up with google</button>  
          </div>
          </div> 
      ) 
  } 
  function SignInPopUp(){
      const [message,setMessage] = useState("");
      const [loginEmail, setLoginEmail] = useState("");
      const [loginPassword, setLoginPassword] = useState("");
      const signIn = async () =>{
        try{
          await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        }
        catch(err){
          console.log("wrong email password combination, or the account doesn't exist");
          setMessage("wrong email password combination, or the account doesn't exist") }
        };
      const signInWithGoogle = async () =>{
        try{ 
          await signInWithPopup(auth,googleProvider)
        }
        catch(err){
          console.error(err);
        }
      }
      return(
        <div id="sign-in-form">
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="login-email" placeholder="Enter email" name="email" onChange={(e)=>setLoginEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="login-pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setLoginPassword(e.target.value)}/>
          </div>
          <div className="sign-btn">
            <button className="btn btn-success center" onClick={()=>signIn(loginEmail,loginPassword)}>Sign in</button>
            <button className="btn btn-success center" onClick={signInWithGoogle}>Sign in with google</button>
          </div>
            <p>{message}</p>
         </div>
      )
  }
  return( 
    <Navbar expand="lg" className="bg-body-tertiary" id="header">
      <Container fluid>
        <Navbar.Brand href="#">How To University</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <NavLink to="/forum" className="nav-link">Forum</NavLink>
          </Nav>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-info"><i className="fa fa-search"></i></Button>
            </InputGroup>
          
            
            <Container fluid className="sign-btn">
              <Button variant="secondary" onClick={()=>{setSign("up");handleShow()}} type="button" className="btn btn-primary active" size="sm">
                Sign Up
              </Button>
              <Button variant="secondary" onClick={()=>{setSign("in");handleShow()}} type="button" className="btn btn-primary active">Sign In</Button>
            </Container>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-header">{sign=="up"&&"Sign Up"}{sign=="in"&&"Sign In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sign=="up"&&<SignUpPopUp/>}{sign=="in"&&<SignInPopUp/>}
        </Modal.Body>
      </Modal>
    </Navbar>
  )
}