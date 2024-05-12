import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Modal from './Modal'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
  return (
    <div className='max-w-md bg-white shadow-xl w-full mx-auto flex items-center justify-center my-20'>
      <div className="modal-action mt-0 flex flex-col justify-center">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
        <h1 className='font-bold text-lg'>Create Account</h1>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  {...register("email")} />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
          <label className="label mt-1">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* error text here */}

        {/* signup btn */}
        <div className="form-control mt-6">
          <input type='submit' value={'Signup'} className="btn bg-orange-500"/>
        </div>
        <p className='text-center my-2'>Have an account? <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='underline text-red-500 ml-1'>Login</button></p>
        <Link to={'/'}  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      </form>
      {/* social signin  btns */}
      <div className='text-center mb-2 space-x-3'>
      <button className="btn btn-circle hover:bg-orange-500 hover:text-white">
        <FaGoogle/>
  </button>
      <button className="btn btn-circle hover:bg-orange-500 hover:text-white">
      <FaFacebookF />
  </button>
      <button className="btn btn-circle hover:bg-orange-500 hover:text-white">
      <FaGithub />
  </button>
      </div>
    </div>
    <Modal/>
    </div>
  )
}

export default Signup
