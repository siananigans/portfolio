import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  .grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.035) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 4.5rem 4.5rem;
    -webkit-mask-image: radial-gradient(
      ellipse 75% 55% at 50% 0%,
      #000 25%,
      transparent 80%
    );
    mask-image: radial-gradient(
      ellipse 75% 55% at 50% 0%,
      #000 25%,
      transparent 80%
    );
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.55;
    will-change: transform;
  }

  .blob-1 {
    width: 52rem;
    height: 52rem;
    top: -16rem;
    right: -10rem;
    background: radial-gradient(
      circle,
      rgba(35, 206, 107, 0.55),
      transparent 70%
    );
    animation: drift1 19s ease-in-out infinite;
  }

  .blob-2 {
    width: 46rem;
    height: 46rem;
    bottom: -12rem;
    left: -12rem;
    background: radial-gradient(
      circle,
      rgba(1, 111, 185, 0.45),
      transparent 70%
    );
    animation: drift2 23s ease-in-out infinite;
  }

  .blob-3 {
    width: 38rem;
    height: 38rem;
    top: 40%;
    left: 55%;
    background: radial-gradient(
      circle,
      rgba(227, 31, 113, 0.28),
      transparent 70%
    );
    animation: drift3 27s ease-in-out infinite;
  }

  @keyframes drift1 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(-6rem, 5rem) scale(1.12);
    }
  }

  @keyframes drift2 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(7rem, -4rem) scale(1.08);
    }
  }

  @keyframes drift3 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(-5rem, -6rem) scale(1.15);
    }
  }

  html.light & {
    .grid {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.045) 1px,
          transparent 1px
        ),
        linear-gradient(90deg, rgba(0, 0, 0, 0.045) 1px, transparent 1px);
    }
    .blob {
      opacity: 0.4;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none;
    }
  }
`;
