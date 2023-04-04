import Cookie from "js-cookie";

const SetCookie = (cookiename,userin) =>{
    Cookie.set(cookiename,userin,{
        expires: 0.5,
        secure:true,
        sameSite:'strict',
        path:'/'
    })
}

export default SetCookie