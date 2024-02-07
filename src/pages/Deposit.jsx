import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { Accordion } from 'react-bootstrap';

import deposit from './../assets/img/playerInfo/deposit.png';
import transfer from './../assets/img/playerInfo/transfer.png';
import withdraw from './../assets/img/playerInfo/withdraw.png';
import wallet from './../assets/img/footerIcons/wallet.png';

import './../assets/css/deposit.css';
import { useSearchParams } from 'react-router-dom';

const Deposit = () => {
  const [searchParams]=useSearchParams();
  
      const accordionMenu=[
        {id:1,title:'MBBET',value:'0.00'},
        {id:2,title:'WBET',value:'0.00'},
        {id:3,title:'EVOLUTION GAMING',value:'0.00'},
        {id:4,title:'KING855',value:'0.00'},
        {id:5,title:'SA GAMING',value:'0.00'},
        {id:6,title:'WM CASINO',value:'0.00'},
        {id:7,title:'YEEBET',value:'0.00'},
        {id:1,title:'DRAGON SOFT',value:'0.00'},
        {id:2,title:'EVOPLAY',value:'maintainance'},
        {id:3,title:'GAMEPLAY',value:'0.00'},
        {id:4,title:'JOKER',value:'0.00'},
        {id:5,title:'MICROGAMING',value:'0.00'},
        {id:6,title:'PG SOFT',value:'0.00'},
        {id:7,title:'PNG',value:'0.00'},
        {id:2,title:'PRAGEMIC',value:'maintainance'},
        {id:3,title:'SIMPLEPLAY',value:'0.00'},
        {id:4,title:'DIGMANN',value:'0.00'},
        {id:5,title:'ALLBET',value:'0.00'},
        {id:6,title:'LIVE22',value:'0.00'},
        {id:7,title:'Pinnacle',value:'0.00'},
        {id:2,title:'RCB988',value:'maintainance'},
        {id:3,title:'SBO',value:'0.00'},
        {id:4,title:'ROYAL SLOT',value:'0.00'},
        {id:5,title:'ADVANTPLAY',value:'0.00'},
        {id:6,title:'JILI',value:'0.00'},
        {id:7,title:'SEXY BACCARAT',value:'0.00'},
    ];
    const banks=['Yoma Bank','AYA Bank','CB Bank','KBZ Bank','Kpay','Wave Money'];

  return (
    <>

      <div className='ms-md-5 ms-3' style={{color:'#ddd'}}>
        <small>လက်ကျန်ငွေ ( MMK )</small>
        <p className='fw-bold'>0.00</p>
      </div>

      <Tabs
      defaultActiveKey={searchParams.get('tab')|| 'deposit'}
      id="fill-tab-example"
      className="mb-3 flex-nowarp"
      fill
    >
      <Tab eventKey="deposit" className="custom-tab-menu nav-tabs" title={<><img src={deposit} alt="deposit" className="custom-tab-menu-icon" /> <div className='text-white'>ငွေသွင်း</div></>}>
        <div className="custom-tab-content">
          {
            <>
              <Accordion className='mx-1 bg-primary'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <small>လက်ကျန်ငွေ</small>
                  <span>Click to view more</span>
                </Accordion.Header>
                <Accordion.Body className='bg-dark text-white outline-none border-none'>
                  <div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img src={wallet} style={{width:'30px'}} alt="" />
                      <p className='mx-2 fw-bold'>ပင်မ ပိုက်ဆံအိတ်</p>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-wrap'>
                      {accordionMenu.map((menu => (
                        <div className='accordion-div' key={menu.id}>
                        <p className='accordion-title'>{menu.title}</p>
                        <small>{menu.value}</small>
                        </div>
                      ) ))}

                        
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>

              <Form>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput1">
                <h6 className='text-warning mt-4'>ဘဏ်</h6>
                <Form.Select aria-label="Default select example" className='form-control-input'>
                  <option value={''}>Please select Bank</option>
                  {banks.map((bank)=>{
                    return <option value={bank}>{bank}</option>
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput2">
                <Form.Label>ပမာဏ</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="အနည်းဆုံး အများဆုံး = 100 - 1,000,000" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="exampleForm.ControlInput3">
                <Form.Label>အကိုးအကား နံပတ်</Form.Label>
                <Form.Control className='form-control-input' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3 mx-md-5" controlId="formFileSm">
                <Form.Label>ငွေလက်ခံဖြတ်ပိုင်း</Form.Label>
                <Form.Control className='form-control-input' type="file" size="sm" />
              </Form.Group>

              <div className='d-flex justify-content-center'>
              <button className='profile-btn w-75'>တင်သွင်းသည်</button>
              </div>
            </Form>
            </>
          }
        </div>
      </Tab>
      <Tab eventKey="transfer" className="custom-tab-menu" title={<><img src={transfer} alt="Transfer" className="custom-tab-menu-icon"/> <div className='text-white'>transfer</div></>}>
        <div className="custom-tab-content">
          {
            <Form>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput1">
              <Form.Label>ပင်မ ပိုက်ဆံအိတ်</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="0.00" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput2">
              <Form.Label>from</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="ကျေးဇူးပြုရ်ျ  ရွေးချယ်ပါ" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput3">
              <Form.Label>သို့</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="profileForm.ControlInput3">
              <Form.Label>လွဲပြောင်းခြင်း</Form.Label>
              <Form.Control className='form-control-input' type="email" placeholder="" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <button className='profile-btn w-75'>တင်သွင်းသည်</button>
            </div>
          </Form>
          }
        </div>
      </Tab>
      <Tab eventKey="withdraw" className="custom-tab-menu" title={<><img src={withdraw} alt="Withdraw" className="custom-tab-menu-icon"/> <div className='text-white'>withdraw</div></>}>
        <div className="custom-tab-content">
          {
            <Form>
            <Form.Group className="mb-3 mx-5" controlId="withdrawForm.ControlInput1">
              <Form.Label>ဘဏ်</Form.Label>
              <Form.Control className='form-control-input' type="text" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="withdrawForm.ControlInput2">
              <Form.Label>ဘဏ် အကောင့်အမည်</Form.Label>
              <Form.Control className='form-control-input' type="text" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="withdrawForm.ControlInput2">
              <Form.Label>ဘဏ် အကောင့်နံပတ်</Form.Label>
              <Form.Control className='form-control-input' type="text" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="withdrawForm.ControlInput2">
              <Form.Label>ဘဏ်</Form.Label>
              <Form.Control className='form-control-input' type="text" placeholder="" required/>
            </Form.Group>
          </Form>
          }
        </div>
      </Tab>
      <Tab eventKey="history" className="custom-tab-menu" title={<><img src={withdraw} alt="Histpry" className="custom-tab-menu-icon" /> <div className='text-white'>history</div></>} >
        <div className="custom-tab-content">
          {
            <Form>
              <Form.Group className="mb-3 mx-5" controlId="rebateForm.ControlInput1">
              <Form.Label>အစီရင်ခံစာ အမျိုးအစား</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="rebateForm.ControlInput1">
              <Form.Label>From / To</Form.Label>
              <Form.Control className='form-control-input' type="password" placeholder="" required/>
              <div className='d-flex justify-content-center mt-5'>
              <button className='profile-btn w-75'>တင်သွင်းသည်</button>
              </div>
            </Form.Group>
            </Form>
          }
        </div>
      </Tab>
    </Tabs>
    </>
  )
}

export default Deposit
