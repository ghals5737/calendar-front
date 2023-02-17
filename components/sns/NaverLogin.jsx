
import React, { useEffect } from "react";
import queryString from "query-string";
import { useSnsLoginInfo } from "../../store/useSnsLoginInfo";

let naverLogin;

const NaverLogin = ({ token, callbackUrl, render }) => {
  //window.name = "opener";
  const {setAccessToken,setSnsType}=useSnsLoginInfo()

  const setting_naver = () => {
    return new Promise((resolve, reject) => {
      let js = document.getElementById("naver-sdk");
      if (js) {
        resolve;
      } else {
        js = document.createElement("script");

        js.id = "naver-sdk";
        js.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        js.onload = resolve;

        document.head.append(js);
      }
    });
  };

  const setting_jquery = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "jquery-sdk";
      js.src = "https://code.jquery.com/jquery-1.12.4.min.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  useEffect (() => {
    const fetchData=async ()=>{
      window.name = "opener";
      await setting_naver();
      await setting_jquery();
  
      naverLogin = new naver.LoginWithNaverId({
        clientId: token,
        callbackUrl: `${callbackUrl}?naver=${token}`,
        isPopup: true,
      });
      naverLogin.init();
  
      naverLogin.getLoginStatus(function (status) {
        if (status) {
        }
      });
    }
    fetchData()   
  }, []);

  return (
    <div id="naverIdLogin">
      <a id="naverIdLogin_loginButton" className="sns-naver-container">
        {render ? (
          render()
        ) : (
          <img
            className="sns-naver-img"
            width="220px"
            src="https://static.nid.naver.com/oauth/big_g.PNG"
          />
        )}
      </a>
    </div>
  );
};

export const getNaverInfo = () => {
  return naverLogin ? naverLogin.user : null;
};

export const NaverLogout = () => {
  // console.log(naverLogin);
  naverLogin.logout();
  // callback();
};

export const NaverCallback = async () => {
  const setting_naver = () => {    
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "naver-sdk";
      js.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  const setting_jquery = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "jquery-sdk";
      js.src = "https://code.jquery.com/jquery-1.12.4.min.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  const query = queryString.parse(window.location.search);

  await setting_naver();
  await setting_jquery();

  naverLogin = new naver.LoginWithNaverId({
    clientId: query.naver,
    callbackUrl: `${window.location.origin}` + `${window.location.pathname}`,
    isPopup: true,
  });
  naverLogin.init();
  naverLogin.init();

  naverLogin.getLoginStatus(function (status) {    
    if (status) {
      var opener = null;
      if (window.opener) {
        opener = window.opener;
      } else {
        opener = window.open("", "opener");
      }

      if (opener) {
        opener.location.replace(
          `${window.location.origin}` +
            `${window.location.pathname}` +
            `${location.hash}`
        );     
        opener.location.reload(
          // `${window.location.origin}` +
          //   `${window.location.pathname}` +
          //   `${location.hash}`
        )   
        window.close();
      } else {
        window.location.replace(redirect);
      }
    } else {
      console.log("callback 처리에 실패하였습니다.");
    }
  });
};

export default NaverLogin;