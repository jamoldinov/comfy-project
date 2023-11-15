import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
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
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" />
        <FormInput type="text" label="Email" name="email" />
        <FormInput type="text" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn onClick={guestClick} text="Register" />
        </div>
        <p>
          Already you have an account ?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
