import classes from './Toolbar.module.css';
import Logo from './Logo/Logo';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ContactBar from './ContactBar/ContactBar';

const Toolbar = (props) => (
  <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.toggleSideDrawer} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <ContactBar  />
        <NavigationItems  />
      </nav>
      <nav className={classes.MobileOnly}>
        <ContactBar />
      </nav>
  </div>
);

export default Toolbar;