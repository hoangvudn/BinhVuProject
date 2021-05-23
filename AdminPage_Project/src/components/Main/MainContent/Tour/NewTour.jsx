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
    const [ priceTemp, setPriceTemp ] = useState("");
    //const [ start, setStartDay ] = useState("");
    const [ apply, setApply ] = useState("");
  
    //const [ startDate, setStartDate ] = useState(new Date());
    const [ startDay1, setStartDay1 ] = useState(null);
    const [ startDays, setStartDays ] = useState([]);
    const [ abouttDay1, setAbouttDay1 ] = useState(null);
    const [ start, setStart ] = useState("");
    const [ descriptions1, setDescriptions1 ] = useState("");
    const [ descriptions2, setDescriptions2 ] = useState("");
    const [ descriptions3, setDescriptions3 ] = useState("");
    const [ introduction, setIntroduction ] = useState("");
    const [ imageIntroduction, setImageIntroduction ] = useState("");
    const [ titleImage, setTitleImage ] = useState("");
    const [ statusCountry, setStatusCountry ] = useState("1");
    const [ calendarDays, setCalendarDays ] = useState([]);
    const [show , setShow] = useState(false);
    const placeRef = useRef();
    const imageRef = useRef();
    const imageIntroductionRef = useRef();
    const transportsRef = useRef();
    const startDayRef = useRef("");
    const endDayRef = useRef("");

    const resetData = () => {
        //setImage("");
        //console.log("IMAGE TEERER:", image);
        //imageRef.replaceWith(imageRef.current.value="").clone(true);
        placeRef.current.focus();
        imageRef.current.value="";
        imageIntroductionRef.current.value="";
        transportsRef.current.value="";
        setPlace("");
        setTourName("");
        setDayAmount("");
        setTransportsTemp("");
        setPriceTemp("");
        setApply("");
        setStartDay1(null);
        setAbouttDay1(null);
        setStartDays([]);
        setStart("");
        setDescriptions1("");
        setDescriptions2("");
        setDescriptions3("");
        setIntroduction("");
        setTitleImage("");
        setStatusCountry("1");
        setCalendarDays([]);  
    }
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
        let priceType =  Numeral(priceTemp);
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
    // let start = "";
    const count = 0;
    const dayArray = () => {
        if (startDay1 === null || abouttDay1 === null ) {
            alert("Date range not null! Please input day")
            return;
        }
        if (startDay1 > abouttDay1 ) {
            alert("End day must > Start day ")
            return;
        }
        setCalendarDays([
            ...calendarDays,{
               startDay,
               abouttDay
            }
        ]);
        setStartDays([
            ...startDays,startDay
        ]);
        
        if (calendarDays.length == 0) {
            setStart(startDay);
        }
    }
    const clearDayArray = () => {
        setCalendarDays([]);
        setStartDay1(null);
        setAbouttDay1(null);
        setStartDays([]);
        setStart("");
        setShow(false);
    }
    
    //const startDays = [];
    //startDays.push(startDay1);
    console.log("DAY RANGE:,", calendarDays);
    console.log("START DAYS:,", startDays);
     console.log("START Count:,", start);
    // console.log("START Start:,", start);
    //--------------Show Date Range------------------------
    const showDate = () => {
          setShow(true);
    }
    //-----------------------------------------------------
    //================================================================
    const handleSubmit = e => { 
        e.preventDefault();
        //validate
        if ( image.trim() === "" || place.trim() === "" || name.trim() === "" ||
             day.trim() === "" || transportsTemp.trim() === "" || priceTemp.trim() === "" || apply.trim() === ""||
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
        
        const price1 = Numeral(priceTemp);
        const price = price1.value();
        console.log("PRICE.....:", price)
        addTour({ type, image, place, name, day, transports, descriptions,  price, start, apply, startDays,
                    calendarDays, introduction, imageIntroduction, titleImage });
        Swal.fire("Saved", "User Added", "ok");
        resetData();
        // return Tour List page
        //history.push(`/toursList`);
    };
   
    return (
         <>
    
            <div className="blockNewTour">
                  <div className="blockNewTour__title">
                            <h2>ADD TOUR</h2>
                    </div>
                <form onSubmit={handleSubmit}  className="blockNewTour__formNew">
                  
                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label" >Select Tour</label>
                            <select value={statusCountry} onChange={handleChange} className="blockNewTour__formNew__selectTour"> 
                                <option value="1">Domestic</option>
                                <option value="2">International</option>
                            </select>
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label">Image Url</label>
                            <input 
                                className="blockNewTour__formNew__inputImageUrl"
                                type="file"
                                onChange = {(e) => {
                                uploadImage(e);
                                }}
                                ref={imageRef}
                            />
                        </div>
            
                        <div  className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Place </label>
                            <input 
                                className="blockNewTour__formNew__inputPlace"
                                type = "text"
                                placeholder = "place"
                                value = {place}
                                ref={placeRef}
                                onChange = { e => setPlace(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Tour Name </label>
                            <input 
                                className="blockNewTour__formNew__inputTourName"
                                type="text"
                                placeholder = "tour name"
                                value = {name}
                                onChange={ e => setTourName(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Day Amount </label>
                            <input 
                                className="blockNewTour__formNew__inputDay"
                                type="text"
                                placeholder = "day amount"
                                value = {day}
                                onChange={ e => setDayAmount(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Guest Amount </label>
                            <input 
                                className="blockNewTour__formNew__inputApply"
                                type="text"
                                placeholder = "guest amount"
                                value = {apply}
                                onChange = { e => setApply(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Introduction </label>
                            <input 
                                className="blockNewTour__formNew__inputIntroduction"
                                type="text"
                                placeholder = "introduction"
                                value = {introduction}
                                onChange={ e => setIntroduction(e.target.value)}
                            />
                        </div>
             

                  {/* /----------------------------------------------------------/ */}

                
                         <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Descriptions </label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions1"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions1}
                                onChange={ e => setDescriptions1(e.target.value)}
                            />

                        </div>
                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"></label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions2"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions2}
                                onChange={ e => setDescriptions2(e.target.value)}
                            />
                        </div>
                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"></label>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions3"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions3}
                                onChange={ e => setDescriptions3(e.target.value)}
                            />
                        </div>
                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Transports </label>
                            <input 
                                className="blockNewTour__formNew__inputTransports"
                                type="file"
                                onChange = {(e) => {
                                uploadImageTransports(e);
                                }}
                                ref={transportsRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Price </label>
                            <input 
                                className="blockNewTour__formNew__inputPrice"
                                type="text"
                                placeholder = "price"
                                value = {priceTypeEdit}
                                onChange = { e => setPriceTemp(e.target.value)}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Image Introduction </label>
                            <input 
                                className="blockNewTour__formNew__inputImageIntroduction"
                                type="file"
                                onChange = {(e) => {
                                uploadImageImageIntroduction(e);
                                }}
                                ref={imageIntroductionRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <label className="blockNewTour__formNew__label"> Image Title </label>
                            <input 
                                className = "blockNewTour__formNew__inputTitleImage"
                                type = "text"
                                placeholder = "image title"
                                value = {titleImage}
                                onChange = { e => setTitleImage(e.target.value)}
                            />
                        </div>
               
                    {/* =============================Right Item======================================= */}
                    <div className="blockNewTour__formNew__blockDatePicker">
                         <div className="blockNewTour__formNew__blockDatePicker__groupSelectDate">
                                <div className="blockNewTour__formNew__blockDatePicker__leftItem">
                                    {/* <label>Start Day</label> */}
                                    <div className="blockNewTour__formNew__blockDatePicker__inputLeftItem">
                                        {/* <label className="blockNewTour__formNew__labelStart"> Start Day Range </label> */}
                                            <DatePicker placeholderText="Start Date"
                                                        selected={startDay1} 
                                                        onChange={date => setStartDay1(date)}
                                                        defaultValue=""
                                                        dateFormat="dd-MM-yyyy"
                                                        minDate={new Date()}         
                                                        className="blockNewTour__formNew__blockDatePicker__inputLeftItem--inputDatepicker"
                                                        onInputClick={showDate} 
                                            // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                                            />
                                    </div>
                                </div>  
                                {/* -----------------------------------------------------------------*/}
                                <div className="blockNewTour__formNew__blockDatePicker__rightItem">
                                    {/* //<label>End Day</label> */}
                                    <div className="blockNewTour__formNew__blockDatePicker__inputRightItem">
                                            <DatePicker placeholderText="End Date"
                                                        selected={abouttDay1} 
                                                        onChange={date => setAbouttDay1(date)}
                                                        dateFormat="dd-MM-yyyy"
                                                        //ref={endDayRef}
                                                        minDate={new Date()}
                                                        className="blockNewTour__formNew__blockDatePicker__inputRightItem--inputDatepicker"
                                                        onInputClick={showDate}             
                                            />
                                    </div>
                                </div>
                         </div>
                            

                            <div className={ show ? "blockNewTour__formNew__blockDatePicker__dayRange active" : "blockNewTour__formNew__blockDatePicker__dayRange"} >
                                    <div className="blockNewTour__formNew__blockDatePicker__groupDate">
                                            {calendarDays.map( list => (
                                                <span>{list.startDay} ------- {list.abouttDay}<br /></span>    
                                            ))}
                                    </div>

                                    <div  className="blockNewTour__formNew__blockDatePicker__groupButton">
                                        <div
                                            className="blockNewTour__formNew__blockDatePicker__addButton" onClick={dayArray}
                                        >
                                            <span> ADD DAY </span>  
                                        </div>
                                    
                                         <div
                                            className="blockNewTour__formNew__blockDatePicker__clearButton" onClick={clearDayArray}
                                        >
                                             <span> CLEAR </span> 
                                         </div>
                                    </div>      
                            </div>
                        </div>

                        <button 
                            type="submit"
                           // onClick={resetData}
                            className={show ? "blockNewTour__buttonSave active" : "blockNewTour__buttonSave"}
                        >
                            ADD TOUR
                        </button>
                            {/* <div className="blockNewTour__groupButtonSubmit">
                                

                                    <div 
                                            //type="submit"
                                            className="blockNewTour__buttonReset"
                                            onClick={resetData}                       
                                    >
                                            RESET
                                    </div>
                            </div> */}
                </form>
              
            </div>
         </>
    );
};

export default NewTour;
