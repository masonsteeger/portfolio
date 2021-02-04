import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const navbar = (props) => {

    return (
        <AppBar position="sticky">
            <Tabs value={props.page} centered >
                <Tab label="Projects" value={'projects'} ></Tab>
                <Tab label="Bio" value={'bio'} ></Tab>
                <Tab label="Resume/Certificates" value={'resume'}></Tab>
            </Tabs>
        </AppBar>
    );
};

export default navbar;