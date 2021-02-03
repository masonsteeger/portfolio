import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withRouter } from 'react-router'

const navbar = (props) => {

    const changePage = (url) => {
        console.log("clicked" + url);
        props.setPage(url)
        props.history.push(url)
      };


    return (
        <AppBar position="sticky">
            <Tabs value={props.page} centered >
                <Tab label="Projects" value={'/projects'} onClick={() => changePage('/projects')}></Tab>
                <Tab label="Bio" value={'/bio'} onClick={() => changePage('/bio')}></Tab>
                <Tab label="Resume/Certificates" value={'/resume'} onClick={() => changePage('/resume')}></Tab>
            </Tabs>
        </AppBar>
    );
};

export default withRouter(navbar);