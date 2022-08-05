import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import * as userActions from '../store/modules/userInfo';
import { useRouter } from 'next/router';
import axios from 'axios';

import Link from 'next/link';
import { Tabs, Tab } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { route } from 'next/dist/server/router';

const Signup = () => {
    const apiPrefix = process.env.NEXT_PUBLIC_API;
    const router = useRouter()
    const [tabKey, setTabKey] = useState("main");
    const dispatch = useDispatch();
    const walletInfo = useSelector(({ walletInfo }) => walletInfo.value);
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [cpw, setCpw] = useState("");

    useEffect(() => {
        if (walletInfo.set) {
            setWalletConnected(true);
            setAddress(walletInfo.data.address)
        } else {
            setWalletConnected(false)
        }
    }, [walletInfo])

    useEffect(() => {
        if (userInfo.set) { 
            router.push({ pathname: '/userprofile' })
        } 
    }, [userInfo])



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value);
    }
    const handleCpw = (e) => {
        setCpw(e.target.value);
    }

    const sign_up = (mode) => {
        if (mode === 1) {
            if (pw != cpw) {
                notify_warning(1);
                return
            }
            if (email == "" || pw == "") {
                notify_warning(2);
                return
            }
        }
        var data = {
            email,
            wallet: address,
            info: {},
            kyc:{},
            pw,
            mode
        }
        axios.post(apiPrefix + "user", data)
            .then((res) => {
                if (res.status === 200) {
                    notify_fail();

                }
                if (res.status === 201) {
                    notify_success();
                    console.log("res", res)
                    var uData = {
                        set: true,
                        data: res.data
                    }
                    dispatch(userActions.setUserInfo(uData))
                    localStorage.setItem("user", JSON.stringify(uData))
                }
            })
            .catch((error) => {
                throw (error);
            })
    }

    const notify_fail = () => toast.error('This account alreay exists. Please sign in.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify_success = () => toast.success('Successfully account created!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify_warning = (index) => toast.warning(index == 1 ? "Password not matched, please confirm again!" : "Email or Password can't be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <>
            <div className="account-wrapper sign-form asix-vertical-center">
                <h3 className="title">Sign Up</h3>
                {walletConnected ?
                    <div className="account-form asix-mt-40">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={(e) => handleEmail(e)} />
                            <label>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" readOnly={true} className="form-control" value={address} placeholder="wallet address" />
                            <label>Wallet Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" placeholder="Password" value={pw} onChange={(e) => handlePw(e)} />
                            <label>Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={cpw} onChange={(e) => handleCpw(e)} />
                            <label>Confirm Password</label>
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                <div className="checkgroup">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label>Remember Me</label>
                                </div>

                                <Link href="/forgotpassword">
                                    <a >Forgot Password?</a>
                                </Link>
                            </div>
                        </div>
                        <div className="form-group asix-mt-40">
                            <button className="asix-pink-fill-btn" onClick={() => sign_up(1)} >Sign Up </button>
                        </div>
                    </div> :
                    <div className="account-form asix-mt-40">
                        <p>Please connect your wallet before sign up</p>
                    </div>
                }
                <div className="account-bottom">
                    <span className="d-block cate pt-10">Already Have an Account?
                        <Link href="/signin">
                            <a>  Sign In</a>
                        </Link>
                    </span>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <ToastContainer />
        </>

    )
}

export default Signup;