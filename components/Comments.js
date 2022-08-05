const Comments = () => {
    return (
        <div>
        <div id="comments" className="comments">
            <div className="widget-title">
                <h5>02 Comments</h5>
            </div>
            <ul className="comment-list">
                <li className="comment" id="li-comment-2">
                    <div className="com-image">
                        <img alt="author" src="assets/images/seller/collector-3.gif" className="avatar"
                            height="70" width="70" />
                    </div>
                    <div className="com-content">
                        <div className="com-title">
                            <div className="com-title-meta">
                                <h6><a href="#" rel="external nofollow" className="url">rasselmrh</a>
                                </h6>
                                <span> October 5, 2022 at 12:41 pm </span>
                            </div>
                            <span className="reply">
                                <a rel="nofollow" className="comment-reply-link" href="#"><i
                                        className="icofont-reply-all"></i>
                                    Reply</a>
                            </span>
                        </div>
                        <p>The inner sanctuary, I throw myself down among the tall grass bye the
                            trckli stream and, as I lie close to the earth</p>
                    </div>
                    <ul className="comment-list">
                        <li className="comment even thread-even depth-1 comment" id="li-comment-3">
                            <div className="com-image">
                                <img alt="author" src="assets/images/seller/collector-3.png"
                                    className="avatar" height="70" width="70" />
                            </div>
                            <div className="com-content">
                                <div className="com-title">
                                    <div className="com-title-meta">
                                        <h6><a href="#" rel="external nofollow"
                                                className="url">R3b ca</a></h6>
                                        <span> October 5, 2022 at 12:41 pm </span>
                                    </div>
                                    <span className="reply">
                                        <a rel="nofollow" className="comment-reply-link" href="#"><i
                                                className="icofont-reply-all"></i> Reply</a>
                                    </span>
                                </div>
                                <p>A wonderful serenity has taken possession of my entire soul, like
                                    these sweet mornings spring which I enjoy with my whole heart
                                </p>
                                <div className="reply-btn">
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div id="respond" className="comment-respond">
            <div className="add-comment">
                <div className="widget-title">
                    <h5>Leave a Comment</h5>
                </div>
                <form action="#" method="post" id="commentform" className="comment-form">
                    <div className="row w-100 g-3">
                        <div className="col-lg-6">
                            <div className="form-floating">
                                <input type="text" className="w-100 comment-input form-control"
                                    id="authorName" placeholder="Full Name" />
                                <label>Full Name</label>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div className="form-floating">
                                <input type="email" className="w-100 comment-input form-control"
                                    id="authorEmail" placeholder="Your Email" />
                                <label>Your Mail</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating w-100">
                                <input type="text" className="w-100 comment-input form-control"
                                    id="cmntSub" placeholder="Subject" />
                                <label >Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating w-100 mb-4">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea"></textarea>
                                <label>Comments</label>
                            </div>
                        </div>
                        <button className="default-btn move-right" type="submit"><span>Send
                                Comment</span></button>
                    </div>



                </form>
            </div>
        </div>
        </div>
    )
}

export default Comments;