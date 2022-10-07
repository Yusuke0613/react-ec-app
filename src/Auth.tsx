import React, { useEffect, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSignedIn } from './reducks/user/selectors';
import { listenAuthState } from './reducks/user/operations';
import { useSelector } from './reducks/store/store';

/**
 * サインインであれば子要素を表示し、そうでなければ子要素は表示しない
 * @param param0 children - 子要素
 * @returns サインイン状況に応じたコンポーネント
 */
function Auth({ children }: { children: ReactElement }) {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const isSignedIn = loadSignedIn(selector);

  useEffect(() => {
    (async () => {
      // 初回表示にログイン状態でないければ、firebase内でログイン状態を確認
      if (!isSignedIn) {
        try {
          dispatch(listenAuthState());
        } catch (error) {
        }
      }
    })();
  }, []);

  // サインインしていないければ、Authの子要素は表示させない
  // 通信エラーの際は、エラーモーダルを表示
  if (!isSignedIn) {
    return (
     <></>
    );
  }
  // サインインしていれば、Authの子要素は表示させる
  return children;
}

export default Auth;
