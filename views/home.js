import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import useAxios from 'axios-hooks';

import { styleGlobal } from '../styles-global';

const HomePage = ({navigation}) => {

    const [isSelected, setIsSelected] = useState(1);

    const [{ data, loading, error }, refetch] = useAxios(
        `https://c98d-36-73-35-112.ngrok-free.app/api/materi/materi`
    )
    const val = data?.data.find((v) => v.id === Number(isSelected));

    return(
        <View style={styleGlobal.home}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image style={{width: 164, height: 36, marginTop: 69}} source={require("../assets/wayang.png")}/>
                <Text style={{color: "#6D6969", marginRight: 110, marginTop:32, fontSize: 14}}>Mari kenali budaya wayang kita.</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('search')}} style={styleGlobal.search}>
                    <Text style={{color: '#ABABAB'}}>Cari nama tokoh wayang...</Text>
                    <Image style={{width: 16, height: 16}} source={require('../assets/icon/Magnify.png')}/>
                </TouchableOpacity>
                <ScrollView style={{marginLeft: 48, maxHeight: 32}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        data?.data.map((va, i)=> (
                            <TouchableOpacity key={i} style={isSelected == va?.id ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(va?.id)}}>
                                <Text style={{color: 'white'}}>{va?.subject}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                
                <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: val?.id})}}>
                            <Image style={{width: 62, height: 62}} source={{uri: `${val?.image}`}}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>{val?.subject}</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>{val?.isi}</Text>
                            </View>
                        </TouchableOpacity>
            </View>

            <View style={styleGlobal.bottomNavigationBar}>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Message.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('home')}}>
                    <Image style={{width: 20, height: 20, marginHorizontal: 88}} source={require('../assets/icon/Home.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Like.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
} 
export default HomePage;