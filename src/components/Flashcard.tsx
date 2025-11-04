
import React, {useState, useRef} from 'react';
import {TouchableOpacity, Text, Animated, ScrollView} from 'react-native';
import {styles} from '../styles';

interface FlashcardProps {
  title: string;
  content: string;
}

const Flashcard: React.FC<FlashcardProps> = ({title, content}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  return (
    <TouchableOpacity onPress={flipCard} style={styles.flashcard} activeOpacity={0.9}>
      <Animated.View style={[styles.cardFace, styles.cardFront, frontAnimatedStyle]}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.tapToFlip}>انقر للكشف</Text>
      </Animated.View>
      <Animated.View style={[styles.cardFace, styles.cardBack, backAnimatedStyle]}>
        <ScrollView style={{width: '100%'}}>
            <Text style={styles.cardContent}>{content}</Text>
        </ScrollView>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Flashcard;