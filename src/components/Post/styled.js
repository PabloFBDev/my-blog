import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import transitions from "../../styles/transitions"

export const PostWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  padding: 1.5rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    justify-content: center;

    &:hover {
      padding-left: 35px;
      transition: padding-left 0.3s ease 0s;
    }
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  body & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostTag = styled.div`
  align-items: center;
  color: ${props => (props.background ? props.background : "var(--highlight)")};
  display: flex;
  font-size: 1rem;
  font-weight: 800;
  justify-content: flex-start;
  width: 110px;

  ${media.lessThan("large")`
    border-radius: 2%;
    font-size: 1rem;
    min-height: auto;
    min-width: 80px;
    padding: .3rem .5rem;
    margin-bottom: .7rem;
  `}
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostDate = styled.time`
  font-size: 0.9rem;
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
