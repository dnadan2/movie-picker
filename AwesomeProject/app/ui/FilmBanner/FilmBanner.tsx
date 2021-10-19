import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './FilmBanner.styles';

interface Props {
  imageUrl: string;
  testID?: string;
}

const FilmBanner: React.FC<Props> = ({ imageUrl, testID }) => {
  return (
    <View testID={testID}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
        testID="film-banner-image"
      />
    </View>
  );
};

export default FilmBanner;
