import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    _id: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case  "USER_LOADED":
        
        case "SIGN_IN":

        case "SIGN_UP":
            toast("Welcome to Taskifier", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
            })
            const user = jwtDecode(action.token);
            return{
                ...initialState,
                token: action.token,
                name : user.name,
                email: user.email,
                _id: user._id
            };

        case "SIGN_OUT":
            localStorage.removeItem("token")
            toast("Good Bye..", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return {
                token: null,
                name: null,
                email: null,
                _id: null
            }

        default:
            return state;
    }
}

export default authReducer