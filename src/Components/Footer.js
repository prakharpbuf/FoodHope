import React from "react"
import TextArea from "./TextArea"

function Footer() {
    return (
        <div className="contact" id="contact">
            <TextArea
                title="CONTACT"
                className="footer"
                description={["Email: email@domain.com",<br />, "Follow us: social links"]}
            />
            
        </div>
    )
}

export default Footer