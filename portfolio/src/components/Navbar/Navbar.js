import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as Scroll from 'react-scroll';
import './Navbar.css'

const scroller = Scroll.scroller;
const Events = Scroll.Events

const Navbar = (props) => {

    const navScroll = (value) => {
        scroller.scrollTo(value, {
            duration: 1500,
            delay: 100,
            smooth: 'easeInOutQuart',
            offset: -70,
        })
    }

    return (
        <AppBar>
            <Tabs value={props.page}>
                <Tab onClick={() => navScroll('home')} label='home' value='home' />
                <Tab onClick={() => navScroll('projects')} label='projects' value='projects'/>
                <Tab onClick={() => navScroll('bio')} label='bio' value='bio'/>
                <Tab onClick={() => navScroll('resume')} label='resume' value='resume'/>
            </Tabs>
        </AppBar>
    );
};

export default Navbar;