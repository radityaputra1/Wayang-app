import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import useAxios from "axios-hooks";

import { styleGlobal } from "../styles-global";

const Quiz = ({ route, navigation }) => {
  //passing params
  const { numero } = route.params;
  //

  //state page
  //state nilai
  //state jawaban
  const [page, setPage] = useState(1);
  const [nilai, setNilai] = useState(0);
  const [jawaban, setJawab] = useState("");
  //

  //api
  const [{ data, loading, error }, refetch] = useAxios(
    `https://c98d-36-73-35-112.ngrok-free.app/api/quizzes/level/${page}`
  )
  const val = data?.data.find((v) => v.categoryId === Number(numero));
  //

  //button handler
  const handleNext = () => {
    refetch
    setPage(page == 4 ? 1 : page + 1);
    if (jawaban == val?.key) {
      setNilai(nilai + 1);
    } else {
    }
  };

  const handlePrev = () => {
    refetch
    if (page == 1 || page >= 4) {
      setPage(page - 0);
      setNilai(nilai - 0);
    } else if (nilai == 0) {
      setPage(page - 1);
      setNilai(nilai - 0);
    } else {
      setPage(page - 1);
      setNilai(nilai - 1);
    }
  };
  //

  //timer 
  const [seconds, setSeconds] = useState(0);
  const [Minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (seconds == 60) {
      setSeconds(0);
      setMinutes(Minutes+1)
    }

    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds+1)
    }, 1000)
    return () => clearInterval(interval);
  }, [seconds]);
  //

  //progress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 9000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  //

  //review page
  if (page == 4) {
    return(
    <View style={styleGlobal.mainQuiz}>
      <View style={styleGlobal.headMateri}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Image
            style={{ width: 10, height: 18 }}
            source={require("../assets/icon/Back.png")}
          />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: 500 }}>
          {page == 4 ? "Hasil Quiz" : "Quiz"}
        </Text>
        <View></View>
      </View>
      <View
        style={{
          backgroundColor: "#A6A69C",
          width: 326,
          height: 150,
          borderRadius: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{ width: 110, height: 110 }}
          source={require("../assets/elipse.png")}
        />
        <View style={{ position: "absolute", left: 45, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400 }}>
            <Text style={{ fontWeight: 600, fontSize: 20 }}>{nilai}</Text> / 3
          </Text>
          <Text style={{ color: "white", fontSize: 12, fontWeight: 400 }}>
            skor kamu
          </Text>
        </View>
        <Text
          style={{
            maxWidth: 153,
            fontWeight: 600,
            fontSize: 17,
            color: "white",
          }}
        >
          Selamat kamu telah menyelesaikan Quiz dengan score{" "}
          {nilai == 1 ? "33" : nilai == 2 ? "66" : nilai ? "100" : 0}%
        </Text>
      </View>
      <View style={styleGlobal.quizReview}>
        <View style={{ width: 326, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: 24,
              marginBottom: 28,
            }}
          >
            <View style={styleGlobal.jawaban}>
              <Text style={styleGlobal.textJawaban}>{nilai}</Text>
              <Text style={styleGlobal.textJawaban}>Jawaban Benar</Text>
            </View>
            <View style={styleGlobal.jawabanSalah}>
              <Text style={styleGlobal.textJawaban}>{3 - nilai}</Text>
              <Text style={styleGlobal.textJawaban}>Jawaban Salah</Text>
            </View>
          </View>
          <TouchableOpacity style={styleGlobal.buttonCheck}>
            <Text style={{ fontWeight: 500, color: "white" }}>Cek Jawaban</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {setPage(1); setNilai(0); setJawab(''); setMinutes(0), setSeconds(0)}}
            style={styleGlobal.buttonCoba}
          >
            <Image
              style={{ width: 16, height: 16, marginRight: 8 }}
              source={require("../assets/icon/Retry.png")}
            />
            <Text style={{ fontWeight: 500, color: "white" }}>
              Coba Lagi Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }
  //

  //page quiz
  return (
    <View style={styleGlobal.mainQuiz}>
      <View style={styleGlobal.headMateri}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Image
            style={{ width: 10, height: 18 }}
            source={require("../assets/icon/Back.png")}
          />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: 500 }}>
          {page == 4 ? "Hasil Quiz" : "Quiz"}
        </Text>
        <View></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '85%', marginTop: 40}}>
        <Text style={styleGlobal.quizSubject}>
          {val?.subject}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{height: 22, width: 22}} source={require('../assets/icon/recover.png')}/>
          <Text style={styleGlobal.timer}>
            {Minutes} : {seconds < 10 ? '0' : ''}{seconds}
          </Text>
        </View>
      </View>
      <View style={{width: 350, backgroundColor: '#A6A69C', borderRadius: 5, marginBottom: 50}}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <View
        style={styleGlobal.contentQuiz}
      >
          <View>
            <View style={{ width: "100%", marginBottom: 8 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: 400,
                  marginTop: 52,
                }}
              >
                <Text style={{ fontWeight: 600, fontSize: 20 }}>
                  {val?.levelId}
                </Text>{" "}
                / 3
              </Text>
              <Text
                style={{
                  maxWidth: 300,
                  fontWeight: 600,
                  fontSize: 17,
                  color: "white",
                }}
              >
                {val?.quiz}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={
                  jawaban == "a"
                    ? styleGlobal.quizPilihan1
                    : styleGlobal.quizPilihan
                }
                onPress={() => {
                  setJawab("a");
                }}
              >
                <Text style={styleGlobal.textPilihan}>
                  <Text style={{ fontWeight: 700 }}>A. </Text>
                  {val?.a}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  jawaban == "b"
                    ? styleGlobal.quizPilihan1
                    : styleGlobal.quizPilihan
                }
                onPress={() => {
                  setJawab("b");
                }}
              >
                <Text style={styleGlobal.textPilihan}>
                  <Text style={{ fontWeight: 700 }}>B. </Text>
                  {val?.b}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  jawaban == "c"
                    ? styleGlobal.quizPilihan1
                    : styleGlobal.quizPilihan
                }
                onPress={() => {
                  setJawab("c");
                }}
              >
                <Text style={styleGlobal.textPilihan}>
                  <Text style={{ fontWeight: 700 }}>C. </Text>
                  {val?.c}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  jawaban == "d"
                    ? styleGlobal.quizPilihan1
                    : styleGlobal.quizPilihan
                }
                onPress={() => {
                  setJawab("d");
                }}
              >
                <Text style={styleGlobal.textPilihan}>
                  <Text style={{ fontWeight: 700 }}>D. </Text>
                  {val?.d}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styleGlobal.bottomBarMateri}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {page == 1 ? (
              <View></View>
            ) : (
              <TouchableOpacity
                onPress={handlePrev}
                style={{
                  flexDirection: "row",
                  padding: 12,
                  backgroundColor: "#A6A69C",
                  borderRadius: 8,
                  maxWidth: 103,
                }}
              >
                {page == 4 ? (
                  <Image
                    style={{
                      height: 19,
                      width: 19,
                      marginTop: 2,
                      marginRight: 7,
                    }}
                    source={require("../assets/icon/Timer.png")}
                  />
                ) : (
                  ""
                )}
                <Text style={{ fontWeight: 500, color: "white" }}>
                  {page == 4 ? "15:00" : "Sebelumnya"}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                backgroundColor: "#6D6969",
                borderRadius: 8,
                paddingHorizontal: 24,
              }}
            >
              <Text style={{ fontWeight: 500, color: "white", fontSize: 16 }}>
                {page == 3
                  ? "Seleseai"
                  : page == 4
                  ? "Mulai Quiz"
                  : "Berikutnya"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Quiz;

const styles = StyleSheet.create({
  progress: {
    height: 10,
    backgroundColor: '#6D6969',
    borderRadius: 5,
  },
  progressText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});