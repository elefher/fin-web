import React, {FC} from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

const Menu: FC<any> = (props) => {
    const HomeLink = props => <Link to="/" {...props}/>;
    const AccountsLink = props => <Link to="/accounts" {...props}/>;

    return (
        <div>
            <nav className="menu" tabIndex={0}>
                <div className="smartphone-menu-trigger"></div>
                <header className="avatar">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"/>
                    <h2>John D.</h2>
                </header>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button component={HomeLink}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button component={AccountsLink}>
                        <ListItemIcon>
                            <AccountBalanceIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Accounts"/>
                    </ListItem>
                </List>
                <Divider/>
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sign-out"/>
                    </ListItem>
                </List>
            </nav>
        </div>
    );
}

export default Menu;
