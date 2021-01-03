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
            nav('Connexion');
        }
    };


const signup = (dispatch) => async ({nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau},nav) => {
        try {
            const response = await tachkilaApi.post('/signup',{nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau});
            await AsyncStorage.setItem('token', response.data.token);
            console.log(response.data);
            dispatch({ type: 'signin', payload: response.data.token });
            nav('TabNavigator');

        } catch (err) {
            console.log(err);
            dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de l\'inscription'})
        }
    };
    const parties = (dispatch) => async () => {
        try {

            const response = await tachkilaApi.get('/parties');
            dispatch({ type: 'addpartie', payload: response.data });
            

        } catch (err) {
            console.log(err);
        }
    };


const signin = (dispatch) => async ({email,motdepasse},nav) => {
    try {
        const response = await tachkilaApi.post('/signin',{email,motdepasse});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        nav('TabNavigator');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de la connexion'})
    }
    };

const signout = (dispatch) => async (nav) => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        nav('Connexion');
    };

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_mrssage'});
    };

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup,signin,signout,clearErrorMessage,tryLocalSignin ,parties},
    { token: null, errorMessage: '',partiess:[] }
);