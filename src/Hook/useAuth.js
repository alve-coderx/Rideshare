import { useContext } from "react";
import { TextContext } from "../Context/Provider";

const useAuth = () => {
    return useContext(TextContext)
}

export default useAuth;