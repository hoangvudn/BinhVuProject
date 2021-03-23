import React, {useState} from 'react';
// import history from '../../util/history';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import './styles.css';

function GroupCarts({cartData, setCartFixData}) {
   //xóa card
   const handleDeleteGroup=(id)=>{
      let cartTourName = localStorage.getItem('keySelect');
      let cartTourArrayName = cartTourName.split(',');
      const cartTourIndex = cartTourArrayName.findIndex((cartIndex) => parseInt(cartIndex) === parseInt(id));
      cartTourArrayName.splice(cartTourIndex, 1);
      localStorage.removeItem(id);
      localStorage.setItem("keySelect", cartTourArrayName.join());
      if(localStorage.getItem('keySelect') === ''){
         localStorage.removeItem('keySelect');
      }
      setCartFixData(id);
   }

   return (
      <Col span={8}>
         <Row style={{ height:'120px'}}>
            <Col span={24} className="box-mid-card">
               <img src={cartData.image} alt="" className="img-mid-card"/>
               <div className="card-content">
                  <div className="card-mid-name">
                     <p className="card-mid-content-name">{cartData.name}</p>
                  </div>
                  <div className="card-mid-price">
                     <p>{cartData.price}
                     <small>VND</small></p>
                  </div>
               </div>
               <div>
                  <img className="delete-mid-card" src="https://img.icons8.com/fluent-systems-filled/13/000000/delete-sign.png"
                           onClick={() =>handleDeleteGroup(cartData.id)}
                  />
               </div>
            </Col>
         </Row>
   </Col>
   );

}
export default GroupCarts;

