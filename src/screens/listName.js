import React from 'react';
import {View} from 'react-native';

//Import Component
import Greeting from '../components/Greeting'
import Header from '../components/Headers'

const ListName = () => {
    return(
        <View 
        style={{
            marginTop: 50
        }}>

            <Header title = "Props" />
            <Greeting name="Diaz" />
            <Greeting name="Rezaldi" />
            <Greeting name="Irham" />
        </View>
    )
}

export default ListName