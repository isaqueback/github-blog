import styled from 'styled-components'
import { smartphone, notebook } from '../../styles/themes/default'

export const PostContainer = styled.div`
  max-width: 54rem;
  width: 100%;
`

export const PostTitleContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 20px 0px rgb(0, 0, 0, 0.2);
  row-gap: 0.5rem;

  #post-title-container-toolbar {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-300']};
      }

      span {
        font-size: var(--link);
        color: ${(props) => props.theme['blue-300']};
        text-transform: uppercase;
        font-weight: 700;
      }

      svg {
        width: 0.75rem;
        height: 0.75rem;
        fill: ${(props) => props.theme['blue-300']};
        margin-left: 0.5rem;
      }

      svg:first-child {
        margin: 0 0.5rem 0 0;
      }
    }
  }

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: var(--title-l);
  }

  #post-title-container-footer {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    div {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['gray-400']};

      svg {
        margin-right: 0.5rem;
        width: 1.125rem;
        height: 1.125rem;
        fill: ${(props) => props.theme['gray-500']};
      }
    }
  }

  @media (${notebook}) {
    padding: 1rem;
    min-width: 100%;
  }

  @media (${smartphone}) {
    #post-title-container-footer {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`

export const PostDescriptionContainer = styled.div`
  padding: 2.5rem 2rem 10rem;
  color: ${(props) => props.theme['gray-300']};

  p {
    margin: 1rem 0;
  }

  h1 ~ p,
  h2 ~ p,
  h3 ~ p,
  h4 ~ p {
    margin-top: 0.75rem;
  }

  a {
    color: ${(props) => props.theme['blue-300']};
  }

  h1,
  h2 {
    border-bottom: 1px solid ${(props) => props.theme['gray-600']};
    padding-bottom: 0.2rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 2.5rem;
  }

  img {
    max-width: 100%;
  }

  ul {
    li:not(:first-child) {
      margin-top: 3rem;
    }
  }

  ol {
    li {
      margin-top: 1.5rem !important;
    }
  }

  code {
    background-color: rgba(17, 33, 49, 0.5);
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    line-height: 2rem;
    white-space: break-spaces;
  }

  @media (${notebook}) {
    padding: 2.5rem 1rem 10rem;
  }
`
