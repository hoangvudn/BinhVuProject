import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';

// import history from '../../util/history';
import Group from './GroupTour';

import { connect } from 'react-redux';
import history from '../../../util/history';
import { getTourTravelList, getTourForeignList, getTourCountryList } from '../../../redux/actions';
// import './styles.css';
import './styles.scss';
import { useState } from 'react';
function MainBot({
   cartTourIndexData,
   setCartTourIndexData,
   tourTravelList,
   tourCountryList,
   tourForeignList,
   getList,
   getTourCountryList,
   getForeignList,
   searchKey,
}) {
   // index hiển thị
   const [indexShowMore, setIndexShowMore] =useState(5);
   const [indexMoreCountry, setIndexMoreCountry] =useState(0);
   console.log("indexMoreCountry-indexMoreCountry: ", indexMoreCountry);

   useEffect(() => {
      getList(
         {
            page: 1,
            limit: 5,
         }

      );

      getForeignList(
         {
            page: 1,
            limit: 5,
         }
      );

      getTourCountryList(
         {
            page: 1,
            limit: 2,
         }
      )

   }, []);
   useEffect(() => {
      
      getTourCountryList(
         {
            page: 1,
            limit: 2 + indexMoreCountry,
         }
      )

   }, [indexMoreCountry]);
   
   
   //tìm kiếm
   const filterGroupTourData = tourTravelList.filter((item) => {
      return (item.place.toLowerCase()).indexOf(searchKey.toLowerCase()) !== -1;
   });

   //hiển thị thêm
   const handleShowMore=()=>{
      setIndexShowMore(indexShowMore + 6);
   }

   const handleShowMoreCountry = () =>{
      setIndexMoreCountry(indexMoreCountry + 2);
   }

   //box tour trải nghiệm
   const renderGroup=() => {
      return filterGroupTourData.map((group, index) => {
         if (index > indexShowMore) {
            return null;
            }
         return(
            <Group key={`tour-${index}`}
            groupIndex={index}
            id={group.id}
            image={group.image}
            place={group.place}
            name={group.name}
            day={group.day}
            transports={group.transports}
            descriptions={group.descriptions}
            price={group.price}
            cartTourIndexData={cartTourIndexData}
            setCartTourIndexData={setCartTourIndexData}
            />
         )
      })
   }

   //box tour trong nước
   const renderTourInCountry=() => {
      return tourCountryList.map((group, index) => {
         // if (index > indexShowMore) {
         //    return null;
         //    }
         return(
            <Group key={`tour-in-country-${index}`}
            groupIndex={index}
            id={group.id}
            image={group.image}
            place={group.place}
            name={group.name}
            day={group.day}
            transports={group.transports}
            descriptions={group.descriptions}
            price={group.price}
            cartTourIndexData={cartTourIndexData}
            setCartTourIndexData={setCartTourIndexData}
            />
         )
      })
   }

   //box tour nước ngoài
   const renderTourForeign=() => {
      return tourForeignList.map((group, index) => {
         return(
            <Group key={`tour-foreign-${index}`}
            groupIndex={index}
            id={group.id}
            image={group.image}
            place={group.place}
            name={group.name}
            day={group.day}
            transports={group.transports}
            descriptions={group.descriptions}
            price={group.price}
            cartTourIndexData={cartTourIndexData}
            setCartTourIndexData={setCartTourIndexData}
            />
         )
      })
   }

   return (
      <>
      <Row className="tours-fluid-container tours">
         <Col span={18} style={{margin:"0 auto"}}>
            <Row>
               <Col span={24}>
                  <Row>
                     <Col span={24} className="show-tours tours__title">
                     <h3>Tour nổi bật</h3>
                     <span onClick={()=>{history.push("/search-tour-travel")}} >XEM THÊM TOURS </span>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={30} className="tour-bottom tours__box">
               {renderGroup()}
            </Row>
         </Col>
         {(filterGroupTourData.length > 6 && tourTravelList.length > (indexShowMore + 1)) && (
            <Col span={24} className="see-more tours__box--more">
               <div 
                  className="hover-see-more tours__box--more-hover" 
                  onClick={()=>{handleShowMore()}}
               >
                  Xem thêm..
               </div>
            </Col>
         )}
      </Row>

      <Row className="tours-fluid-container tours">
         <Col span={18} style={{margin:"0 auto"}}>
            <Row>
               <Col span={24}>
                  <Row>
                     <Col span={24} className="show-tours tours__title">
                     <h3>Tour trong nước</h3>
                     <span onClick={()=>{history.push("/tours-list-country")}} >XEM THÊM TOURS </span>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={30} className="tour-bottom tours__box">
               {renderTourInCountry()}
            </Row>
         </Col>
         {(indexMoreCountry <4) && (
            <Col span={24} className="see-more tours__box--more">
               <div 
                  className="hover-see-more tours__box--more-hover"
                  onClick={()=>{handleShowMoreCountry()}}
               >
                  Xem thêm..
               </div>
            </Col>
         )}
      </Row>

   <Row className="tours-fluid-container tours">
      <Col span={18} style={{margin:"0 auto"}}>
         <Row>
            <Col span={24}>
               <Row>
                  <Col span={24} className="show-tours tours__title">
                  <h3>Tour Nước Ngoài</h3>
                  <span onClick={()=>{history.push("/tours-list-foreign")}} >XEM THÊM TOURS </span>
                  </Col>
               </Row>
            </Col>
         </Row>
         <Row gutter={30} className="tour-bottom tours__box">
            {renderTourForeign()}
         </Row>
      </Col>
   </Row>
</>
   );
}

const mapStateToProps = (state) => {
   const { tourTravelList } = state.tourTravelReducer;
   const { tourForeignList } = state.tourForeignReducer;
   const { tourCountryList } = state.tourCountryReducer;
   return {
      tourTravelList,
      tourForeignList,
      tourCountryList,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getList: (params) => dispatch(getTourTravelList(params)),
      getForeignList: (params) => dispatch(getTourForeignList(params)),
      getTourCountryList: (params) => dispatch(getTourCountryList(params)),

   };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainBot);

