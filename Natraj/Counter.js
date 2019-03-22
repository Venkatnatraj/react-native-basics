import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreator from './components/actions/Action'

class Counter extends Component{
    render() {
        console.log(this.props)
        const {count , history , increase , decrease , dele} = this.props;
        return (
        <View style={styles.container}>
            <View style={{flexDirection : 'row' , width : 200 , justifyContent : "space-around"}}>
            <TouchableOpacity>
                <Text style = {{fontSize : 20 , color : 'green'}} onPress={increase}>
                    Increase
                </Text>
            </TouchableOpacity>
            <Text style = {{fontSize : 20}}>{count}</Text>
            <TouchableOpacity>
                <Text style = {{fontSize : 20 , color : 'red'}} onPress = {decrease}>
                    Decrease
                </Text>
            </TouchableOpacity>
            </View>
            {history.map((el)=>(
                <View key = {el.id} onPress = {()=>dele(el.id)}>
                    <Text style={{justifyContent: 'center',backgroundColor: 'powderblue'}}>
                        {el.count}
                    </Text>
                </View>
            ))}
        </View>
        );
    }
}

const mapStateToProps = state=>({
    count : state.count,
    history : state.history
})

const mapDispatchToProps = dispatch=>({
    increase : ()=>dispatch(actionCreator.increase(5)),
    decrease : ()=>dispatch(actionCreator.decrease(2)),
    dele : (id)=>dispatch(actionCreator.delit(id))
})

export default connect (mapStateToProps , mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
