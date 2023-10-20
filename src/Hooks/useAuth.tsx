import { createContext, FC, useContext, useEffect } from "react";
import usePostCustomFetch from "./usePostCustomFetch";
import usePersistentState from "./usePersistentState";
import requestUrls from "../Backend/requestUrls";
import { useNavigation } from "@react-navigation/native";
import { RouterKey } from "../Routes/Routes";

const useAuthService = () => {
  const { set: setToken } = usePersistentState("token");
  const navigation = useNavigation();
  const {
    response: loginResponse,
    error: loginError,
    loading: loginLoading,
    fetcher: sendLoginPayload,
  } = usePostCustomFetch<any, any>(requestUrls.authLogin);

  const logUserIn = (username: string, password: string) => {
    const payload = {
      username: username,
      password: password,
    };
    sendLoginPayload(payload);
  };

  const setAuthFields = (props?: any) => {
    setToken(props ? props.token : "");
  };

  useEffect(() => {
    if (loginResponse) {
      if (!loginResponse.non_field_errors) {
        setAuthFields(loginResponse?.status ? undefined : loginResponse);
        navigation.navigate(RouterKey.BOTTOM_TAB_NAVIGATOR as never);
      }
    }
    // eslint-disable-next-line
  }, [loginError, loginResponse, loginLoading]);

  return {
    logUserIn,
  };
};

const initialState = {
  logUserIn: (user: string, pass: string) => undefined,
};

export const AuthContext = createContext<
  ReturnType<typeof useAuthService> | typeof initialState
>(initialState);

export const AuthProvider: FC<any> = ({ children }) => {
  const auth = useAuthService();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
