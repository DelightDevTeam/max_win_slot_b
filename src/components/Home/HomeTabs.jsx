import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import sport from '../../assets/img/homeTab/sport.png'
import esport from '../../assets/img/homeTab/esport.png'
import casino from '../../assets/img/homeTab/casino.png'
import slots from '../../assets/img/homeTab/slots.png'
import fish from '../../assets/img/homeTab/fish.png'
import cock from '../../assets/img/homeTab/cock.png'
import horse from '../../assets/img/homeTab/horse.png'
import sport1 from '../../assets/img/homeTab/sport1.png'
import sport2 from '../../assets/img/homeTab/sport2.png'
import sport3 from '../../assets/img/homeTab/sport3.png'
import sport4 from '../../assets/img/homeTab/sport4.png'
import sport5 from '../../assets/img/homeTab/sport5.png'
import sport6 from '../../assets/img/homeTab/sport6.png'
import sport7 from '../../assets/img/homeTab/sport7.png'
import sport8 from '../../assets/img/homeTab/sport8.png'
import sport9 from '../../assets/img/homeTab/sport9.png'
import esport1 from '../../assets/img/homeTab/esport1.png'
import casino1 from '../../assets/img/homeTab/casino1.png'
import casino2 from '../../assets/img/homeTab/casino2.png'
import casino3 from '../../assets/img/homeTab/casino3.png'
import casino4 from '../../assets/img/homeTab/casino4.png'
import casino5 from '../../assets/img/homeTab/casino5.png'
import casino6 from '../../assets/img/homeTab/casino6.png'
import casino7 from '../../assets/img/homeTab/casino7.png'
import casino8 from '../../assets/img/homeTab/casino8.png'
import casino9 from '../../assets/img/homeTab/casino9.png'
import casino10 from '../../assets/img/homeTab/casino10.png'
import slot1 from '../../assets/img/homeTab/slot1.png'
import slot2 from '../../assets/img/homeTab/slot2.png'
import slot3 from '../../assets/img/homeTab/slot3.png'
import slot4 from '../../assets/img/homeTab/slot4.png'
import slot5 from '../../assets/img/homeTab/slot5.png'
import slot6 from '../../assets/img/homeTab/slot6.png'
import slot7 from '../../assets/img/homeTab/slot7.png'
import slot8 from '../../assets/img/homeTab/slot8.png'
import slot9 from '../../assets/img/homeTab/slot9.png'
import slot10 from '../../assets/img/homeTab/slot10.png'
import fish1 from '../../assets/img/homeTab/fish1.png'
import fish2 from '../../assets/img/homeTab/fish2.png'
import fish3 from '../../assets/img/homeTab/fish3.png'
import fish4 from '../../assets/img/homeTab/fish4.png'
import fish5 from '../../assets/img/homeTab/fish5.png'
import fish6 from '../../assets/img/homeTab/fish6.png'
import cock1 from '../../assets/img/homeTab/cock1.png'
import horse1 from '../../assets/img/homeTab/horse1.png'

import sports1 from '../../assets/img/homeTab/asia_gaming.png';
import sports2 from '../../assets/img/homeTab/sport3 (1).png';

function HomeTabs() {
    const tabs=[
        {id:1,img:sport,title:'Sports'},
        // {id:2,img:esport,title:'E-Sports'},
        {id:3,img:casino,title:'Live Casinos'},
        {id:4,img:slots,title:'Slots'},
        {id:5,img:fish,title:'Fish Hunter '}
        // {id:6,img:cock,title:'Cock Fighting'},
        // {id:7,img:horse,title:'Horse Racing'},
    ];
    const contentTabs=[
        {id:1,imgs:[sport2,sports1,sports2,sport5,sport6,sport7,sport8,sport9]},
        // {id:2,imgs:[esport1,esport1,esport1]},
        {id:3,imgs:[casino1,casino2,casino3,casino4,casino5,casino6,casino7,casino8,casino9,casino10]},
        {id:4,imgs:[slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot8,slot9,slot10]},
        {id:5,imgs:[fish1,fish2,fish3,fish4,fish5,fish6]}
        // {id:6,imgs:[cock1,cock1,cock1]},
        // {id:7,imgs:[horse1,horse1,horse1]}
    ]
  return (
    <Tab.Container  id="left-tabs-example" defaultActiveKey={1}>
      <div className='mt-5 d-flex  flex-nowrap '>
        <div >
          <Nav variant="pills" className="flex-column">
              <Nav.Item>
            {tabs.map((tab)=>{
            return <Nav.Link className='border rounded-3 mb-1 py-0 py-sm-1 mb-sm-2 px-0 d-flex flex-column align-items-center ' eventKey={tab.id}>
                <img  className='h-lg-50' src={tab.img} />
                <span className='tabTitle text-center text-light'>{tab.title}</span>
            </Nav.Link>
             })}
          </Nav.Item>
            
          </Nav>
        </div>
        <div >
          <Tab.Content>
            <div className="container">
            {contentTabs.map((item)=>{
                return <Tab.Pane className='row ' eventKey={item.id}>
                    {item.imgs.map((img)=>{
                        return <img className='col-12 col-sm-6 col-lg-4 col-xl-3 mb-4 rounded-5' src={img} />
                    })}
                </Tab.Pane>

            })}
            </div>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
}

export default HomeTabs;