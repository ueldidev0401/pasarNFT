import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { FixedNumber } from '../utils/fixedNumber';
import * as walletActions from '../store/modules/walletInfo';
import * as networkActions from '../store/modules/networkInfo';
import * as userActions from '../store/modules/userInfo';
import supportedChains from '../data/Chain/chain';

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const walletInfo = useSelector(({ walletInfo }) => walletInfo.value);
    const networkInfo = useSelector(({ networkInfo }) => networkInfo.value);
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [balance, setBalance] = useState("0.00");
    const [unit, setUnit] = useState("ETH");
    const [logined, setLogined] = useState(false);
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (typeof document !== undefined) {
            require('bootstrap/dist/js/bootstrap')
        }
        setMobileMenu(false)
    }, [])

    useEffect(() => {
        if (walletInfo.set) {
            setBalance(FixedNumber(walletInfo.data.balance));
        } else {
            setBalance("0.00")
        }
    }, [walletInfo])

    useEffect(() => {
        if (networkInfo.set) {
            setUnit(networkInfo.data.native_currency.symbol)

        } else {
            setUnit("ETH")
        }
    }, [networkInfo])

    useEffect(() => {
        if (userInfo.set) {
            var info = userInfo.data.user.info;
            if ("f_name" in info) {
                setName(info.f_name);
                if (info.avatar != "") {
                    setAvatar(info.avatar)
                }
            }
            setLogined(true);
        } else {
            setLogined(false);
        }
    }, [userInfo])

    useEffect(()=>{
        var h = document.getElementById("asix-header");  
        h.classList.add('header-show'); 
        setMobileMenu(false)
        
    },[router])

    const haneleMenu = () => {
        setMobileMenu(!mobileMenu)
        var h = document.getElementById("asix-header"); 
        if(mobileMenu){
           h.classList.add('header-show'); 
        }else{
           h.classList.remove('header-show'); 
        }
        
    }
    const openWalletModal = () => {
        setModalShow(true)
    }

    const ConnectWallet = async (index) => {
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: process.env.NEXT_PUBLIC_INFURA_ID
                    }
                },
            };
            const web3modal = new Web3Modal({
                network: 'mainnet',
                cacheProvider: true,
                providerOptions
            })
            let provider;
            if (index === 0) {
                provider = await web3modal.connect();
            } else {
                provider = await web3modal.connectTo("walletconnect");
            }
            setModalShow(false)
            const web3 = new Web3(provider);
            web3.eth.extend({
                methods: [
                    {
                        name: "chainId",
                        call: "eth_chainId",
                        outputFormatter: web3.utils.hexToNumber
                    }
                ]
            });
            initData(provider, web3, index);
            await subscribeProvider(provider, web3, index);
        } catch (e) {
            setModalShow(false)
        }
    }

    const subscribeProvider = async (provider, web3, index) => {
        if (!provider.on) {
            return;
        }
        provider.on('chainChanged', async (chainId) => {
            initData(provider, web3, index)
        });
        provider.on('networkChanged', async (networkId) => {
            initData(provider, web3, index)
        });
        provider.on('accountsChanged', async (account) => {
            if (account.length > 0) {
                initData(provider, web3, index)
            } else {
                var wData = {
                    set: false,
                    data: {
                    }
                }
                dispatch(walletActions.setWalletInfo(wData));
                var nData = {
                    set: false,
                    data: {}
                }
                dispatch(networkActions.setNetworkInfo(nData))
            }
        });
    }

    const initData = async (provier, web3, index) => {
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        const networkId = await web3.eth.net.getId();
        const chainId = await web3.eth.chainId();
        const balanceWei = await web3.eth.getBalance(address);
        const balance = web3.utils.fromWei(balanceWei.toString(), 'ether');
        var wData = {
            set: true,
            data: {
                address,
                networkId,
                chainId,
                balance: FixedNumber(balance),
            }
        }
        dispatch(walletActions.setWalletInfo(wData));
        supportedChains.forEach((item) => {
            if (item.chain_id == chainId) {
                var nData = {
                    set: true,
                    data: item
                }
                dispatch(networkActions.setNetworkInfo(nData))
            }
        })
        localStorage.setItem("wallet_index", index);
    }

    const signout = () => {
        var uData = {
            set: false,
            data: {}
        }
        dispatch(userActions.setUserInfo(uData))
        localStorage.setItem("user", JSON.stringify(uData))
        router.push({ pathname: '/' })
    } 

    return (
        <div className='test'>
            <header className="header">
                <div className="container-fluid">
                    <div className="header__content">
                        <div className="header__logo">
                            <Link href="/" prefetch={false} onClick={()=>call()}>
                                <a>
                                    <img className="asix-logo-img" src="assets/images/logo/logo-dark.png" alt="logo"></img>
                                </a>
                            </Link>
                        </div>

                        <form action="#" className="header__search">
                            <input type="text" placeholder="Search items, collections, and creators"></input>
                            <button type="button"><i className="icofont-search-2"></i></button>
                            <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                            </svg></button>
                        </form>
                       
                                <div className="header__menu ms-auto " id='asix-header'>
                                    <ul className="header__nav mb-0">
                                        <li className="header__nav-item">
                                            <Link href="/" prefetch={false} className="header__nav-link" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link href="/explore" prefetch={false} className="header__nav-link" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                                Explore
                                            </Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link href="/blog" prefetch={false} className="header__nav-link" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                                News
                                            </Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link href="/createnft" prefetch={false} className="header__nav-link" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                                Post
                                            </Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link href="/createnft" prefetch={false} className="header__nav-link" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                                Music App
                                            </Link>
                                        </li>
                                    </ul>
                                </div> 
                                
                        


                        <div className="header__actions">
                            <div className="header__action header__action--search">
                                <button className="header__action-btn" type="button"><i className="icofont-search-1"></i></button>
                            </div>

                            <div className="header__action header__action--profile">
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" data-bs-offset="-100,10">
                                        <span><i className="icofont-user"></i></span>
                                        <span className="d-none d-md-inline">{logined ? name : ""}</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            logined == false ?
                                                <>
                                                    <li>
                                                        <Link href="/signup" prefetch={false}>
                                                            <a className={router.pathname == "/signup" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i className="icofont-key"></i></span> Sign Up</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/signin" prefetch={false}>
                                                            <a className={router.pathname == "/signin" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i className="icofont-key"></i></span> Sign In</a>
                                                        </Link>
                                                    </li>
                                                </> :
                                                <>
                                                    <li>
                                                        <Link href="/userprofile" prefetch={false}>
                                                            <a className={router.pathname == "/userprofile" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i className="icofont-user"></i></span> Profile</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/" prefetch={false}>
                                                            <a className={router.pathname == "/" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i className="icofont-alarm"></i></span> Notification</a>
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => signout()}><a className="dropdown-item" href="#"><i className="icofont-logout"></i><span className="ms-1">Sign out</span></a> </li>
                                                </>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="wallet-btn">
                                <a onClick={() => openWalletModal()}>
                                    <span>
                                        <i className="icofont-wallet" data-blast="color"></i>
                                    </span>
                                    <span className="d-none d-md-inline">{balance} {unit}</span>
                                </a>
                            </div>
                        </div>

                        <button className="menu-trigger header__btn" id="parsar_menu" onClick={()=>haneleMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='ghost'
            >
                <section className="wallet-section padding-top padding-bottom">
                    <div className="container">
                        <div className="wallet-inner">
                            <div className="wallet-title text-center">
                                <h3 className="mb-3">Select NFT Network</h3>
                                <p className="m-auto mb-5 subtitle">Only BSC and ETH network are supported now</p>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-6 col-md-6'>
                                            <div className="nav-link wallet-tab active" onClick={() => ConnectWallet(0)}>
                                                <img className='wallet-img' src="assets/images/wallet/metamask.svg" alt="Metamask" />
                                                <span>Metamask</span>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-6'>
                                            <div className="nav-link wallet-tab" onClick={() => ConnectWallet(1)}>
                                                <img className='wallet-img' src="assets/images/wallet/walletconnect.svg" alt="WalletConnect" />
                                                <span>Walletconnect</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </div>
    )
}

export default Header;