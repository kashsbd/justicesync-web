import React from "react";
import "./Login.css";
import { colors } from "../../utils/constants";
import CommonButton from "../../components/commonbutton/CommonButton";
import InputField from "../../components/inputfield/InputField";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/cases");
    }
  return (
    <div className="bgImg">
      <div className="loginContainer">
        <div className="loginWrapper">
          <p className="e360 alignCenter">JusticeSync</p>
          <div className="inputFields">
            <div className="fullWidth">
              <InputField
                required
                className="textField fullWidth marginTop"
                variant="standard"
                label="Email"
              />
            </div>
            <div className="fullWidth">
              <InputField
                required
                hiddenLabel
                className="textField fullWidth marginTop"
                variant="standard"
                label="Password"
              />
            </div>
          </div>
          <div className="loginBtn">
            <CommonButton
              onClick={handleLogin}
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.black,
              }}
              variant="contained"
              label="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
