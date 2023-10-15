import classes from './Layout.module.css';
import ToolBarWrapper from './ToolBarWrapper/ToolBarWrapper';
import BottomBar from './BottomBar/BottomBar';

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <ToolBarWrapper />

     <div className={classes.MainContent}>
       {children}
      </div>

      <BottomBar />
    </div>
  );
};

export default Layout;