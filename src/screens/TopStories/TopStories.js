import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../../store/features/news/newsSlice';
import axios from 'axios';
import {StoriesCard} from '../../components/Storiescard';
import {Header} from '../../components/Header';

const Stories = ({item}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
      )
      .then(response => {
        setData(response.data);
      })
      .catch(error => error);

  return <StoriesCard title={data?.title} url={data?.url} />;
};

const TopStories = () => {
  const {news, loading} = useSelector(state => state);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [page]);

  if (loading) {
    return <LoadingView />;
  }

  return (
    <Container backgroundColor={'black'} barIconColor={'light-content'}>
      <View style={styles.heading}>
        <Header title="New Top Stories this Hour" style={styles.header} />
        <Text style={styles.pageNumber}>{`page: ${page}`}</Text>
      </View>
      <View style={styles.container}>
        {loading && <ActivityIndicator size={'large'} color={'blue'} />}
        <FlatList
          data={news?.slice(0, page * 20)}
          renderItem={({item}) => <Stories item={item} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            setPage(page + 1);
          }}
          onEndReachedThreshold={0}
        />
      </View>
    </Container>
  );
};

const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="purple" absoluteFill />
    </View>
  );
};

export default TopStories;

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
  },
  pageNumber: {
    fontFamily: 'Roboto-Regular',
    fontSize: '15@s',
    marginLeft: '10@s',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    width: '80%',
  },
});
