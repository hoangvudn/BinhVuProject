import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Select } from 'antd';
import './styles.css';
import {
   editTour,
   deleteTour,
} from '../../../redux/actions';
function GroupCheckTour({
   id,
   image,
   place,
   name,
   price,
   transports,
   selectDay,
   countUsers,
   editTour,
   deleteTour,
   startDays,
   day,
   userName,


}) {
   const { Option } = Select;
   const [indexUsers, setIndexUsers] = useState(countUsers);
   const [startDay, setStartDay] = useState(selectDay);

   // useEffect(()=>{
   //       editTour({
   //       id:id,
   //       image:image,
   //       place:place,
   //       name:name,
   //       transports:transports,
   //       selectDay:startDay,
   //       countUsers: indexUsers,
   //       price:price,
   //       startDays:startDays,
   //       day: day,
   //       userName: userName,

   //     });
   // },[indexUsers, startDay]);

   useEffect(() => {
      setStartDay(selectDay)
   }, [selectDay]);

   useEffect(() => {
      setIndexUsers(countUsers)
   }, [countUsers]);

   //vận chuyển
   const renderTransports = () => {
      return transports.map((item, index) => {
         return (
            <img src={item.transport} style={{ marginRight: '8px' }} />
         );
      })
   }
   //select ngày
   const renderOptionDay = () => {
      return startDays.map((itemDay, indexDay) => {
         return (
            <Option value={itemDay.day}>{itemDay.day}</Option>
         )
      })
   }
   //xóa tour
   const handleDeleteTour = () => {
      deleteTour({ id: id });
   }

   return (
      <Row>
         <Col span={24} className="check-box-tour">
            <Row>
               <Col span={24} >
                  <Row className="check-row-tour">
                     <Col span={6}>
                        <img className="check-img-tour" src={image} alt="" />

                     </Col>
                     <Col span={12} >
                        <div className="check-content-tour">
                           <h2>{name}</h2>
                           <div>
                              <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png" />
                              <span className="group-check-day">{day}</span>
                              <span className="group-check-transports">Phương tiện:</span><span>{renderTransports()}</span>
                           </div>
                           <div className="group-check-place">
                              <span>Địa điểm : {place}</span>
                           </div>
                        </div>
                     </Col>
                     <Col span={6}>
                        <div >
                           <span className="group-check-number-users">Số Người: {indexUsers} </span>
                        </div>
                        <img className="group-check-delete-tour"
                           src="https://img.icons8.com/material-sharp/18/000000/delete-sign.png"
                           onClick={() => { handleDeleteTour() }}
                        />
                        <div className="group-check-index-users">

                           <div className="group-check-index">
                              <span
                                 onClick={() => {
                                    setIndexUsers(indexUsers + 1);
                                    editTour({
                                       id:id,
                                       image:image,
                                       place:place,
                                       name:name,
                                       transports:transports,
                                       selectDay:startDay,
                                       countUsers: indexUsers + 1,
                                       price:price,
                                       startDays:startDays,
                                       day: day,
                                       userName: userName,
                                     });
                                 }}
                              >
                                 <img src="https://img.icons8.com/ios-filled/20/000000/plus-math.png" />
                              </span>
                           </div>
                           <div className="group-check-index">
                              <span onClick={() => { if (indexUsers > 2) { setIndexUsers(indexUsers - 1) } }}

                              >
                                 <img src="https://img.icons8.com/android/20/000000/minus-math.png" />
                              </span>
                           </div>
                        </div>
                        <div className="group-check-start-day">
                           <span className="group-check-start">Khởi hành: </span>
                           <Select
                              value={startDay}
                              style={{ width: "115px", border: "1px solid #ccc", height: "34px" }}
                              onChange={(value) => {
                                 setStartDay(value)
                                 editTour({
                                    id: id,
                                    image: image,
                                    place: place,
                                    name: name,
                                    transports: transports,
                                    selectDay: value,
                                    countUsers: indexUsers,
                                    price: price,
                                    startDays: startDays,
                                    day: day,
                                    userName: userName,
                                 });
                                 
                              }}
                           >
                              {renderOptionDay()}
                           </Select>
                        </div>
                        <div className="group-check-price-tour">
                           <span>
                              {parseFloat(indexUsers) * parseFloat(price).toFixed(2)}0.000
                           <small>VND</small>
                           </span>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}
const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
   return {

      editTour: (params) => dispatch(editTour(params)),
      deleteTour: (params) => dispatch(deleteTour(params)),

   };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCheckTour);


