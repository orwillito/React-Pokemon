import PokeLogo from "../assets/pokeball.svg";
import { Logo, FooterContainer, FooterLogoContainer, DeveloperNames, FooterDevNames } from "../utils/ComponentsStylesheet";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLogoContainer>
                    <Logo src={PokeLogo} />

                    <DeveloperNames>
                        <FooterDevNames>
                            Kirk &
                        </FooterDevNames>
                        <FooterDevNames>
                            Will
                        </FooterDevNames>
                    </DeveloperNames>
                </FooterLogoContainer>
            </FooterContainer>
        </>
    );
};

export default Footer;