import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import styles from '../../styles/FeedbackScreen/FeedbackScreen';
import color from '../../styles/colors';

const FeedbackScreen = (props) => {
  const [stars, setStars] = useState(4);

  const starsHanlder = (rating) => {
    setStars(rating);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        
        <View style={styles.startsContainer}>
          <Text style={styles.title}>¡Ayúdanos a mejorar!</Text>
          <StarRating maxStars={5} rating={stars} selectedStar={starsHanlder} fullStarColor={color.yellow}/>
          <View style={styles.inputContainer}>
            <TextInput style={styles.commentInput} placeholder="Escribe tu comentario aquí..." multiline={true} />
          </View>
          <View>
            <View style={styles.confirmButton}><Button title="Enviar" color={color.white} /></View>
            <View style={styles.cancelButton}><Button title="En otro momento" color={color.gray} onPress={() => props.navigation.navigate('Teams')} /></View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeedbackScreen;
