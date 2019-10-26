import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="row ">
        <div className="col">
          <div className="row m-auto">
            <p>Contacts</p>
          </div>
          <div className="row all-icon-contact">
            <div className="col-lg-4">
              <div className="icon-contact">
                <i className="fa fa-map-marker"></i>
                <h6>60 Paya Lebar Ro 45</h6>
                <h6>60 Paya Lebar Roa 45, Indonesian</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon-contact">
                <i className="fa fa-phone"></i>
                {/* <h6>60 Paya Lebar Roa SG, Singapore</h6> */}
                <h6>+65 93901336</h6>
                <h6>+65 93901337</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="icon-contact">
                <i className="fa fa-envelope"></i>
                {/* <h6>60 Paya Lebar Roa SG, Singapore</h6> */}
                <h6>Yourmail@gmail.com</h6>
                <h6>backpiper.com@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
