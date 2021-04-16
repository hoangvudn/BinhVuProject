import React, { useEffect, useRef, useState } from "react";
import { Formik } from 'formik';
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";
import {
  editTourAction,
  updateTourAction
} from "../../../../actions/toursActions";

// //Declare match and history of react router, 
// {match to get id} and {history to redirect to homepage after edited successfully} 
const EditTour = ({ match, history }) => { 
     // Create tourNameRef, emailRef
     const imageRef = useRef("");
     const placeRef = useRef("");
     const nameRef = useRef("");
     const dayRef = useRef("");
     const transportsRef = useRef("");
     const priceRef = useRef("");
     //const startRef = useRef("");
     const descriptionsRef = useRef("");
     const applyRef = useRef("");
     const introductionRef = useRef("");
     const imageIntroductionRef = useRef("");
     const  titleImageRef = useRef("");

     const [ startTemp, setStartDate ] = useState(new Date());


     //Create alias to use function dispatch to excute action edit
     const dispatch = useDispatch();
     const tourUpdated = tour => dispatch(updateTourAction(tour));

     //Get the ID of tour will edit
     const { id } = match.params;

     useEffect(() => {
         dispatch(editTourAction(id));
     }, [dispatch, id]);

     // Access to global state
     const tour = useSelector(state => state.toursList.tour);
     const start = moment(startTemp).format("DD-MM-YYYY");
     console.log("tour is:", tour);
     const handleUpdateTour = e => {
         e.preventDefault();
         if (
            imageRef.current.value.trim() === "" ||
            placeRef.current.value.trim() === "" ||
            nameRef.current.value.trim() === "" ||
            dayRef.current.value.trim() === "" ||
            transportsRef.current.value.trim() === "" ||
            priceRef.current.value.trim() === "" ||
            //startRef.current.value.trim() === "" ||
            descriptionsRef.current.value.trim() === "" ||
            applyRef.current.value.trim() === "" ||
            introductionRef.current.value.trim() === "" ||
            imageIntroductionRef.current.value.trim() === "" ||
            titleImageRef.current.value.trim() === "" 
         ) {
            alert("Value not null")
            return;
         }
         tourUpdated({
             id,
             image: imageRef.current.value,
             place: placeRef.current.value,
             name: nameRef.current.value,
             day: dayRef.current.value,
             transports: transportsRef.current.value,
             price: priceRef.current.value,
             start: start,
             descriptions: descriptionsRef.current.value,
             apply: applyRef.current.value,
             introduction: introductionRef.current.value,
             imageIntroduction: imageIntroductionRef.current.value,
             titleImage: titleImageRef.current.value,
         });
         Swal.fire("Saved", "Tour updated", "ok");
         //Return to tour list
         history.push(`/toursList`);
     };

   return (
      
      <>
        <div>
            BACK
        </div>
        <div class="blockEditTour">
            <h3 className="blockEditTour__title"> EDIT TOUR </h3>
            <form onSubmit={handleUpdateTour} className="blockEditTour__formEdit">
                <div className="blockEditTour__formEdit__leftItem">
                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Image Url</label>
                            <input className="blockEditTour__formEdit__inputImageUrl"
                                type="text"
                                defaultValue={tour.image}
                                ref={imageRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Place</label>
                            <input className="blockEditTour__formEdit__inputPlace"
                                type="text"
                                defaultValue={tour.place}
                                ref={placeRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Name</label>
                            <input className="blockEditTour__formEdit__inputTourName"
                                type="text"
                                defaultValue={tour.name}
                                ref={nameRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Day</label>
                            <input className="blockEditTour__formEdit__inputDay"
                                type="text"
                                defaultValue={tour.day}
                                ref={dayRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Descriptions</label>
                            <input className="blockEditTour__formEdit__inputDescriptions"
                                type="text"
                                defaultValue={tour.descriptions}
                                ref={descriptionsRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputLeftItem">
                            <label className="blockEditTour__formEdit__labelLeft">Introduction</label>
                            <input className="blockEditTour__formEdit__inputIntroduction"
                                type="text"
                                defaultValue={tour.introduction}
                                ref={introductionRef}
                            />
                        </div>
                </div>
                {/* --------------------------------------------------------------------- */}
                <div className="blockEditTour__formEdit__rightItem">
                        <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelTransports">Transports</label>
                            <input className="blockEditTour__formEdit__inputTransports"
                                type="text"
                                defaultValue={tour.transports}
                                ref={transportsRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelPrice">Price</label>
                            <input className="blockEditTour__formEdit__inputPrice"
                                type="number"
                                defaultValue={tour.price}
                                ref={priceRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputRightItem">
                               <label className="blockEditTour__formEdit__labelStart"> Start Day </label>
                                <DatePicker selected={startTemp} 
                                            onChange={date => setStartDate(date)}
                                            dateFormat="dd-MM-yyyy"
                                            minDate={new Date()}
                                            className="blockEditTour__formEdit__inputDatepicker"
                                // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                />
                        </div>
                        {/* <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelStart">Start</label>
                            <input className="blockEditTour__formEdit__inputStart"
                                type="text"
                                defaultValue={tour.start}
                                ref={startRef}
                            />
                        </div> */}

                        <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelApply">Apply</label>
                            <input className="blockEditTour__formEdit__inputApply"
                                type="text"
                                defaultValue={tour.apply}
                                ref={applyRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelImageIntroduction">Image Introduction</label>
                            <input className="blockEditTour__formEdit__inputImageIntroduction"
                                type="text"
                                defaultValue={tour. imageIntroduction}
                                ref={imageIntroductionRef}
                            />
                        </div>

                        <div className="blockEditTour__formEdit__inputRightItem">
                            <label className="blockEditTour__formEdit__labelTitleImage">Title Image</label>
                            <input className="blockEditTour__formEdit__inputTitleImage"
                                type="text"
                                defaultValue={tour.titleImage}
                                ref={titleImageRef}
                            />
                        </div>

                </div>
              
              <button type="submit" className="blockEditTour__buttonSave">
                    SAVE
              </button>
              
            </form>
        </div>
      </>
   );
}
export default  EditTour;
    //     <Formik initialValues={{ tour: '', pass: '', email:''}}
    //             validate={values => {
    //             const errors = {};
    //             //--------------------------VALIDATE PASS---------------------
    //             if (!values.tour) {
    //                 errors.tour = 'Required';  
    //             }
    //             //--------------------------VALIDATE PASS---------------------
    //             if (!values.pass) {
    //                 errors.pass = 'Required';   
    //             }
    //             //----------------------------VALIDATE EMAIL------------------
    //             if (!values.email) {
    //                 errors.email = 'Required';
    //             } else if (
    //                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //             ) {
    //                 errors.email = 'Invalid email address';
    //             }
                
    //             return errors;
    //             }}
    //             onSubmit={(values, { setSubmitting }) => {
    //             setTimeout(() => {
    //                 alert(JSON.stringify(values, null, 2));
    //                 setSubmitting(false);
    //             }, 400);
    //             }} 
    //     >
    //              {({
    //      values,
    //      errors,
    //      touched,
    //      handleChange,
    //      handleBlur,
    //      handleSubmit,
    //      isSubmitting,
    //      /* and other goodies */
    //    }) => (
    //      <form onSubmit={handleSubmit} className="blockEditToursList">
    //        <div className="blockEditToursList__inputItem">
    //             <input
    //                 type="text"
    //                 name="tour"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.tour}
    //             />
    //             {errors.tour && touched.tour && errors.tour}
    //             <input
    //                 type="password"
    //                 name="pass"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.pass}
    //             />
    //             {errors.pass && touched.pass && errors.pass}
    //             <input
    //                 type="email"
    //                 name="email"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.email}
    //             />
    //             {errors.email && touched.email && errors.email}
    //        </div>  
    //        <div className="blockEditToursList__buttonSave">
    //             <button type="submit" disabled={isSubmitting}>
    //                 EDIT
    //             </button>
    //        </div>
    //      </form>
    //    )}

    //         {/* <div  className="blockEditToursList">
    //           <div className="blockEditToursList__inputItem">
    //                <input type="text" placeholder="Tour"/>
    //                <input type="text" placeholder="Pass"/>
    //                <input type="email" placeholder="Email"/>
    //           </div>
    //           <div className="blockEditToursList__buttonSave"> 
    //               <button>  EDIT  </button>
    //           </div>
    //         </div> */}
    //     </Formik>
//    )
// }
// // export default  EditToursList;