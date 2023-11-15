import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();



  function guestClick(e) {
    e.preventDefault();
    // dispatch(
    //   updateUser({
    //     id,
    //     name,
    //     email,
    //   })
    // );
    navigate("/");
  }


  return (
    <section className="h-screen flex justify-center items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifer"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn onClick={guestClick} text="login" />
        </div>
        <div>
        
        </div>
        <div className="flex items-center justify-evenly">
        <button onClick={guestClick}  type="button" className="btn btn-accent "><FcGoogle/><span>Use Email </span></button>
        <button onClick={guestClick} type="button" className="btn btn-secondary ">Guest User</button>
        </div>
        <p>
        Do you have an account?
          <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
