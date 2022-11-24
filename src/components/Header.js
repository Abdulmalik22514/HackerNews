import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackArrow} from '../assets/svg/svg';

export const Header = ({title, onPress}) => {
  const {pop} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pop()} hitSlop={15} activeOpacity={0.8}>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20@s',
  },
  title: {
    fontSize: '20@s',
    textAlign: 'center',
    marginLeft: '10@s',
    fontFamily: 'Roboto-Medium',
    width: '90%',
  },
});
