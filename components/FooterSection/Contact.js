import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
    <section id="contact" className="h-footerHeight bg-footer-image">
        <div className="text-xl text-white flex justify-center items-center m-auto h-inherit">
            <div className="text-center w-5/12">
                <h2 style={{ marginBottom: '30px' }}>let's make a connection</h2>
                <hr width="50px" className="m-auto"></hr>
                <h1 className="heroSub">Shoot me an email or give me a call. I love meeting new people!</h1>
                <div className="flex justify-around">
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="2x" opacity=".5"/>
                        <p className="heroSub">+1 (317)-847-0172</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" opacity=".5"/>
                        <a href="mailto:stevekentlanier@gmail.com">
                            <p className="email text-primaryBlue">stevekentlanier@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Contact;