import { StyleSheet } from "react-native";
import { COLOR } from "../../configs/index";
import { Platform } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
    height: "100%",
  },
  scrollContainer: {
    paddingHorizontal: 30,
  },
  welcome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderColor: COLOR.PRIMARY,
    borderWidth: 3,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  welcomeTime: {
    marginTop: 5,
    color: "gray",
    fontSize: 15,
  },
  stepsCard: {
    backgroundColor: "white",
    flex: 1,
    height: 220,
    borderRadius: 20,
    padding: 18,
    marginRight: 15,
    shadowColor: "#8d99ae",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepsCardTitle: {
    color: "gray",
    fontSize: 12,
    fontWeight: "600",
  },
  stepsNumber: {
    color: COLOR.PRIMARY,
    fontSize: 30,
    fontWeight: "700",
  },
  stepsCardArea: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  countCard: {
    flexDirection: "row",
  },
  stepsCurrentCard: {
    backgroundColor: "white",
    marginBottom: 15,
    flex: 1,
    height: 100,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#8d99ae",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  caloriesCard: {
    backgroundColor: "white",
    flex: 1,
    height: 100,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#8d99ae",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rightCountCard: {
    flex: 1,
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#8d99ae",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  },
  giftCard: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#8d99ae",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  },
  stepsCardTitleLight: {
    color: "white",
    fontWeight: "600",
  },
  coinCardTitleLight: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
    marginLeft: 5,
  }
});
