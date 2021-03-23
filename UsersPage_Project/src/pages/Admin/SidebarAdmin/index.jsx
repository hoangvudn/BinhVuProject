import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Row, Col } from 'antd';
function SidebarAdmin(){
   const sidebarList = ["Thêm tour", "Sửa tour", "Xóa tour"];
   const renderItemSidebarItem = ()=>{
      return sidebarList.map((sidebarItem, sidebarIndex)=>{
         return(
            <p className="sidebar-admin-list">{sidebarItem}</p>
         );
      })
   }
   return(
      <Row>
         <Col span={24}>
            {renderItemSidebarItem()}
         </Col>
      </Row>
   );

}
export default SidebarAdmin;