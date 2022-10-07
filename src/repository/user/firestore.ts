import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import type { UserForDatabase } from '../../reducks/user/types';
import { IUserRepository } from './interface';

/**
 * firebaseのfirestoreにデータ操作するためのリポジトリ
 */
class UserFirebaseRepository implements IUserRepository {
  private collection;

  constructor() {
    this.collection = 'users';
  }


  /**
   * firebasestoreからuseridのユーザデータ取得
   * @param id ユーザid
   * @returns ユーザデータ
   */
  async fetchUser(id: string) {
    try {
      const referenceData = doc(db, this.collection, id);
      const result = await getDoc(referenceData);
      // 取得データを型変換して返却
      return result.data() as UserForDatabase;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('failed to fetch firestore');
    }
  }

  /**
   * firebasestoreにユーザデータを保存
   * @param user 保存したいユーザデータ
   */
  async saveUser(user: UserForDatabase) {
    const key = user.uid;

    try {
      // データベースのusersコレクションに、ユーザ登録でランダムに作成されたユーザidをキーに各ユーザ情報を登録
      await setDoc(doc(db, this.collection, key), user, { merge: true });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}

export default UserFirebaseRepository;
