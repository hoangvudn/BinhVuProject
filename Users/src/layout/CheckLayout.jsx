import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../util/history';
import { Row,Col, Button } from 'antd';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import './styles.css';
import {
   getSelectTour,
   createHistoryTour,
   deleteTour,
} from '../redux/actions';
function CheckLayOut({ component: Component, ...props
   
}) {
   const {createHistoryTour, getSelectTour, selectTour, deleteTour} = props;
   useEffect(()=>{
      getSelectTour(
         {
            page:1,
            limit:5
         });
      history.push('/checkout/check-cart');
   },[]);

   const [formValueInfo, setFormValueInfo] = useState({
      email:'',
      name:'',
      phone:'',
      request:'',
   });
   const [formValuePayment, setFormValuePayment] = useState({
      cardUser:'',
      cardNumber:'',
      checkBacking:'Internet Banking'
   });

   const [valueInfo, setValueInfo] = useState({
      email:'',
      name:'',
      phone:'',
      request:'',
   });
   const [valuePayment, setValuePayment] = useState({
      cardUser:'',
      cardNumber:'',
      checkBacking:'Internet Banking'
   });
   const [countModify, setcountModify] = useState(1);

   const [errors, setErrors]= useState({
      email:'',
      password:'',
   });
   const [errorsPayment, setErrorsPayment]= useState({

   });
   useEffect(() => {
      setValueInfo({
         email: formValueInfo.email,
         name: formValueInfo.name,
         phone: formValueInfo.phone,
         request:formValueInfo.request,
      });
   }, [formValueInfo]);
   
   useEffect(() => {
      if(countModify === 2){
         checkValidateInfo()
      }
   }, [formValueInfo.phone!==""&&formValueInfo.name!==""&&formValueInfo.email!==""]);

   useEffect(() => {
      setValuePayment({
         cardUser: formValuePayment.cardUser,
         cardNumber: formValuePayment.cardNumber,
         checkBacking: formValuePayment.checkBacking
      });
   }, [formValuePayment]);

   useEffect(() => {
      if(countModify === 3){
         checkValidatePayment()
      }
   }, [formValuePayment.cardUser !==""&&formValuePayment.cardNumber !==""]);
   //ki???m tra ??i???u ki???n Info
   const checkValidateInfo =()=>{
      let errorsData ={};
         if(formValueInfo.name.length===0 ){
            errorsData={
               ...errorsData,
               name:'B???n ch??a nh???p t??n',
               
            };
         }else{
            errorsData={
               ...errorsData,
               name:'',
            }
         }
   
         if(formValueInfo.email.length===0 ){
            errorsData={
               ...errorsData,
               email:'B???n ch??a nh???p email',
            };
   
         }else{
            errorsData={
               ...errorsData,
               email:'',
            }
         }

         if(formValueInfo.phone.length===0 ){
            errorsData={
               ...errorsData,
               phone:'B???n ch??a nh???p s??? ??i???n tho???i',
               
            };
         }else{
            errorsData={
               ...errorsData,
               phone:'',
            }
         }
            setErrors({
               ...errorsData,
            });
   }
   ////ki???m tra ??i???u ki???n Payment
   const checkValidatePayment =()=>{
      let errorsDataPayment ={};
         if(formValuePayment.cardUser==='' ){
            
            errorsDataPayment={
               ...errorsDataPayment,
               cardUser:'B???n ch??a nh???p t??n ch??? th???',
               
            };
         }else{
            errorsDataPayment={
               ...errorsDataPayment,
               cardUser:'',
            }
         }
   
         if(formValuePayment.cardNumber.length===0 ){
            errorsDataPayment={
               ...errorsDataPayment,
               cardNumber:'B???n ch??a nh???p s??? th???',
            };
   
         }else{
            errorsDataPayment={
               ...errorsDataPayment,
               cardNumber:'',
            }
         }
            setErrorsPayment({
               ...errorsDataPayment,
            });

   }
   // chuy???n ti???p
   const handleModifyNext = () => {
      //??i???u ki???n ????? chuy???n sang trang 2
      if((countModify === 1) && (localStorage.getItem("authData") != null) ){
         setcountModify(countModify + 1);
         history.push('/checkout/check-info');
      }
      // check ??i???u ki???n khi countModfy=2
      if(countModify === 2){
         checkValidateInfo()
      }
      //??i???u ki???n ????? chuy???n sang trang 3
      if((countModify === 2) && errors.email==='' && errors.name===''){
         setcountModify(countModify + 1);
         history.push('/checkout/check-payment');
      }
      // check ??i???u ki???n khi countModfy=3
      if(countModify === 3){
         checkValidatePayment();
      }
      //??i???u ki???n ????? chuy???n sang trang 4   
         if((countModify === 3) && errorsPayment.cardUser==='' && errorsPayment.cardNumber==='' ){
            if (localStorage.getItem("authData") !== null) {
               handleHistory();
               handleDeleteTourComplete();
               setcountModify(countModify + 1);
               history.push('/checkout/check-complete');
            }else{
               alert("B???n ch??a ????ng nh???p t??i kho???n!");
            }
         }
   }
   //function chuy???n ti???p
   const handleModifyPrevious = () => {
      if(countModify === 4){
         setcountModify(countModify - 1);
         history.push('/checkout/check-payment');
      }
      if(countModify === 3){
         setcountModify(countModify - 1);
         history.push('/checkout/check-info');
      }
      if(countModify === 2){
         setcountModify(countModify - 1);
         history.push('/checkout/check-cart');
      }
   }
   const handleHistory = () => {
      selectTour.map((selectTourItem, selectTourIndex) =>{
         createHistoryTour({
            userName: selectTourItem.userName,
            image: selectTourItem.image,
            place: selectTourItem.place,
            name: selectTourItem.name,
            transports: selectTourItem.transports,
            price: selectTourItem.price,
            startDays: selectTourItem.startDays,
            countUsers: selectTourItem.countUsers,
            selectDay: selectTourItem.selectDay,
            day: selectTourItem.day,
            infoUser:valueInfo,
            paymentUser:valuePayment,
            starRating:selectTourItem.starRating
   
         })
      })
      
   }
   //x??a tour ???? ho??n t???t
   const handleDeleteTourComplete = () => {
      selectTour.map((selectTourItem, selectTourIndex) =>{
         deleteTour({
            id: selectTourItem.id
   
         })
      })
    }

  return (
    <Route 
    {...props}
      render={(routerProps) => (
        <>
          <div className="main">
          <Header />
          <Row>
            <Col span={16} style={{margin:"0 auto", paddingTop:"20px"}}>
               <Row style={{ background:"#ccc"}}>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===1) ? "checkout-active":""}`}>
                     <div className="checkout-number">1</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Ki???m tra</div>
                        <div className="checkout-desc">Tours c???a b???n</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===2) ? "checkout-active":""}`}>
                     <div className="checkout-number">2</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Th??ng tin</div>
                        <div className="checkout-desc">C?? nh??n c???a b???n</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===3) ? "checkout-active":""}`}>
                     <div className="checkout-number">3</div>
                     <div className="checkout-info">
                        <div className="checkout-title">X??c nh???n</div>
                        <div className="checkout-desc">D???ch v??? thanh to??n</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===4) ? "checkout-active":""}`}>
                     <div className="checkout-number">4</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Ho??n t???t</div>
                        <div className="checkout-desc" >?????t tour online</div>
                     </div>
                  </div>
                  </Col>
               </Row>

               <Component {...routerProps}
                  setFormValueInfo={setFormValueInfo}
                  errors={errors} 
                  formValueInfo={formValueInfo} 
                  valueInfo={valueInfo}

                  setFormValuePayment={setFormValuePayment}
                  errorsPayment={errorsPayment} 
                  formValuePayment={formValuePayment} 
                  valuePayment={valuePayment}
               />
               {countModify!=4&&<Row style={{background:"#aaa"}}>
                  <Col span={24}>
                     <div className="checkout-toggle-button" >
                           <button 
                           
                           type="button" 
                           onClick={()=>{handleModifyPrevious(); if(countModify===1){history.push("/")}}}
                        >
                              {countModify===1?'?????t th??m tour':'Tr??? v???'}
                        </button>

                        <Button 
                              type="primary" 
                              onClick={()=>{handleModifyNext()}}
                        >
                              {countModify===4?'Xem l???ch s??? Tour':'Ti???p theo'}
                        </Button>
                  </div>
                  </Col>
               </Row>}

            </Col>
          </Row>
          <Footer />
          </div>
        </>
      )}
    />
  );
}
const mapStateToProps = (state) => {
   const { selectTour } = state.selectTourReducer;
   return {
      selectTour,
   }
};
   
const mapDispatchToProps = (dispatch) => {
   return {
      getSelectTour: (params) => dispatch(getSelectTour(params)),
      createHistoryTour: (params) => dispatch(createHistoryTour(params)),
      deleteTour: (params) => dispatch(deleteTour(params)),
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckLayOut);

