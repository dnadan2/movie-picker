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
        source={require(imageUrl)}
        style={styles.image}
        testID="film-banner-image"
      />
    </View>
  );
};

export default FilmBanner;
