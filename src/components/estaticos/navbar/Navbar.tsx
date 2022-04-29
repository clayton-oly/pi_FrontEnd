import React from 'react';
import './Navbar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <div className="teste">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="teste"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className="teste" variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className="teste">
            <div className="teste">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
              
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Navbar;