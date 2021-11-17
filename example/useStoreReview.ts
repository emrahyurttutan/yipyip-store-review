import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import StoreReview from 'yipyip-store-review';

export default function useAppReview() {
  const {getItem, setItem} = useAsyncStorage('store_Review');

  const onReview = async () => {
    const lastDateAppReviewed = await getItem();

    if (lastDateAppReviewed !== null) {
      let Today = new Date().getTime();
      const leftTime = Math.abs(Today - Date.parse(lastDateAppReviewed));
      let leftDays = Math.ceil(leftTime / (1000 * 60 * 60 * 24));

      if (leftDays > 15) {
        await setItem(new Date().toString());
        StoreReview.RequestStoreReview();
      }
    } else {
      await setItem(new Date().toString());
      StoreReview.RequestStoreReview();
    }
  };

  return {
    onReview,
  };
}