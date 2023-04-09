import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styleGlobal } from '../styles-global';

const SplashScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const timeout = setTimeout(() => {
            setIsLoading (false)
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <View style={styleGlobal.splash}>
            <Image style={{maxWidth: 288, maxHeight: 63, marginBottom: 67, marginTop:108}} source={require("../assets/wayang.png")}/>
            <Image style={{maxWidth: 255, maxHeight: 424}} source={require("../assets/gunung.png")}/>
            {
                isLoading ? ( null ) :
                <View style={{marginTop:110, flexDirection: 'row', maxHeight: 50}}>
                    <TouchableOpacity style={styleGlobal.buttonLogin}  onPress={() => {navigation.navigate('home')}}>
                        <Text style={{fontSize:12, color: 'white'}}>Mulai Sekarang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
                        <Image style={{maxWidth: 48, maxHeight: 48, marginLeft: 41}} source={require("../assets/icon/backbut.png")}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}
export default SplashScreen;