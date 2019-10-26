import React from "react";
import "./ModalContact.css";
import human1 from "../../../../Image/human1.jpeg";
// import human2 from "../../../../Image/human2.jpg";
// import human3 from "../../../../Image/human3.jpg";
// import human4 from "../../../../Image/human4.jpg";
// import human5 from "../../../../Image/human5.jpeg";
// import human7 from "../../../../Image/human7.jpg";
// import human8 from "../../../../Image/human8.jpg";
// import human9 from "../../../../Image/human9.jpeg";

class ModalContact extends React.Component {
  state = {};
  render() {
    return (
      <div className="modalcontact">
        <div
          class="modal fade"
          id="contact"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Your Friend
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="">
              <input type="text" placeholder="Search your friend . . ." />
              </form>
              <div class="modal-body overflow-auto">
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human1} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Hilmy Nashiruddin</h6>
                      <p>Online</p>
                      <i className="btn btn-primary fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary bton-close"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContact;
