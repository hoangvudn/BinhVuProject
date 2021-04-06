import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
   const [startDay, setStartDay] = useState(new Date(selectDay));
   // const [startDay, setStartDay] = useState(tourDetail.start);
   const [startSelectDate, setStartSelectDate] = useState(new Date(selectDay));
   
   const displays = startDays.map((startDayItem)=>{
      return parseInt(startDayItem.slice(0,2));
   })
   console.log("plays----plays--plays: ",displays);

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
      setStartSelectDate(new Date(selectDay))
   }, [selectDay]);

   useEffect(() => {
      setIndexUsers(countUsers)
   }, [countUsers]);

   //vận chuyển
   const renderTransports = () => {
      return transports.map((item, index) => {
         return (
            <img src={item} style={{ marginRight: '8px' }} />
         );
      })
   }
   //select ngày
   const renderOptionDay = () => {
      return startDays.map((itemDay, indexDay) => {
         return (
            <Option value={itemDay}>{itemDay}</Option>
         )
      })
   }
   //xóa tour
   const handleDeleteTour = () => {
      deleteTour({ id: id });
   }
   //datePickerTour
   function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
   const displaysDay = (day) =>{
      
         // const displays = [19, 20, 22, 28, 29];
         
         return displays.every((display, item)=>{
            return display !== day;
         })
      }
   const datePickerTour = () => {
          
      const isWeekday = date => {
         const days = new Date(date);
         const day = days.getDate();
         return !displaysDay(day)
      };
   return (
      <DatePicker
         selected={startSelectDate}
         onChange={date => {setStartSelectDate(date)
            editTour({
               id: id,
               image: image,
               place: place,
               name: name,
               transports: transports,
               selectDay: date,
               countUsers: indexUsers,
               price: (price*indexUsers).toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
               }),
               startDays: startDays,
               day: day,
               userName: userName,
            });
         }} 
         filterDate={isWeekday}
         dateFormat = 'dd/MM/yyyy'
         maxDate={addDays(new Date(), 60)}
         minDate={addDays(new Date(), 1)}
      />
  );
   }

   return (
      <Row>
         <Col span={24} className="check-box-tour check-box">
            <Row>
               <Col span={24} >
                  <Row className="check-row-tour check-box-row">
                     <Col span={6}>
                        <img className="check-img-tour check-box-rowimg" src={image} alt="" />

                     </Col>
                     <Col span={12} >
                        <div className="check-content-tour check-box-row">
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
                                       selectDay:startSelectDate,
                                       countUsers: indexUsers + 1,
                                       price:(price*(indexUsers + 1)).toLocaleString('vi-VN', {
                                          style: 'currency',
                                          currency: 'VND'
                                       }),
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
                           {/* <Select
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
                           </Select> */}

                           <div>
                              {datePickerTour()}
                           </div>
                        </div>
                        <div className="group-check-price-tour">
                           <span>
                              {(price*indexUsers).toLocaleString('vi-VN', {
                                                                                 style: 'currency',
                                                                                 currency: 'VND'
                                                                              })}
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


