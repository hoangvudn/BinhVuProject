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
import { Height, PermDeviceInformation } from '@material-ui/icons';
import './style/responsive.scss'
import { Width } from 'devextreme-react/range-selector';
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
    const [ titleImage, setImageTitle ] = useState("");
    const [ statusCountry, setStatusCountry ] = useState("1");
    const [ calendarDays, setCalendarDays ] = useState([]);
    const [ show , setShow ] = useState(false);
    
    //===================================
    const placeRef = useRef("");
    const imageRef = useRef("");
    const tourNameRef = useRef("");
    const guestAmountRef = useRef("");
    const dayAmountRef = useRef(""); 
    const introductionRef = useRef("");
    const description1Ref = useRef("");
    const description2Ref = useRef("");
    const description3Ref = useRef("");
    const imageIntroductionRef = useRef("");
    const transportsRef = useRef("");
    const priceRef = useRef("");
    const imageTitleRef = useRef("");
    //=======================Set error to check validation======================
    const [ errorImg, setErrorImg ] = useState("");
    const [ errorPlace, setErrorPlace ] = useState("");
    const [ errorTourName, setErrorTourName ] = useState("");
    const [ errorDayAmount, setErrorDayAmount ] = useState("");
    const [ errorGuestAmount, setErrorGuestAmount ] = useState("");
    const [ errorIntroduction, setErrorIntroduction ] = useState("");
    const [ errorDescription, setErrorDescription ] = useState("");
    const [ errorTransports, setErrorTransports ] = useState("");
    const [ errorPrice, setErrorPrice ] = useState("");
    const [ errorImgIntroduction, setErrorImgIntroduction ] = useState("");
    const [ errorImgTitle, setErrorImgTitle ] = useState("");
    const [ showImg, setShowImg ] = useState(false);
    const [ showImgTransports, setShowImgTransports ] = useState(false);
    const [ showImgIntroduction, setShowImgIntroduction ] = useState(false);
    //==========================================================================
    //=============================Clear Data===================================
    const resetData = () => {
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
        setImageTitle("");
        setStatusCountry("1");
        setCalendarDays([]);  
        setShowImg(false);
        setShowImgTransports(false);
        setShowImgIntroduction(false);
        imageRef.current.value="";
        imageRef.current.focus();
    }
    //=========================Convert Tour Image To Base64===========================
            //const [baseImage, setBaseImage] = useState('');
            const uploadImage = async (e) => {
            const file = e.target.files[0];
            const base64 = await convertBase64(file);
            console.log("binary file:",base64);
            setImage(base64);
            setShowImg(true);
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
                setShowImgTransports(true);
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
                setShowImgIntroduction(true);
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
        //=======================Check Validation=====================
        if (imageRef.current.value === "") {
            setErrorImg("Please choose Image!");
            imageRef.current.focus();
            return;
        } else {
            setErrorImg("");
         
        }
        if (placeRef.current.value === "") {
            setErrorPlace("Value not null!");
            placeRef.current.focus();
            return;
        } else {
            setErrorPlace("");
        }
        if (name === "") {
            setErrorTourName("Value not null!");
            tourNameRef.current.focus();
            return;
        } else {
            setErrorTourName("");
        }
        if (day === "") {
            setErrorDayAmount("Value not null!");
            dayAmountRef.current.focus();
            return;
        } else {
            setErrorDayAmount("");
        }
        if (apply === "") {
            setErrorGuestAmount("Value not null!");
            guestAmountRef.current.focus();
            return;
        } else {
            setErrorGuestAmount("");
        }
        if (introduction === "") {
            setErrorIntroduction("Value not null!");
            introductionRef.current.focus();
            return;
        } else {
            setErrorIntroduction("");
        }
        if (descriptions1 === "" || descriptions2 === "" || descriptions3 === "") {
            setErrorDescription("Value not null!");
            return;
        } else {
            setErrorDescription("");
        }
        if (transportsRef.current.value === "") {
            setErrorTransports("Value not null!");
            transportsRef.current.focus();
            return;
        } else {
            setErrorTransports("");
        }
        if (priceTemp === "") {
            setErrorPrice("Value not null!");
            priceRef.current.focus();
            return;
        } else {
            setErrorPrice("");
        }
        if (imageIntroductionRef.current.value === "") {
            setErrorImgIntroduction("Value not null!");
            imageIntroductionRef.current.focus();
            return;
        } else {
            setErrorImgIntroduction("");
        }
        if ( titleImage === "") {
            setErrorImgTitle("Value not null!");
            imageTitleRef.current.focus();
            return;
        } else {
            setErrorImgTitle("");
        }
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
       
        resetData();
        Swal.fire("Saved", "Tour Added", "OK");
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
                            <div className="blockNewTour__formNew__groupTitle">
                                 <label className="blockNewTour__formNew__label">Image Url</label>
                                 <span className="blockNewTour__formNew__error">{errorImg}</span>
                            </div>
                            <div className="blockNewTour__formNew__groupInput">
                                <input 
                                    className="blockNewTour__formNew__inputImageUrl"
                                    type="file"
                                    onChange = {(e) => {
                                    uploadImage(e);
                                    }}
                                    ref={imageRef}
                                />
                                <img src={image} 
                                     className={!showImg ? "blockNewTour__formNew__imageHidden" 
                                                         : "blockNewTour__formNew__image" }/>
                            </div>
                        </div>
            
                        <div  className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Place </label>
                                <span className="blockNewTour__formNew__error">{errorPlace}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputPlace"
                                type = "text"
                                placeholder = "place"
                                value = {place}
                                onChange = { e => setPlace(e.target.value)}
                                ref={placeRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Tour Name </label>
                                <span className="blockNewTour__formNew__error">{errorTourName}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputTourName"
                                type="text"
                                placeholder = "tour name"
                                value = {name}
                                onChange={ e => setTourName(e.target.value)}
                                ref={tourNameRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Day Amount </label>
                                <span className="blockNewTour__formNew__error">{errorDayAmount}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputDay"
                                type="text"
                                placeholder = "day amount"
                                value = {day}
                                onChange={ e => setDayAmount(e.target.value)}
                                ref={dayAmountRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Guest Amount </label>
                                <span className="blockNewTour__formNew__error">{errorGuestAmount}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputApply"
                                type="text"
                                placeholder = "guest amount"
                                value = {apply}
                                onChange = { e => setApply(e.target.value)}
                                ref={guestAmountRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Introduction </label>
                                <span className="blockNewTour__formNew__error">{errorIntroduction}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputIntroduction"
                                type="text"
                                placeholder = "introduction"
                                value = {introduction}
                                onChange={ e => setIntroduction(e.target.value)}
                                ref={introductionRef}
                            />
                        </div>
             

                  {/* /----------------------------------------------------------/ */}

                
                         <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Description </label>
                                <span className="blockNewTour__formNew__error">{errorDescription}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputDescriptions1"
                                type="text"
                                placeholder = "descriptions"
                                value = {descriptions1}
                                onChange={ e => setDescriptions1(e.target.value)}
                                ref={description1Ref}
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
                                ref={description2Ref}
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
                                ref={description3Ref}
                            />
                        </div>
                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Transports </label>
                                <span className="blockNewTour__formNew__error">{errorTransports}</span>
                            </div>
                            <div className="blockNewTour__formNew__groupInput">
                                <input 
                                    className="blockNewTour__formNew__inputTransports"
                                    type="file"
                                    onChange = {(e) => {
                                    uploadImageTransports(e);
                                    }}
                                    ref={transportsRef}
                                />
                                <img src={transportsTemp} 
                                        className={!showImgTransports ? "blockNewTour__formNew__imageHidden" 
                                                            : "blockNewTour__formNew__image" }/>
                            </div>
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Price </label>
                                <span className="blockNewTour__formNew__error">{errorPrice}</span>
                            </div>
                            <input 
                                className="blockNewTour__formNew__inputPrice"
                                type="text"
                                placeholder = "price"
                                value = {priceTypeEdit}
                                onChange = { e => setPriceTemp(e.target.value)}
                                ref={priceRef}
                            />
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Image Introduction </label>
                                <span className="blockNewTour__formNew__error">{errorImgIntroduction}</span>
                            </div>
                            <div className="blockNewTour__formNew__groupInput">
                                <input 
                                    className="blockNewTour__formNew__inputImageIntroduction"
                                    type="file"
                                    onChange = {(e) => {
                                    uploadImageImageIntroduction(e);
                                    }}
                                    ref={imageIntroductionRef}
                                />
                                <img src={imageIntroduction} 
                                          className={!showImgIntroduction ? "blockNewTour__formNew__imageHidden" 
                                                                    : "blockNewTour__formNew__image" }/>
                            </div>
                        </div>

                        <div className="blockNewTour__formNew__groupItem">
                            <div className="blockNewTour__formNew__groupTitle">
                                <label className="blockNewTour__formNew__label"> Image Title </label>
                                <span className="blockNewTour__formNew__error">{errorImgTitle}</span>
                            </div>
                            <input 
                                className = "blockNewTour__formNew__inputTitleImage"
                                type = "text"
                                placeholder = "image title"
                                value = {titleImage}
                                onChange = { e => setImageTitle(e.target.value)}
                                ref={imageTitleRef}
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
