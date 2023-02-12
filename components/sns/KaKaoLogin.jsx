import React, { useEffect } from "react";

const KakaoLogin = ({
  token,
  successCallback = (authObj) => {
    console.log(JSON.stringify(authObj));
  },
  fail = (err) => {
    console.log(JSON.stringify(err));
  },
  render,
}) => {
  const setting = () => {
    return new Promise((resolve, reject) => {
      const js = document.createElement("script");

      js.id = "kakao-sdk";
      js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
      js.onload = resolve;

      document.head.append(js);
    });
  };

  useEffect(() => {
    const fetchData=async ()=>{
        await setting();
        window.Kakao.init(token.toString());
    }
    fetchData()    
  }, []);

  return (
    <div
      className="sns-kakao-container"
      onClick={() => {
        window.Kakao.Auth.login({
            scope: "account_email, birthday, openId",
            success: (authObj) => {              
              window.Kakao.API.request({
                url: "/v2/user/me",
                success: (res) => {                 
                  successCallback(res)
                },
                fail: (res) => {
                  console.log(res);
                },
              });
            },
          })}}
    >
      {render ? (
        render()
      ) : (
        <img
          className="sns-kakao-img"
          width="220px"
          src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        />
      )}
    </div>
  );
};

export default KakaoLogin;