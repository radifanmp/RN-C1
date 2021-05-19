import React from 'react';
import {View, ScrollView} from 'react-native'

//Component Import
import Header from '../components/Headers';
import Content from '../components/Content';

const Home = () => {
    return(
        <View>
            <Header title='Home'/>
        <ScrollView>
            <Content/>
        </ScrollView>
        </View>
    )
}
export default Home

