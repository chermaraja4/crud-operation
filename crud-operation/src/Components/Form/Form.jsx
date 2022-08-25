
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { AddCardDetails,EditUserDetails } from '../../Reducer/User/user.action';
import { useEffect } from 'react';

import { Formik } from 'formik';

const schema = Yup.object().shape({
  FullName: Yup.string().required()
  .min(1, "Too Short!")
  .max(30)
  .matches(/^[aA-zZ\s]+$/,"Invalid Format"),
  PhoneNumber:Yup.string()
  .required("required")  
  .matches( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"invalid mobile number","Invalid Format"),
  UserName:Yup.string()
  .email("Invalid email")
  .required("Required")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
  CompanyName: Yup.string().required()
  .min(2, "to short")
  .max(10, "to long")
  .matches(/^[aA-zZ\s]+$/,"Invalid Format"),
  State: Yup.string().required()
  .min(2, "to short")
  .max(10, "to long")
  .matches(/^[aA-zZ\s]+$/,"Invalid Format"),
  Zip: Yup.string().min(5, 'Must be exactly 5 digits')
  .max(5, 'Must be exactly 5 digits').required().matches(/^[0-9]+$/, "Must be only digits"),
 
});

export default function FormExample(props) {
  const {setShow,list,type}=props;
  const userDetails=useSelector((state)=>state.User) 
  const user= userDetails.user_list;

  const dispatch = useDispatch();
  const HandleClick=(values)=>{   
    if(type==="add"){
      values.id=user.length+1;
      dispatch(AddCardDetails({type:"AddUser",payload: values})) 
    }else{
      values.id=list.id;
      dispatch(EditUserDetails({type:"EditUser",payload: values})) 
    }   
    setShow(false) 
  }


  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values)=>HandleClick(values)}   
      initialValues={{
        FullName:list?.FullName|| '',
        PhoneNumber: list?.PhoneNumber||'',
        UserName: list?.UserName||'',
        CompanyName: list?.CompanyName||'',
        State: list?.State||'',
        Zip:list?.Zip|| '',       
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" sm="12" controlId="validationFormikUserName">
              <Form.Label>Full Name</Form.Label>
              <InputGroup hasValidation>               
                <Form.Control
                  type="text"
                  placeholder="FullName"
                  aria-describedby="inputGroupPrepend"
                  name="FullName"
                  value={values.FullName}
                  onChange={handleChange}
                  isInvalid={!!errors.Fullname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.FullName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" sm="12" controlId="validationFormikUserName">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>               
                <Form.Control
                  type="text"
                  placeholder="PhoneNumber"
                  aria-describedby="inputGroupPrepend"
                  name="PhoneNumber"
                  value={values.PhoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.PhoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.PhoneNumber}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" sm="12" controlId="validationFormikUserName">
              <Form.Label>User Name</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="UserName"
                  aria-describedby="inputGroupPrepend"
                  name="UserName"
                  value={values.UserName}
                  onChange={handleChange}
                  isInvalid={!!errors.UserName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.UserName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" sm="12" controlId="validationFormik03">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="CompanyName"
                value={values.CompanyName}
                onChange={handleChange}
                isInvalid={!!errors.CompanyName}
              />

              <Form.Control.Feedback type="invalid">
                {errors.CompanyName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" sm="12" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="State"
                value={values.State}
                onChange={handleChange}
                isInvalid={!!errors.State}
              />
              <Form.Control.Feedback type="invalid">
                {errors.State}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" sm="12" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="Zip"
                value={values.Zip}
                onChange={handleChange}
                isInvalid={!!errors.Zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center"> 
          <Button type="submit" >Submit form</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

