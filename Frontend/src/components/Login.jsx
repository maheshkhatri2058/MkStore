import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="container mt-5 border" id="login" style={{ dispay: "none" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text text-start">Enter Your Email:</div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control border mt-2"
              {...register("email", { required: true })}

            
            />
            {errors.email && <span className="text text-danger">This field is required</span>}
          </div>
        <div className="text text-start">Enter Your Password:</div>
          
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control border mt-2"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text text-danger fs-15">This field is required</span>}
            
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <input 
            type="submit"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
          />

          <div class="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
