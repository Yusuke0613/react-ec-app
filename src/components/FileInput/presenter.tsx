import React from 'react';

/** ボタンコンポーネントの型定義 */
export type PrimaryButtonProps = {
  /** ボタンに表記するラベル */
  label: string;
  /** 入力値(初期表示などに利用) */
  value: File | null;
  /** 値を入力した時に実行されるコールバック関数 */
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** 必須入力かどうか */
  required: boolean;
  /** プレースフォルダ文字列 */
  placeholder: string;
};

/**
 * ボタンの汎用コンポーネント
 * @param props 各種設定
 * @return コンポーネント
 */
const FileInput = React.memo(
  ({
    label,
    value,
    onChange,
    required,
    placeholder
  }: PrimaryButtonProps) => (
    
  <>
    <label
      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    >
    {label}
    </label>
    <input
      type="file"
      className="w-full border-0 px-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  </>
  )
);

export default FileInput;
