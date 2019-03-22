// import React ,{Component} from 'react';
// import {Provider} from 'react-redux';
// import {createStore , applyMiddleware} from 'redux';
// import Reducer from './components/reducers/Reducer';
// import Counter from './Counter';
// import {createLogger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga'
// import {watcherSaga} from './components/sagas/Saga'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// import { PersistGate } from 'redux-persist/integration/react'

// //REDUX_PERSIST
// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler : autoMergeLevel2
// }

// const persistedReducer = persistReducer(persistConfig, Reducer);

// //REDUX_SAGA
// const sagaMiddleware = createSagaMiddleware()

// //LOGGER
// const logger = createLogger({
//   collapsed : true
// })

// //STORE
// const store = createStore(persistedReducer , applyMiddleware( sagaMiddleware , logger));

// const persistor = persistStore(store)

// //RUNNING SAGAS

// sagaMiddleware.run(watcherSaga)

// class App extends Component {
//   render(){
//     return(
//       <Provider store = {store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <Counter/>
//         </PersistGate>
//       </Provider>
//     )
//   }
// }

// export default App;

// import React, {Component} from 'react';
// import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component{
//   constructor(props){
//       super(props);
//       this.state = {
//         isLoading : true ,
//         dataSource : null
//       }
//   }

//   componentDidMount() {
//     return fetch('https://facebook.github.io/react-native/movies.json')
//               .then(res => res.json())
//               .then (data => {
//                 this.setState({
//                   isLoading : false,
//                   dataSource : data.movies
//                 })
//               })
//               .catch(error =>{
//                 console.log('error' , error)
//               })
//   }

//   render() {
//     if(this.state.isLoading){
//       return(
//         <View style={styles.container}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }
//     else{
//       let movies = this.state.dataSource.map((val,key)=> {
//         return  <View key = {key} style={styles.api}>
//                     <Text>{val.title}</Text>
//                 </View>

//       });
//       return(
//         <View style = {styles.container}>
//           {movies}
//         </View>
//       )
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   api : {
//     flex : 1,
//     alignSelf : 'stretch',
//     margin : 10 ,
//     alignItems : 'center',
//     justifyContent : 'center',
//     borderBottomWidth : 1,
//     borderBottomColor : 'powderblue'
//   }
// });

//React Navigation

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { createSwitchNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

//Screen 1

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

//Screen 2

class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent Dashboard </Text>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
