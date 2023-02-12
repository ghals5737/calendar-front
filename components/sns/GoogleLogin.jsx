import React, { useEffect } from "react";
import googleLogo from '../../img/google-btn.png'

const GoogleLogin = ({
  render,
  token,
  success = (authObj) => {
    console.log(authObj);
  },
  fail = (err) => {
    console.log(err);
  },
}) => {
  const setting_script = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "google-sdk";
      js.src = "https://accounts.google.com/gsi/client";
      js.onload = resolve;
      //https://apis.google.com/js/api:client.js

      document.head.append(js);
    });
  };

  

//   const googleLogin=()=>{
//     const fetchData=async ()=>{
//         await setting_script();

//         google.accounts.id.initialize({
//             client_id: token,
//             callback: success
//         });
//           const parent = document.getElementById('google_btn');
//           google.accounts.id.renderButton(parent, {theme: "filled_blue"});
//           google.accounts.id.prompt();
//     }
//     fetchData()
//   }

  useEffect(() => {
        const fetchData=async ()=>{
            await setting_script();

            google.accounts.id.initialize({
                client_id: token,
                callback: success,
                scope:'profile email https://www.googleapis.com/auth/user.birthday.read'
              });
              google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large"  }  // customization attributes
              );
              //google.accounts.id.prompt(); // also display the One Tap dialog
        }
        fetchData()
  }, []);

  return (
    <div id="buttonDiv" >
      {render ? render() : <div>Google Button</div>}
    </div>
  );
};

export const GoogleLogout = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
};

export default GoogleLogin;