import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './FilmBanner.styles';

const FilmBanner = () => {
  return (
    <View>
      <Image
        source={require('../assets/film_banner.jpeg')}
        style={styles.image}
      />
    </View>
  );
};

export default FilmBanner;
