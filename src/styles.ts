
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a2a44',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a2a44',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  progressText: {
    fontSize: 18,
    color: '#a9c1e8',
  },
  flashcardContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashcard: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  cardFront: {
     backgroundColor: '#f0f4fa',
  },
  cardBack: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  cardTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a2a44',
  },
  tapToFlip: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
  cardContent: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'right',
    writingDirection: 'rtl',
    color: '#333333',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  navButton: {
    backgroundColor: '#3d5a80',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  navButtonDisabled: {
    backgroundColor: '#98a5b7',
    elevation: 0,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});