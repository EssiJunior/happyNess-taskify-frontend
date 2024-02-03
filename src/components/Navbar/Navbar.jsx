
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Badge, useMediaQuery } from '@mui/material';
import { MenuTwoTone } from '@mui/icons-material';
import { Dropdown, IconButton, Menu, MenuButton, MenuItem, Typography } from '@mui/joy';
import './navbar.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'

const Navbar = () => {
  const user = localStorage.getItem("j-membership-user")
  const navigate = useNavigate()

  const logOut = () => {
      localStorage.removeItem("j-membership-user")
      navigate("/login")
  }

    const is_sm_1 = useMediaQuery('(max-width: 430px)')
    const is_sm = useMediaQuery('(max-width: 850px)')
    // const is_md = useMediaQuery('(max-width: 768px)')
    // const is_lg = useMediaQuery('(max-width: 992px)')
    // const is_xl = useMediaQuery('(max-width: 1200px)')
  return (
    <Box component="nav" aria-label="My site" sx={is_sm ? { width:'93%', backgroundColor:'#082c50', padding:'0.5rem 1rem' }: { width:'98%', backgroundColor:'#082c50', padding:'0.5rem 1rem' }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <Link to='/' style={{display:'flex',justifyContent:'center', alignItems:'center', color:'skyblue', textDecoration:'none'}}>
            <img src={logo} alt="logo" loading='lazy' width='50px'/>
            <Typography color='skyblue' sx={{lineHeight:'1.1rem'}}>Africa<br /> <span style={{color:'white'}}>Life Word Mission</span></Typography>
          </Link>
          
        </ListItem>
        
        {
            !is_sm &&
            <>
                <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <ListItemButton role="menuitem" component="a" href="/">
                        Accueil
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="/registration/your-personnal-info">
                        Enregistrement
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="/contact">
                        Nous contacter
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="/about">
                        A propos
                    </ListItemButton>
                </ListItem>
            
            </>
        }
        <ListItem role="none" sx={is_sm_1 ? {display:'none'}:{ marginInlineStart: 'auto' }}>
          <IconButton>
            <Badge badgeContent={'Admin'} color="warning">
              <Box sx={{
                backgroundColor: '#ccc',
                zIndex: 1,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 120, 
                height: 30,
                backgroundImage:
                  'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
              }}>
                <Typography color='white' sx={{color:'white'}}>Se connecter</Typography>
              </Box>
            </Badge>
          </IconButton>
        </ListItem>
        {
            is_sm &&
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: {  color: 'neutral' } }}
                    sx={{height:'1rem', margin: 'auto 0',
                    backgroundImage:
                      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',marginInlineStart: 'auto'}}
                >
                    <MenuTwoTone />
                </MenuButton>
                <Menu sx={{width:'45vw'}}>
                    <NavLink to='/'><MenuItem>Accueil</MenuItem></NavLink>
                    <NavLink to='/registration/your-personnal-info'><MenuItem>Enregistrement</MenuItem></NavLink>
                    <NavLink to='/contact'><MenuItem>Nous contacter</MenuItem></NavLink>
                    <NavLink to='/about'><MenuItem>A propos</MenuItem></NavLink>
                    {
                      is_sm_1 &&
                      <NavLink to='login'>
                          <Badge badgeContent={'Admin'} color="warning" sx={{margin:'1rem'}}>
                            <Box sx={{
                              backgroundColor: '#ccc',
                              zIndex: 1,
                              color: '#fff',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: 120, 
                              height: 30,
                              backgroundImage:
                                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                              boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                              
                            }}>
                              <Typography color='white' sx={{color:'white'}}>Se connecter</Typography>
                            </Box>
                          </Badge>
                      </NavLink>
                    }
                </Menu>
            </Dropdown>
        }
      </List>
    </Box>
  )
}

export default Navbar
