import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { colors } from "../../utils/constants";
import CommonButton from "../../components/commonbutton/CommonButton";
import InputField from "../../components/inputfield/InputField";
import SnackBarContext from "../../contexts/SnackBarContext";

import $axios from "../../lib/$axios";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { showSnackBar } = useContext(SnackBarContext);

  const handleLogin = async () => {
    localStorage.removeItem("CURRENT_USER");
    if (email.trim().length === 0) {
      showSnackBar("Please key in your email.");
    } else if (password.trim().length === 0) {
      showSnackBar("Please key in your password.");
    } else {
      try {
        const res = await $axios.post("auth/login", {
          email,
          password,
        });
        if (res.status === 200) {
          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data?.data));
          navigate("/cases");
        } else {
          showSnackBar("Something went wrong.");
        }
      } catch (error) {
        console.error(error);
        showSnackBar("Something went wrong.");
      }
    }
  };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="fullWidth" style={{ marginTop: 10 }}>
              <InputField
                type="password"
                required
                hiddenLabel
                className="textField fullWidth marginTop"
                variant="standard"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
