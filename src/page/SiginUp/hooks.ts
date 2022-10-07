import { useCallback, useState } from 'react';

/**
 * 必須項目が入力されているかどうかを検証
 * @param args 必須項目
 * @returns {boolean}　true: 入力済, false: 未入力
 */
export const validRequiredInput = (...args: string[]) => {
  let validator = true;
  for (let i=0; i < args.length; i=(i+1)|0) {
      if (args[i] === "") {
          validator = false;
      }
  }
  return validator
};
/**
 * パスワードが一致しているかどうかを検証
 * @param password パスワード
 * @param confirmPassword 確認用パスワード
 * @returns {boolean}　true: 一致, false: 不一致
 */
export function validatePassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return false;
  }
  return true;
}

/**
 * Email形式が正しいかの検証
 * @param email　メールアドレス
 * @returns {boolean}　true: 一致, false: 不一致
 */
 export function validEmailFormat(email:string)  {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

/**
 * パスワードが一致しているかどうかを検証
 * @param password パスワード
 * @param confirmPassword 確認用パスワード
 * @returns {boolean}　true: 一致, false: 不一致
 */
 export function validatePasswordLength(password: string) {
  if (password.length < 6 ) {
    return false;
  }
  return true;
}

/**
 * 入力のステートと入力値更新のためのステートを返すカスタムフック
 * @param initValue ステートの初期値
 * @returns [ステート、更新の関数]
 */
export function useInputValue(
  initValue = ''
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(initValue);
  const updateValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );
  return [value, updateValue];
}

/**
 * 入力のステートと入力値更新のためのステートを返すカスタムフック
 * @param initValue ステートの初期値
 * @returns [ステート、更新の関数]
 */
 export function useInputFile(
  initFile = null
): [File | null, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  
  const [value, setValue] = useState<File | null>(initFile);
  const updateValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files![0]);
    },
    [setValue]
  );
  return [value, updateValue];
}


/**
 * 入力項目のチェック検証
 * @param args 必須項目
 * @returns {boolean}　true: 入力済, false: 未入力
 */
 export function validInput (
   userName: string, 
   email: string, 
   password: string, 
   confirmPassword: string,
   avatarImage: string
  ) :[boolean, string[]]
 {
  let validator = true;
  let errorMsg = [];

  //必須項目の入力チェック
  if (!validRequiredInput(userName, email, password, confirmPassword, avatarImage)) {
    validator = false
    errorMsg.push("必須項目が入力されておりません")
  }
  //パスワードの文字数チェック
  if (!validatePasswordLength(password)) {
    validator = false
    errorMsg.push("パスワードは6文字以上で入力してください")
  }
  //パスワードの入力チェック
   if (!validatePassword(password, confirmPassword)) {
    validator = false
    errorMsg.push("パスワードが一致してません")
  }
  //パスワードの入力チェック
   if (!validEmailFormat(email)) {
    validator = false
    errorMsg.push("メールアドレスのフォーマットが正しくありません")
  }
  
  return [validator, errorMsg]
};