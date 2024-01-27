import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credential, setCredential] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");

  const handleInput = (event) => {
    let target = event.target;
    setCredential({ ...credential, [target.name]: target.value });
  };

  const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
  }

  const handleSubmit = () => {
    //     fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({

    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     // expiresInMins: 60, // optional
    //   })
    // })
    // .then(res => console)
    // .then(console.log);

    axios.post(
      "https://dummyjson.com/auth/login",
       credential ,
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then((res)=>{
        localStorage.setItem("token",res.data.token);
        setAuthToken(res.data.token);
        window.location.href = '/'
    }).then((error)=>{
        console.log(error);
    });
  };
  return (
    <div
      style={{
        width: "300px",
        alignContent: "center",
        textAlign: "center",
        padding: "100px",
      }}
    >
      {JSON.stringify(credential)}
      Username
      <input type="text" name="username" onChange={handleInput} />
      Password
      <input type="text" name="password" onChange={handleInput} />
      <br></br>
      <input
        type="button"
        name="submit"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;
