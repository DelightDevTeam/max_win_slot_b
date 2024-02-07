import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import './../assets/css/profile.css';

import profile from './../assets/img/profile.png';
import Bank from './../assets/img/bank.png';
import Password from './../assets/img/password.png';
// import Rebate from './../assets/img/rebate.png';
// import Voucher from './../assets/img/voucher.png';
import avatar from './../assets/img/image-avatar-01.png';

const Profile = () => {
  const banks=['Yoma Bank','AYA Bank','CB Bank','KBZ Bank','Kpay','Wave Money'];

  return (
    <>

        <div className='d-flex justify-content-center align-items-center'>
          <img src={avatar} alt="" />
          <div className='mx-3'>
            <p className='fw-bold h3' style={{color:'#eee'}}>Angel</p>
            <small style={{color:'#ddd'}}>Welcome to Asia Slot Bet</small>
          </div>
        </div>


      <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" className="custom-tab-menu nav-tabs" title={<><img src={profile} alt="Home" className="custom-tab-menu-icon" /> <div className='text-white'>ကိုယ်ရေးအကျည်း</div></>}>
        <div className="custom-tab-content">
          {
              <Form>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <Form.Label>အသုံးပြုသူ အမည်</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <Form.Label>အမည် အပြည့်အစုံ</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <Form.Label>ဆက်သွယ်ရန် ဖုန်းနံပတ်</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
              <h6 className='text-warning mt-4'>လိင်</h6>
                <Form.Select aria-label="Default select example">
                  <option value={''}>Please select Gender</option>
                  <option value={'male'}>Male</option>
                  <option value={'female'}>Female</option>

                </Form.Select>
               </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <Form.Label >မွေးရက်နေ့</Form.Label>
                <Form.Control className='form-control-input' type="date" placeholder="" />
              </Form.Group>

              <div className='d-flex justify-content-center'>
              <button className='profile-btn w-75'>တင်သွင်းသည်</button>
              </div>
            </Form>
          }
        </div>
      </Tab>
      <Tab eventKey="bank" className="custom-tab-menu" title={<><img src={Bank} alt="Bank" className="custom-tab-menu-icon"/> <div className='text-white'>ဘဏ်အချက်အလက်</div></>}>
        <div className="custom-tab-content">
          {
            <Form>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput1">
            <h6 className='text-warning mt-4'>ဘဏ်</h6>
                <Form.Select aria-label="Default select example">
                  <option value={''}>Please select Bank</option>
                  {banks.map((bank)=>{
                    return <option value={bank}>{bank}</option>
                  })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput2">
              <Form.Label>ဘဏ် အမည်</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput3">
              <Form.Label>ဘဏ် အကောင့်နံပတ်</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <button className='profile-btn w-75'>တင်သွင်းသည်</button>
            </div>
          </Form>
          }
        </div>
      </Tab>
      <Tab eventKey="change-password" className="custom-tab-menu" title={<><img src={Password} alt="Change Password" className="custom-tab-menu-icon"/> <div className='text-white'>စကား၀က်ကို ပြောင်းပါ</div></>}>
        <div className="custom-tab-content">
          {
            <Form>
            <Form.Group className="mb-3 mx-5" controlId="passwordForm.ControlInput1">
              <Form.Label>Current Password</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="passwordForm.ControlInput2">
              <Form.Label>New Password</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="passwordForm.ControlInput3">
              <Form.Label>Comfirm Password</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <button className='profile-btn w-75'>တင်သွင်းသည်</button>
            </div>
          </Form>
          }
        </div>
      </Tab>
      {/* <Tab eventKey="rebate" className="custom-tab-menu" title={<><img src={Rebate} alt="Reabate" className="custom-tab-menu-icon" /> <div className='text-white'>Refferrer Rebate</div></>} >
        <div className="custom-tab-content">
          {
            <Form>
              <Form.Group className="mb-3 mx-5" controlId="rebateForm.ControlInput1">
              <Form.Label>From</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="rebateForm.ControlInput1">
              <Form.Label>To</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
              <div className='d-flex justify-content-center mt-5'>
              <button className='profile-btn w-75'>တင်သွင်းသည်</button>
              </div>
            </Form.Group>
            </Form>
          }
        </div>
      </Tab> */}
      {/* <Tab eventKey="vocher" className="custom-tab-menu" title={<><img src={Voucher} alt="Vocher" className="custom-tab-menu-icon" /> <div className='text-white'>Vocher</div></>} >
        <div className="custom-tab-content">
          {
            <Form>
              <Form.Group className="mb-3 mx-5" controlId="voucherForm.ControlInput1">
              <Form.Label>ဘောက်ချာ</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="ဘောက်ချာကုတ်" required/>
              </Form.Group>
              <div className='d-flex justify-content-center'>
              <button className='profile-btn w-75'>တင်သွင်းသည်</button>
              </div>
            </Form>
          }
        </div>
      </Tab> */}
    </Tabs>
    </>
  )
}

export default Profile
