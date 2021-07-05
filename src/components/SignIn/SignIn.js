import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const appToken = "dyv1tdd7fhf20yhfx240ubr5x9eqdgxyg3v6dzwn92spoipkf5nxyr9jq27hti7f"; 

  const handleSubmit = async () => {
    const res = await fetch(`https://api.mesibo.com/api.php?token=${appToken}&op=useradd&appid=com.mesibo.firstapp&addr=${email}`)
    // .then((response) => console.log(response))
    console.log(res);
    localStorage.setItem("email", email);
  };
  return (
    <div className="loginSec">
      <h1 className="appHeading">Conference App</h1>
      <div className="container">
        <div className="headingSec">
          <p className="signInTag"></p>
        </div>
        <div className="heroSection">
          <label htmlFor="" className="emailLabel">
            Enter email
          </label>
          <input
            type="email"
            className="emailInput"
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
          />
        </div>
        <button className="signInButton" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
