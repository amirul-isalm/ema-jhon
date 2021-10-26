import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "./Context/useAuth";
import './shipping.css'


const Shiping = () => {
    const { user, isLoading } = useAuth();
     const {
       register,
       handleSubmit,
     
       formState: { errors },
     } = useForm();
  const onSubmit = (data) => console.log(data);
  

 
  return (
    <div>
      <form className="shippingFrom" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("Name")} />

        <input
          placeholder="Enter your email..."
          {...register("Email", { required: true })}
        />

        {errors.Email && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shiping;
