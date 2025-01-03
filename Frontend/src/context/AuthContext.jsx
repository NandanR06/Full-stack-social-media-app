import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react";
const data =
 {
  userName:"Nandan R",
  email:"nandan6102003@gmail.com",
  password:"$2a$10$bmDga3zTh8PtNOvqDJzNiODxfLofa7cs4dgPhQcAIcqUGtBLcudU2",
  profilePicture:"",
  coverPicture:"",
  followers:["6743192a69215316f510b30a","67432ff36c8ebab5ce60d9c5"],
  following:[],
  isAdmin:false,
  createdAt:{"$date":{"$numberLong":"1732454214327"}},
  updatedAt:{"$date":{"$numberLong":"1734519402515"}},
  __v:{"$numberInt":"0"},
  desc:" lerning"

}


const INITIAL_STATE = {
  user: data,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
