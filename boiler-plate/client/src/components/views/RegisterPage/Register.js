import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FormWithHookForm } from "./FormInput";
import "./style.css";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = useRef();
    password.current = watch("password");
    const onSubmit = (data) => {
        console.log("data", data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("email"));

    return (
        <div className="test_register">
            <form className="test_form" onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    className="test_input"
                    name="email"
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                {errors.email && (
                    <p className="test_error">This email field is required</p>
                )}

                <label>Name</label>
                <input
                    className="test_input"
                    name="name"
                    type="text"
                    {...register("name", { required: true, maxLength: 10 })}
                />
                {errors.name && errors.name.type === "required" && (
                    <p className="test_error">This field is required</p>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <p className="test_error">
                        Your input exceed maximum length
                    </p>
                )}

                <label>Password</label>
                <input
                    className="test_input"
                    name="password"
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required" && (
                    <p className="test_error">This field is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <p className="test_error">
                        Password must have at least 6 characters
                    </p>
                )}

                <label>Password Confirm</label>
                <input
                    className="test_input"
                    name="password_confirm"
                    type="password"
                    {...register("password_confirm", {
                        required: true,
                        validate: (value) => value === password.current,
                    })}
                />

                {errors.password_confirm &&
                    errors.password_confirm.type === "required" && (
                        <p className="test_error">This field is required</p>
                    )}
                {errors.password_confirm &&
                    errors.password_confirm.type === "validate" && (
                        <p className="test_error">The passwords do not match</p>
                    )}

                <input type="submit" />
            </form>
            <FormWithHookForm />
        </div>
    );
};

export default SignUp;
