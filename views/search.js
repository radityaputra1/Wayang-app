import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import axios from "axios";

import { styleGlobal } from "../styles-global";

const Search = ({ navigation }) => {
  const [isSearch, setIsSearch] = useState({
    search: "",
  });
  const [materi, setMateri] = useState([]);
  useEffect(() => {
    getMateri();
  }, []);

  const getMateri = () => {
    axios
      .get("https://c98d-36-73-35-112.ngrok-free.app/api/materi/materi")
      .then((res) => {
        setMateri(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const filterlist = (list) => {
    return list.filter((ListItem) => {
      return ListItem?.subject.toLowerCase().includes(isSearch.search.toLowerCase());
    });
  };

  return (
    <View style={styleGlobal.mainSearch}>
      <View
        style={{
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 18,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Image
            style={{ width: 10, height: 18, marginTop: 60 }}
            source={require("../assets/icon/Back.png")}
          />
        </TouchableOpacity>
        <View></View>
      </View>
      <Image
        style={{ width: 164, height: 36 }}
        source={require("../assets/wayang.png")}
      />
      <View style={styleGlobal.search}>
        <TextInput
          placeholder="Cari nama tokoh wayang..."
          placeholderTextColor={"#ABABAB"}
          onChangeText={(search) => setIsSearch({ search })}
        />
        <Image
          style={{ width: 16, height: 16 }}
          source={require("../assets/icon/Magnify.png")}
        />
      </View>
      {filterlist(materi)?.map((listItem, index) => (
        <TouchableOpacity
          key={index}
          style={styleGlobal.listContainer}
          onPress={() => {
            navigation.navigate("detail", { number: 1 });
          }}
        >
          <Image
            style={{ width: 62, height: 62 }}
            source={{uri : `${listItem?.image}`}}
          />
          <View style={styleGlobal.textContainer} key={index}>
            <Text style={styleGlobal.textHead}>{listItem?.subject}</Text>
            <Text style={styleGlobal.textDesc} numberOfLines={3}>
              {listItem?.isi}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Search;
