import React from "react"
import { Link } from "gatsby"

import links from "./content"

import * as S from "./styled"

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
    const menuLinkClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <Link
                            to={link.url}
                            activeClassName="active"
                            onClick={menuLinkClick}
                        >
                            {link.label}
                        </Link>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}

export default MenuLinks