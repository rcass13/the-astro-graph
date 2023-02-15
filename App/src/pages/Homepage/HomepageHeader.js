import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/bootstrap.min.css";
import "../../styles/homepage.css";

const HomepageHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCreditsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar
        id="homepageNavbar"
        className="navbar navbar-expand-lg text-dark bg-light"
      >
        <div className="bg-light container-fluid">
          <Navbar.Brand className="bg-light" href="#">
            AstroLOGIC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse className="bg-light" id="navbarNav">
            <Nav className="bg-light mr-auto">
              <Nav.Link className="bg-light text-dark nav-link-expand" href="#">
                Home
              </Nav.Link>
              <Nav.Link
                className="bg-light nav-link-expand"
                onClick={handleCreditsClick}
              >
                Credits
              </Nav.Link>
              <Button
                id="logoutBtn"
                className="btn btn-secondary my-2 my-sm-0"
                href="#"
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-dark bg-light">
                <h5 className="modal-title bg-light">AstroLOGIC Credits</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body ">
                <div>
                  <h2 className="text-dark">Rose Cassidy</h2>
                  <p>Front end development and design</p>
                  <div>
                  <a  href="https://github.com/rcass13" target=".">Github</a>
                  </div>
                  <div>
                  <a  href="https://rcass13.github.io/Module-Two-Challenge-Portfolio/" target=".">Portfolio</a>
                  </div>
                </div>
                <div>
                  <h2 className="text-dark">Joon Ruiz</h2>
                  <p>Back end development</p>
                    </div>
                    <a  href="https://github.com/Aecop" target=".">Github</a>
                  <div>
                  </div>
                    <a  href="jefiebfni" target=".">Portfolio</a>
                  <div>
                </div>
              </div>
              <div className="modal-footer text-dark bg-light">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomepageHeader;

