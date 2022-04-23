import React,  { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import LottieView from "lottie-react-native";
import teste from "./assets/teste.json";
import door from "./assets/door.json";
import alertDoor from "./assets/alertDoor.json";
import openDoor from "./assets/openDoor.json";

export default function App() {
  const [isDoorSelected, setIsDoorSelected] = useState("");
  const [isOpenADoor, setOpenADoor] = useState("");
  const [numberDoor, setNumberDoor] = useState("");
  const [peperDoor, setPeperDoor] = useState("");

  const selectDoor = (door: string) => {
    setIsDoorSelected(door);
  };

  const openADoor = (door: string) => {
    setOpenADoor(door);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Search The Peppe</Text>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              isDoorSelected === "1" ?
               openADoor("1")
                : 
              selectDoor("1");
            }}
            style={{
              height: 200,
              width: 200,
              backgroundColor: "#fff",
              position: "absolute",
            }}
          >
            <View style={{ display: isDoorSelected === "1" ? "flex" : "none" }}>
              <LottieView
                source={alertDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isDoorSelected !== "1" ? "flex" : "none" }}>
              <LottieView
                source={door}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isOpenADoor === "1" ? "flex" : "none" }}>
              <LottieView
                source={openDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View
              style={{
                display:
                  peperDoor === "1" && isOpenADoor === "1" ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <LottieView
                source={teste}
                style={{
                  marginTop: 1,
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              bottom: 45,
              right: 50,
              backgroundColor: "red",
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#fff",
              textAlign: "center",
              fontSize: 30,
              color: "#000",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            1
          </Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              isDoorSelected === "2" ? openADoor("2") : selectDoor("2");
            }}
            style={{
              height: 200,
              width: 200,
              backgroundColor: "#fff",
              position: "absolute",
            }}
          >
            <View style={{ display: isDoorSelected === "2" ? "flex" : "none" }}>
              <LottieView
                source={alertDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isDoorSelected !== "2" ? "flex" : "none" }}>
              <LottieView
                source={door}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isOpenADoor === "2" ? "flex" : "none" }}>
              <LottieView
                source={openDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View
              style={{
                display:
                  peperDoor === "2" && isOpenADoor === "2" ? "flex" : "none",
              }}
            >
              <LottieView
                source={teste}
                style={{
                  marginTop: 1,
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>

            <Text
              style={styles.buttonNumber}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              isDoorSelected === "3" ? openADoor("3") : selectDoor("3");
            }}
            style={{
              height: 200,
              width: 200,
              backgroundColor: "#fff",
              position: "absolute",
            }}
          >
            <View style={{ display: isDoorSelected === "3" ? "flex" : "none" }}>
              <LottieView
                source={alertDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isDoorSelected !== "3" ? "flex" : "none" }}>
              <LottieView
                source={door}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View style={{ display: isOpenADoor === "3" ? "flex" : "none" }}>
              <LottieView
                source={openDoor}
                style={{
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <View
              style={{
                display:
                  peperDoor === "3" && isOpenADoor === "3" ? "flex" : "none",
              }}
            >
              <LottieView
                source={teste}
                style={{
                  marginTop: 1,
                  height: 200,
                  backgroundColor: "#fff",
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
            <Text
              style={styles.buttonNumber}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="0"
          onChangeText={(text) => setNumberDoor(text)}
          secureTextEntry={true}
          value={numberDoor}
          style={styles.iputText}
        />
        <TouchableOpacity
          onPress={() => {
            setPeperDoor(numberDoor);
          }}
        >
          <Text
            style={styles.textButton}
          >
            PLAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setOpenADoor("");
            setIsDoorSelected("");
            setNumberDoor("");
            setPeperDoor("");
          }}
        >
          <Text
            style={styles.textButton}
          >
            RESET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", fontStyle: "italic" },
  textButton: {
    backgroundColor: "grey",
    width: 100,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    alignContent: "center",
    justifyContent: "center",
    margin: 5,
    marginBottom: 10,
  },
  iputText:{
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    margin: 5,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  buttonNumber: {
    backgroundColor: "red",
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    color: "#000",
    alignContent: "center",
    justifyContent: "center",
  }
});
