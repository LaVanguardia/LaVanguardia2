import React, {Fragment} from 'react';
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
  paper: {
    border: '1px solid #d3d4d5',
  },
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



export default function ButtonUserLogged() {
    const { state } = React.useContext(MyContext)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
  );
}
