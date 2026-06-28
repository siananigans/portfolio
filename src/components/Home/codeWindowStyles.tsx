import styled from "styled-components";

export const CodeWindowContainer = styled.div`
  perspective: 1600px;
  width: 100%;
  max-width: 46rem;
  margin-left: auto;

  .window {
    width: 100%;
    border-radius: 1.2rem;
    background: rgba(18, 18, 24, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.02) inset,
      0 0 8rem rgba(35, 206, 107, 0.12);
    backdrop-filter: blur(6px);
    overflow: hidden;
    transform: rotateY(-9deg) rotateX(4deg);
    transition: transform 0.5s ease;
    animation: floaty 7s ease-in-out infinite;

    &:hover {
      transform: rotateY(0deg) rotateX(0deg);
    }
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.1rem 1.4rem;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    .dot {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      display: inline-block;
    }
    .red {
      background: #ff5f56;
    }
    .yellow {
      background: #ffbd2e;
    }
    .green {
      background: #27c93f;
    }
    .filename {
      margin-left: auto;
      font-size: 1.3rem;
      color: var(--text-muted);
      font-family: "SFMono-Regular", "Fira Code", Consolas, monospace;
    }
  }

  .code {
    margin: 0;
    padding: 1.8rem 2rem 2.2rem;
    font-family: "SFMono-Regular", "Fira Code", Consolas, "Courier New",
      monospace;
    font-size: 1.45rem;
    line-height: 2;
    text-align: left;
    overflow-x: auto;
  }

  .line {
    display: block;
    white-space: pre;
  }
  .line.indent {
    padding-left: 2.4rem;
  }
  .line.empty {
    line-height: 1;
  }

  .kw {
    color: #ff7edb;
  }
  .var {
    color: #9be8ff;
  }
  .prop {
    color: #7ec7ff;
  }
  .str {
    color: var(--green-soft);
  }
  .num {
    color: #f0a868;
  }
  .bool {
    color: #f0a868;
  }
  .fn {
    color: #ffd479;
  }
  .op,
  .punc {
    color: #8a8a99;
  }

  .cursor {
    display: inline-block;
    width: 0.85rem;
    height: 1.5rem;
    margin-left: 0.3rem;
    transform: translateY(0.2rem);
    background: var(--green);
    animation: blink 1.1s steps(1) infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    50.01%,
    100% {
      opacity: 0;
    }
  }

  @keyframes floaty {
    0%,
    100% {
      transform: rotateY(-9deg) rotateX(4deg) translateY(0);
    }
    50% {
      transform: rotateY(-9deg) rotateX(4deg) translateY(-1.2rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .window {
      animation: none;
    }
    .cursor {
      animation: none;
    }
  }
`;
