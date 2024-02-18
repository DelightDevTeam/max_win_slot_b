import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [auth, setAuth] = useState();
  const auth = localStorage.getItem('authToken');

    useEffect(() => {

    }, [auth]);

  // useEffect(() => {
  //   setAuth(localStorage.getItem('authToken'));
  // }, [auth]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem('authToken');
    navigate("/");
  };
  const modals = [
    { id: 1, title: 'MBBET', value: '0.00' },
    { id: 2, title: 'WBET', value: '0.00' },
    { id: 3, title: 'EVOLUTION GAMING', value: '0.00' },
    { id: 4, title: 'KING855', value: '0.00' },
    { id: 5, title: 'SA GAMING', value: '0.00' },
    { id: 6, title: 'WM CASINO', value: '0.00' },
    { id: 7, title: 'YEEBET', value: '0.00' },
    { id: 1, title: 'DRAGON SOFT', value: '0.00' },
    { id: 2, title: 'EVOPLAY', value: 'maintainance' },
    { id: 3, title: 'GAMEPLAY', value: '0.00' },
    { id: 4, title: 'JOKER', value: '0.00' },
    { id: 5, title: 'MICROGAMING', value: '0.00' },
    { id: 6, title: 'PG SOFT', value: '0.00' },
    { id: 7, title: 'PNG', value: '0.00' },
    { id: 2, title: 'PRAGEMIC', value: 'maintainance' },
    { id: 3, title: 'SIMPLEPLAY', value: '0.00' },
    { id: 4, title: 'DIGMANN', value: '0.00' },
    { id: 5, title: 'ALLBET', value: '0.00' },
    { id: 6, title: 'LIVE22', value: '0.00' },
    { id: 7, title: 'Pinnacle', value: '0.00' },
    { id: 2, title: 'RCB988', value: 'maintainance' },
    { id: 3, title: 'SBO', value: '0.00' },
    { id: 4, title: 'ROYAL SLOT', value: '0.00' },
    { id: 5, title: 'ADVANTPLAY', value: '0.00' },
    { id: 6, title: 'JILI', value: '0.00' },
    { id: 7, title: 'SEXY BACCARAT', value: '0.00' },
  ];
  return (
    <div className='border-bottom py-sm-1 py-3 px-2 px-sm-5 d-flex flex-wrap align-items-center justify-content-between'>
      <NavLink className='text-decoration-none' to={'/'}>
        <h2 className='logo mt-1' style={{ color: 'gold' }}>
          <img src={logo} width={60} alt="" />
        </h2>
      </NavLink>
      <div className='d-flex gap-2 gap-sm-4 align-items-center'>
        <button
          className='bg-transparent btn'
          style={{ outline: 'none' }}
          onClick={handleShow}
        >
          <i className='fa-solid fa-wallet text-light'></i>
        </button>
        {auth && (
          <>
          <NavLink to={'/profile'}>
            <i className='fa-solid fa-user text-light'></i>
          </NavLink>
          <button className='btn' onClick={logout}>
            <i className='fa-solid fa-right-from-bracket text-light'></i>
          </button>
          </>
        )}
        {!auth && (
          <>
          <NavLink to={'/login'}>
            <button
              style={{
                border: '2px solid #FFD700',
                background: 'none',
                fontSize: '13px',
                color: '#FFD700',
                padding: '6px 30px',
              }}
              className='bg-none rounded-2'
            >
              LOGIN
            </button>
          </NavLink>
          </>
        )}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered className='table-dark'>
            <thead>
              <tr>
                <th>ပင်မ ပိုက်ဆံအိတ်</th>
                <th>0.00</th>
              </tr>
            </thead>
            <tbody>
              {modals.map((modal) => (
                <tr key={modal.id}>
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
