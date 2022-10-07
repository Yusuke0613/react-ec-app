import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState } from '../user/initializes';
import type { User } from './types';

/**
 * ユーザー情報のスライス
 */
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    signInAction: (state: User, action: PayloadAction<User>) => {
        // 前回値に対して、データ変更箇所だけを更新しupdateDataに代入
        const updatedData = { ...state, ...action.payload };
        // ストアの値の更新
        return updatedData;
    },
    signOutAction: () => {
        // サインアウト時は初期値に戻す
        const updatedData = { ...initialUserState };
        return updatedData;
    },
  },
});

// actionをエクスポート
export const {
  signInAction,
  signOutAction
} = userSlice.actions;

// reducerをエクスポート
export default userSlice.reducer;