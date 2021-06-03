import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Numeral from "numeral";
import DatePicker from "react-datepicker";
import {
  editTourAction,
  updateTourAction,
} from "../../../../actions/toursActions";
import { nullFormat } from "numeral";

// //Declare match and history of react router,
// {match to get id} and {history to redirect to homepage after edited successfully}
const EditTour = ({ match, history }) => {
  // Create tourNameRef, emailRef
  const imageRef = useRef("");
  //const transportsRef = useRef("");
 //const imageIntroductionRef = useRef("");
  const placeRef = useRef("");
  const nameRef = useRef("");
  const dayRef = useRef("");
  const transportsRef = useRef([]);
  const priceRef = useRef("");
  //const startRef = useRef("");

  const descriptionsRef0 = useRef("");
  const descriptionsRef1 = useRef("");
  const descriptionsRef2 = useRef("");
  const applyRef = useRef("");
  const introductionRef = useRef("");
  const imageIntroductionRef = useRef("");
  const titleImageRef = useRef("");

  const [startTemp, setStartDate] = useState(new Date());
  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");
  const [transportsTemp, setTransportsTemp] = useState("");
  const [imageIntroduction, setImageIntroduction] = useState("");
  const [statusCountry, setStatusCountry] = useState("1");
  const [startDay1, setStartDay1] = useState("");
  const [startDay2, setStartDay2] = useState("");
  const [startDays, setStartDays] = useState([]);
  const [abouttDay1, setAbouttDay1] = useState("");
  const [abouttDay2, setAbouttDay2] = useState("");
  const [calendarDays, setCalendarDays] = useState([]);
  const [place, setPlace] = useState("");
  const [name, setTourName] = useState("");
  const [day, setDayAmount] = useState("");
  const [descriptions0, setDescriptions0] = useState("");
  const [descriptions1, setDescriptions1] = useState("");
  const [descriptions2, setDescriptions2] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [apply, setApply] = useState();
  const [priceTemp, setPriceTemp] = useState("");
  const [titleImage, setTitleImage] = useState("");

  const [listDay, setListDay] = useState([]);
  const [showImage, setShowImage] = useState(true);
  const [showTransports, setShowTransports] = useState(true);
  const [showImgIntroduction, setShowImgIntroduction] = useState(true);
  //===================================
  const showDate = () => {
    setShow(true);
  };
  //===================================
  //===============Set Status Country======================
  const handleChange = (e) => {
    e.preventDefault();
    setStatusCountry(e.target.value);
  };
  //================================================================

  //=========================Convert Tour Image To Base64===========================
  //const [baseImage, setBaseImage] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log("binary file:", base64);
    setImage(base64);
    setShowImage(false);
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
  };
  //===========================================================================
  //=========================Convert Transports Image To Base64===========================
  //const [baseImage, setBaseImage] = useState('');
  const uploadImageTransports = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64Transports(file);
    console.log("binary file:", base64);
    setTransportsTemp(base64);
    setShowTransports(false);
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
  };
  //===========================================================================
  //=========================Convert Introduction Image To Base64===========================
  //const [baseImage, setBaseImage] = useState('');
  const uploadImageImageIntroduction = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64ImageIntroduction(file);
    console.log("binary file:", base64);
    setImageIntroduction(base64);
    setShowImgIntroduction(false);
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
  };
  //===========================================================================
  //===========================================================================
  const dayArray = () => {
  const startDay = moment(startDay1).format("DD-MM-YYYY");
  const abouttDay = moment(abouttDay1).format("DD-MM-YYYY");
  if (startDay1 === null || abouttDay1 === null) {
      alert("Date range not null! Please input day");
      return;
    }
    if (startDay1 > abouttDay1) {
      alert("End day must > Start day ");
      return;
    }
    setCalendarDays([
      ...calendarDays,
      {
        startDay,
        abouttDay,
      },
    ]);
    setStartDays([...startDays, startDay]);

    // if (calendarDays.length == 0) {
    //     setStart(startDay);
    // }
  };

  const clearDayArray = () => {
    setCalendarDays([]);
    setStartDay1(null);
    setAbouttDay1(null);
    setStartDays([]);
    setShow(true);
  };
  console.log("SHOW image xam:", showImage);
  //===========================================================================
  //Create alias to use function dispatch to excute action edit
  const start = moment(startTemp).format("DD-MM-YYYY");
  const tour = useSelector((state) => state.toursList.tour);
  const dispatch = useDispatch();
  const tourUpdated = (tour) => dispatch(updateTourAction(tour));

  //Get the ID of tour will edit
  const { id } = match.params;

  useEffect(() => {
    dispatch(editTourAction(id));
  }, [dispatch, id]);
  //=======================Update List Date=============
  useEffect(() => {
    if(tour.calendarDays) {
        setListDay(tour.calendarDays);
    }
  }, [tour.calendarDays]);
  //====================================================
  // Access to global state
  const descriptions = [];
  descriptions.push(descriptions0, descriptions1, descriptions2);

  //============================GET LIST DAY=====================================
  // setApply(listDay);
  //======================================Check Price==========================
  const priceType = Numeral(tour?.price);
  const priceTypeEdit = priceType.format();
  // const priceRe =  Numeral(tour?.price);
  //    priceRef.current.value =  Numeral(priceType.format());
  const imgTour = tour.image;
  const imgTransports = tour.transports;
  const imgIntroduction = tour.imageIntroduction;
  //============================================================================
  const handleUpdateTour = (e) => {
    e.preventDefault();
 
    //=============Description============
    const descriptions = [];
    descriptions.push(
      descriptionsRef0.current.value,
      descriptionsRef1.current.value,
      descriptionsRef2.current.value
    );
    //============push transports to array=====
    //const arr1 = transports.split(",");
    const transports = [];
    transports.push(transportsTemp);
    
    //console.log("array transports:", arrTransports[1])
    const type = Number(statusCountry);
    //=========================================
 
    tourUpdated({
      id,
      type: type,
      image:  showImage ? imgTour : image ,
      place: placeRef.current.value,
      name: nameRef.current.value,
      day: dayRef.current.value,
      transports: showTransports ? imgTransports : transportsTemp,
      descriptions: descriptions,
      price: priceRef.current.value,
      start: start,
      apply: applyRef.current.value,
      startDays: startDays,
      calendarDays: listDay,
      introduction: introductionRef.current.value,
      imageIntroduction: showImgIntroduction ? imgIntroduction : imageIntroduction,
      titleImage: titleImageRef.current.value,
    });

    //Return to tour list
    history.push(`/toursList`);
    Swal.fire("Saved", "Tour updated", "ok");
  };

  const formatDay = (date) => {
    console.log("Date MOD13577:", date, date.length);
    const day = date.substring(0, 2);
    const month = date.substring(3, 5);
    const year = date.substring(date.length -4, date.length);
    return `${month}/${day}/${year}`
  }

  return (
    <>
      <div className="blockEditTour">
        <div className="blockEditTour__title">
          <h2>EDIT TOUR</h2>
        </div>
        <form onSubmit={handleUpdateTour} className="blockEditTour__formEdit">
          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
              Select Tour
            </label>
            <select
              onChange={handleChange}
              className="blockEditTour__formEdit__selectTour"
              //defaultValue={tour.type}
              //placeholder={tour.type}
              value={tour.statusCountry}
            >
              <option value="1">Domestic</option>
              <option value="2">International</option>
            </select>
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">Image Url</label>
            <div className="blockEditTour__formEdit__groupInput">
                <input
                  className="blockEditTour__formEdit__inputImageUrl"
                  type="file"
                  defaultValue={tour?.image}
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                  ref={imageRef}
                />
                <img src={ showImage ? imgTour : image } className="blockEditTour__formEdit__showImage"/>
            </div>
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label"> Place </label>
            <input
              className="blockEditTour__formEdit__inputPlace"
              type="text"
              //placeholder = {tour.place}
              //value = {place}
              defaultValue={tour.place}
              ref={placeRef}
              //onChange = { e => setPlace(e.target.value)}
            />
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Tour Name
            </label>
            <input
              className="blockEditTour__formEdit__inputTourName"
              type="text"
              //placeholder = {tour.name}
              //value = {name}
              defaultValue={tour.name}
              ref={nameRef}
              //onChange={ e => setTourName(e.target.value)}
            />
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Day Amount
            </label>
            <input
              className="blockEditTour__formEdit__inputDay"
              type="text"
              //placeholder = {tour.day}
              //value = {day}
              defaultValue={tour.day}
              ref={dayRef}
              //onChange = { e => setDayAmount(e.target.value)}
            />
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
              Guest Amount
            </label>
            <input
              className="blockEditTour__formEdit__inputApply"
              type="text"
              //placeholder = {tour.apply}
              // value = {apply}
              defaultValue={tour.apply}
              ref={applyRef}
              //onChange = { e => setApply(e.target.value)}
            />
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Introduction
            </label>
            <input
              className="blockEditTour__formEdit__inputIntroduction"
              type="text"
              //placeholder = {tour.introduction}
              //value = {introduction}
              defaultValue={tour.introduction}
              ref={introductionRef}
              //onChange={ e => setIntroduction(e.target.value)}
            />
          </div>

          {/* /----------------------------------------------------------/ */}

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Descriptions
            </label>
            <input
              className="blockEditTour__formEdit__inputDescriptions1"
              type="text"
              //defaultValue={tour.descriptions?.[0]}
              // placeholder = {tour.descriptions?.[0]}
              // value = {descriptions0}
              defaultValue={tour.descriptions?.[0]}
              ref={descriptionsRef0}
              //onChange={ e => setDescriptions0(e.target.value)}
            />
          </div>
          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label"></label>
            <input
              className="blockEditTour__formEdit__inputDescriptions2"
              type="text"
              //defaultValue={tour?.descriptions?.[1]}
              // placeholder = {tour.descriptions?.[1]}
              // value = {descriptions1}
              defaultValue={tour.descriptions?.[1]}
              ref={descriptionsRef1}
              // onChange={ e => setDescriptions1(e.target.value)}
            />
          </div>
          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label"></label>
            <input
              className="blockEditTour__formEdit__inputDescriptions3"
              type="text"
              //defaultValue={tour?.descriptions?.[2]}
              // placeholder = {tour.descriptions?.[2]}
              // value = {descriptions2}
              defaultValue={tour.descriptions?.[2]}
              ref={descriptionsRef2}
              //onChange={ e => setDescriptions2(e.target.value)}
            />
          </div>
          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
              Transports
            </label>
            <div className="blockEditTour__formEdit__groupInput">
                <input
                  className="blockEditTour__formEdit__inputTransports"
                  type="file"
                  defaultValue={tour?.transports}
                  onChange={(e) => {
                    uploadImageTransports(e);
                  }}
                  ref={transportsRef}
                />
                <img src={ showImage ? imgTransports : transportsTemp } className="blockEditTour__formEdit__showImage"/>
            </div>
            
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label"> Price </label>
            <input
              className="blockEditTour__formEdit__inputPrice"
              type="text"
              // placeholder ={tour.price}
              // value = {priceTypeEdit}
              //placeholder={tour?.price}
              defaultValue={priceTypeEdit}
              ref={priceRef}
              //onChange = { e => setPriceTemp(e.target.value)}
            />
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Image Introduction
            </label>
            <div className="blockEditTour__formEdit__groupInput">
                <input
                  className="blockEditTour__formEdit__inputImageIntroduction"
                  type="file"
                  defaultValue={tour.imageIntroduction}
                  onChange={(e) => {
                    uploadImageImageIntroduction(e);
                  }}
                  ref={imageIntroductionRef}
                />
                <img src={ showImgIntroduction ? imgIntroduction : imageIntroduction } className="blockEditTour__formEdit__showImage" />
            </div>
            
          </div>

          <div className="blockEditTour__formEdit__groupItem">
            <label className="blockEditTour__formEdit__label">
             
              Image Title
            </label>
            <input
              className="blockEditTour__formEdit__inputTitleImage"
              type="text"
              // placeholder = {tour.titleImage}
              // value = {titleImage}
              defaultValue={tour.titleImage}
              ref={titleImageRef}
              onChange={(e) => setTitleImage(e.target.value)}
            />
          </div>

          {/* =============================Right Item======================================= */}
          <div className="blockEditTour__formEdit__blockDatePicker">
            <div className="blockEditTour__formEdit__blockDatePicker__groupSelectDate">
              <div className="blockEditTour__formEdit__blockDatePicker__leftItem">
                {/* <label>Start Day</label> */}
                <div className="blockEditTour__formEdit__blockDatePicker__inputLeftItem">
                  {/* <label className="blockEditTour__formEdit__labelStart"> Start Day Range </label> */}
                  <DatePicker
                    placeholderText="Start Date"
                    selected={startDay1}
                    onChange={(date) => setStartDay1(date)}
                    //defaultValue=""
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                    className="blockEditTour__formEdit__blockDatePicker__inputLeftItem--inputDatepicker"
                    onInputClick={showDate}
                    // dayClassName={date =>(new Date(date)).getDate() > 0 ?"ramdom":undefined }
                  />
                </div>
              </div>
              {/* -----------------------------------------------------------------*/}
              <div className="blockEditTour__formEdit__blockDatePicker__rightItem">
                {/* //<label>End Day</label> */}
                <div className="blockEditTour__formEdit__blockDatePicker__inputRightItem">
                  <DatePicker
                    placeholderText="End Date"
                    selected={abouttDay1}
                    onChange={(date) => setAbouttDay1(date)}
                    dateFormat="dd-MM-yyyy"
                    // ref={endDayRef}
                    minDate={new Date()}
                    className="blockEditTour__formEdit__blockDatePicker__inputRightItem--inputDatepicker"
                    onInputClick={showDate}
                  />
                </div>
              </div>
            </div>

            <div
              className="blockEditTour__formEdit__blockDatePicker__dayRange active"
              // className={ show ? "blockEditTour__formEdit__blockDatePicker__dayRange active" : "blockEditTour__formEdit__blockDatePicker__dayRange"}
            >
              <div className="blockEditTour__formEdit__blockDatePicker__groupDate">
                  {listDay.map((day, index) => {
                  const sDay = new Date(formatDay(day.startDay));
                  const eDay = new Date(formatDay(day.abouttDay));
                  const arr= [...listDay];
                  console.log("🚀 ~ file: editTour.jsx ~ line 571 ~ {listDay.map ~ listDay", listDay)
                  return(
                    <div className="blockEditTour__formEdit__blockDatePicker__groupListDate">
                        <div class="blockEditTour__formEdit__blockDatePicker__editStartDate">
                          <DatePicker
                                placeholderText="Start Date"
                                selected={sDay}
                                value={sDay}
                                onChange={(date) => {
                                    const data = moment(date).format('DD-MM-YYYY')
                                    console.log("🚀 ~ fformat('DD-MM-YYYY')",data)
                                    arr[index].startDay = data;
                                    console.log("🚀 ~ file: editTour.jsx ~ line 550 ~ {listDay.map ~ arr", arr)
                                    setListDay(arr);
                                }}
                                //defaultValue=""
                                dateFormat="dd-MM-yyyy"
                                minDate={sDay}
                                className="blockEditTour__formEdit__blockDatePicker__editStartDate--inputDatepicker"
                                // onInputClick={showDate}
                          />
                        </div>
                        <div class="blockEditTour__formEdit__blockDatePicker__editEndDate">
                          <DatePicker
                                placeholderText="Start Date"
                                selected={eDay}
                                value={eDay}
                                onChange={(date) => {
                                    const data = moment(date).format('DD-MM-YYYY')
                                    console.log("🚀 ~ fformat('DD-MM-YYYY')",data)
                                    arr[index].abouttDay = data;
                                    console.log("🚀 ~ file: editTour.jsx ~ line 550 ~ {listDay.map ~ arr", arr)
                                    setListDay(arr);
                                }}
                                //defaultValue=""
                                dateFormat="dd-MM-yyyy"
                                minDate={sDay}
                                className="blockEditTour__formEdit__blockDatePicker__editEndDate--inputDatepicker"
                                // onInputClick={showDate}
                          />
                        </div> 
                      </div>
                    )
                  })}
              </div>
                {calendarDays.map((list) => (
                  // console.log("🚀 ~ file: editTour.jsx ~ line 532 ~ {listDay?.map ~ list", list)
                  <span>
                    {list.startDay} ------- {list.abouttDay}
                    <br />
                  </span>
                ))}
             

              <div className="blockEditTour__formEdit__blockDatePicker__groupButton">
                <div
                  className="blockEditTour__formEdit__blockDatePicker__addButton"
                  onClick={dayArray}
                >
                  <span> ADD DAY </span>
                </div>

                <div
                  className="blockEditTour__formEdit__blockDatePicker__clearButton"
                  onClick={clearDayArray}
                >
                  <span> CLEAR </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={
              show
                ? "blockEditTour__buttonSave active"
                : "blockEditTour__buttonSave"
            }
          >
            EDIT TOUR
          </button>
        </form>
      </div>
    </>
  );
};
export default EditTour;
