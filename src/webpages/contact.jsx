import react from 'react';
import Header from '../Components/Header';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './contact.css';
export default function Contact(){
    return(
        <>
<Header/>
<div className="singlePost">
      <div className="singlePostWrapper">

        <h1 className="singlePostTitle">
          We would love to hear from you!
        </h1>
        <p className="singlePostDesc">
        At TechVerse, we deeply appreciate and prioritize the opinions of our customers. We believe that your 
        feedback is invaluable in shaping our products and services. Whether you have suggestions, concerns, or 
        simply want to share your experiences, we welcome your input with open arms. You can easily reach out to us
         through various channels. Your voice matters to us, and we look forward to hearing from you soon!
          <br />
          <br/> 
          <h1 className="subheading">
          Email
        </h1>
          <br />
         <p className="emailfield"> support@techverse.co <br/> </p>
         <h1 className="subheading">
          Find us on Social Media!
        </h1>
        <div className="Social">
          <FacebookIcon style ={{fill: "#03a9f4", margin:'5px'}}/>
          <InstagramIcon style ={{fill: "#03a9f4" , margin:'5px'}}/>
          <TwitterIcon style ={{fill: "#03a9f4", margin:'5px'}}/>
        </div>
        </p>
      </div>
    </div>
        </>
    )
}

