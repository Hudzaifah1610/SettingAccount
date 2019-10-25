import React, { Component } from "react";
import "./ModalSetting.css";

class ModalSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="modalsett">
        <div
          class="modal fade"
          id="modalsetting"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Setting Your Account
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
              <div class="modal-body form-edit">
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Name </label>
                    <input
                      value="Admin"
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Email </label>
                    <input
                      value="Admin@gmail.com"
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">No.Telp </label>
                    <input
                      value="+62 878345678991"
                      className="input-form shadow-none"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Password </label>
                    <i className="fa fa-eye"></i>
                    <input
                      className="input-form shadow-none"
                      value="Argo-wilis"
                      type="password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="input">Confirm's </label>
                    <i className="fa fa-eye"></i>
                    <input
                      className="input-form shadow-none"
                      value="Argo-wilis"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary bton-cancel shadow-none"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-secondary bton-close shadow-none"
                >
                  Edit
                </button>
                <script src=""></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSetting;
