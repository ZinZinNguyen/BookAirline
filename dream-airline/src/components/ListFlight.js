import React, { useContext} from 'react'
import "./ListFlight.css";
import OptionFlight from '../components/OptionFlight'
import {FlyContext} from '../context';

const ListFlight =()=>{
  const context = useContext(FlyContext)
  return(
    <div className="list-flight-frame">
      <div className="list-flight">
        <span className="list-flight-head">See Popular Places</span>
        <OptionFlight></OptionFlight>
        <div className="list-flight-list">
          {context.listData.map(fly => {
            return <div className="list-flight-list-row-frame" style={{ backgroundImage : `${fly.img}`,  backgroundSize :"cover"}}>
            <div className="list-flight-list-row list-flight-list-row-child">
              <div className="list-flight-list-row-child-topic">
                <span>From {fly.from}</span>
                <div className="list-flight-list-row-child-topic-icon">
                  <i class="fas fa-plane"></i>
                  <span>{fly.to} City</span>
                </div>
                <div className="list-flight-list-row-child-topic-line"></div>
              </div>
              <div className="list-flight-list-row-child-topic-show">
                <div className="list-flight-list-row-child-topic price">
                  <span>Start from</span>
                  <span>{context.symbol} {(fly.price * context.convert).toFixed(2)}</span>
                </div>
                <i class="fas fa-angle-double-right"></i>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>    
    </div>
  )
}

export default ListFlight;