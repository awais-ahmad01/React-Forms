import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


// here we components from formik to do the same work as like others
// it is another way of using forms 

const FormThree = () => {

    const formikProps = {
        initialValues:{firstname:'',color:'', lastname:''},
        validationSchema:Yup.object({
            firstname:Yup.string().required('Sorry, this is required'),
            lastname:Yup.string().required('Sorry, this is required')
        }),
        onSubmit: values => {
            console.log(values)
        }
    }


    //it is a custom componet which will be reusable
    const myCustomComponent = ({
        field, /// { name, value, onChange, onBlur}
        form:{ touched, errors},
        ...props   //other custom properties which will be pass here like labelName
    }) => (
        <>
            <label htmlFor={field.name}>{props.labelName}</label>
            <input
                type="text"
                className="form-control"
                {...field}
            />
            { errors[field.name] && touched[field.name] ?
                 <span>{errors[field.name]}</span>
            :null}
        </>
    )





    return(
        <div className="container">
            <div className="col-md-12 mt-5">
            <Formik {...formikProps}>
                { formik => (
                    <Form>
                    <label htmlFor="firstname">First name</label>
                    <Field name="firstname" type="text" className="form-control"/>  
                    {/* the Field component gives us different types of inputs */}

                    {/* <ErrorMessage name="firstname"/>  it is component used for error message */}

                    { formik.errors.firstname && formik.touched.firstname ?
                         <span>{formik.errors.firstname}</span>
                    :null}
                    
                    <hr className="mb-4" />

                    
                    <Field
                        name="lastname"
                        component={myCustomComponent}
                        placeholder="Last name"
                        labelName="Enter your name"
                    />

                    


                    <hr className="mb-4" />

                    <label htmlFor="color">Color</label>
                    <Field 
                        as="select"       //we can add select like this
                        name="color" 
                        className="custom-control"
                    >
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>

                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
        
    )
}

export default FormThree;