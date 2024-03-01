import toast from "react-hot-toast";
import {setToken} from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice";
import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const{
    LOGIN_API
} = endpoints


export function login(email,password,navigate){
    const loadingToast = toast.loading('Loading...');
    return async(dispatch) => {

        try{
            const response = await apiConnector('POST',LOGIN_API,
            {   
                email,
                password
            });
            console.log("LOGIN API RESPONSE............", response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }


            dispatch(setToken(response.data.token))
            dispatch(setUser(response.data.user))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard")
            toast.dismiss(loadingToast);
            toast.success("Login Successful")
        }
        
        catch(error){
            console.log("LOGIN API ERROR....",error)
            toast.dismiss(loadingToast);
            toast.error("Login Failed")
        }
       
    }
}
export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/login")
    }
  }