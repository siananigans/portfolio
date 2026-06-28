import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 1.2rem;
    background: var(--bg-elevated);
    border: 1px solid rgba(255, 255, 255, 0.07);
    transition: transform 0.25s ease, border-color 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba(35, 206, 107, 0.5);
      box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.35);
    }

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3.4rem;
    margin-top: 0rem;
    color: #ffffff;
    position: relative;
  }

  h2::after {
    content: "";
    display: block;
    width: 5rem;
    height: 0.3rem;
    margin-top: 0.8rem;
    border-radius: 1rem;
    background: linear-gradient(90deg, var(--green), transparent);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.04rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--text-muted);
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 75%;
      border-radius: 1.6rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.4);
      filter: grayscale(0);
      transition: transform 0.5s ease, filter 0.5s ease;
      &:hover {
        transform: translateY(-6px);
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    h2,
    h2::after {
      margin-left: auto;
      margin-right: auto;
    }
    .hard-skills {
      justify-content: center;
    }
    .about-image {
      display: flex;
      justify-content: center;
      max-width: 100%;
      img {
        margin-top: 2rem;
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        width: 100%;
      }
    }
  }
`;
