import React from "react";

import Register from "../../Components/Register";
import CreditForm from "../../Components/CreditForm";

const RegisterPage = () => {
  return (
    <div className="min-h-[100vh] w-full md:w-[30rem] m-auto flex flex-col justify-center items-center">
      {/* <Register /> */}
      <CreditForm />
    </div>
  );
};

export default RegisterPage;
