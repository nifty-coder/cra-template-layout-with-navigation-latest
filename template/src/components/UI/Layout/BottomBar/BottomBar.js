
import classes from './BottomBar.module.css';
import ContactUs from '../ContactUs/ContactUs';
import commonClasses from '../../../../helpers/commonClasses.module.css';
import websiteDetailsConfig from '../../../../helpers/websiteDetailsConfig';
import { CopyrightYear } from '../../../../helpers/constants';

const BottomBar = () => {
    return (
        <div className={classes.BottomBar}>

          <ContactUs addressShown={true} className={classes.BottomBarSubGrid1} />
          
          <div className={classes.BottomBarSubGrid2}>
            <div>
              <span className={commonClasses.Headings}>Other Links</span>

              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Link 1</a>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer">Link 2</a>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer">Link 3</a>
              </p>
            </div>

            {/* You can uncomment the following code:
             <div className={classes.AboutDeveloper}>
              <span className={commonClasses.Headings}>Website Developer</span>
              <br />
              Name : Change this
              <br />
              Age  : Change this 
              <br />
              Profile : <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                      Click here
                  </a>
            </div> */}
          </div>

          <div className={classes.CopyRight}>
            Copyright © {CopyrightYear}, &nbsp;{websiteDetailsConfig.copyrightName},&nbsp;All Rights Reserved.
          </div>
          
        </div>
    );
};

export default BottomBar;