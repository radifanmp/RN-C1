import React from 'react';
import { View,Text, FlatList } from 'react-native';

//Import Components
import Header from '../components/Headers';

const GetData = () => {
    const students = ["Diaz", "Fahreza", "Irham"]
    return(
        <View style={{alignItems: 'center'}}>
            <Header title="Get Data"/>
            {/* With Map */}
            {/* {students.map((student) => (
                <Text>{student}</Text>
            ))} */}

            {/* With Flatlist */}
            <FlatList data = {[
                {name: 'Diaz'}, {name: 'Irham'}, {name: 'Fadhil'}
            ]}
            renderItem= {({item}) => <Text>{item.name}</Text>} />
        </View>
    )
}

export default GetData