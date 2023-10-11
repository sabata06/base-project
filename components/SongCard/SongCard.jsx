import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./SongCard.styles";

export default function SongCard({ song }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUrl }} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{song.title} </Text>
        <View style={styles.content_container}>
          <View style={styles.info}>
            <Text>{song.artist} </Text>
            <Text style={styles.year}>{song.year} </Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soldout}>
              <Text style={styles.soldout_text}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
