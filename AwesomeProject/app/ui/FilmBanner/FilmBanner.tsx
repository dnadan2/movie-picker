import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './FilmBanner.styles';

interface Props {
  imageUrl: string;
}

const FilmBanner: React.FC<Props> = ({ imageUrl }) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg',
        }}
        style={styles.image}
        testID="film-banner-image"
      />
    </View>
  );
};

export default FilmBanner;
