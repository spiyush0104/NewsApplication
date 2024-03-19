import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
} from 'react-native';
import styles from '../../Style/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import SearchScreen from '../Search';

const screenWidth = Dimensions.get('window').width;
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [press, setpress] = useState(false);
  const [news, setNews] = useState(true);
  const [viral , setviral ] =useState(false)
  const [reload, setreload] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const featchData = async () => {

      const ipAddress = '192.168.1.41';
      let reasponse;
      if (news) {
        console.log("before api hit ::;");
        
        reasponse = await axios.get(`http:${ipAddress}:3000/posts`);
        console.log("reasponse of api-======>",reasponse.data);
        
      } else {
        console.log("before api hit line 444");
        
        try {
          reasponse = await axios.get(`http:${ipAddress}:3000/comments`);
          console.log("reasponse of api viral-======>",reasponse);
        } catch (error) {
          console.log("api-error ::",error);
          
        }
        
      }

      // setPosts(reasponse.data);

      // const reasponse = await axios.get('http://192.168.0.203:8000/api/v1/news/news-detail');
      console.log('reasponse===>', reasponse);
      setPosts(reasponse.data);
    
  };
  const handleTouch = () => {
    setpress(!press);
  };

  const handleNewsPress = async() => {
    setviral(false);
    setNews(true)

   await setPosts([]);
   await setLoading(true);
    setTimeout(async() => {
     await featchData();
      setLoading(false);
    }, 1000);
  };
  const handleViralPress = async() => {
    setNews(false);
    setviral(true);
    
   await setPosts([]);
   await setLoading(true);
    setTimeout(async()=> {
     await featchData();
      setLoading(false);
    }, 2000);
  };


  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const handleReload = async () => {

    setPosts([]);
    setLoading(true);
    setTimeout(() => {
      featchData();
      setLoading(false);
    }, 2000);
  };
  const handleMenuPress = () => {
    navigation.navigate('MainScreen');
  };

  useEffect(() => {
    console.log("in use effectttt======>");
    
    featchData();
  }, []);

  return (
    //  full page container
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      {press && (
        <View
          style={{
            height: hp('8%'),
           marginTop: Platform.OS=='ios' ? hp('5%') : 0,
            width: wp('100%'),
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            zIndex: 9999,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              height: hp('8%'),
              width: wp('50%'),
              justifyContent: 'center',
              alignItems: 'center',
              ...(news && {
                borderBottomWidth: 2,
                borderBottomColor: '#1e90ff',
              }),
            }}
            onPress={handleNewsPress}>
            <Text style={{textAlign: 'center', fontSize: 25}}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: hp('8%'),
              width: wp('50%'),
              justifyContent: 'center',
              alignItems: 'center',
              ...(!news && {
                borderBottomWidth: 2,
                borderBottomColor: '#1e90ff',
              }),
            }}
            onPress={handleViralPress}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontFamily: 'poppins',
                fontWeight: '400',
              }}>
              Viral
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {
        <>
          {loading && (
            <View
              style={{
                position: 'absolute',
                top: '50%',
                left: '48%',
                zIndex: 999,
              }}>
              <ActivityIndicator size="large" color="black" />
            </View>
          )}
        </>
      }
      <Swiper
        horizontal={false}
        loop={true}
        showsButtons={false}
        showsPagination={false}>
        {!!posts &&
          posts?.map(post => (
            <TouchableWithoutFeedback onPress={handleTouch} key={post.id}>
              <View style={styles.flex1_color}>
                {/*  main news container */}
                <View
                  style={{
                    marginTop: hp('8%'),
                    backgroundColor: 'black',
                    height: hp('80%'),
                  }}>
                  {/* image section start from here  */}

                  <View style={{height: hp('35%'), backgroundColor: 'green'}}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: post.image,
                      }}
                    />
                  </View>
                  {/* this section for news */}
                  <View
                    style={{
                      height: hp('46%'),
                      backgroundColor: '#f5f6fa',
                    }}>
                    {/* heading container start from here  */}
                    <View
                      style={{
                        height: hp('9%'),
                        // alignItems: 'center',
                        padding: 7,
                      }}>
                      <Text style={{fontSize: 20, fontWeight: '700'}}>
                        {post.heading}
                      </Text>
                    </View>
                    {/* news section */}
                    <View style={{height: hp('38%')}}>
                      <Text
                        style={{
                          fontFamily: 'poppins',
                          fontSize: 17,
                          padding: 10,
                          fontWeight: '300',
                        }}>
                        {post.news}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
      </Swiper>

      <View
        style={{
          display: 'flex',
          height: hp('10%'),
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        {press && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleMenuPress}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('10%'),
                  width: wp('25%'),
                }}>
                <Image
                  style={styles.bottomIcon}
                  source={require('../../photos/menu-outline.png')}
                />
                <Text style={styles.iconPadding}>Menu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearchPress}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('10%'),
                  width: wp('25%'),
                }}>
                <Image
                  style={styles.bottomIcon}
                  source={require('../../photos/search-outline.png')}
                />
                <Text style={styles.iconPadding}>Search</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('10%'),
                  width: wp('25%'),
                }}>
                <Image
                  style={styles.bottomIcon}
                  source={require('../../photos/eye-off-outline.png')}
                />
                <Text style={styles.iconPadding}>Unread</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReload}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp('10%'),
                  width: wp('25%'),
                }}>
                <Image
                  style={styles.bottomIcon}
                  source={require('../../photos/refresh-outline.png')}
                />
                <Text style={styles.iconPadding}>Reload</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
