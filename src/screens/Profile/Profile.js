import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Container from '../../components/Container';
import {Header} from '../../components/Header';

const Profile = () => {
  return (
    <Container>
      <Header title="Ibrahim's Profile" />
      <Image
        source={require('../../assets/images/ppix.jpg')}
        style={styles.avatar}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.aboutMe}>
          Ibrahim is a React Native Developer, with over 2 years of experience,
          passionate about building cross-platform, user-friendly and
          lightweight mobile applications.
          {`\n`}
          {`\n`}He is a highly coordinated and resourceful person with good
          communication, team-spirit, and problem solving skills. Ibrahim has a
          strong eye for detail and ability to listen to feedbacks and
          incorporate notes effectively.
          {`\n`}
          {`\n`}Ibrahim enjoys learning new skills, travelling, meeting people,
          watching soccer games and romantic movies.
        </Text>
      </View>
    </Container>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  avatar: {
    width: '270@s',
    height: '230@s',
    marginTop: '10@s',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: '15@s',
  },
  aboutMe: {
    fontFamily: 'Roboto-Regular',
    fontSize: '17@s',
  },
});
