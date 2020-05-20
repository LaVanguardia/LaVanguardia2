import React , {Link, Fragment} from 'react';
import './navbar.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { MyContext } from '../../context/MyProvider';
import ButtonUserLogged from '../ButtonUserLogged/ButtonUserLogged'

const StyledMenu = withStyles({

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state } = React.useContext(MyContext)


    return (
    <div id="header-profile">
      <div id="header-profile__wrapper">
        <div className="navbarRow">
          <a className="header-profile__logo" href={process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/" : "//localhost:3000/"}>
            <figure className="header-profile__figure" alt="La Vanguardia">
                <img src="https://rsc.lavanguardia.com/img/logo-image-v1000486.svg" className="img-responsive" alt="La Vanguardia" rel="logo"></img>
            </figure>
          </a>
          <div>
          <ButtonUserLogged />
    </div>    
    </div> 
 </div>
</div>
)
}

export default Navbar
