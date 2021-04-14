import React from 'react';
import { Formik } from 'formik'

import  Swal  from "sweetalert2";
import { createNewTourAction } from "../../../../actions/toursActions";
import { useDispatch, useSelecttor } from "react-redux";
import { useState } from "react";
<<<<<<< HEAD
//import DatePicker from "react-datepicker"

=======
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
>>>>>>> 6fd9696084211fe41123d15101d19eb94611510d
const NewTour = ({ history }) => {
    const [ image, setImage ] = useState("");
    const [ place, setPlace ] = useState("");
    const [ name, setTourName ] = useState("");
    const [ day, setDayAmount ] = useState("");
    const [ transports, setTransports ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ start, setStartDay ] = useState("");
    const [ apply, setApply ] = useState("");


    //Create new tour
    const dispatch = useDispatch();
    const addTour = tour => dispatch(createNewTourAction(tour));

    const handleSubmit = e => {
        e.preventDefault();
        //validate
        if ( image.trim() === "" || place.trim() === "" || name.trim() === "" ||
             day.trim() === "" || transports.trim() === "" || price.trim() === "" ||
             start.trim() === "" || apply.trim() === ""
        ) {
            alert("Value not null ");
            return;
        }
        // If it success then Add New Tour 
        addTour({ image, place, name, day, transports, price, start, apply });
        // Swal.fire("Saved", "User Added", "ok");
        // return Tour List page
        history.push(`/toursList`);
    };

    return (
         <>
    
            <div className="blockNewTour">
       
                <div className="blockNewTour__title">
                        <h2>ADD TOUR</h2>
<<<<<<< HEAD
=======
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)}
                           dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                        />
>>>>>>> 6fd9696084211fe41123d15101d19eb94611510d
                </div>
            
                   
                <form onSubmit={handleSubmit}  className="blockNewTour__formNew">
                    <div className="blockNewTour__formNew__leftItem">
                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelImageUrl">Image Url</label>
                            <input 
                                className="blockNewTour__formNew__inputImageUrl"
                                type = "text"
                                placeholder = "image url"
                                value = {image}
                                onChange = { e => setImage(e.target.value)}
                            />
                        </div>

                        <div  className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelPlace"> Place </label>
                            <input 
                                className="blockNewTour__formNew__inputPlace"
                                type = "text"
                                placeholder = "place"
                                value = {place}
                                onChange = { e => setPlace(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelTourName"> Tour Name </label>
                            <input 
                                className="blockNewTour__formNew__inputTourName"
                                type="text"
                                placeholder = "tour name"
                                value = {name}
                                onChange={ e => setTourName(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelDay"> Day Amount </label>
                            <input 
                                className="blockNewTour__formNew__inputDay"
                                type="text"
                                placeholder = "day amount"
                                value = {day}
                                onChange={ e => setDayAmount(e.target.value)}
                            />
                        </div>
                    </div>

                  {/* /----------------------------------------------------------/ */}

                    <div className="blockNewTour__formNew__rightItem">
                        <div className="blockNewTour__formNew__inputRightItem">
                            <label className="blockNewTour__formNew__labelTransports"> Transports </label>
                            <input 
                                className="blockNewTour__formNew__inputTransports"
                                type="text"
                                placeholder = "transports"
                                value = {transports}
                                onChange={ e => setTransports(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputRightItem">
                            <label className="blockNewTour__formNew__labelPrice"> Price </label>
                            <input 
                                className="blockNewTour__formNew__inputPrice"
                                type="text"
                                placeholder = "price"
                                value = {price}
                                onChange = { e => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputRightItem">
                            <label className="blockNewTour__formNew__labelStart"> Start Day </label>
                            <input 
                                className="blockNewTour__formNew__inputStart"
                                type="text"
                                placeholder = "start day"
                                value = {start}
                                onChange = { e => setStartDay(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputRightItem">
                            <label className="blockNewTour__formNew__labelApply"> Apply </label>
                            <input 
                                className="blockNewTour__formNew__inputApply"
                                type="text"
                                placeholder = "apply"
                                value = {apply}
                                onChange = { e => setApply(e.target.value)}
                            />
                        </div>
                    </div>

                   <button 
                      type="submit"
                      className="blockNewTour__buttonSave"
                   >
                      ADD TOUR
                   </button>
                </form>
              
            </div>
         </>
    );
};

export default NewTour;


// const [tour, setTour] = useState({
       
// })
// const NewTour = () => { 
//    return (
//             <Formik initialValues={{ tour: '', pass: '', email:''}}
//                 validate={values => {
//                 const errors = {};
//                 //--------------------------VALIDATE PASS---------------------
//                 if (!values.tour) {
//                     errors.tour = 'Required';
//                 }
//                 //--------------------------VALIDATE PASS---------------------
//                 if (!values.pass) {
//                     errors.pass = 'Required';
//                 }
//                 //----------------------------VALIDATE EMAIL------------------
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Invalid email address';
//                 }
                
//                 return errors;
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//                 }} 
//             >
//                     {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//                 }) => (
//                 <form onSubmit={handleSubmit} className="blockNewToursList">
//                 <div className="blockNewToursList__inputItem">
//                     <input
//                         type="text"
//                         name="tour"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.tour}
//                     />
//                     {errors.tour && touched.tour && errors.tour}
//                     <input
//                         type="password"
//                         name="pass"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.pass}
//                     />
//                     {errors.pass && touched.pass && errors.pass}
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                     />
//                     {errors.email && touched.email && errors.email}
//                 </div>  
//                 <div className="blockNewToursList__buttonSave">
//                     <button type="submit" disabled={isSubmitting}>
//                         SAVE
//                     </button>
//                 </div>
//                 </form>
//                 )}

//                 {/* <div  className="blockNewToursList">
//                 <div className="blockNewToursList__inputItem">
//                     <input type="text" placeholder="Tour"/>
//                     <input type="text" placeholder="Pass"/>
//                     <input type="email" placeholder="Email"/>
//                 </div>
//                 <div className="blockNewToursList__buttonSave"> 
//                     <button>  EDIT  </button>
//                 </div>
//                 </div> */}
//         </Formik>
//    )
// }
// export default  NewTour;