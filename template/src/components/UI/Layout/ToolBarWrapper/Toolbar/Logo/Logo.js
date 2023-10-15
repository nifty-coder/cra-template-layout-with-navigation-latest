
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src="/images/logo192.png" 
        alt="Logo" />
       </a> 
    </div>
);

export default Logo;