import NavigationItems from '../Toolbar/Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

 return (
<div>  
    <Backdrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <button className={classes.CloseButton} onClick={props.closed}>
          <i className="fa fa-close fa-lg" />
        </button>
    <nav>
        <NavigationItems />
     </nav>
    </div>
    </div>
 );
};

export default SideDrawer;