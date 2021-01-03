
import React,{useContext,useState,useEffect} from 'react';
import { Context as AuthContext } from '../context/AuthContext' ;

// create a component
export const PartiesData = () => {
    const [partiesdata,setPartiesdata] = useState([]);
    const {parties} = useContext(AuthContext);

    useEffect(async()=>{
       const partiess= await parties();
       setPartiesdata(partiess);
    },[])

    return partiesdata
};




