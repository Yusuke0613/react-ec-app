/*eslint-disable*/
import PrimaryButton from "../../components/Button/presenter";
import TextInput from "../../components/TextInput/presenter";
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


type Props = {
  /** メールアドレス更新関数 */
  inputEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** パスワード更新関数 */
  inputPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 入力パスワード */
  password: string;
  /** 入力メール */
  email: string;
  /** サインアップ送信 */
  onSubmit: MouseEventHandler<HTMLButtonElement> | undefined;
};

const SiginIn = React.memo((props: Props) => {
  return (
    <>
      <section className="w-full h-full py-40 min-h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-xl font-bold">
                      Sign In
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="relative w-full mb-3">
                    <TextInput 
                      type="email"
                      placeholder="Email"
                      label="Email"
                      value={props.email}
                      onChange={props.inputEmail} 
                      required={false}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <TextInput 
                      type="password"
                      placeholder="Password"
                      label="Password"
                      value={props.password}
                      onChange={props.inputPassword} 
                      required={false}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <PrimaryButton 
                      type="button"
                      label={"SiginIn"}
                      onClick={props.onSubmit}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                </div>
                <div className="w-1/2 text-right">
                  <Link to="/siginup" className="text-blueGray-600">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      </div>
    </section> 
   
</>
  )
});

export default SiginIn