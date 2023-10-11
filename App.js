import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  SafeAreaView,
} from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const [list, setList] = useState(music_data)
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()
      return currentTitle.indexOf(searchedText) > -1
    })
    setList(filteredList)
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.song_container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  song_container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
