import  AsyncStorage  from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext' ;
import tachkilaApi from '../api/tachkila';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_mrssage':
                return { ...state , errorMessage: '' };
        case 'signout':
            return { token:null , errorMessage: '' };
        case 'addpartie':
            return { ...state, partiess: action.payload};
        default:
            return state;
    }
};
const tryLocalSignin = (dispatch) => async (nav) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({ type: 'signin', payload: token });
            nav('TabNavigator');
        }else{
            nav('Acceuil');
        }
    };


const signup = (dispatch) => async ({nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau},nav) => {
        try {
            const response = await tachkilaApi.post('/signup',{nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau});
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('iduser', response.data.userid);
            
            dispatch({ type: 'signin', payload: response.data.token });
            nav('TabNavigator');

        } catch (err) {
            alert('Verifier vos information')
            console.log(err);
            dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de l\'inscription'})
        }
    };
    const partie = (dispatch) => async ({userId,titre,a,niveau,dateestime,localisation,description,tranchedage}, nav) => {
        
       console.log({userId,titre,a,niveau,dateestime,localisation,description,tranchedage});
        const response = await tachkilaApi.post('/partie', {userId:userId,titre,nombre:a,niveau,dateestime,localisation,description,tranchedage})
        nav('Liste');
                
              
               
            
         
            
    
       
    };


const signin = (dispatch) => async ({email,motdepasse},nav) => {
    try {
        const response = await tachkilaApi.post('/signin',{email,motdepasse});
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('iduser', response.data.userid);
        dispatch({ type: 'signin', payload: response.data.token });
        nav('TabNavigator');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de la connexion'})
        alert('Login ou mot de passe est invalide')
    }
    };

const signout = (dispatch) => async (nav) => {
        await AsyncStorage.removeItem('iduser');
        await AsyncStorage.removeItem('token');
        nav('Connexion');
        

        dispatch({type:'signout'});

        
    };

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_mrssage'});
    };


    export const { Provider, Context } = createDataContext(
        authReducer,
        { signup, signin, signout, clearErrorMessage, tryLocalSignin, partie },
        { token: null, errorMessage: '' }
    );