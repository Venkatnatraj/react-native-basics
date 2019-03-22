import React , {Component} from 'react';
import {View , Text} from 'react-native';

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
        setInterval(() => (
            this.setState(previous =>({
                isLoading: !previous.isLoading
            }))            
        ), 1000);
    }
    render(){
        if(!this.state.isLoading) return null
        return(
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}


// import React, {Component} from 'react';
// import {Image, StyleSheet, Text, View} from 'react-native';
// import Child from './components/Child';


// export default class App extends Component{
//   render() {
//     const pic ={
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     }
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to React Native!</Text>
//         <Text>To get started, edit App.js</Text>
//         <Image source={pic} style={{width: 193, height: 110}}/>
//         <Child name = "Hello"/>
//         <Child name = "Hell"/>
//         <Child name = "Heo"/>
//       </View>
//     );
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
// });
