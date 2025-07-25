import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SongCard = ({ song }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: song.cover }} style={styles.cover} />
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
    </View>
  );
};