
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import navItems from '../../../../../../../helpers/menuHelper';

const NavigationItems = () => (
  <nav className={classes.NavigationItems}>
    {
      navItems.map((navItem, i) => {
        return (
          <NavigationItem 
          key={i} 
          link={navItem.link} 
          exact={i === 1 ? true : false}>
           {navItem.name}
          </NavigationItem>
        );
      })
    }
  </nav>
);

export default NavigationItems;