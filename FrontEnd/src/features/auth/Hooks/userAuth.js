import { useContext } from "react";
import { AuthContext } from "./../auth.context";
import { register, login, logOut, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;
  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const data = await login({ email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async ({ userName, email, password }) => {
    setLoading(true);
    try {
      const data = await register({ userName, email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogOut = async () => {
    setLoading(true);
    try {
      const data = await logOut(null);
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { user, loading, handleLogOut, handleLogin, handleRegister };
};
