'use client'

import {useState,useEffect } from 'react';
import queryString from "query-string";
import { useSnsLoginInfo } from "../../store/useSnsLoginInfo";
let naverLogin;
export default function Page( token, callbackUrl, render ){     
      
    const {setEmail,setSnsType}=useSnsLoginInfo()

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

  const login=async()=>{
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        let userData = getNaverInfo();
        if (userData) {
          console.log("windowOpen", window.opener);          
          // if (window.opener!=null) {
          //   window.opener.close();        
          // }else{
          //   //window.opener.location.reload(); // 사용자 정보 갱신
          //   window.close(); // 팝업 창 닫기  
          // }
          setEmail(userData.email)
        }
      }
    });
  }

  useEffect (() => {
    window.name = "opener";
    const fetchData=async ()=>{
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
          let userData = getNaverInfo();
          if (userData) {
            console.log("windowOpen", window.opener);          
            // if (window.opener!=null) {
            //   window.opener.close();        
            // }else{
            //   //window.opener.location.reload(); // 사용자 정보 갱신
            //   window.close(); // 팝업 창 닫기  
            // }
            setEmail(userData.email)
            window.close()
          }
        }
      });

      
    }
    fetchData()   
  }, []);

  return (
    <div></div>
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
  alert("callback")
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
      alert("callback")
      var opener = null;
      if (window.opener) {
        opener = window.opener;
      } else {
        opener = window.open("", "opener");
      }
      

      if (window.opener && !window.opener.closed) {
        window.opener.location.reload(); // 사용자 정보 갱신
        window.opener.close(); // 팝업 창 닫기
      }
    } else {
      console.log("callback 처리에 실패하였습니다.");
    }
  });
}
