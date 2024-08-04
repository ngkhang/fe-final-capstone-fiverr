import axiosInstance from '@/lib/axios.customize';
import { accessTokenKey, AuthApi, tokenCybersoftKey } from '@/utils/constants';
import {
  setDataJSONStorage,
  setDataTextStorage
} from '@/utils/helpers';


interface SignInType {
  email: string;
  password: string;
}

interface SignUpType {
  name: string;
  email: string;
  password: string;
  birthday?: string;
  gender?: boolean;
  phone?: string;
  role?: string;
  skill?: string[];
  certification?: string[];
}

const signInApi = async (payload: SignInType) => {
  try {
    const { data, status } = await axiosInstance.post(AuthApi.SIGNIN, payload);
    setDataTextStorage(tokenCybersoftKey, data.content.token);
    setDataTextStorage(accessTokenKey, data.content.token);
    setDataJSONStorage('userInfo', data.content.user);
    return {
      statusCode: status,
      message: 'Login success',
    };
  } catch (error: any) {
    if (error.response) {
      if (error.response.data) {
        return {
          statusCode: error.response.data.statusCode,
          message: error.response.data.message,
        };
      }
    }
    return {
      message: error.message,
    };
  }
};

const signUpApi = async (payload: SignUpType) => {
  try {
    const { status } = await axiosInstance.post(AuthApi.SIGNUP, payload);
    return {
      statusCode: status,
      message: 'Create new account success',
    };
  } catch (error: any) {
    if (error.response) {
      if (error.response.data) {
        return {
          statusCode: error.response.data.statusCode,
          message: error.response.data.message,
        };
      }
    }
    return {
      message: error.message,
    };
  }
};

export { signInApi, signUpApi };
