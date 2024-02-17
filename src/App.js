import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.scss';
import "react-multilevel-sidebar/src/Sidebar.css";
import { NavLink } from 'react-router-dom';
import { Header } from './components/Header'; 
import {SideBar} from './components/SideBar';



function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
    </div>
  );
  
} 

export default App;
