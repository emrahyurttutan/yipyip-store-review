import {NativeModules, Platform} from 'react-native';

const {StoreReviewModule, RNStoreReviewIOS} = NativeModules;

const isAvailable = !!RNStoreReviewIOS && RNStoreReviewIOS.isAvailable; //ios version check

function isModuleAvailable() {
  if (Platform.OS === 'android') {
    if (!StoreReviewModule) {
      throw new Error(
        'InAppReview native module not available, did you forget to link the library?',
      );
    }
    return true;
  } else if (Platform.OS === 'ios') {
    if (!RNStoreReviewIOS) {
      throw new Error(
        'InAppReview native module not available, did you forget to link the library?',
      );
    }
    return true;
  } else {
    return false;
  }
}

export default class InAppReview {
  static RequestInAppReview() {
    if (isModuleAvailable()) {
      if (Platform.OS === 'android') {
        return StoreReviewModule.show();
      } else {
        return RNStoreReviewIOS.requestReview();
      }
    }
  }

  static isAvailable() {
    if (Platform.OS === 'android' && Platform.Version >= 21) {
      return true;
    } else if (Platform.OS === 'ios') {
      return isAvailable;
    } else {
      return false;
    }
  }
}
