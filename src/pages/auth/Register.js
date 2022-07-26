/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Input from "components/Input"
import {AiFillFacebook} from 'react-icons/ai'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import {  register } from 'firebase.js'
import { Formik, Form } from 'formik'
import Button from 'components/Button'
import Divider from 'components/Divider'
// import { RegisterSchema } from '../../validation/register-schema'

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()


  const handleSubmit = async (values, actions)=>{
     const response = await register(values)
    
      if (response) {
        navigate(location.state?.return_url || '/', {
          replace: true
        }) 
      }
  }

  return (
            <>
              <div className="w-[350px] grid gap-y-3">
                <div className="bg-white border p-[40px] pt-10 pb-6">
                    <a href="#" className="flex justify-center mb-4">
                        <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                    </a>
                <p className='text-[17px] font-semibold text-center text-[#8e8e8e] mb-6'>Sign up to see photos and videos from your friends.</p>
                    <Button>
                        <AiFillFacebook size={20} />
                        Log in with Facebook
                    </Button>
                    <Divider/> 

                  <Formik
                      initialValues={{
                        email: '',
                        fullName: '',
                        userName: '',
                        password: '',
                      }}
                    //   validationSchema={RegisterSchema}
                      onSubmit={handleSubmit}
                      >
                          {({isSubmitting, isValid, dirty, values})=>(
                              <Form className="grid gap-y-1.5">

                              <Input name="email" label="Email" />
                              <Input name="fullName" label="Full name" />
                              <Input name="userName" label="Phone number, username or email" />
                              <Input type="password" name="password" label="Password" />
                              <p className='text-xs text-[#8e8e8e] py-2'>
                                    People who use our service may have uploaded your contact information to Instagram. <a href="#" className='font-semibold'>Learn more</a>
                                    <br /><br />
                                    By signing up, you agree to our <a href="#" className='font-semibold'>Terms</a> , <a href="#" className='font-semibold'>Privacy Policy</a>  and <a href="#" className='font-semibold'>Cookies Policy</a>.
                              </p>
                              <Button
                              disabled={!isValid || !dirty || isSubmitting || !values.email || !values.fullName || !values.userName || !values.password} type="submit">Sign up</Button>
                                   
                            </Form>
                          )}
                  </Formik>
                        </div>

                        <div className="bg-white border p-4 text-sm text-center">
                          Have an account? <Link to="/auth/login" className="font-semibold text-brand">Log in</Link>
                        </div>
                  </div>
              </>
    )
}

export default Register