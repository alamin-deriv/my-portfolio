import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "./Header.css";

const stringSplitter = (string) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

export default function Header() {
  return (
    <section className="header">
      <header>
        <div className="header-title" id="header-title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You are awesome!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Al-amin Abdulkareem as well.")
                .pauseFor(2500)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              stringSplitter,
              cursor: "|",
            }}
          />
        </div>
      </header>
    </section>
  );
}
