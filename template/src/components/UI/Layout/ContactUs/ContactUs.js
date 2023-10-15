
import classes from './ContactUs.module.css';
import contactDetails from '../../../../helpers/ContactUsDetails';
import commonClasses from '../../../../helpers/commonClasses.module.css';

const ContactUs = (props) => {
    let addressClass = classes.AddressBlock;
    const addressMaps = "#"; // Replace # with the Google Maps Address Location URL

    if(!props.addressShown) {
        addressClass = classes.AddressNone;
    }

    return (
        <div className={props.className}>
            <div className={addressClass}>
                <span className={commonClasses.Headings}>Contact Us</span>
                <br />
          
                <a href={addressMaps} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-map-marker" />
                </a> {
                    contactDetails.addressLines.map(
                        (addressLine, index) => {
                            return <span key={index}>{addressLine} <br /> </span>;
                        }
                    )
                }
            </div>

            <div className={props.emailTelClassName}>
                <span className={[commonClasses.Headings, addressClass].join(' ')}>Email/Call</span>
                <span>
                    <i className="fa fa-envelope" /> <a 
                    href={"mailto:" + contactDetails.email}
                    className={classes.Email} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {contactDetails.email}
                    </a>
                </span>
                
                <p className={classes.CommunicationIcons}>
                    <i className="fa fa-phone fa-lg" /> Country 1: {contactDetails.telephone.country1.map((phone, index) => {
                        return (
                        <span key={index}>
                            <a href={"tel:" + phone} className={classes.EmailTel}>{phone}</a>
                            {index === 0 ? " | " : (<br />)}
                        </span>
                        );
                    })}

                    <i className="fa fa-phone fa-lg" /> Country 2: {contactDetails.telephone.country2.map((phone, index) => {
                        return (
                        <span key={index}>
                            <a href={"tel:" + phone} className={classes.EmailTel}>{phone}</a>
                            {index === 0 ? " | " : (<br />)}
                        </span>
                        );
                    })}
                </p>
            </div>

            <p className={classes.SocialMediaIcons}>
                <span className={[commonClasses.Headings, addressClass].join(' ')}>Social Media</span>
             
                <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-facebook-official fa-lg" />
                </a>

            <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-twitter fa-lg" />
                </a>

                <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-youtube fa-lg" />
                </a>       

                <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.instagram.com"
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-instagram fa-lg" />
                </a>                       
            </p>
        </div>
    );
};

export default ContactUs;