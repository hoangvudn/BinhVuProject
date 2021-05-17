import React, { useRef,useState } from 'react';
import { Formik } from 'formik'

import  Swal  from "sweetalert2";
import { createNewTourAction } from "../../../../actions/toursActions";
import { useDispatch, useSelecttor } from "react-redux";
import moment from 'moment';
import Numeral from 'numeral';
import DatePicker from "react-datepicker"
import DatePicker1 from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import { PermDeviceInformation } from '@material-ui/icons';
import './style/responsive.scss'
//import { Button } from 'antd';

const NewTour = ({ history }) => {
    const [ image, setImage ] = useState("");
    const [ place, setPlace ] = useState("");
    const [ name, setTourName ] = useState("");
    const [ day, setDayAmount ] = useState("");
    const [ transportsTemp, setTransportsTemp ] = useState("");
    const [ price, setPrice ] = useState("");
    //const [ start, setStartDay ] = useState("");
    const [ apply, setApply ] = useState("");
  
    //const [ startDate, setStartDate ] = useState(new Date());
    const [ startDay1, setStartDay1 ] = useState(null);
    const [ startDays, setStartDays ] = useState([]);
    const [ startDate3, setStartDate3 ] = useState(new Date());
    const [ startDate4, setStartDate4 ] = useState(new Date());
    const [ startDate5, setStartDate5 ] = useState(new Date());

    const [ abouttDay1, setAbouttDay1 ] = useState(null);
    const [ endDate2, setEndDate2 ] = useState(new Date());
    const [ endDate3, setEndDate3 ] = useState(new Date());
    const [ endDate4, setEndDate4 ] = useState(new Date());
    const [ endDate5, setEndDate5 ] = useState(new Date());
    const [ descriptions1, setDescriptions1 ] = useState("");
    const [ descriptions2, setDescriptions2 ] = useState("");
    const [ descriptions3, setDescriptions3 ] = useState("");
    const [ introduction, setIntroduction ] = useState("");
    const [ imageIntroduction, setImageIntroduction ] = useState("");
    const [ titleImage, setTitleImage ] = useState("");
    const [ statusCountry, setStatusCountry ] = useState("1");
    const [ calendarDays, setCalendarDays ] = useState([]);
    const dayRef = useRef("");
    //=========================Convert Tour Image To Base64===========================
            //const [baseImage, setBaseImage] = useState('');
            const uploadImage = async (e) => {
            const file = e.target.files[0];
            const base64 = await convertBase64(file);
            console.log("binary file:",base64);
            setImage(base64);
            //setTransports(base64);
            //console.log("binary file:",file);
            };
        
            const convertBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
        
                fileReader.onload = () => {
                resolve(fileReader.result);
                };
        
                fileReader.onerror = (error) => {
                reject(error);
                };
            });
            }
    //===========================================================================
    //=========================Convert Transports Image To Base64===========================
            //const [baseImage, setBaseImage] = useState('');
            const uploadImageTransports = async (e) => {
                const file = e.target.files[0];
                const base64 = await convertBase64Transports(file);
                console.log("binary file:",base64);
                setTransportsTemp(base64);
                //console.log("binary file:",file);
                };
            
                const convertBase64Transports = (file) => {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
            
                    fileReader.onload = () => {
                    resolve(fileReader.result);
                    };
            
                    fileReader.onerror = (error) => {
                    reject(error);
                    };
                });
                }
        //=========================================================================== 
        //=========================Convert Introduction Image To Base64===========================
            //const [baseImage, setBaseImage] = useState('');
            const uploadImageImageIntroduction = async (e) => {
                const file = e.target.files[0];
                const base64 = await convertBase64ImageIntroduction(file);
                console.log("binary file:",base64);
                setImageIntroduction(base64);
                //console.log("binary file:",file);
                };
            
                const convertBase64ImageIntroduction = (file) => {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
            
                    fileReader.onload = () => {
                    resolve(fileReader.result);
                    };
            
                    fileReader.onerror = (error) => {
                    reject(error);
                    };
                });
                }
        //===========================================================================
    //======================================Check Price==========================
        let priceType =  Numeral(price);
        let priceTypeEdit = priceType.format();
    //============================================================================

    const dispatch = useDispatch();
    const addTour = tour => dispatch(createNewTourAction(tour));
    //===============Set Status Country======================
    const handleChange = e => {
        e.preventDefault();
        setStatusCountry(e.target.value);
    }
    console.log("Value Country:", statusCountry)
    //================================================================
    //=====================DAY RANGE==================================
    const startDay = moment(startDay1).format("DD-MM-YYYY");
    const abouttDay = moment(abouttDay1).format("DD-MM-YYYY");
    //let startDays =[];
    const dayArray = () => {
        setCalendarDays([
            ...calendarDays,{
               startDay,
               abouttDay
            }
        ]);
        setStartDays([
            ...startDays,{
                startDay
            }
        ]);
    }
    const clearDayArray = () => {
        setCalendarDays([]);
    }
    console.log("DAY RANGE:,", calendarDays);
    console.log("START DAYS:,", startDays);
    //================================================================
    const handleSubmit = e => { 
        e.preventDefault();
        //validate
        if ( image.trim() === "" || place.trim() === "" || name.trim() === "" ||
             day.trim() === "" || transportsTemp.trim() === "" || price.trim() === "" || apply.trim() === ""||
             descriptions1.trim() === "" || descriptions2.trim() === "" || descriptions3.trim() === "" || 
             introduction.trim() === "" || imageIntroduction.trim() === "" || titleImage.trim() === ""
        ) {
            alert("Value not null ");
            return;
        }

        if (place.length < 2) {
            alert("Place Must > 2 character");
            return;
        }
        if (name.length < 5) {
            alert("Name must > 5 character");
            return;
        }
        
        //=======================Add Start Day======================
        

        
        // const start2 = moment(startDate2).format("DD-MM-YYYY");
        // const start3 = moment(startDate3).format("DD-MM-YYYY");
        // const start4 = moment(startDate4).format("DD-MM-YYYY");
        // const start5 = moment(startDate5).format("DD-MM-YYYY");
        // const startDays = [];
        // startDays.push(start2,start3,start4,start5);
        // //startDays.sort(function(a, b){return a-b});
        // startDays.sort();
        // //startDays.reverse();
        // const testAboutDay = [];
        // testAboutDay.push({start1,start2},{start3,start4});
        // //==========================================================
        // const start = start1;
        // //=======================Add Start Day and End Day======================
        
        // const end2 = moment(endDate2).format("DD-MM-YYYY");
        // const end3 = moment(endDate3).format("DD-MM-YYYY");
        // const end4 = moment(endDate4).format("DD-MM-YYYY");
        // const end5 = moment(endDate5).format("DD-MM-YYYY");
        // let startDay = start1;
        // let abouttDay = end1;
        // const calendarDays = [];
        // calendarDays.push({startDay,abouttDay});
        // startDay = start2;
        // abouttDay = end2;
        // calendarDays.push({startDay,abouttDay});
        // startDay = start3;
        // abouttDay = end3;
        // calendarDays.push({startDay,abouttDay});
        // startDay = start4;
        // abouttDay = end4;
        // calendarDays.push({startDay,abouttDay});
        // startDay = start5;
        // abouttDay = end5;
        // calendarDays.push({startDay,abouttDay});
         //=========================Add Day To Array==============
       
         //=======================================================
        //startDays.sort(function(a, b){return a-b});
        // startDays.sort();
        // //startDays.reverse();
        // const testAboutDay = [];
        // testAboutDay.push({start1,start2},{start3,start4});
        //==========================================================
        // If it success then Add New Tour 
        const type = Number(statusCountry);
        //setPrice("777777");
        //=============push Descriptions to array============
        const descriptions = [];
        descriptions.push(descriptions1,descriptions2,descriptions3);
        //============push transports to array=====
        //const arr1 = transports.split(",");
        const transports = [];
        transports.push(transportsTemp);
         //console.log("array transports:", arrTransports[1])
        //=========================================
        addTour({ type, image, place, name, day, transports, descriptions,  price, apply, 
                   startDays, calendarDays, introduction, imageIntroduction, titleImage });
        // Swal.fire("Saved", "User Added", "ok");
        // return Tour List page
        history.push(`/toursList`);
        
    };
   
    return (
         <>
    
            <div className="blockNewTour">
                <form onSubmit={handleSubmit}  className="blockNewTour__formNew">
                    <div className="blockNewTour__formNew__title">
                            <h2>ADD TOUR</h2>
                    </div>
         
                    <div className="blockNewTour__formNew__leftItem">
                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__lablelSelectTour" >Select Tour</label>
                            <select value={statusCountry} onChange={handleChange} className="blockNewTour__formNew__selectTour"> 
                                <option value="1">Domestic</option>
                                <option value="2">International</option>
                            </select>
                            
                            {/* <input 
                                className="blockNewTour__formNew__inputImageUrl"
                                type = "text"
                                placeholder = "image url"
                                value = {image}
                                onChange = { e => setImage(e.target.value)}
                            /> */}
                        </div>

                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelImageUrl">Image Url</label>
                            <input 
                                className="blockNewTour__formNew__inputImageUrl"
                                type="file"
                                onChange = {(e) => {
                                uploadImage(e);
                                }}
                                //value={image}
                            />
                            {/* <input 
                                className="blockNewTour__formNew__inputImageUrl"
                                type = "text"
                                placeholder = "image url"
                                value = {image}
                                onChange = { e => setImage(e.target.value)}
                            /> */}
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

                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelApply"> Guest Amount </label>
                            <input 
                                className="blockNewTour__formNew__inputApply"
                                type="text"
                                placeholder = "guest amount"
                                value = {apply}
                                onChange = { e => setApply(e.target.value)}
                            />
                        </div>

                       

                        <div className="blockNewTour__formNew__inputLeftItem">
                            <label className="blockNewTour__formNew__labelIntroduction"> Introduction </label>
                            <input 
                                className="blockNewTour__formNew__inputIntroduction"
                                type="text"
                                placeholder = "introduction"
                                value = {introduction}
                                onChange={ e => setIntroduction(e.target.value)}
                            />
                        </div>
                    </div>

                  {/* /----------------------------------------------------------/ */}

                    <div className="blockNewTour__formNew__middleItem">
                         <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelDescriptions"> Descriptions </label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions1"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions1}
                                onChange={ e => setDescriptions1(e.target.value)}
                            />

                        </div>
                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelDescriptions1"></label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions2"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions2}
                                onChange={ e => setDescriptions2(e.target.value)}
                            />
                        </div>
                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelDescriptions2"></label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions3"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions3}
                                onChange={ e => setDescriptions3(e.target.value)}
                            />
                        </div>
                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelTransports"> Transports </label>
                            <input 
                                className="blockNewTour__formNew__inputTransports"
                                type="file"
                                onChange = {(e) => {
                                uploadImageTransports(e);
                                }}
                                // type="text"
                                // placeholder = "transports"
                                // value = {transports}
                                // onChange={ e => setTransports(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelPrice"> Price </label>
                            <input 
                                className="blockNewTour__formNew__inputPrice"
                                type="text"
                                placeholder = "price"
                                value = {priceTypeEdit}
                                onChange = { e => setPrice(e.target.value)}
                            />
                        </div>

                      
                        
                        {/* <div className="blockNewTour__formNew__inputRightItem">
                            <label className="blockNewTour__formNew__labelStart"> Start Day </label>
                            <input 
                                className="blockNewTour__formNew__inputStart"
                                type="text"
                                placeholder = "start day"
                                value = {start}
                                onChange = { e => setStartDay(e.target.value)}
                            />
                        </div> */}

                       

                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelImageIntroduction"> Image Introduction </label>
                            <input 
                                className="blockNewTour__formNew__inputImageIntroduction"
                                type="file"
                                onChange = {(e) => {
                                uploadImageImageIntroduction(e);
                                }}
                                // type="text"
                                // placeholder = "transports"
                                // value = {transports}
                                // onChange={ e => setTransports(e.target.value)}
                            />
                            {/* <input 
                                className = "blockNewTour__formNew__inputImageIntroduction"
                                type = "text"
                                placeholder = "Image Introduction"
                                value = {imageIntroduction}
                                onChange = { e => setImageIntroduction(e.target.value)}
                            /> */}
                        </div>

                        <div className="blockNewTour__formNew__inputMiddleItem">
                            <label className="blockNewTour__formNew__labelTitleImage"> Image Title </label>
                            <input 
                                className = "blockNewTour__formNew__inputTitleImage"
                                type = "text"
                                placeholder = "image title"
                                value = {titleImage}
                                onChange = { e => setTitleImage(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* =============================Right Item======================================= */}
                    <div className="blockNewTour__formNew__blockDatePicker">
                            <div className="blockNewTour__formNew__blockDatePicker__leftItem">
                                <label>Start Day</label>
                                <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                    {/* <label className="blockNewTour__formNew__labelStart"> Start Day Range </label> */}
                                        <DatePicker selected={startDay1} 
                                                    onChange={date => setStartDay1(date)}
                                                    defaultValue=""
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>

                                <div>
                                        <input 
                                            className = "blockNewTour__inputDayRange"
                                            type = "text"
                                            placeholder = ""
                                            value="welcome to FE"
                                            //onChange = { e => setTitleImage(e.target.value)}
                                        />
                                        <div className="blockNewTour__blockDayList">
                                                {calendarDays.map( list => (
                                                    <span>{list.startDay} ----- {list.abouttDay}<br /></span>
                                                    
                                                ))}
                                        </div>

                                        <div
                                            className="blockNewTour__buttonSave1" onClick={dayArray}
                                        >
                                             ADD DAY
                                        </div>
                                    
                                         <div
                                            className="blockNewTour__buttonSave2" onClick={clearDayArray}
                                        >
                                             Clear
                                         </div>
                                </div>
                                {/* <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                        <DatePicker selected={startDate2} 
                                                    onChange={date => setStartDate2(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>
                            
                                <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                        <DatePicker selected={startDate3} 
                                                    onChange={date => setStartDate3(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>

                                <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                        <DatePicker selected={startDate4} 
                                                    onChange={date => setStartDate4(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>

                                <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                        <DatePicker selected={startDate5} 
                                                    onChange={date => setStartDate5(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div> */}
                            </div>  
                            {/* -----------------------------------------------------------------*/}
                            <div className="blockNewTour__formNew__blockDatePicker__rightItem">
                                <label>End Day</label>
                                <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                    {/* <label className="blockNewTour__formNew__labelStart"> Start Day Range </label> */}
                                        <DatePicker selected={abouttDay1} 
                                                    onChange={date => setAbouttDay1(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>
                                
                                {/* <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                        <DatePicker selected={endDate2} 
                                                    onChange={date => setEndDate2(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>
                            
                                <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                        <DatePicker selected={endDate3} 
                                                    onChange={date => setEndDate3(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>

                                <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                        <DatePicker selected={endDate4} 
                                                    onChange={date => setEndDate4(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div>

                                <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                        <DatePicker selected={endDate5} 
                                                    onChange={date => setEndDate5(date)}
                                                    dateFormat="dd-MM-yyyy"
                                                    minDate={new Date()}
                                                    className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                        // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                        />
                                </div> */}
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