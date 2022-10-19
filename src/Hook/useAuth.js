import { useContext } from "react";
import { TextContext } from "../Context/Provider";

const useAuth = () => {
    const auth = useContext(TextContext);
    return auth;    
}

export default useAuth;