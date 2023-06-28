import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Person from "../assets/img/avatar.png"
import Icon from "../assets/img/Ellipse 259 (1).svg";
import { useNavigate } from 'react-router-dom';
import { ListSubheader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import GridViewIcon from '@mui/icons-material/GridView';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CalendarTodaySharpIcon from '@mui/icons-material/CalendarTodaySharp';
import RectangleIcon from '../assets/img/Rectangle123.svg';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import { NotificationAdd } from '@mui/icons-material';
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '90px',
        //flexShrink: 0,
        [theme.breakpoints.down('sm')]: {
            width: '45px'
        },
    },
    drawerPaper: {
        backgroundColor: '#000000',
        width: 'auto',
    },
    drawerList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',

    },
    listItem: {
        marginBottom: '16px', // Adjust the margin as per your preference
    },
    avatar: {
        width: 'auto',
        height: 'auto',
    },
    whiteIcon: {
        color: '#ffffff', // Set the desired color for the icon
    },
    yellowIcon: {
        color: 'yellow',
    },
}));

const SideMenu = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        navigate(`/${item}`);
    };
    const renderSelectedIcon = () => (
        <img src={RectangleIcon} alt="Selected Icon" className={classes.selectedIcon} />
    );
    return (
        <nav className={classes.drawer}>
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                anchor="left"
            >
                <List className={classes.drawerList} subheader={
                    <ListSubheader component="div" style={{ backgroundColor: '#ED1B2E', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                        <ListItemIcon>
                            <img src={Icon} alt="Sidebar Icon" />
                        </ListItemIcon>
                    </ListSubheader>
                }>
                    <ListItem
                        style={{ minWidth: 'auto' }}
                        button
                        selected={selectedItem === 'dashboard'}
                        className={classes.listItem}
                        onClick={() => handleItemClick('dashboard')}
                    >
                        {selectedItem === 'dashboard' && renderSelectedIcon()}
                        <ListItemIcon>
                            <GridViewIcon className={
                                selectedItem === 'dashboard'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'tasks'}
                        onClick={() => handleItemClick('tasks')}
                    >
                        {selectedItem === 'tasks' && renderSelectedIcon()}
                        <ListItemIcon>
                            <AssignmentTurnedInIcon className={
                                selectedItem === 'tasks'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'meetings'}
                        onClick={() => handleItemClick('meetings')}
                    >
                        {selectedItem === 'meetings' && renderSelectedIcon()}
                        <ListItemIcon>
                            <CalendarTodaySharpIcon className={
                                selectedItem === 'meetings'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'suggestions'}
                        onClick={() => handleItemClick('suggestions')}
                    >
                        <ListItemIcon>
                            {selectedItem === 'suggestions' && renderSelectedIcon()}

                            <AssignmentTurnedInIcon className={
                                selectedItem === 'suggestions'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'peoples'}
                        onClick={() => handleItemClick('peoples')}
                    >
                        <ListItemIcon>
                            {selectedItem === 'peoples' && renderSelectedIcon()}

                            <GroupsIcon className={
                                selectedItem === 'peoples'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />                        
                            </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        selected={selectedItem === 'Companies'}
                        onClick={() => handleItemClick('Companies')}
                    >
                        <ListItemIcon>
                            {selectedItem === 'Companies' && renderSelectedIcon()}

                            <BusinessIcon className={
                                selectedItem === 'Companies'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'Notifications'}
                        onClick={() => handleItemClick('Notifications')}
                        style={{ paddingTop: '60px' }}
                    >
                        <ListItemIcon>
                            {selectedItem === 'Notifications' && renderSelectedIcon()}

                            <NotificationAdd className={
                                selectedItem === 'Notifications'
                                    ? classes.yellowIcon
                                    : classes.whiteIcon
                            } />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedItem === 'Profile'}
                        onClick={() => handleItemClick('Profile')}
                    >
                        <ListItemIcon>
                            {selectedItem === 'Profile' && renderSelectedIcon()}

                            <Avatar src={Person} className={classes.avatar} alt="Profile" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    );
};

export default SideMenu;
