import type { UserForDatabase } from '../../reducks/user/types';

/** ユーザ情報のデータストア操作インターフェース */
export interface IUserRepository {
  fetchUser(id: string): Promise<UserForDatabase>;
  saveUser(user: UserForDatabase): void;
}
