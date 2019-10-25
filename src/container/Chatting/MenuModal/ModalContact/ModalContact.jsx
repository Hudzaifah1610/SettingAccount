import React from "react";
import "./ModalContact.css";
import human1 from "../../../../Image/human1.jpeg";
import human2 from "../../../../Image/human2.jpg";
import human3 from "../../../../Image/human3.jpg";
import human4 from "../../../../Image/human4.jpg";
import human5 from "../../../../Image/human5.jpeg";
import human7 from "../../../../Image/human7.jpg";
import human8 from "../../../../Image/human8.jpg";
import human9 from "../../../../Image/human9.jpeg";

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
                  style={{color: "white"}}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <input type="text" placeholder="Search your friend . . ." />
              <div class="modal-body overflow-auto">
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human1} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Hilmy Nashiruddin</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                {/* Percobaan Awal */}
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human2} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Azka Zamrah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human3} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zuhair Al Hawary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human4} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Abu Musa Al Asy'ary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human5} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Reza Syami'</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human7} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zasyifa Hamna</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human8} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Salimah Zuhdah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human9} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Samra' Al Farisy</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human2} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Azka Zamrah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human3} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zuhair Al Hawary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human4} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Abu Musa Al Asy'ary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human5} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Reza Syami'</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human7} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zasyifa Hamna</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human8} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Salimah Zuhdah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human9} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Samra' Al Farisy</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human2} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Azka Zamrah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human3} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zuhair Al Hawary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human4} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Abu Musa Al Asy'ary</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human5} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Reza Syami'</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human7} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Zasyifa Hamna</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human8} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Salimah Zuhdah</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                <div className="row all-desc-friend">
                  <div className="col in-friend">
                    <img src={human9} alt="" className="float-left" />
                    <div className="desc-friend">
                      <h6>Samra' Al Farisy</h6>
                      <p>Online</p>
                    </div>
                  </div>
                </div>
                {/* Percobaan Akhir */}
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
