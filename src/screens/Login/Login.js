import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Surface, TextInput, Text} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//   {
//     name: 'MainDB',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log(error);
//   },
// );

export default function LoginScreen() {
  const {navigate} = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   createTable();
  // }, []);

  // const submit = () => {
  //   db.transaction(async tx => {
  //     return await tx.executeSql(
  //       'INSERT INTO Users (User,Passcode) VALUES (?,?)',
  //       [username, password],
  //     );
  //   });
  // };

  // const createTable = () => {
  //   db.transaction(tx => {
  //     return tx.executeSql(
  //       'CREATE TABLE IF NOT EXISTS ' +
  //         'Users ' +
  //         '(ID INTEGER PRIMARY AUTOINCRMENT, User TEXT, Passcode INTEGER )',
  //     );
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Surface style={styles.box}>
        <View>
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button
          mode="contained"
          color={'purple'}
          style={styles.button}
          onPress={() => {
            if (username.length === 0 || password.length === 0) {
              Alert.alert('Warning!', 'Please input your data');
            } else {
              try {
                // submit();
                navigate('TopStories');
              } catch (error) {
                console.log(error);
              }
            }
          }}>
          Submit
        </Button>
      </Surface>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '28@s',
  },
  box: {
    borderRadius: 10,
    elevation: '5@s',
    padding: '20@s',
    height: '250@s',
  },
  title: {
    fontSize: '40@s',
    textAlign: 'center',
    // color: COLORS.grey,
    marginBottom: '20@s',
    fontFamily: 'Roboto-BoldItalic',
  },
  button: {
    marginTop: '20@s',
    height: '50@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: '10@s',
  },
});
