import { styled } from "styled-components"
import Logo from "../../public/Destino-removebg-preview.png"

const NavContainer = styled.nav`
    height: 100px;
    width: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const OdysseyLogo = styled.div`
    width: 200px;
    height: 80px;
    margin-left: 5%;
    background: url(${Logo});
`

const HrefLinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-right: 5%;
`

const HrefLink = styled.a`
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const NavBar = () => {
    return (
        <NavContainer>
            <OdysseyLogo><img src={Logo} style={{
                width: "200px",
                position: "absolute",
                height: "189px",
                bottom: "-30px"
            }}></img></OdysseyLogo>
            <HrefLinksContainer>
                <HrefLink>Plan</HrefLink>
                <HrefLink>About us</HrefLink>
                <HrefLink>Sign up</HrefLink>
            </HrefLinksContainer>
        </NavContainer>
    )
}

export default NavBar