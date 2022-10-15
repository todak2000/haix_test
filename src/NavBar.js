import './App.css';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from "react-icons/ai";

function NavBar(props) {
  const {isActive, setIsActive} = props
  return (
    <div className="navbar-container">
      {isActive === "twitter"? <AiFillTwitterCircle color='#00acee' size={35}/> :<FiTwitter color='#ccc' size={25} onClick={()=>{setIsActive("twitter")}}/> } 
      {isActive === "instagram"? <FiInstagram color='#8a3ab9' size={35}/> :<FiInstagram color='#ccc' size={25} onClick={()=>{setIsActive("instagram")}}/> } 
      
    </div>
        
  );
}

export default NavBar;
