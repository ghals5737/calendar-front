interface snsLoginInfo {    
   accessToken:string,
   snsType:string,
   setAccessToken(accessToken:string):void,
   setSnsType(snsType:string):void,
}  

export default snsLoginInfo