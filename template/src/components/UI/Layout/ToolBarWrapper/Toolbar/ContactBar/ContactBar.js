import { useState } from 'react';
import classes from './ContactBar.module.css';
import ContactUs from '../../../ContactUs/ContactUs';
import websiteDetailsConfig from '../../../../../../helpers/websiteDetailsConfig';
import { 
    CommonStylesDefaultTheme, 
    CommonStylesDarkModeTheme,
    FAMode 
} from '../../../../../../helpers/constants';

const ContactBar = () => {
    const [theme, setTheme] = useState("Default");

    const switchTheme = () => {
        if(theme === "DarkMode") {
            setTheme("Default");
            document.body.className = CommonStylesDefaultTheme;
        } else {
            setTheme("DarkMode");
            document.body.className = CommonStylesDarkModeTheme;
        }
    }; 

    return (
        <div className={classes.DesktopContactBar}>
            <p>{/* spacing */}</p>
            <div>
             <p className={[classes.WebsiteName, classes.AlignBothWays].join(' ')}>{websiteDetailsConfig.name}</p> 
                <p className={classes.AlignBothWays}>{websiteDetailsConfig.tagline}</p>
            </div>                     
            
            <ContactUs addressShown={false} className={[classes.DesktopSubGrid, classes.AlignVertical, classes.MobileOnly].join(' ')} emailTelClassName={classes.EmailTel} /> 

            <i className={[classes.DarkModeIcon, FAMode].join(' ')} onClick={switchTheme} />
        </div>
    );
};

export default ContactBar;