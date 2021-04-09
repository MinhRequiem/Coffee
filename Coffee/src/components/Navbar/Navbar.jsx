import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = ({ totalItems }) => {
  return <>
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <Link to="/"><a href="#" className="nav__logo">Coffee</a></Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/about"><a href="Cart" className="nav__link">About</a></Link></li>
            <li className="nav__item"><Link to="/contact"><a href="Cart" className="nav__link">Contact</a></Link></li>
            <li className="nav__item"><Link to="/products"><a href="Cart" className="nav__link">Products</a></Link></li>
            <li className="nav__item">
              <Link to="/cart"><a href="Cart" className="nav__link">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </a></Link>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" />
        </div>
      </nav>
    </header>


  </>
}

export default Navbar





// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons';
// import { Link, useLocation } from 'react-router-dom';

// import logo from '../../assets/commerce.png';
// import useStyles from './styles';

// const PrimarySearchAppBar = ({ totalItems }) => {
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
//   const classes = useStyles();
//   const location = useLocation();

//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

//   const mobileMenuId = 'primary-search-account-menu-mobile';

//   const renderMobileMenu = (
//     <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
//       <MenuItem>
//         <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
//           <Badge badgeContent={totalItems} color="secondary">
//             <ShoppingCart />
//           </Badge>
//         </IconButton>
//         <p>Cart</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <>
//       <AppBar position="fixed" className={classes.appBar} color="inherit">
//         <Toolbar>
//           <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
//             <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
//           </Typography>
//           <div className={classes.grow} />
//           {location.pathname === '/' && (
//           <div className={classes.button}>
//             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
//               <Badge badgeContent={totalItems} color="secondary">
//                 <ShoppingCart />
//               </Badge>
//             </IconButton>
//           </div>
//           )}
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//     </>
//   );
// };

// export default PrimarySearchAppBar;
