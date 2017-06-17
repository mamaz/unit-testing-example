/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View
} from 'react-native';

import { getGasolineData } from './src/Services/GasolineServices';
import gasolineCell from './src/Components/GasolineCell';
import rowGasolineData from './src/ViewModels/GasolineViewModel';
import Button from './src/Components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    flex: 1
  },
  activity: {

  }
});

export default class UnitTestingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    this._refresh();
  }

  _refresh = () => {
    this.state.loading = true;

    // api call
    getGasolineData()
    .then(response => response.DKI.map(item => rowGasolineData(item)))
    .then((gasolines) => {
      this.setState({
        data: gasolines
      });
      this.state.loading = false;
    }).catch((error) => {
      this.state.loading = false;
    });
  }

  _refreshHandler = () => {
    this._refresh();
  }

  render() {
    const isLoading = this.state.loading;
    return (
      isLoading ?
        <ActivityIndicator style={styles.activity} /> :
        (
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={gasolineCell}
              style={styles.flatList}
            />
            <Button onPress={this._refreshHandler}/>
          </View>
        )
    );
  }
}

AppRegistry.registerComponent('UnitTestingExample', () => UnitTestingExample);
