import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage, ref } from 'firebase/storage';
import firebaseConfig from './config';

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const functions = getFunctions();
export const storage = getStorage();
export const storageRef = ref(storage);
/** タイムスタンプを扱うインスタンス情報 */
export const firebaseTimestamp = Timestamp;
