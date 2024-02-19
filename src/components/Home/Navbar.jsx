import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(false);

  const handleShow = () => setShow(true);

  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(localStorage.getItem("authToken"));
  }, []);

  const handleClose = () => setShow(false);

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem("authToken");
    setAuth(null); // Update auth state to reflect logout
  };
  const modals = [
    { id: 1, title: "MBBET", value: "0.00" },
    { id: 2, title: "WBET", value: "0.00" },
    { id: 3, title: "EVOLUTION GAMING", value: "0.00" },
    { id: 4, title: "KING855", value: "0.00" },
    { id: 5, title: "SA GAMING", value: "0.00" },
    { id: 6, title: "WM CASINO", value: "0.00" },
    { id: 7, title: "YEEBET", value: "0.00" },
    { id: 1, title: "DRAGON SOFT", value: "0.00" },
    { id: 2, title: "EVOPLAY", value: "maintainance" },
    { id: 3, title: "GAMEPLAY", value: "0.00" },
    { id: 4, title: "JOKER", value: "0.00" },
    { id: 5, title: "MICROGAMING", value: "0.00" },
    { id: 6, title: "PG SOFT", value: "0.00" },
    { id: 7, title: "PNG", value: "0.00" },
    { id: 2, title: "PRAGEMIC", value: "maintainance" },
    { id: 3, title: "SIMPLEPLAY", value: "0.00" },
    { id: 4, title: "DIGMANN", value: "0.00" },
    { id: 5, title: "ALLBET", value: "0.00" },
    { id: 6, title: "LIVE22", value: "0.00" },
    { id: 7, title: "Pinnacle", value: "0.00" },
    { id: 2, title: "RCB988", value: "maintainance" },
    { id: 3, title: "SBO", value: "0.00" },
    { id: 4, title: "ROYAL SLOT", value: "0.00" },
    { id: 5, title: "ADVANTPLAY", value: "0.00" },
    { id: 6, title: "JILI", value: "0.00" },
    { id: 7, title: "SEXY BACCARAT", value: "0.00" },
  ];
  return (
    <div className="border-bottom py-sm-1 py-3 px-2 px-sm-5 d-flex flex-wrap align-items-center justify-content-between">
      <NavLink className="text-decoration-none" to={"/"}>
        <h2 className="logo mt-1" style={{ color: "gold" }}>
          Max Win
        </h2>
      </NavLink>
      <div className="d-flex gap-2 gap-sm-4 align-items-center">
        <button
          className="border border-none bg-transparent"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          <i className="fa-solid fa-wallet text-light"></i>
        </button>
        <div className="text-light d-flex align-items-center flex-nowrap">
          <i className="fa-solid fa-life-ring text-light"></i>
          <span className="mx-2 fw-bolder">: 0</span>
        </div>
        <NavLink to={"/profile"}>
          <i className="fa-solid fa-user text-light"></i>
        </NavLink>
        {/* <NavLink to={'/incomeletter'}><i   class="fa-solid fa-comment-dots text-light"></i></NavLink> */}

        {auth ? (
          <button className="btn" onClick={logout}>
            <i class="fa-solid fa-right-from-bracket text-light"></i>
          </button>
        ) : (
          <NavLink to={"/login"}>
            <button
              style={{
                border: "2px solid #FFD700",
                background: "none",
                fontSize: "13px",
                color: "#FFD700",
                padding: "6px 30px",
              }}
              className="bg-none rounded-2"
            >
              LOGIN
            </button>
          </NavLink>
        )}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered className="table-dark">
            <thead>
              <tr>
                <th>Wallet</th>
                <th>K {parseFloat(user?.balance).toLocaleString()}</th>
              </tr>
            </thead>
            <tbody>
              {modals.map((modal) => (
                <tr>
                  <td>{modal.title}</td>
                  <td>{modal.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
