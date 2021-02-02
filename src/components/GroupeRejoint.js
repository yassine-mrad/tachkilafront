import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ChatItem from './chat/ChatItemRejoint';
import api from '../api/tachkila';
import {useEffect, useState, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {FlatList} from 'react-native-gesture-handler';

export default function GroupeRejoint() {
  const {state} = useContext(AuthContext);
  // const [user,setUser] =useState();

  const [parties, setParties] = useState([]);

  const loadParties = () => {
    api.get('/parties').then((res) => {
      const parties = res.data;
      const partieRejoin = [];
      for (let i = 0; i < parties.length; i++) {
        for (let j = 0; j < parties[i].membre.length; j++) {
          if (parties[i].membre[j] === state.iduser) {
            partieRejoin.push(parties[i]);
          }
        }
      }

      setParties(partieRejoin);
    });
  };

  useEffect(() => {
    loadParties();
  }, []);

  return (
    <View>
      <FlatList
        data={parties}
        renderItem={({item}) => <ChatItem partie={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
