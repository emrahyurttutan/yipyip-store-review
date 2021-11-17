# yipyip-store-review

![npm](https://img.shields.io/npm/dw/yipyip-store-review?logo=npm)

![npm](https://img.shields.io/npm/v/yipyip-store-review?logo=npm)


The Google Play In-App Review API, App store rating API lets you prompt users to submit Play Store or App store ratings and reviews without the inconvenience of leaving your app or game.

react native in app review, to rate on Play store, App Store, Generally, the in-app review flow (see figure 1 for play store, figure 2 for ios) can be triggered at any time throughout the user journey of your app. During the flow, the user has the ability to rate your app using the 1 to 5 star system and to add an optional comment for play store only. Once submitted, the review is sent to the Play Store or App store and eventually displayed.


# Android, iOS platform.

# Google Play In-App Review API

[![N|Solid](https://developer.android.com/images/google/play/in-app-review/iar-flow.jpg)](https://developer.android.com/guide/playcore/in-app-review)

# System Rating App Store API

[![N|Solid](https://developer.apple.com/design/human-interface-guidelines/ios/images/AppRating_2x.png)](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/ratings-and-reviews/#system-rating-and-review-prompts)

# Getting Started

## Installation

If you use Expo to create a project [you'll just need to](https://facebook.github.io/react-native/docs/getting-started#caveats) "[eject](https://docs.expo.io/versions/latest/expokit/eject)".

```
 expo eject
```

Install React Native In App Review package

```sh
$ npm install yipyip-store-review

```

OR

```sh
$ yarn add yipyip-store-review
```

# Standard Method

**React Native 0.60 and above**

Linking is not required in React Native 0.60 and above.

Don't forget to run `npx pod-install` after that !

- If you do not have CocoaPods already installed on your machine, run `sudo gem install cocoapods` to set it up the first time, after that run `npx pod-install`

**React Native 0.59 and below**

Run `react-native link yipyip-store-review` to link the yipyip-store-review library.
after following the instructions for your platform to link yipyip-store-review into your project:

### Manual Linking

### iOS installation

<details>
  <summary>iOS details</summary>

### Using [CocoaPods](https://cocoapods.org/)

Add the following to your `Podfile` and run `pod install`:

```ruby
 pod 'yipyip-store-review', :path => '../node_modules/yipyip-store-review'
```

</details>

### Android installation

<details>
  <summary>Android details</summary>

Run `react-native link yipyip-store-review` to link the yipyip-store-review library.

#### **android/settings.gradle**

```gradle
include ':yipyip-store-review'
project(':yipyip-store-review').projectDir = new File(rootProject.projectDir, '../node_modules/yipyip-store-review/android')
```

#### **android/app/build.gradle**

From version >= 5.0.0, you have to apply these changes:

```diff
dependencies {
   ...
+    implementation project(':yipyip-store-review')
}
```

#### **android/gradle.properties**

Migrating to AndroidX (needs version >= 5.0.0):

```gradle.properties
android.useAndroidX=true
android.enableJetifier=true
```

#### **Then, in android/app/src/main/java/your/package/MainApplication.java:**

On top, where imports are:

```java
import com.emrahyurttutan.rn_store_review;
```

```java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new AppReviewPackage()
    );
}
```

</details>

# Usage

```javascript
import StoreReview from 'yipyip-store-review';
```

```javascript
// This package is only available on android version >= 21 and iOS >= 10.3

// Give you result if version of device supported to rate app or not!
StoreReview.isAvailable();

// trigger UI StoreReview
StoreReview.RequestStoreReview()
  .then((hasFlowFinishedSuccessfully) => {
    // when return true in android it means user finished or close review flow
    console.log('StoreReview in android', hasFlowFinishedSuccessfully);

    // when return true in ios it means review flow lanuched to user.
    console.log(
      'StoreReview in ios has launched successfully',
      hasFlowFinishedSuccessfully,
    );

    // 1- you have option to do something ex: (navigate Home page) (in android).
    // 2- you have option to do something,
    // ex: (save date today to lanuch StoreReview after 15 days) (in android and ios).

    // 3- another option:
    if (hasFlowFinishedSuccessfully) {
      // do something for ios
      // do something for android
    }

    // for android:
    // The flow has finished. The API does not indicate whether the user
    // reviewed or not, or even whether the review dialog was shown. Thus, no
    // matter the result, we continue our app flow.

    // for ios
    // the flow lanuched successfully, The API does not indicate whether the user
    // reviewed or not, or he/she closed flow yet as android, Thus, no
    // matter the result, we continue our app flow.
  })
  .catch((error) => {
    //we continue our app flow.
    // we have some error could happen while lanuching StoreReview,
    // Check table for errors and code number that can return in catch.
    console.log(error);
  });
```

# Error could happen and code number

| Error Name                    | Code Number | Description                                                                                                                                                | iOS | Android |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------- |
| ERROR_DEVICE_VERSION          | 21          | This Device not supported to launch StoreReview                                                                                                            | ✅  | ✅      |
| GOOGLE_SERVICES_NOT_AVAILABLE | 22          | This Device doesn't support google play services                                                                                                           | ❌  | ✅      |
| [DYNAMIC ERROR NAME]          | 23          | Unexpected error occur may return different error from different user and device check code number to get discovered errors messages that could be happen. | ❌  | ✅      |
| ACTIVITY_DOESN'T_EXIST        | 24          | Unexpected error occur while getting activity                                                                                                              | ❌  | ✅      |
| SCENE_DOESN'T_EXIST           | 25          | Unexpected error occur while getting scene                                                                                                                 | ✅  | ❌      |

# + Android guidlelines and notes:

# Read very well:

After publishing you app to test your integration in production or either internal test tracks or internal app sharing and prompt in app review flow you may face issue that not showing review popup after you followed all guidelines very well,
**Note that this issue was classified as google play api issue.**

We found most probably solutions that may be successful to launch review popup:

- Make sure you have installed latest google play store update.
- Note that the popup will not work if you are signed in to the Play Store with a GSuite ID. Once you switch to an @gmail email address, this will start working.
- Make sure there is only one Google account in the test device.
- Please note, that user must be a tester if you are testing on any testing track.
- CLEAR CACHE and CLEAR STORAGE from Google Play Store app.
- Remove existing app rating in Google Play Store.
- after doing all of pervious solutions, remove your app and reinstall it.

# When to request an in-app review

Follow these guidelines to help you decide when to request in-app reviews from users:

- Trigger the in-app review flow after a user has experienced enough of your app or game to provide useful feedback.
- Do not prompt the user excessively for a review. This approach helps minimize user frustration and limit API usage (see the section on quotas).
- Your app should not ask the user any questions before or while presenting the rating button or card, including questions about their opinion (such as “Do you like the app?”) or predictive questions (such as “Would you rate this app 5 stars”).

# Quotas

To provide a great user experience, Google Play enforces a quota on how often a user can be shown the review dialog. Because of this, calling a launchReviewFlow method might not always display a dialog. For example, you should not have a call-to-action option (such as a button) to trigger a review as a user might have already hit their quota and the flow won’t be shown, presenting a broken experience to the user.

# Device requirements

In-app reviews only work on the following devices:

- Android devices (phones and tablets) running Android 5.0 (API level 21) or higher that have the Google Play Store installed.
- Chrome OS devices that have the Google Play Store installed.
