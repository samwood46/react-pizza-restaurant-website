import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css"


function Footer() {
    return(
     <div className="footer">
        <div className = "socialMedia"> <InstagramIcon tabIndex="0" title="Follow us on instagram"/> <FacebookIcon tabIndex="0"/> <LinkedInIcon tabIndex="0"/> </div>
            <p> &copy; pedrospizza.com </p>
        </div>
    );
}

export default Footer;