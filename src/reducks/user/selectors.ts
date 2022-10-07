import { createSelector } from 'reselect';
import { RootState } from '../store/store';

const userSelector = (state: RootState) => state.user;

/** ユーザメールアドレスの取得 */
export const loadUserEmail = createSelector(
  [userSelector],
  (state) => state.email
);

/** サインインフラグの取得 */
export const loadSignedIn = createSelector(
  [userSelector],
  (state) => state.isSignedIn
);