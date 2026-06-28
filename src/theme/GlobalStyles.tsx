import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --green-soft: #5be89a;
    --blue: #016fb9;
    --bg: #0d0d10;
    --bg-elevated: #16161c;
    --text-muted: #a0a0ab;
    --heading-font: 'Space Grotesk', 'Red Hat Display', sans-serif;
    scroll-padding-top: 10rem;
    scroll-behavior: smooth;

    &.light{

      body{
        transition: 0.5s;
        background: #f5f5f7;
        background-image:
          radial-gradient(60rem 60rem at 80% -10%, rgba(35,206,107,0.12), transparent 60%),
          radial-gradient(50rem 50rem at -10% 20%, rgba(1,111,185,0.10), transparent 60%);
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: rgba(245,245,247,0.6);
        border-bottom: 1px solid rgba(0,0,0,0.06);
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black);
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      .project{
        background-color: #ffffff !important;
        color: var(--black) !important;
        border-color: rgba(0,0,0,0.08) !important;
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f2f2f5;
    background-color: var(--bg);
    background-image:
      radial-gradient(55rem 55rem at 85% -10%, rgba(35,206,107,0.16), transparent 60%),
      radial-gradient(45rem 45rem at -10% 15%, rgba(1,111,185,0.14), transparent 55%);
    background-attachment: fixed;
    transition: 0.5s;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4{
    font-family: var(--heading-font);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  a{
    text-decoration: none;
  }

  ::selection{
    background: rgba(35,206,107,0.3);
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, var(--green), #1aa658);
    color: #06140b;
    border-radius: 2rem;
    font-weight: 700;
    box-shadow: 0 0.6rem 1.6rem rgba(35,206,107,0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    &:hover{
      transform: translateY(-2px);
      box-shadow: 0 0.9rem 2.2rem rgba(35,206,107,0.4);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 2.6rem;
    font-family: var(--heading-font);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #FFFF;
  }
  .navlogo{
    font-size: 2rem;
    color: #FFFF;
    padding: 3;
    margin-left: auto;
    margin-right: 0;
}

`;
