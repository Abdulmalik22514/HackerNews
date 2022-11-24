import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export const StoriesCard = ({title, url}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('WebPage', {url, title})}>
      {!!title && (
        <View style={styles.titleContainer}>
          <View style={styles.dot} />
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  dot: {
    width: '7@s',
    height: '7@s',
    borderRadius: '10@s',
    backgroundColor: 'black',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginBottom: '20@s',
    width: '100%',
  },

  title: {
    fontSize: '17@s',
    fontFamily: 'Roboto-Regular',
  },
  itemContainer: {
    width: '97%',
    paddingHorizontal: '5@s',
    backgroundColor: '#87CEEB',
    paddingVertical: '10@s',
    marginLeft: '7@s',
    borderRadius: '10@s',
    borderColor: '#646464',
    borderWidth: 1,
    borderStyle: 'dashed',
    opacity: 0.6,
  },
});
