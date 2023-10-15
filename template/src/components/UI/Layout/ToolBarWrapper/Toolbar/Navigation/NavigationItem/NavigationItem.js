
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
    <div className={classes.NavigationItem}>
       <NavLink 
       title={props.title} 
       activeClassName={classes.Active} 
       exact={props.exact} 
       to={props.link}>
        {props.children}
       </NavLink>
       <h4 className={classes.Separator}>{/* css styles - no actual thing to display */}</h4>
    </div>
);

export default NavigationItem;