import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";
import CircularProgress from "react-native-circular-progress-indicator";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Pedometer } from "expo-sensors";
import styles from "./styles";
import bgImage from "../../../assets/bg.jpg";
import formatCash from "../../utils/formatCash";
import { COLOR } from "../../configs/index";

const data = [
  { quarter: "Mon", earnings: 1000 },
  { quarter: "Tue", earnings: 9500 },
  { quarter: "Wed", earnings: 7250 },
  { quarter: "Thu", earnings: 8000 },
  { quarter: "Fri", earnings: 3000 },
  { quarter: "Sat", earnings: 4000 },
  { quarter: "Sun", earnings: 6000 },
];

function HomeScreen() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  let _subscription;

  const _subscribe = () => {
    _subscription = Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setIsPedometerAvailable(result);
      },
      (error) => {
        setIsPedometerAvailable("Could not get isPedometerAvailable: " + error);
      }
    );

    const end = new Date();
    const start = new Date();
    const noTime = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );
    // start.setDate(end.getDate() - 1); // 24h ago
    Pedometer.getStepCountAsync(noTime, end).then(
      (result) => {
        setPastStepCount(result.steps);
      },
      (error) => {
        setPastStepCount("Could not get stepCount: " + error);
      }
    );
  };

  const _unsubscribe = () => {
    _subscription && _subscription.remove();
    _subscription = null;
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, [_subscribe()]);

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.welcome}>
              <View>
                <Text style={styles.welcomeText}>Hi, Capoo</Text>
                <Text style={styles.welcomeTime}>Tue, 9 Aug</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/7b/56/f8/7b56f810fd57419fd9dc44b85372fca3.jpg",
                  }}
                  style={styles.avatar}
                />
              </View>
            </View>
            <View style={styles.countCard}>
              <View style={styles.stepsCard}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.stepsCardTitle}>Steps to day</Text>
                  <FontAwesome5
                    name="walking"
                    color={COLOR.PRIMARY}
                    size={30}
                    style={{ marginLeft: 5 }}
                  />
                </View>
                <View style={styles.stepsCardArea}>
                  <CircularProgress
                    value={pastStepCount}
                    activeStrokeWidth={13}
                    inActiveStrokeColor={COLOR.PRIMARY}
                    activeStrokeColor={COLOR.PRIMARY}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={COLOR.PRIMARY}
                    progressValueFontSize={23}
                    maxValue={10000}
                  />
                </View>
              </View>
              <View style={styles.rightCountCard}>
                <View style={styles.stepsCurrentCard}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.stepsCardTitle}>Current Step</Text>
                    <FontAwesome5
                      name="running"
                      color={COLOR.PRIMARY}
                      size={20}
                      style={{ marginLeft: 5 }}
                    />
                  </View>
                  <View style={styles.stepsCardArea}>
                    <Text style={styles.stepsNumber}>{currentStepCount}</Text>
                  </View>
                </View>
                <View style={styles.caloriesCard}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.stepsCardTitle}>Calories</Text>
                    <FontAwesome5
                      name="bolt"
                      color={COLOR.PRIMARY}
                      size={20}
                      style={{ marginLeft: 5 }}
                    />
                  </View>
                  <View style={styles.stepsCardArea}>
                    <Text style={styles.stepsNumber}>{pastStepCount / 20}</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableHighlight
              style={styles.giftCard}
              onPress={() => console.log("hihi")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.stepsCardTitleLight}>Coin</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.coinCardTitleLight}>
                    {formatCash((pastStepCount * 6).toString())}
                  </Text>
                  <FontAwesome5
                    name="coins"
                    color={"white"}
                    size={30}
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.chartCard}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.stepsCardTitle}>Weekly</Text>
                <FontAwesome5
                  name="calendar"
                  color={"gray"}
                  size={12}
                  style={{ marginLeft: 5 }}
                />
              </View>
              <VictoryChart
                width={300}
                height={230}
                theme={VictoryTheme.material}
                padding={{ top: 40, bottom: 30, left: 12, right: 30 }}
              >
                <VictoryAxis
                  style={{
                    axis: { stroke: "none" },
                    ticks: { stroke: "none" },
                    grid: { stroke: "transparent" },
                  }}
                  standalone={false}
                />
                <VictoryBar
                  cornerRadius={{ top: 7, bottom: 7 }}
                  style={{
                    data: { fill: COLOR.PRIMARY },
                  }}
                  alignment="middle"
                  data={data}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                  x="quarter"
                  y="earnings"
                />
              </VictoryChart>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomeScreen;
