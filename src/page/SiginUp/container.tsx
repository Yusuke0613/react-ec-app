import { push } from 'connected-react-router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../reducks/user/operations';
import { useInputFile, useInputValue, validInput } from './hooks';
import SiginUp from './presenter';
import {toast } from 'react-toastify'

const SiginUpContainer = () => {
  const dispatch = useDispatch();

  // 入力要素を扱うステート
  const [userName, inputUserName] = useInputValue();
  const [email, inputEmail] = useInputValue();
  const [password, inputPassword] = useInputValue();
  const [confirmPassword, inputConfirmPassword] = useInputValue();

  const [avatarImage, setAvatarImage] = useState<File | null>(null);

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setAvatarImage(e.target.files![0]);
      e.target.value = "";
    }
  };



  // サインインへ飛ぶリンク
  const onClickSignIn = React.useCallback(
    () => dispatch(push('./signin')),
    [dispatch, push]
  );

  // サインアップデータ送信
  const handleSignUp = async () => {
    try {
      let url = "";
      await dispatch(signUp(userName, email, password, avatarImage));
      
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  // サインアップボタンを押した時
  const onSubmit = React.useCallback(
    (event: { preventDefault: () => void; }) => {
      //入力内容のバリデーションチェック
      let [validator, errorMsg] = validInput(userName, email, password, confirmPassword, avatarImage!.name);
      if (!validator) {
        errorMsg.map((err)=>{
          toast.error(err)
        })
      } else {
        handleSignUp();
      }
      event.preventDefault(); 
    },
    [handleSignUp, validInput]
  );

  const props = {
    email,
    userName,
    password,
    confirmPassword,
    avatarImage,
    inputUserName,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    onChangeImageHandler,
    onSubmit,
    onClickSignIn,
  };
  return <SiginUp {...props} />;
};

export default SiginUpContainer;
