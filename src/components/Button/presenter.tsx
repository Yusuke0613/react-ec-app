import React from 'react';

/** ボタンコンポーネントの型定義 */
export type PrimaryButtonProps = {
  /** 有効フラグ */
  disabled?: boolean;
  /** ボタンに表記するラベル */
  label: string;
  /** ボタンタイプ(buttn | submit | reset) */
  type: 'button' | 'submit';
  /** ボタンを押された時のコールバック関数 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * ボタンの汎用コンポーネント
 * @param props 各種設定
 * @return コンポーネント
 */
const PrimaryButton = React.memo(
  ({
    label,
    onClick,
    type,
    disabled = false,
  }: PrimaryButtonProps) => (

  <button
    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
     {label}
  </button>
  )
);

export default PrimaryButton;
