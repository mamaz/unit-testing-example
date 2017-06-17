/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  ActivityIndicator,
  View,
  Text,
  Dimensions
} from 'react-native';

import { getGasolineData } from './src/Services/GasolineServices';
import gasolineCell from './src/Components/GasolineCell';
import rowGasolineData from './src/ViewModels/GasolineViewModel';
import Button from './src/Components/Button';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  flatList: {
    flex: 1
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class UnitTestingExample extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      data: this.ds.cloneWithRows([]),
      loading: false
    };
  }

  componentDidMount() {
    console.log("Did mount");
    this._refresh();
  }

  _refresh = () => {
    console.log("Refresh");
    this.setState({
      loading: true
    });

    // api call
    getGasolineData()
    .then(response => {
      return response.data.DKI.map(item => rowGasolineData(item))
    })
    .then((gasolines) => {
      console.log("Parsed data", gasolines);
      this.setState({
        data: this.ds.cloneWithRows(gasolines),
        loading: false
      });

    }).catch((error) => {
      console.log('Error', error);
      this.setState({
        loading: false
      })
    });
  }

  _refreshHandler = () => {
    this._refresh();
  }

  render() {
    const isLoading = this.state.loading;

    return (
      isLoading ?
        (
          <View style={{ flex: 1 }}>
            <ActivityIndicator style={styles.activity}/>
          </View>
        )
        :
        (
          <View style={styles.container}>
            <ListView
              dataSource={this.state.data}
              renderRow={gasolineCell}
              enableEmptySections={true}
              style={styles.flatList}
            />
            <Button text={'Refresh'} onPress={this._refreshHandler}/>
          </View>
        )
    );
  }
}

AppRegistry.registerComponent('UnitTestingExample', () => UnitTestingExample);
