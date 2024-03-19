import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../Style/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';

const SelectLanguage = () => {
  const navigation = useNavigation();

  const [lang, setLanguage] = useState(false);

  const onPressEnglish = () => {
    setLanguage(true);
    setTimeout(() => {

      navigation.navigate("Home");
      
    },1000);

  };

  // useEffect(()=>{
  //   if(setLanguage(true))
    
  //   {

    
  //   navigation.navigate('Home');
  //   }


  // },[])

  return (
    <View style={styles.flex1}>
      <View style={[styles.selectlanguageContainer, {marginTop: 70}]}>
        <Text style={[styles.selectlanguagetext, {}]}>
          Choose your preferred Language to read the news
        </Text>
      </View>

      {/* select language options */}
      <TouchableOpacity
        style={[
          styles.hindiLanguageContainer,
          {display: 'flex', flexDirection: 'row'},
        ]}>
        <View style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Image
            style={styles.hindiImage}
            source={{
              uri: 'https://i.pinimg.com/originals/d3/6a/0b/d36a0bf2616e797e1719bdc6c1a3c7cc.jpg',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: wp('100%'),
          }}>
          <Text style={styles.hinditext}> हिंदी</Text>
        </View>
      </TouchableOpacity>

      {/* select language english */}
      <TouchableOpacity
        style={[
          styles.hindiLanguageContainer,
          {backgroundColor: lang ? 'green' : 'white'},
        ]}
        onPress={onPressEnglish}
        >
        <View style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Image
            style={styles.hindiImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUwbqKwGx-4AehubTZqiroIyvmG6t1sU6OSLvzxmCRfG5IedS6km03b3kL2YaZqrII00&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: wp('90%'),
          }}>
          <Text style={[styles.hinditext,{color: lang ? 'white' : 'black'}]}>English</Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:hp('7%'),width:wp('100%'),marginTop:hp('12%')}}>
        <View style={{height:hp('6%'),width:wp('60%'),justifyContent:'center',alignItems:'center',borderWidth:1,}}>
          <Text style={{fontSize:25,fontFamily:'poppins'}}>Submit</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default SelectLanguage;
