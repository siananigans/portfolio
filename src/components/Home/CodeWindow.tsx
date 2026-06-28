import { CodeWindowContainer } from "./codeWindowStyles";

export function CodeWindow() {
  return (
    <CodeWindowContainer aria-hidden="true">
      <div className="window">
        <div className="bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="filename">engineer.ts</span>
        </div>
        <pre className="code">
          <span className="line">
            <span className="kw">const</span> <span className="var">engineer</span>{" "}
            <span className="op">=</span> <span className="punc">{"{"}</span>
          </span>
          <span className="line indent">
            <span className="prop">name</span>
            <span className="punc">:</span>{" "}
            <span className="str">"Sian Lennon"</span>
            <span className="punc">,</span>
          </span>
          <span className="line indent">
            <span className="prop">role</span>
            <span className="punc">:</span>{" "}
            <span className="str">"Sr Software Engineer"</span>
            <span className="punc">,</span>
          </span>
          <span className="line indent">
            <span className="prop">location</span>
            <span className="punc">:</span>{" "}
            <span className="str">"Vancouver, CA"</span>
            <span className="punc">,</span>
          </span>
          <span className="line indent">
            <span className="prop">stack</span>
            <span className="punc">: [</span>
            <span className="str">"Python"</span>
            <span className="punc">,</span>{" "}
            <span className="str">"Java"</span>
            <span className="punc">,</span>{" "}
            <span className="str">"React"</span>
            <span className="punc">],</span>
          </span>
          <span className="line indent">
            <span className="prop">yearsExperience</span>
            <span className="punc">:</span> <span className="num">7</span>
            <span className="punc">,</span>
          </span>
          <span className="line indent">
            <span className="prop">available</span>
            <span className="punc">:</span> <span className="bool">true</span>
            <span className="punc">,</span>
          </span>
          <span className="line">
            <span className="punc">{"}"}</span>
            <span className="punc">;</span>
          </span>
          <span className="line empty">&nbsp;</span>
          <span className="line">
            <span className="kw">while</span> <span className="punc">(</span>
            <span className="var">coffee</span>
            <span className="punc">)</span> <span className="punc">{"{"}</span>
          </span>
          <span className="line indent">
            <span className="var">engineer</span>
            <span className="punc">.</span>
            <span className="fn">ship</span>
            <span className="punc">();</span>
            <span className="cursor" />
          </span>
          <span className="line">
            <span className="punc">{"}"}</span>
          </span>
        </pre>
      </div>
    </CodeWindowContainer>
  );
}
