import { useEffect, useState } from "react";
import PageHeader from '../components/PageHaeder';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const PageHeaderText =
{
    "linkText": "Home",
    "heading": "Create NFT"
};

function MyVerticallyCenteredModal(props) {
    const router = useRouter()
    const openProfile = () => {
        router.push({ pathname: '/verification' })
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='ghost'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    KYC Verification
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    In order to post crowd funding, user has
                    to complete Authentication of
                    Profile
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className="asix-pink-fill-btn" onClick={openProfile}>Confirm Account</button>
                <button className="asix-pink-outline-btn" onClick={props.onHide}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
}

const CreateNft = () => {
    const userInfo = useSelector(({ userInfo }) => userInfo.value);
    const [modalShow, setModalShow] = useState(false);
    const [royalty, setRoyalty] = useState("0")
    const [service, setService] = useState("0")
    const [user, setUser] = useState([]);
    const [kycVerified, setKycVerified] = useState(false);

    const [method, setMethod] = useState(1);

    useEffect(() => {
        if (userInfo.set) {
            var kyc = userInfo.data.user.kyc;
            if ("kindDoc" in kyc) {
                setKycVerified(true);
            }
        }
    }, [userInfo])

    const selectRoyalty = (e) => {
        setRoyalty(e.target.value)
    }
    const selectService = (e) => {
        setService(e.target.value)
    }

    const addUser = () => {
        const user_i = {
            id: "",
            royalty: ""
        };
        var temp = [...user];
        temp.push(user_i);
        setUser(temp);
    }
    const removeUser = (index) => {
        console.log(">>", index)
        var temp = [...user];
        temp.splice(index, 1);
        setUser(temp)
    }
    const handleIDSh = (e, index) => {
        var temp = [...user];
        temp[index].id = e.target.value;
        setUser(temp)
    }
    const handleLoyaltySh = (e, index) => {
        var temp = [...user];
        temp[index].royalty = e.target.value;
        setUser(temp);
    }

    return (
        <div className='create-nft-sect'>
            <section className="create-nft-section padding-bottom padding-top">
                <div className="container-fluuid axis-padding">
                    <div className="section-wrapper ">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="create-nft py-5 px-4">
                                    <div className="create-nft-form">
                                        <label className='asix-input-item-name'>Upload File</label>
                                        <div className="upload-item mb-30">
                                            <p className='axis-upload-text'>PNG,JPG,JPEG,SVG,WEBP,Mp3 & Mp4
                                                (Max-150mb)
                                            </p>
                                            {/* <div className="custom-upload">
                                                <img className='asix-upload-img file-btn' src='assets/images/asix/upload.png' alt="upload"/>
                                                <div className="file-btn">  Upload a file</div>
                                                <input type="file" />
                                            </div> */}
                                            <div className="custom-upload">
                                                <div className="file-btn"><i className="icofont-upload-alt"></i>
                                                    Upload a file</div>
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="item-name-field mb-3">
                                            <label className='asix-input-item-name'>Name</label>
                                            <input type="text" className="form-control input-item" id="itemNameInput" placeholder="Item Name" />
                                        </div>
                                        <div className="item-desc-field mb-30">
                                            <label className='asix-input-item-name'>Select method</label>
                                            <div className='asix-flex'>
                                                <div className="row">
                                                    <div className="col-6 col-md-3 asix-mt-5">
                                                        <div className='asix-icon-btn'>
                                                            <Icon.TagFill className='icon-btn-icon' />
                                                            <p className='icon-btn-name'>Fixed Price</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-3 asix-mt-5">
                                                        <div className='asix-icon-btn'>
                                                            <Icon.HourglassSplit className='icon-btn-icon' />
                                                            <p className='icon-btn-name'>Timed auction</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-3 asix-mt-5">
                                                        <div className='asix-icon-btn'>
                                                            <Icon.PeopleFill className='icon-btn-icon' />
                                                            <p className='icon-btn-name'>Open to bids</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-3 asix-mt-5">
                                                        <div className='asix-icon-btn' onClick={() => setModalShow(!kycVerified)}>
                                                            <Icon.KeyFill className='icon-btn-icon' />
                                                            <p className='icon-btn-name'>Crowd Funding</p>
                                                        </div>
                                                    </div> 
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="item-desc-field mb-30">
                                            <label className='asix-input-item-name'>Description</label>
                                            <textarea className="form-control" placeholder="Description of your Nft"
                                                id="itemDesc"></textarea>
                                        </div>
                                        <div className="item-price-field mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-12">
                                                    <label className='asix-input-item-name'>Price</label>
                                                    <div className="asix-price-sel">
                                                        <input type="number" className="form-control input-item" id="itemPriceInput"
                                                            placeholder="Enter Price" />
                                                        <select className="form-select input-item" id="selectCrypto"
                                                            aria-label="Floating label select">
                                                            <option value="0"> ETH </option>
                                                            <option value="1"> BNB </option>
                                                            <option value="2"> SOL </option>
                                                            <option value="3"> ADA </option>
                                                            <option value="4"> AVA </option>
                                                            <option value="5"> MATIC </option>
                                                            <option value="6"> CRO </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-price-field mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-12">
                                                    <label className='asix-input-item-name'>Type of Royalty</label>
                                                    <select className="form-select input-item" aria-label="Floating label select" onChange={(e) => selectRoyalty(e)}>
                                                        <option value="0"> Single Royalty </option>
                                                        <option value="1"> Shared Royalty </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {user.map((item, index) => {
                                            return (
                                                <div className="item-name-field mb-3" key={index}>
                                                    <div className="row g-2">
                                                        <div className="col-12 col-md-5">
                                                            <label className='asix-input-item-name'>Owner {index + 1}</label>
                                                            <input type="text" className="form-control input-item" placeholder="User ID" value={item.id} onChange={(e) => handleIDSh(e, index)} />
                                                        </div>
                                                        <div className="col-10 col-md-5">
                                                            <label className='asix-input-item-name'> &nbsp;</label>
                                                            <input type="text" className="form-control input-item" placeholder="suggestion" value={item.royalty} onChange={(e) => handleLoyaltySh(e, index)} />
                                                        </div>
                                                        <div className="col-2 col-md-2">
                                                            <label className='asix-input-item-name'> &nbsp;</label>
                                                            <div className="asix-royalty-user-trash">
                                                                <Icon.Trash onClick={() => removeUser(index)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        {royalty === "1" ?
                                            <div className=" asix-right">
                                                <button className="asix-pink-outline-btn" onClick={() => addUser()}>Add User</button>
                                            </div> : <></>
                                        }
                                        <div className="item-name-field mb-3">
                                            <label className='asix-input-item-name'>Royalties</label>
                                            <input type="text" className="form-control input-item" id="itemNameInput" placeholder="Suggested:0, 10%, 20%, 30%, Maximum 70%" />
                                        </div>
                                        <div className="item-price-field mb-3">
                                            <div className="row g-1">
                                                <div className="col-md-6">
                                                    <label className='asix-input-item-name'>Type of Service</label>
                                                    <select className="form-select input-item" aria-label="Floating label select" onChange={(e) => selectService(e)}>
                                                        <option value="0"> Promoter </option>
                                                        <option value="1"> Listener </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="item-name-field mb-3">
                                                        <label className='asix-input-item-name'>{service == "0" ? "Stack Amount" : "Number of listener"}</label>
                                                        <input type="number" className="form-control input-item" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-btn-field asix-right">
                                            <button>Create Nft</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default CreateNft;