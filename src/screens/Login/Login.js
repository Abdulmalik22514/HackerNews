import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Pressable, View} from 'react-native';
import {Button, Surface, TextInput, Text} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import Container from '../../components/Container';
// import {openDatabase} from 'react-native-sqlite-storage';
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

// const db = openDatabase(
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
  //     tx.executeSql(
  //       'CREATE TABLE IF NOT EXISTS ' +
  //         'Users' +
  //         '(ID INTEGER PRIMARY AUTOINCREMENT, Name TEXT, Passcode INTEGER)',
  //       [],
  //       () => {
  //         console.log('Table created successfully');
  //       },
  //       error => {
  //         console.log('Error on creating table ' + error.message);
  //       },
  //     );
  //   });
  // };

  return (
    <Container>
      <View style={styles.container}>
        <Pressable
          hitSlop={10}
          style={styles.aboutContainer}
          onPress={() => navigate('Profile')}>
          <Text style={styles.aboutMe}>About me</Text>
        </Pressable>
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
    </Container>
  );
}

const styles = ScaledSheet.create({
  container: {
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
  aboutMe: {
    fontSize: '16@s',
    textAlign: 'center',
    marginBottom: '100@s',
    fontFamily: 'Roboto-Italic',
    color: 'purple',
  },
  aboutContainer: {
    alignItems: 'flex-end',
  },
});
