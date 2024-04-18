import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { Canvas } from '@react-three/fiber';

import Fox from '../models/fox'

import  Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';

import Alert from '../components/Alert'

const Contact = () => {
    const formRef =useRef(null);

    const[form,setForm]=useState({name:'',email:'',message:''})
    const[isLoading,setIsLoading]= useState(false)
    const[currentAnimation,setCurrentAnimation]=useState('idle')
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    };
    const handleFocus = () =>setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');

    const {alert,showAlert,hideAlert} =useAlert();

    const handleSubmit=(e) =>{
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit')
        emailjs.send(
           import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
           import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
           {
            from_name: form.name,
            to_name: 'kumar',
            from_email: form.email,
            to_email: 'kingkumar7r@gmail.com',
            message: form.message,
           },
           import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(()=>{
            setIsLoading(false);
            showAlert({
                show: true,
                text:'Message sent sucessfully!',
                type:'success'});
 
            setTimeout(()=>{
                hideAlert(false);
                setCurrentAnimation('idle')
                setForm({name:'',email:'',message:''})
            },[3000])
            
        }).catch((error)=>{
            setIsLoading(false);
            setCurrentAnimation('idle');
            console.log(error)
            showAlert({
                show: true,
                text:'I didnt recive your message',
                type:'success'})

        })
    };
  return (

    <section className="absolute top-28 left-0 right- z-10 flex items -inset-1 justify-center">

        {alert.show && <Alert{...alert}/>}
        <div >
            <h1 className="top-28" ></h1>
        </div>

        <section className="relative flex lg:flex-row flex-col max-continer h-[100vh]">
            <div className="flex-1 min-w-[50%] flex flex-col gap-6">
                <h1 className="head-text" >Get in Touch</h1>
                <form
                className="w-full flex flex-col gap-7 mt-14"
                onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                        type='text'
                        name='name'
                        className='input'
                        placeholder='john'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                        type='email'
                        name='email'
                        className='input'
                        placeholder='john@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Message
                        <input
                        type='text'
                        name='message'
                        className='input'
                        placeholder='Let me know how I can help you!'
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                    </label>
                    <button 
                    type='submit'
                    className='btn'
                    onFocus={handleFocus}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isLoading}
                    >
                        {isLoading ? 'Sending...':'Send Message'}
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                camera={{
                    position: [0,0,5],
                    fov:75,
                    near:0.1,
                    far:1000
                }}>
                    <directionalLight 
                    intensity={2.5}
                    position={[0,0,1]}
                    />
                    <ambientLight
                    intensity={0.5}
                    />


                    <Suspense fallback={<Loader/>}>
                        <Fox
                        currentAnimation={currentAnimation}
                        position={[0.5,0.35,0]}
                        rotation={[12.6,-0.6,0]}
                        scale={[0.5,0.5,0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    </section>
  )
}

export default Contact