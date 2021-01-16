import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
export const PATH='http://  ( VOTRE ADRESS IP ):3000';
 const instance = axios.create({
    baseURL: PATH
});
instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (err)=>{
        return Promise.reject(err);
    }
);
export default instance;
