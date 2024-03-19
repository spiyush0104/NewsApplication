import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import axios from 'axios';

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmitButton = async () => {
    let formData = new FormData();
    formData.append('avatar', {
      uri: selectedImage,
      type: 'image/jpeg',
      name: 'profile_image.jpg',
    });
    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('username', username);

    
      const response = await axios.post(
        'http://192.168.0.123:8000/api/v1/users/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('Response:', response.data);
      // handle success response
    // } catch (error) {
    //   console.error('Error:', error);
    //   // handle error
    // }
  };

  const handleCameraPress = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.uri);
      }
    });
  };

  const handleGalleryPress = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={handleGalleryPress}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.profileImageText}>Select Image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your full name"
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            onChangeText={setUsername}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileImageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default SignUp;
