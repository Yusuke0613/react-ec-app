import { Action } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { Dispatch } from 'react';
import { signInAction, signOutAction } from './slices';
import { auth, firebaseTimestamp, storage } from '../../firebase/index';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut as signOutInFirebase,} from 'firebase/auth';
import { UserFirebaseRepository } from '../../repository/user';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';



/**
 * アカウント作成とアカウント情報をデータベースに登録するコールバック関数の定義
 * @param username 登録したいユーザー情報
 * @param email 登録したいemailアドレス
 * @param password 登録したいパスワード
 * @returns コールバック関数
 */
 export function signUp(username: string, email: string, password: string, avatarImage:File | null) {
    return async (dispatch: Dispatch<Action>) => {
      try {
        // firebaseに対してメールとパスワードでユーザ登録
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        let url = "";
  
        if (user) {
          //アバター画像処理
          if (avatarImage) {
            
            const S =
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            const N = 16;
            const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
              .map((n) => S[n % S.length])
              .join("");
            const fileName = randomChar + "_" + avatarImage.name;

          
            
            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, `avatars/${fileName}`);

            url = await getDownloadURL(ref(storage, `avatars/${fileName}`))
          }


          const timestamp = firebaseTimestamp.now();
          // データベースに登録する情報
          const userInitialData = {
            customer_id: '',
            created_at: timestamp,
            email,
            role: 'customer',
            payment_method_id: '',
            uid: user.uid,
            updated_at: timestamp,
            username,
            photoUrl:url
          };
          // ユーザー情報をデータベースに登録
          const userRepository = new UserFirebaseRepository();
          await userRepository.saveUser(userInitialData);

          dispatch(
            signInAction({
              customer_id: '',
              email: email,
              isSignedIn: true,
              payment_method_id: '',
              role: 'customer',
              uid: user.uid,
              username: username,
              photoUrl:url
            })
          )
  
          // 登録が成功したら、ホームに戻る
          dispatch(push('/'));
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    };
  }

  /**
   * emailとパスワードでサイン処理するコールバック関数の定義
   * @param email Eメール
   * @param password パスワード
   * @returns ログイン処理のコールバック関数
   */
  export function signIn(email: string, password: string)  {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
  
        // データベースよりユーザ情報取得
        const userRepository = new UserFirebaseRepository();
        const userData = await userRepository.fetchUser(user.uid);
  
        if (!userData) {
          throw new Error('サインインできたが、データベースに値がない');
        }
        dispatch(
          signInAction({
            customer_id: userData.customer_id,
            email: userData.email,
            isSignedIn: true,
            payment_method_id: userData.payment_method_id,
            role: userData.role,
            uid: user.uid,
            username: userData.username,
            photoUrl:userData.photoUrl
          })
        );
        // サインインしたらトップページへ遷移
        dispatch(push('/'));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    };
  }

  
  /**
   * サインアウト処理を行い、サインイン画面に飛ばす
   * @returns サインアウト処理をするコールバック関数
   */
  export function signOut() {
    return async (dispatch: Dispatch<Action>) => {
      try {
        await signOutInFirebase(auth);
        // ストアのユーザ情報を初期値にする
        dispatch(signOutAction());
        dispatch(push('/signin'));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error('Failed to logout.');
      }
    };
  }

  /**
 * firebase内でサインイン状態を確認し、サインイン状態であればユーザ情報をセット、
 * そうでなければ、サインイン画面に飛ばす処理
 * @returns firebaseでサインイン状態を確認するコールバック関数
 */
export function listenAuthState() {
  return async (dispatch: Dispatch<Action>) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(push('/siginin'));
        return;
      }
      // データベースよりユーザ情報を取得
      const userRepository = new UserFirebaseRepository();
      const data = await userRepository.fetchUser(user.uid);

      if (!data) {
        throw new Error(`can"t find user data in database`);
      }
      dispatch(
        signInAction({
          customer_id: data.customer_id,
          email: data.email,
          isSignedIn: true,
          payment_method_id: '',
          role: data.role,
          uid: user.uid,
          username: data.username,
          photoUrl:''
        })
      );
    });
  };
}