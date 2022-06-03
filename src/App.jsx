import React, { useState } from "react";
import Input from "./Components/Form/Input";
import "./App.css";
import Output from "./Components/Preview/Output";

function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
        console.log(reader);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className='app'>
      <Input
        name={name}
        user={user}
        setName={setName}
        setUser={setUser}
        detail={detail}
        setDetail={setDetail}
        imageHandler={imageHandler}
      />
      <Output user={user} detail={detail} profileImg={profileImg} name={name} />
    </div>
  );
}

export default App;
