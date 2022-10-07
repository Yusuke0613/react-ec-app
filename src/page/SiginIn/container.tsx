import { push } from 'connected-react-router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reducks/user/operations';
import { useInputValue, validInput } from './hooks';
import SiginIn from './presenter';
import {toast } from 'react-toastify'

const SiginInContainer = () => {
  const dispatch = useDispatch();

  // 入力要素を扱うステート
  const [email, inputEmail] = useInputValue();
  const [password, inputPassword] = useInputValue();

  // サインインへ飛ぶリンク
  const onClickSignIn = React.useCallback(
    () => dispatch(push('./signin')),
    [dispatch, push]
  );

  // サインインデータ送信
  const handleSignIn = async () => {
    try {
      await dispatch(signIn(email, password));
      
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  // サインインボタンを押した時
  const onSubmit = React.useCallback(
    (event: { preventDefault: () => void; }) => {
      //入力内容のバリデーションチェック
      let [validator, errorMsg] = validInput(email, password);
      if (!validator) {
        errorMsg.map((err)=>{
          toast.error(err)
        })
      } else {
        handleSignIn();
      }
      event.preventDefault(); 
    },
    [handleSignIn, validInput]
  );

  const props = {
    email,
    password,
    inputEmail,
    inputPassword,
    onSubmit,
    onClickSignIn,
  };
  return <SiginIn {...props} />;
};

export default SiginInContainer;
