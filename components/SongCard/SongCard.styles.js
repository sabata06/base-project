import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text_container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
  },
  info: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
  },
  year: {
    marginLeft: 10,
    color: "gray",
    fontWeight: "bold",
    fontSize: 12,
  },
  soldout: {
    borderWidth: 1,
    borderColor:"red",
    padding: 5,
    borderRadius:5,
 
  },
  soldout_text: {
    color: "red",
  },
  content_container:{
    flexDirection:"row",

  }
});
