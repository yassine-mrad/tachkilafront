/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import authcontext from '../context/AuthContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PartiesData} from './PartiesData';
import {Context as AuthContext} from '../context/AuthContext';
import instance from '../api/tachkila';
import Moment from 'moment';
class Liste extends Component {
  static contextType = AuthContext;

  async componentDidMount() {
    this.setState({dataBackup: null, dataSource: null});
    const a = await instance.get('/parties');
    const tab = a.data;
    tab.reverse();
    this.setState({dataBackup: tab, dataSource: tab});
  }
  loadMessages = async () => {
    this.setState({dataBackup: null, dataSource: null});
    const a = await instance.get('/parties');
    const tab = a.data;
    tab.reverse();
    this.setState({dataBackup: tab, dataSource: tab});
  };
  contains = ({titre, localisation}, query) => {
    if (
      titre.toLowerCase().includes(query) ||
      localisation.toLowerCase().includes(query)
    ) {
      return true;
    }

    return false;
  };
  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();

      data = data.filter((l) => {
        return this.contains(l, query);
      });
      this.setState({
        dataSource: data,
      });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
      sampleText: 'Rejoindre',
    };
  }
  changeTextValue = () => {
    this.setState({sampleText: 'Invitation envoyée'});
  };

  _onPressButton() {
    <Text onPress={this.changeTextValue}>{this.state.sampleText}</Text>;
  }

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Details', {data: item})}>
      <View style={styles.item}>
        <View
          style={{
            left: '100%',
            flexDirection: 'row',
            paddingBottom: 10,
          }}>
          <FontAwesome5 name={'map-marker-alt'} size={20} left={50} />
          <Text style={{textAlign: 'left', marginLeft: 5}}>
            {item.localisation}
          </Text>
        </View>
        <View style={styles.contenu}>
          <Text style={styles.text}>{item.titre}</Text>
          <Text>Date: {Moment(item.dateestime).format('DD/MM/YYYY')}</Text>
          <Text>Heure: {Moment(item.dateestime).format('hh:mm')}</Text>
        </View>
        {/* <Button
                    onPress={this._onPressButton}
                    title="Change Text!"
                    color="#00ced1"
                /> */}
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 46,
            width: 289,
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingLeft: 10,
              alignItems: 'center',
              borderRadius: 50,
              marginBottom: 20,
            }}>
            <FontAwesome5
              name={'search'}
              style={{
                fontSize: 24,
                color: '#00818A',
              }}
            />
            <TextInput
              placeholder="Chercher une partie"
              style={{fontSize: 15, marginLeft: 15}}
              value={this.state.query}
              onChange={this.filterItem.bind(this)}></TextInput>
            <TouchableOpacity onPress={this.loadMessages}>
              <View style={{fontSize: 24, marginLeft: 105}}>
                <FontAwesome5
                  name={'redo-alt'}
                  style={{
                    fontSize: 24,
                    color: '#00818A',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 0,
    paddingBottom: 10,
    justifyContent: 'center',
    backgroundColor: '#00EFA1',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    flex: 1,
  },
  item: {
    flex: 2,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,

    borderRadius: 5,
    backgroundColor: 'white',
    width: 270,
    height: 170,
    padding: 10,
  },
  contenu: {
    flex: 2,
  },
});
export default Liste;
