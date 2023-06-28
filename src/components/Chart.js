import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import data from "../api/data.json";
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsPlusCircleDotted} from 'react-icons/bs'
import {TfiMenuAlt} from 'react-icons/tfi'
import {BsGrid} from 'react-icons/bs'
import Header from "./Header";
import {ToggleButton, ToggleButtonGroup} from '@mui/material';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            {item?.country && <div className="country">
                <span >
                  {item.country}
                </span>
               </div>}
            <div className="card" >
              <div className="image">
                <img
                  src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              
              <div className="card-body"  style={{ border: '1px solid #96D4D4',borderBottom: 'none' }}>
              <div style={{marginLeft: '160px', marginTop: '6px'}}><BiDotsHorizontalRounded /></div>
              <div style={{paddingTop: '20px'}}><h4 >{faker.name.findName()}</h4>
                <p>{faker.name.jobTitle()}</p></div>
                
              </div>
              <div className="card-footer" style={{ border: '1px solid #96D4D4',borderTop: 'none', paddingTop: '70px' }}>
                <span><BsPlusCircleDotted/></span>
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  return (
    <div>
        <div style={{marginLeft: '90px'}}><Header/></div>
        <div style={{display: 'flex', justifyContent: 'end', marginTop: '30px', marginRight: '50px'}}>
            <ToggleButtonGroup
            sx={{ backgroundColor: '#F5F1F1'}}
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            >
                <ToggleButton sx={{padding: '5px', margin: '5px'}} value="1" aria-label="left aligned">
                    <TfiMenuAlt/>
                </ToggleButton>
                <ToggleButton sx={{padding: '5px', margin: '5px'}} value="2" aria-label="left aligned">
                    <BsGrid/>
                </ToggleButton>
                <ToggleButton sx={{padding: '5px', margin: '5px'}} value="3" aria-label="left aligned">
                    <BiDotsHorizontalRounded/>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
        <div className="org-tree">
        <Card data={data} />
        </div>
    </div>
  );
};

export default Chart;
