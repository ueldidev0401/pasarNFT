import HelpPageHeader from "../components/HelpPageHeader";
import ContactButton from "../components/ContactButton";
import SellCard from "../components/SellCard";

const HelpPost = {
    "id":1,
    "title":"What is NFT?"
}

const HelpSingle = () => {
    return(
        <div>

        <HelpPageHeader />
        <div className="help-text padding-top padding-bottom">
            <div className=" container">
                <div className="row g-5 flex-lg-row-reverse">
                    <div className="col-lg-9">
                    <div className="help-text-wrapper">
                        <h3 className="mb-4">What is NFT?</h3>
                        <p>Before understanding NFT, you must understand what is fungibility. Fungibility is the
                            property of the
                            object or item to
                            be interchanged with another copy of the same type or similar type or different type without
                            affecting
                            its value. Money
                            is the best example of fungible tokens. If I have a $100 bill & you have five $20 bills then
                            we can
                            exchange it easily
                            without causing any loss or benefit to anyone. Similarly, Non-Fungible items are those which
                            can not
                            be
                            interchanged
                            like this.</p>
                        <p>Gallery art hanging in the museum is the best example of it. Every art is unique & can not be
                            replaced by
                            any similar
                            items.</p>
                        <p>Non-Fungible Token (NFT) represents a one-of-a-kind digital asset which has been securitised
                            by the
                            backing of
                            cryptography (the same technology we use to generate cryptocurrencies) and thus allows the
                            owner to
                            claim their
                            creation.
                            Its just a digital representation of your digital assets (image, video, text file, pdf,
                            etc.) whose
                            proof-of-existence
                            & proof-of-ownership is being managed by a Blockchain ledger, simply called Blockchain. This
                            is only
                            possible because
                            the Blockchain ledger is considered immutable (means can not be altered or removed) and thus
                            cannot
                            be
                            tampered with by
                            anyone without paying billions of dollars & years of time.</p>
                        <p>NFTs can be created for a wide variety of digital art and assets like music, painting, memes,
                            videos,
                            gaming
                            collectibles and a lot more. Since NFTs provide a sense of belonging and help in
                            establishing a
                            proof of ownership, they
                            are being used to secure Domains, gaming collectibles, any priceless memory, and much
                            more.</p>
                        <br />
                        <h3 className="mb-4">What is Wallet & How to Connect?</h3>
                        <p>A cryptocurrency wallet is a device, physical medium, program or a service which stores the
                            public
                            and/or private keys
                            for cryptocurrency transactions. In addition to this basic function of storing the keys, a
                            cryptocurrency wallet more
                            often also offers the functionality of encrypting and/or signing information</p>
                        <img className="mb-4" src="assets/images/help/01.jpg" alt="Connect Wallet Image" />
                        <p>MetaMask is amongst the most popular crypto wallets and browser extensions, and it acts as a
                            link to get connected to
                            numerous blockchain applications. The ease of use and high accessibility are the crucial
                            aspects that make MetaMask a
                            preferred choice among crypto enthusiasts.
                            MetaMask is a browser extension that enables one to store their tokens and also to get
                            linked with other blockchain
                            applications. It provides a simple user interface, backed by the security of keys and
                            passwords. Hence, it emerges as
                            one of the most reliable options for people to keep their crypto tokens safe.</p>
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <aside className="related-help">
                            <h5>Related Links</h5>
                            <ul className="related-linklist">
                                <li><a className="related-link">How to link your wallet to an NFT Marketplace?</a></li>
                                <li><a className="related-link">How to buy an NFT from an NFT Marketplace?</a></li>
                                <li><a className="related-link">How To Create a Store In Anftiz</a></li>
                                <li><a className="related-link">Set Up Your Crypto Wallet</a></li>
                            </ul>
                        </aside>
                    </div>

                </div>
            </div>
        </div>

        <div className="padding-top"><SellCard /></div>
        <ContactButton />
        
        
       </div>


    )
}

export default HelpSingle;