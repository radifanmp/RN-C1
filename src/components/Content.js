import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Content = () => {

    let resourceImage = {
        uri : "https://www.akibanation.com/wp-content/uploads/2019/08/asian-boss-lola-interview.jpg"
    }

    function getBatch() {
        return 10+12
    }

    function handleGreeting(){
        alert("Hello Siswa & Siswi Dumbways")
    }

    const companyName = "Dumbways"

    return(
    <View>
        <Text>Wellcomet to {companyName} for Batch {getBatch()}</Text>

        <Image source={resourceImage} style={{
            height: 200,
            width: 'auto',
            marginTop: 20
        }}/>

        <TouchableOpacity
        onPress={()=> handleGreeting()}
        style={{
            backgroundColor: '#f5abc9',
            borderRadius: 10,
            height: 25,
            width: 'auto',
            marginTop: 20,
        }}
        >
            <Text 
            style={{
                color: '#FFFF',
                textAlign: 'center'
            }}>
                Click For The Event
            </Text>
        </TouchableOpacity>
    </View>
    )
}

export default Content