import { Link } from "react-router-dom";
import "./sidebar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './DashboardNav';



export default function Sidebar() {
  return (
    <div style={{position: "relative", top:"200px"}} className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <p>
        Welcome to TechVerse, your one-stop destination for all things tech! Whether you're a gadget enthusiast, 
        a software geek, or a curious mind looking to explore the digital universe, we've got you covered. 
         Join us on this exhilarating journey through the techverse, where innovation and knowledge meet!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FacebookIcon style ={{fill: "#03a9f4", margin:'5px'}}/>
          <InstagramIcon style ={{fill: "#03a9f4" , margin:'5px'}}/>
          <TwitterIcon style ={{fill: "#03a9f4", margin:'5px'}}/>
        </div>
      </div>
    </div>
  );
}