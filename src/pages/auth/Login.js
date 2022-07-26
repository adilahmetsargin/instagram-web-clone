/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect, useRef } from "react"
import Input from "components/Input"
import {AiFillFacebook} from 'react-icons/ai'
import {  useLocation, Link, Navigate } from 'react-router-dom'
import { login } from 'firebase.js'
import { Formik, Form } from 'formik'
import Button from 'components/Button'
import Divider from 'components/Divider'
import { useSelector } from 'react-redux'
// import { LoginSchema } from 'validation'

const Login = () => {
  const ref = useRef(null)


  const location = useLocation()
  const user = useSelector(state => state.auth.user)




  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
    total = images.length,
    current = 0

    const imageSlider = () => {
      images[(current > 0 ? current : total) -1].classList.add('opacity-0')
      images[current].classList.remove('opacity-0')
      current = current === total -1 ? 0 : current + 1
    }
    imageSlider()
    let interval = setInterval(imageSlider, 3000)
    return ()=>{
      clearInterval(interval);
    }    
  }, [ref])
  

  if (user) {
		return <Navigate to={location.state?.return_url || '/'} replace={true} />
	}

  const handleSubmit = async (values, actions)=>{
     await login(values.userName, values.password)
  
  }

  return (
            <>
              <div className="hidden md:block w-[380px] h-[580px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                  <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
                  <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="" />
                  <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
                  <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
                </div>
              </div>
              <div className="w-[350px] grid gap-y-3">
                      <div className="bg-white border p-[40px] pt-10 pb-6">
                          <a href="#" className="flex justify-center mb-8">
                            <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                          </a>

                  <Formik
                  // validationSchema={LoginSchema}
                      initialValues={{
                        userName: '',
                        password: '',
                      }}
                      onSubmit={handleSubmit}
                      >
                          {({isSubmitting, isValid, dirty})=>(
                            <Form className="grid gap-y-1.5">

                              <Input name="userName" label="Phone number, username or email" />
                              <Input type="password" name="password" label="Password" />
                              <Button
                              disabled={!isValid || !dirty || isSubmitting} type="submit">Log In</Button>
                                          <Divider/> 
                                              <a href="#" className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
                                                <AiFillFacebook size={20} />
                                                Log in with Facebook
                                              </a>  
                                              <a href="#" className="flex items-center justify-center text-xs text-link">
                                                Forgot password?
                                              </a>
                            </Form>
                          )}
                  </Formik>
                        </div>

                        <div className="bg-white border p-4 text-sm text-center">
                          Don't have an account? <Link to="/auth/register" className="font-semibold text-brand">Sign up</Link>
                        </div>
                  </div>
              </>
    )
}

export default Login