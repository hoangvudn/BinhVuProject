import React from 'react';
import { useState } from 'react';
import { Input, Row,Col, Button } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Menu, Dropdown, Button } from 'antd';
import * as Yup from 'yup';
function CreateTourAdmin() {
   const [indexInput, setIndexInput] = useState(0);
   const [arrayInput, setArrayIndexInput] = useState([]);
   console.log("index array: ",arrayInput);

   const createIndextDay = ()=>{
      setIndexInput(indexInput+1);
      setArrayIndexInput([...arrayInput, indexInput]);
      createInputDay();
      console.log("index array: ",arrayInput);
   }


   const createInputDay = ()=>{
      return arrayInput.map((InputItem, InputIndex)=>{
         return(
            <Row>
            <Col span="24">
               <h4>ngày thứ {InputItem + 1}</h4>
               {/* <Input style={{marginTop:"20px"}}></Input> */}
               <Field  
                     name = "text"          
                  >
                     {(props)=>renderCustomInput({
                     ...props,
                     field: {
                        ...props.field,
                        placeholder:'Enter password',
                        type:'password',
                              },
                              })
                     }
                  </Field>
               <Button type="primary" onClick={()=>deleteIndextDay(InputIndex)}>xóa ngày</Button>
            </Col>
         </Row>
         )
      })
   }

   const deleteIndextDay = (index) =>{
      const newArrayInput = [...arrayInput];
      newArrayInput.splice(index,1);
      setArrayIndexInput(newArrayInput);
   }

   const renderCustomInput=(props)=>{
      console.log("props-field-meta", props);
      const {field, meta}=props;
      return(
        
           <div>
              <Input
                  style={{marginTop:"20px"}}
                 {...field}
                 type= {field.type}
              />
              {meta.touched && meta.error ? <div style={{color:"red"}}> {meta.error}</div>: null}
           </div>
        
      )
     }

     const array = ["aaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "ccccccccccccccc"];

     const renderDesriptions = () => {
      return array.map((item, index)=>{
         return(
            <p style={{padding:'0', margin:'0'}}>- {item}</p>
         );
      })
   }

   


      
   return(
      <>
      <Row>
         <Col span="12">
            <h1>thêm tour mới</h1>
            <form  action="" style={{ marginLeft:"10px"}}>
               <Button type="primary" onClick={()=>createIndextDay()}>Thêm ngày</Button>
               
            </form>

            <Formik
               initialValues={
                  {
                    text:"",
                  }
               }
               validationSchema={Yup.object({
                  text: Yup.string()
                     .required('Bạn chưa nhập email')
               })}
            >
               <Form  style={{ marginLeft:"10px"}}>
                  <Field  
                     name='text'
                  >
                     {(props)=>renderCustomInput({
                                 ...props,
                                 field: {
                                 ...props.field,
                                 placeholder:'Enter email',
                                 type:'email',
                              },
                              })
                              }
                  </Field>
                  
                  

                  {createInputDay()}
               </Form>
      
      </Formik>
            
         </Col>
      </Row>

      <Row>
         <Col span={24}>

         {renderDesriptions()}
         </Col>
      </Row>
      
      </>
   );
}
export default CreateTourAdmin;