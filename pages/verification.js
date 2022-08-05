import PageHeader from '../components/PageHaeder';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as walletActions from '../store/modules/walletInfo';
import * as userActions from '../store/modules/userInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import md5 from 'md5';


const Verification = () => {
    const apiPrefix = process.env.NEXT_PUBLIC_API;
    const dispatch = useDispatch();
    const walletInfo = useSelector(({ walletInfo }) => walletInfo.value);
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [orpw, setOrpw] = useState("");
    const [wallet, setWallet] = useState("");
    const [kyc, setKyc] = useState({});
    const [info, setInfo] = useState({});
    const [avatar, setAvatar] = useState("");
    const [kindDoc, setKindDoc] = useState(1);
    const [idNum, setIdNum] = useState("");
    const [exDate, setExDate] = useState("");
    const [cardUrl, setCardUrl] = useState("");
    const [docUrl, setDocUrl] = useState("");

    useEffect(() => {
        setModalShow(true)
    }, []);

    useEffect(() => {
        if (userInfo.set) {
            var info = userInfo.data.user.info;
            setInfo(info);
            setId(userInfo.data.user.id);
            setEmail(userInfo.data.user.email);
            setOrpw(userInfo.data.user.pw);
            setWallet(userInfo.data.user.wallet);
            setKyc(userInfo.data.user.kyc);
            if ("f_name" in info) {
                setAvatar(info.avatar);
            }
            var kycData = userInfo.data.user.kyc;
            if ("kindDoc" in kycData) {
                setKindDoc(kycData.kindDoc);
                setIdNum(kycData.idNum);
                setExDate(kycData.exDate);
                setCardUrl(kycData.cardUrl);
                setDocUrl(kycData.docUrl);
            }

        } else {
            router.push({ pathname: '/' })
        }
    }, [userInfo])

    const changeFile = (e, index) => {
        if (e.target.files && e.target.files.length > 0) {
            uploadFile(e.target.files[0], index);
        }
    }

    const uploadFile = async (file, index) => {
        console.log(">>>>here", index)
        let reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = function () {
            var data = {
                name: Date.now(),
                img: reader.result
            }
            axios.post(apiPrefix + "upload", data)
                .then((response) => {
                    console.log("res", response.data.Location)
                    if (index === 1) {
                        setCardUrl(response.data.Location);
                    } else {
                        setDocUrl(response.data.Location);
                    }
                    notify_success("File uploaded successfully")
                })
                .catch((error) => {
                    throw (error);
                })
        };
        reader.onerror = function (error) {
            console.log(error);
        };
    }

    const updateKYC = async () => {
        if (idNum === "" || exDate === "" || cardUrl === "" || docUrl === "") {
            notify_warning("Field must be filled with text or files");
            return
        }
        var kyc = {
            kindDoc,
            idNum,
            exDate,
            cardUrl,
            docUrl
        }
        var data = {
            id,
            email,
            wallet,
            level: 5,
            pw: orpw,
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

    const downFile = (f) => {
        var filename = "myDoc." + f.slice(-3);
        axios({
            method: "get",
            url: f,
            responseType: "arraybuffer"
        })
            .then((response) => {
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(
                    new Blob([response.data], { type: "application/octet-stream" })
                );
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                setTimeout(function () {
                    window.URL.revokeObjectURL(link);
                }, 200);
            })
            .catch((error) => { });
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
                <div className="container-fluid axis-padding">
                    <div className="section-wrapper ">
                        <div className='row justify-content-center asix-tab-row'>
                            <div className='col-lg-8'>
                                <ul className='nav asix-nav-tab'>
                                    <li className='asix-tab-item'>
                                        <Link href="/userprofile" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item'>
                                        <Link href="/nftfunding" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Nft/Crowd Funding
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item asix-tab-active'>
                                        <Link href="/verification" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            KYC Verification
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="create-nft py-5 px-4">
                                    <div className="create-nft-form">
                                        <div className='row'>
                                            <div className='col-md-6 asix-p-3p'>
                                                <h5 className='asix-mb-30'>1. Required Documents</h5>
                                                <div className='row asix-mb-30'>
                                                    <label className='asix-input-item-name'>Kind of Document</label><br />
                                                    <div className='col-md-4'>
                                                        <p className={kindDoc == 1 ? 'asix-kind-active asix-kind' : 'asix-kind'} onClick={() => setKindDoc(1)} >ID Card</p>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <p className={kindDoc == 2 ? 'asix-kind-active asix-kind' : 'asix-kind'} onClick={() => setKindDoc(2)} >Passport</p>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <p className={kindDoc == 3 ? 'asix-kind-active asix-kind' : 'asix-kind'} onClick={() => setKindDoc(3)} >Drivers Licence</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <label className='asix-input-item-name'>ID Number</label>
                                                        <input type="text" onChange={(e) => setIdNum(e.target.value)} value={idNum} className="form-control input-item" placeholder="" />
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <label className='asix-input-item-name'>Expiration Date</label>
                                                        <input type="text" onChange={(e) => setExDate(e.target.value)} value={exDate} className="form-control input-item" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className='asix-divider'></div>
                                                <h5 className='asix-mb-30'>Upload ID Card</h5>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <label className='asix-input-item-name'>We require both side of your ID   {cardUrl != "" ? <i className="icofont-download asix-cursor" onClick={() => downFile(cardUrl)}></i> : ""} </label>
                                                        <div className="upload-item mb-30">
                                                            <p className='axis-upload-text'>Maximum size of image 8Mb JPG, PDF, PNG
                                                            </p>
                                                            <div className="custom-upload">
                                                                <div className="file-btn"><i className="icofont-upload-alt"></i>
                                                                    Upload a file</div>
                                                                <input accept="image/*" onChange={(e) => changeFile(e, 1)} type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 asix-p-3p asix-l-border'>
                                                <h5 className='asix-mb-30'>2. Proof of Address</h5>
                                                <div className='col-md-12'>
                                                    <label className='asix-input-item-name'>Upload Document {docUrl != "" ? <i className="icofont-download asix-cursor" onClick={() => downFile(docUrl)}></i> : ""}</label>
                                                    <p className='asix-upload-doc'>Proof of address document can be one of the following:
                                                        bank/credit card or utility bill. More</p>
                                                    <div className="upload-item mb-30">
                                                        <p className='axis-upload-text'>Maximum size of image 8Mb JPG, PDF, PNG
                                                        </p>
                                                        <div className="custom-upload">
                                                            <div className="file-btn"><i className="icofont-upload-alt"></i>
                                                                Upload a file</div>
                                                            <input accept="image/*" onChange={(e) => changeFile(e, 2)} type="file" />
                                                        </div>
                                                    </div>
                                                    <div className="asix-right">
                                                        <button className="asix-pink-fill-btn asix-w-full" onClick={() => updateKYC()}>Submit</button>
                                                    </div>
                                                </div>
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

export default Verification;