import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: #ffffff;
  }

  html.light & h2 {
    color: var(--black);
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;

    .project {
      position: relative;
      padding: 2.4rem 2rem;
      background: var(--bg-elevated);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.4rem;
      transition: transform 0.25s ease, border-color 0.25s ease,
        box-shadow 0.25s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      &:hover {
        transform: translateY(-6px);
        border-color: rgba(35, 206, 107, 0.5);
        box-shadow: 0 1.4rem 3rem rgba(0, 0, 0, 0.4);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--green);
        margin-bottom: 2.4rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0.7;
          transition: opacity 0.25s ease;
        }
        a > img {
          width: 4rem;
        }
      }

      &:hover header .project-links {
        opacity: 1;
      }

      h3 {
        margin-bottom: 1.4rem;
        font-size: 2.1rem;
      }

      p {
        letter-spacing: 0.03rem;
        line-height: 1.65;
        margin-bottom: 2rem;
        color: var(--text-muted);
        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          font-size: 1.3rem;
          li:not(:empty) {
            padding: 0.4rem 1rem;
            border-radius: 1.5rem;
            background: rgba(35, 206, 107, 0.1);
            color: var(--green-soft);
            font-weight: 500;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
