import React from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';
import * as Scroll from 'react-scroll';

const scroller = Scroll.scroller;

const useStyle = makeStyles({
    indicator: {
      backgroundColor: "#FFE0B5",
      top: "0px"
    }
  });

const Navbar = (props) => {
    const classes = useStyle();

    const navScroll = (value) => {
        scroller.scrollTo(value, {
            duration: 1500,
            delay: 100,
            smooth: 'easeOutQuad',
            offset: -56,
        })
    }

    return (
        <AppBar style={{backgroundColor: "#0B4F6C"}}>
            <Tabs classes={{indicator: classes.indicator}} value={props.page} centered>
                <Tab style={{color: "#FFE0B5", fontWeight: "bold"}} onClick={() => navScroll('home')} label='home' value='home' />
                <Tab style={{color: "#FFE0B5", fontWeight: "bold"}} onClick={() => navScroll('projects')} label='projects' value='projects'/>
                <Tab style={{color: "#FFE0B5", fontWeight: "bold"}} onClick={() => navScroll('bio')} label='bio' value='bio'/>
                <Tab style={{color: "#FFE0B5", fontWeight: "bold"}} onClick={() => navScroll('resume')} label='resume' value='resume'/>
            </Tabs>
        </AppBar>
    );
};

export default Navbar;