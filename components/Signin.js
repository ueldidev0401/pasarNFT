import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as userActions from '../store/modules/userInfo';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Tabs, Tab } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Signin = () => {
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

    useEffect(() => { 
        if (walletInfo.set) {
            setWalletConnected(true);
            setAddress(walletInfo.data.address)
        }else {
            setWalletConnected(false)
        }
    }, [walletInfo])

    useEffect(() => { 
        if(userInfo.set){  
             router.push({pathname:'/userprofile'})
        } 
    }, [userInfo])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value);
    }

    const sign_in = (mode) => {
        var data = {
            email,
            wallet: address,
            info: {},
            kyc:{},
            pw,
            mode
        }
        if(mode === 1){
            if(email === "" || pw === ""){
                notify_warning(2);
                return
            }
        } 
        axios.post(apiPrefix + "sign", data)
            .then((res) => { 
                if (res.status === 202) {
                    notify_warning(1);
                }
                if (res.status === 200) {
                    notify_success();
                    console.log("res", res)
                    var uData = {
                        set: true,
                        data: res.data
                    }
                    dispatch(userActions.setUserInfo(uData)) 
                    localStorage.setItem("user", JSON.stringify(uData))
                } else {
                    notify_fail();
                }
            })
            .catch((error) => {
                throw (error);
            })
    }

    const notify_fail = () => toast.error('Sign in faild, maybe... network issue.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify_success = () => toast.success('Successfully signed in!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify_warning = (index) => toast.warning(index == 1?'Email or Password wrong!':"Email or Password can't be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="account-wrapper sign-form asix-vertical-center">
            <h3 className="title">Sign In</h3>
            <Tabs
                id="controlled-tab-example"
                activeKey={tabKey}
                onSelect={(k) => setTabKey(k)} 
            >
                <Tab eventKey="main" title="With Email">
                    <div className="account-form asix-mt-40">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                placeholder="name@example.com" value={email} onChange={(e) => handleEmail(e)} />
                            <label>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                placeholder="Password" value={pw} onChange={(e) => handlePw(e)} />
                            <label>Password</label>
                        </div>
                        <div className="form-group asix-mt-40">
                            <button className="asix-pink-fill-btn" onClick={() => sign_in(1)}>Sign In </button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="other" title="With Wallet">
                    <div className="account-form asix-mt-40">
                        {
                            walletConnected ?
                                <>
                                    <div className="form-floating mb-3">
                                        <input type="text" readOnly={true} className="form-control" value={address} placeholder="wallet address" />
                                        <label>Wallet Address</label>
                                    </div>
                                    <div className="form-group asix-mt-40">
                                        <button className="asix-pink-fill-btn" onClick={() => sign_in(2)}>Sign In </button>
                                    </div>
                                </>
                                :
                                <div >
                                    <p>Please connect your wallet</p>
                                </div>
                        }
                    </div>
                </Tab>
            </Tabs>

            <div className="account-bottom">
                <span className="d-block cate pt-10">Do not have an Account?
                    <Link href="/signup">
                        <a>  Sign Up</a>
                    </Link>
                </span>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <ToastContainer />
        </div>
    )
}

export default Signin;