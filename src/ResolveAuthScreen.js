import React,{useContext,useEffect} from 'react';
import { Context as AuthContext } from './context/AuthContext' ;
const ResolveAuthScreen = ({navigation}) => {
    const { tryLocalSignin } = useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignin(navigation.navigate);
      },[]);
      return null;
}
export default ResolveAuthScreen;
