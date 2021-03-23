import React from 'react';
import { Formik } from 'formik';
import "./style/tourStyle.scss";
// import React, { useState } from 'react'

// const [user, setUser] = useState({
       
// })
const EditTour = () => { 
   return (
            <Formik initialValues={{ imageUrl: '', place: '', name:'', dayTotal:'', transport:'' }}
                validate={values => {
                const errors = {};
                //--------------------------VALIDATE IMAGE URL---------------------
                if (!values.imageUrl) {
                    errors.imageUrl = 'Required';    
                }
                //--------------------------VALIDATE PLACE---------------------
                if (!values.place) {
                    errors.place = 'Required';
                }
                //----------------------------VALIDATE NAME------------------
                if (!values.name) {
                    errors.name = 'Required';
                }
                 //----------------------------VALIDATE DAYTOTAL------------------
                 if (!values.dayTotal) {
                    errors.dayTotal = 'Required';
                }
                 //----------------------------VALIDATE TRANSPORT------------------
                 if (!values.transport) {
                    errors.transport = 'Required';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }} 
            >
                {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} className="blockEditUsersList">
            <div className="blockEditUsersList__inputItem">
                <input
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user}
                    placeholder="image Url"
                />
                {errors.imageUrl && touched.imageUrl && errors.imageUrl}
                <input
                    type="text"
                    name="place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                     placeholder="place"
                />
                {errors.place && touched.place && errors.place}
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="name"
                />
                {errors.name && touched.name && errors.name}
                <input
                    type="text"
                    name="dayTotal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="day amount"
                />
                {errors.dayTotal && touched.dayTotal && errors.dayTotal}
                <input
                    type="text"
                    name="transport"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="transport"
                />
                {errors.transport && touched.transport && errors.transport}
            </div>  
            <div className="blockEditUsersList__buttonSave_Tour">
                <button type="submit" disabled={isSubmitting}>
                    EDIT
                </button>
            </div>
            </form>
            )}
        </Formik>

        //   <div  className="blockEditTour">
        //       <div className="blockEditTour__inputItem">
        //            <input type="text" placeholder="image"/>
        //            <input type="text" placeholder="place"/>
        //            <input type="text" placeholder="name"/>
        //            <input type="text" placeholder="day"/>
        //            <input type="text" placeholder="transport"/>
        //            <input type="text" placeholder="description"/>
        //       </div>
        //       <div className="blockEditTour__buttonSave"> 
        //           <button>  EDIT  </button>
        //       </div>
        //   </div>
   )
}
export default  EditTour;