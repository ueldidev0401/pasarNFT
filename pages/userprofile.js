import PageHeader from '../components/PageHaeder';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as walletActions from '../store/modules/walletInfo';
import * as userActions from '../store/modules/userInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import md5 from 'md5';


const UserProfie = () => {
    const apiPrefix = process.env.NEXT_PUBLIC_API;
    const dispatch = useDispatch();
    const walletInfo = useSelector(({ walletInfo }) => walletInfo.value);
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [f_name, setFirstName] = useState("");
    const [l_name, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [street, setStreet] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [pw, setPw] = useState("");
    const [rpw, setRpw] = useState("");
    const [opw, setOpw] = useState("");
    const [orpw, setOrpw] = useState("");
    const [wallet, setWallet] = useState("");
    const [kyc, setKyc] = useState({});
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        setModalShow(true)
    }, []);

    useEffect(() => {
        if (userInfo.set) {
            var info = userInfo.data.user.info;
            setId(userInfo.data.user.id);
            setEmail(userInfo.data.user.email);
            setOrpw(userInfo.data.user.pw);
            setWallet(userInfo.data.user.wallet);
            setKyc(userInfo.data.user.kyc);
            if ("f_name" in info) {
                setFirstName(info.f_name);
                setLastName(info.l_name);
                setCity(info.city);
                setZip(info.zip);
                setStreet(info.street);
                setDay(info.day);
                setMonth(info.month);
                setYear(info.year);
                setAvatar(info.avatar);
            }

        } else {
            router.push({ pathname: '/signin' })
        }
    }, [userInfo])

    useEffect(() => {
        if (walletInfo.set) {

        } else {

        }
    }, [walletInfo])

    const updateProfile = async (mode) => {
        if (mode === 2) {
            if (md5(opw) != orpw) {
                notify_warning("Old password wrong!");
                return
            }
            if (pw != rpw || pw === "") {
                notify_warning("Confirm new password!");
                return
            }
            if (md5(pw) === orpw) {
                notify_warning("Old & New password same!");
                return
            }
        }
        var info = {
            f_name,
            l_name,
            city,
            zip,
            street,
            day,
            month,
            year,
            avatar,
        }
        var data = {
            id,
            email,
            wallet,
            level: 5,
            pw: mode === 1 ? orpw : md5(pw),
            info,
            kyc
        }
        axios.put(apiPrefix + "user", data)
            .then((res) => {
                if (res.status === 200) {
                    var uData = {
                        set: userInfo.set,
                        data: {
                            token: userInfo.data.token,
                            user: res.data
                        }
                    }
                    dispatch(userActions.setUserInfo(uData))
                    localStorage.setItem("user", JSON.stringify(uData))
                    notify_success('Successfully profile updated!');

                } else {
                    notify_warning("Updating failed, network issue or maybe...")
                }
            })
            .catch((error) => {
                throw (error);
            })
    }

    const notify_success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notify_warning = (msg) => toast.warning(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const changeAavatar = (e) => {
        if (e.target.files && e.target.files.length > 0) { 
            setAvatarFile(e.target.files[0]);
            var a_url = URL.createObjectURL(e.target.files[0]);
            setAvatar(a_url)
            uploadAavatar(e.target.files[0]);
        }
    }

    const uploadAavatar = async (file) => {
        let reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = function () {
            var data = {
                name: Date.now(),
                img: reader.result
            }
            axios.post(apiPrefix + "upload", data)
                .then((response) => {  
                     setAvatar(response.data.Location); 
                     notify_success("Click save button to keep avatar")
                })
                .catch((error) => {
                    throw (error);
                })
        };
        reader.onerror = function (error) {
            console.log(error);
        };
    }

    return (
        <div className='create-nft-sect'>
            <div className='container-fluid asix-padding-zero'>
                <div className='row asix-profile-banner'>
                    <img className='asix-padding-zero' src='assets/images/banner/page-header.png' alt="" />
                    <div className='asix-avatar-wrap'>
                        <div className='avatar-box'>
                            <img className='asix-avatar' src={avatar != "" ? avatar:'assets/images/asix/avatar.png'} alt='' />
                            <div className='edit-btn'>
                                <div className='icon-btn custom-upload'>
                                    <div className="custom-upload file-btn">  
                                    </div>
                                    <input accept="image/*" type="file" onChange={(e)=>changeAavatar(e)}/>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <p>Chinonye Eze</p> */}
                </div>
            </div>
            <section className="create-nft-section padding-bottom padding-top">
                <div className="container-fluid axis-padding">
                    <div className="section-wrapper ">
                        <div className='row justify-content-center asix-tab-row'>
                            <div className='col-lg-8'>
                                <ul className='nav asix-nav-tab'>
                                    <li className='asix-tab-item asix-tab-active'>
                                        <Link href="/userprofile" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item'>
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
                            <div className="col-lg-8">
                                <div className="create-nft py-5 px-4">
                                    <div className="create-nft-form">
                                        <div className='row'>
                                            <div className='col-md-12 asix-mb-20'>
                                                <h5>Personal Info</h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Email Address</label>
                                                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>First Name</label>
                                                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={f_name} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Last Name</label>
                                                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={l_name} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className='col-md-12 asix-mb-20'>
                                                <h5>Address</h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>City</label>
                                                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Zip</label>
                                                    <input type="text" onChange={(e) => setZip(e.target.value)} value={zip} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Street</label>
                                                    <input type="text" onChange={(e) => setStreet(e.target.value)} value={street} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className='col-md-12 asix-mb-20'>
                                                <h5>Date of Birth</h5>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Day*</label>
                                                    <input type="text" onChange={(e) => setDay(e.target.value)} value={day} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Month*</label>
                                                    <input type="text" onChange={(e) => setMonth(e.target.value)} value={month} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Year*</label>
                                                    <input type="text" onChange={(e) => setYear(e.target.value)} value={year} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className="asix-right">
                                                <button className="asix-pink-outline-btn" onClick={() => updateProfile(1)} >Save Change</button>
                                            </div>
                                        </div>

                                        <div className='asix-divider'></div>

                                        <div className='row'>
                                            <div className='col-md-12 asix-mb-20'>
                                                <h5>Change Password</h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Old Password</label>
                                                    <input type="password" onChange={(e) => setOpw(e.target.value)} value={opw} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>New Password</label>
                                                    <input type="password" onChange={(e) => setPw(e.target.value)} value={pw} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="item-name-field mb-3">
                                                    <label className='asix-input-item-name'>Retype New Password</label>
                                                    <input type="password" onChange={(e) => setRpw(e.target.value)} value={rpw} className="form-control input-item" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row asix-mt-20'>
                                            <div className="asix-right">
                                                <button className="asix-pink-outline-btn" onClick={() => updateProfile(2)} >Save Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <ToastContainer />
        </div>
    )
}

export default UserProfie;