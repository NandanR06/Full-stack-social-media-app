
export const LoginStarts = (userCredential) => ({
  type: "Login_starts",
});

export const LoginSucess = (user) => ({
  type: "Login_Success",
  payload : user
});

export const LoginFailure = (error) => ({
  type: "Login_Failure",
  payload : error
});
