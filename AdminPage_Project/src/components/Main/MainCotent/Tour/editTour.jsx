import React, { useEffect, useRef } from "react";
import { Formik } from 'formik';
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
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
     const startRef = useRef("");
     const applyRef = useRef("");


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
             startRef.current.value.trim() === "" ||
             applyRef.current.value.trim() === "" 
         ) {
            <p>ERROR. Value null</p>;
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
             start: startRef.current.value,
             apply: applyRef.current.value  
         });
         Swal.fire("Saved", "Tour updated", "ok");
         //Return to Homepage
         history.push(`/`);
     };

   return (
      
      <>
        <div class="blockEditTour">
            <h3 className="blockEditTour__title"> EDIT USER</h3>
            <form onSubmit={handleUpdateTour} className="blockEditTour__formEdit">
              <div className="blockEditTour__inputItem">
                  <label>Image Url</label>
                  <input  className="blockEditTour__inputTourName"
                      type="text"
                      defaultValue={tour.image}
                      ref={imageRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Place</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.place}
                      ref={placeRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Name</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.name}
                      ref={nameRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Day</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.day}
                      ref={dayRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Transports</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.transports}
                      ref={transportsRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Price</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.price}
                      ref={priceRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Start</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.start}
                      ref={startRef}
                  />
              </div>

              <div className="blockEditTour__inputItem">
                  <label className="blockEditTour__labelEmail">Apply</label>
                  <input className="blockEditTour__inputEmail"
                      type="text"
                      defaultValue={tour.apply}
                      ref={applyRef}
                  />
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