import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: ${transitions.BACKGROUND};
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--borders);
    /* padding-right: 0px;
    transition: padding-right 0.3s ease 0s; */
  }

  &.previous:hover {
    padding-left: 0px;
    transition: padding-left 0.3s ease 0s;
  }

  &.next:hover {
    padding-right: 0px;
    transition: padding-right 0.3s ease 0s;
  }

  &.previous {
    justify-content: center;
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: center;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
