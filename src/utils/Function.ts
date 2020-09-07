import Cookies from 'js-cookie';

const TokenKey = 'user_token'
const UserName = 'user_name'
const UserItCode = 'itcode'


export const getToken = () => Cookies.get(TokenKey);

export const isLogin = () => {
  return !!(Cookies.get(TokenKey) && Cookies.get(UserName));
}

export const setToken = (token: string) => {
  Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  Cookies.remove(TokenKey)
  Cookies.remove(UserName)
  Cookies.remove(UserItCode)
}
