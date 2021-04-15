import React, {useState, useEffect} from 'react';
import { Modal, Button, Input, Row, Col } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import './styles.scss';


function SignInModal({
  isShowModal,
  handleHideModal,
  handleSubmitSignIn,
  handleShowSignUpModal,
  isCofirmUser,
}){

  const renderCustomInput=(props)=>{
    const {field, meta}=props;
    return(
      <Row>
         <Col span={24} className="field-input form__field-input" >
            <Input
               {...field}
               type= {field.type}
            />
            {meta.touched && meta.error ? <div style={{color:"red"}}> {meta.error}</div>: null}
         </Col>
      </Row>
    )
   }

  return (
   <Modal
      title="Đăng Nhập"
      visible={isShowModal}
      onCancel={handleHideModal}
      footer={false}
   >
      <Formik
        initialValues={
          {
            userName: '',
            password: '',
          }
        }
        validationSchema={Yup.object({
          userName: Yup.string()
          .required('Bạn chưa nhập tên')
          .max(15, 'Nhập 15 kí tự trở xuống'),
          password: Yup.string()
          .required('Bạn chưa nhập mật khẩu')
          .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự'),
        })}
        onSubmit={(values)=> handleSubmitSignIn(values)}
      >
      <Form className="form">
        <label htmlFor="title" className="label-sign-in-up form__name-label" >Họ và tên</label>
        <Field  
          name='userName'
        >
          {(props)=>renderCustomInput({
                      ...props,
                      field: {
                      ...props.field,
                      placeholder:'Họ và Tên',
                      type:'text',
                    },
                    })
                  }
        </Field>
        <label htmlFor="title" className="label-sign-in-up form__name-label" >Mật khẩu</label>
        <Field  
          name='password'           
        >
          {(props)=>renderCustomInput({
          ...props,
          field: {
            ...props.field,
            placeholder:'Mật khẩu',
            type:'password',
                  },
                  })
          }
        </Field>
        {(isCofirmUser === false) && <div style={{color:"red"}}>Bạn nhập chưa đúng mật khậu, tên hoặc chưa đăng kí..</div>}
        <Row>
          <Col span={24} className="sign-up-in-up form__box-button" >
            <button type="submit" className="form__box-button--green" style={{marginRight:"15px"}}>
              Đăng nhập
            </button>
            <button type="button" className="form__box-button--green"
                    onClick={()=>handleShowSignUpModal()}
            >
              Đăng kí
            </button>
          </Col>
        </Row>   
      </Form>
      </Formik>
      </Modal>
  );
}
export default SignInModal;
