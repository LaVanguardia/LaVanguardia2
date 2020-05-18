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
import logoProfile from './user_info.svg';
import { MyContext } from '../../context/MyProvider';

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
      <Button
        style={{height: '46px', marginTop: '3px'}}
        className="userProfileLogo"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="white"
        onClick={handleClick}
      >
        <img src={logoProfile} className="imageUserLogin"/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
     {state.user.results == undefined
      ? <Fragment>
          <StyledMenuItem>
            <a className='loginButton' href="/Access" style={{display: 'flex', textDecoration: 'none', color: 'black'}}>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logearse" />
            </a>
          </StyledMenuItem>
        </Fragment>

        :  <Fragment>
          <StyledMenuItem>
          <a className='loginButton' href="/PersonalRanking" style={{display: 'flex', textDecoration: 'none', color: 'black'}}>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Mi perfil" />
            </a>
          </StyledMenuItem>
        
          <StyledMenuItem>
          <a className='loginButton' href="/Access" style={{display: 'flex', textDecoration: 'none', color: 'black'}}>
            <ListItemIcon>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Desconectar" />
            </a>
          </StyledMenuItem>
        </Fragment>
     }
     </StyledMenu>
    </div>    
    </div> 
 </div>
</div>
)
}

export default Navbar
