import React from 'react';
import Container from '../../components/Container';
import WebView from 'react-native-webview';
import {Header} from '../../components/Header';

const WebPage = ({navigation, route}) => {
  const {url, title} = route.params;
  return (
    <Container>
      <Header title={title} onPress={() => navigation.pop()} />
      <WebView source={{uri: url}} />
    </Container>
  );
};

export default WebPage;
