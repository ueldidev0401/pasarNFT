import Link from 'next/link';

const ForgotPassword = () => {
    return (
        <div className="account-wrapper">
            <h3 className="title">Reset Password</h3>
            <div className="account-form">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                        placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-group px-3">
                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                        <Link href="/signin">
                        <a > Sign In</a>
                        </Link>
                        <Link href="/signup">
                        <a > Sign Up</a>
                        </Link>
                    </div>
                </div>
                <div className="form-group mb-0">
                    <button className="d-block default-btn move-top"><span>Reset Now</span></button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;

