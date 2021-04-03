import React from 'react';
import { Formik } from 'formik'


import { createNewTourAction } from "../../../../actions/toursActions";
import { useDispatch, useSelecttor } from "react-redux";
import { useState } from "react";
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
        // return Tour List page
        history.push(`/toursList`);
    };

    return (
         <>
            <div className="blockNewTour">
                <div className="blockNewTour__headerTitle">
                        <h2>ADD TOUR</h2>
                </div>
                   
                <form onSubmit={handleSubmit}>
                   <div>
                       <label>Image Url</label>
                       <input 
                          className="blockNewTour__inputImageUrl"
                          type = "text"
                          placeholder = "image url"
                          value = {image}
                          onChange = { e => setImage(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Place </label>
                       <input 
                          className="blockNewTour__inputPlace"
                          type = "text"
                          placeholder = "place"
                          value = {place}
                          onChange = { e => setPlace(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Tour Name </label>
                       <input 
                          className="blockNewTour__inputTourName"
                          type="text"
                          placeholder = "tour name"
                          value = {name}
                          onChange={ e => setTourName(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Day Amount </label>
                       <input 
                          className="blockNewTour__inputDayAmount"
                          type="text"
                          placeholder = "day amount"
                          value = {day}
                          onChange={ e => setDayAmount(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Transports </label>
                       <input 
                          className="blockNewTour__inputTransports"
                          type="text"
                          placeholder = "transports"
                          value = {transports}
                          onChange={ e => setTransports(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Price </label>
                       <input 
                          className="blockNewTour__inputPrice"
                          type="text"
                          placeholder = "price"
                          value = {price}
                          onChange = { e => setPrice(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Start Day </label>
                       <input 
                          className="blockNewTour__inputDayStart"
                          type="text"
                          placeholder = "start day"
                          value = {start}
                          onChange = { e => setStartDay(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Apply </label>
                       <input 
                          className="blockNewTour__inputApply"
                          type="text"
                          placeholder = "apply"
                          value = {apply}
                          onChange = { e => setApply(e.target.value)}
                       />
                   </div>

                   <button 
                      type="submit"
                      className="blockNewTour__buttonAddTour"
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
//                 <form onSubmit={handleSubmit} className="blockEditToursList">
//                 <div className="blockEditToursList__inputItem">
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
//                 <div className="blockEditToursList__buttonSave">
//                     <button type="submit" disabled={isSubmitting}>
//                         SAVE
//                     </button>
//                 </div>
//                 </form>
//                 )}

//                 {/* <div  className="blockEditToursList">
//                 <div className="blockEditToursList__inputItem">
//                     <input type="text" placeholder="Tour"/>
//                     <input type="text" placeholder="Pass"/>
//                     <input type="email" placeholder="Email"/>
//                 </div>
//                 <div className="blockEditToursList__buttonSave"> 
//                     <button>  EDIT  </button>
//                 </div>
//                 </div> */}
//         </Formik>
//    )
// }
// export default  NewTour;