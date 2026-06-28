import { BackgroundContainer } from "./styles";

export function Background() {
  return (
    <BackgroundContainer aria-hidden="true">
      <div className="grid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </BackgroundContainer>
  );
}
