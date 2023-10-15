import classes from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={classes.PageNotFound}>
            <h3 className={classes.Title}>404 Page Not Found!</h3>
            <h4>The links above in the menu bar might help you!</h4>
        </div>
    );
};

export default PageNotFound;