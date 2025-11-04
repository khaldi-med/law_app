
import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {constitution, Law} from './data/constitution';
import Flashcard from './components/Flashcard';
import {styles} from './styles';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLaw: Law = constitution[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < constitution.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === constitution.length - 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={styles.container.backgroundColor} />
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>الدستور المغربي</Text>
            <Text style={styles.progressText}>
                {`${currentIndex + 1} / ${constitution.length}`}
            </Text>
        </View>
        
        <View style={styles.flashcardContainer}>
            <Flashcard
                key={currentIndex}
                title={currentLaw.title}
                content={currentLaw.content}
            />
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={isFirstCard}
            style={[styles.navButton, isFirstCard && styles.navButtonDisabled]}>
            <Text style={styles.navButtonText}>السابق</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            disabled={isLastCard}
            style={[styles.navButton, isLastCard && styles.navButtonDisabled]}>
            <Text style={styles.navButtonText}>التالي</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
