import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import classes from './ToolBarWrapper.module.css'

const ToolBarWrapper = () => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };
    
   const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };
    
    return (
        <div className={classes.ToolBarWrapper}>
            <Toolbar toggleSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        </div>
    );
};

export default ToolBarWrapper;