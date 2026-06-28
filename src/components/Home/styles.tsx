import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .home-text {
    & > p {
      font-size: 1.8rem;
      color: var(--text-muted);
    }
    h1 {
      font-size: 7rem;
      background: linear-gradient(120deg, #ffffff 20%, var(--green-soft) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0.5rem 0;
    }

    html.light & h1 {
      background: linear-gradient(120deg, var(--black) 25%, #119150 100%);
      -webkit-background-clip: text;
      background-clip: text;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
      font-size: 2.6rem;
    }

    h4 {
      font-size: 1.8rem;
      margin-top: 1rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    p.small-resume {
      margin-bottom: 3rem;
      display: inline-block;
      padding: 0.5rem 1.4rem;
      border: 1px solid rgba(35, 206, 107, 0.4);
      border-radius: 2rem;
      font-size: 1.5rem;
      color: var(--green-soft);
      background: rgba(35, 206, 107, 0.08);
    }
  }
  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 1.4rem;
    padding-top: 2rem;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.25s ease, background 0.25s ease,
        border-color 0.25s ease;

      &:hover {
        transform: translateY(-4px);
        background: rgba(35, 206, 107, 0.15);
        border-color: var(--green);
      }
    }

    img,
    span {
      font-size: 3rem;
      width: 2.6rem;
    }
  }

  .home-image {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .home-text {
      h1 {
        font-size: 5rem;
      }
    }
    .home-image {
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
