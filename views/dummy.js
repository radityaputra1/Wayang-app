import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Dummy = (route) => {
    const numberId = route.params
    return (
        <View>
            <Text>{JSON.stringify(numberId)}</Text>
        </View>
    );
}
export default Dummy;