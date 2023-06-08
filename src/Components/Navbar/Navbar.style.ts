import { styled } from "@mui/material/styles";

export const LandingContainer = styled('div')({
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
    padding: '1.5rem 3rem 0 2rem'
});

export const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    color: 'white',
    fontSize: '1rem',
});

export const NavbarElement = styled('div')({
    marginLeft: '2rem'
});

export const CenterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    alignItems: 'center',
    height: '425px'
});

export const MainTitle = styled('div')({
    fontSize: '4rem',
    color: 'white',
});

export const CenterLeftImg = styled('img')({
    height: '325px',
    width: '325px',
});

export const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    backgroundColor: 'lightgray',
});

export const LandingBtn = styled('div')({
    marginRight: '1rem',
    backgroundColor: 'rgb(63, 76, 119)',
    color: 'white',
    borderRadius: '25px',
    height: '2rem',
    width: '12rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
});



export const CenterPopularContainer = styled('div')({
    display: 'flex',
    marginTop: '1rem',
    marginRight: '1rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
});

export const CenterPopularOption = styled('div')({
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    borderRadius: '40px',
    color: ' #fff',
    fontWeight: '600',
    lineHeight: '24px',
    padding: ' 1px 12px 0',
    transition: 'all .2s ease-in-out',
    zIndex: '4',
    ":hover": {
        backgroundColor: 'white',
        color: 'black'
    }
});





