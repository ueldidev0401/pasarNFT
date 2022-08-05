import PageHeader from '../components/PageHaeder';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CrowdFunding from '../components/CrowdFunding'; 
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as walletActions from '../store/modules/walletInfo';
import * as userActions from '../store/modules/userInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import md5 from 'md5';

const NftFunding = () => {
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);
    const [avatar, setAvatar] = useState("");
    


    useEffect(() => {
        setModalShow(true)
    }, []);

    useEffect(() => {
        if (userInfo.set) {
            var info = userInfo.data.user.info;
            if ("f_name" in info) {
                setAvatar(info.avatar);
            }

        } else {
            router.push({ pathname: '/signin' })
        }
    }, [userInfo])

    return (
        <div className='create-nft-sect'>
            <div className='container-fluid asix-padding-zero'>
                <div className='row asix-profile-banner'>
                    <img className='asix-padding-zero' src='assets/images/banner/page-header.png' alt="" />
                    <div className='asix-avatar-wrap'>
                        <img className='asix-avatar' src={avatar != "" ? avatar : 'assets/images/asix/avatar.png'} alt='' />
                    </div>
                    {/* <p>Chinonye Eze</p> */}
                </div>
            </div>
            <section className="create-nft-section padding-bottom padding-top">
                <div className="container-fluuid axis-padding">
                    <div className="section-wrapper ">
                        <div className='row justify-content-center asix-tab-row'>
                            <div className='col-lg-8'>
                                <ul className='nav asix-nav-tab'>
                                    <li className='asix-tab-item'>
                                        <Link href="/userprofile" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item asix-tab-active'>
                                        <Link href="/nftfunding" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Nft/Crowd Funding
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item'>
                                        <Link href="/verification" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            KYC Verification
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="create-nft py-5">
                                    <div className="create-nft-form">
                                        <div className='row'>
                                            <div className='col-md-8'>
                                                <form action="#" className="header__search asix-search-form">
                                                    <input type="text" className='asix-search-input' placeholder="Search item here"></input>
                                                    <button type="button"><i className="icofont-search-2"></i></button>
                                                    <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                                                    </svg></button>
                                                </form>
                                            </div>
                                            <div className='col-md-4'>
                                                <form action="#" className="header__search asix-search-form">
                                                    <select className="form-select input-item asix-round" id="selectCrypto"
                                                        aria-label="Floating label select">
                                                        <option>Recently Listed</option>
                                                        <option value="1">BitCoin</option>
                                                        <option value="2">Dollar</option>
                                                        <option value="3">Pound</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9'>
                                <div className='row'>
                                    <CrowdFunding />
                                    <div className='row asix-mt-20'>
                                        <div className="asix-right">
                                            <button className="asix-pink-outline-btn">Load More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default NftFunding;