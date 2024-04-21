import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .home-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 3rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .home-image {
    img {
      max-width: 500px;
      float: right;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .home-text {
      h1 {
        font-size: 5rem;
      }
    }
    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }
  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
