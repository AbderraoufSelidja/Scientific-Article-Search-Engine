import "./details.css";
import { FaLightbulb } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import image from "./images/articleCover.PNG"; //import the image articleCover
export const Details = () => {
  let titre = "Online Accounting Softwaring";
  let sousTitre = "Finding The Right Match";
  let authors = [ 
    ["mohamed", "esi algiers"],
    ["raouf", "esi algiers"],
    ["akthem", "esi algiers"],
    ["grine", "esi algiers"],
  ];
  let authsDisplay = () => {
    return (
      <section id="auths">
        {authors.map(
          (ele, index) =>
            index < 6 && (
              <article>
                {ele[0]}
                <br></br>
                {ele[1]}
              </article>
            )
        )}
      </section>
    );
  };
  let references = [
    `Caron, J., & Théry, C. (2005). Prévenir et soigner les maladies du cœur.
  Odile Jacob.`,
    `Caron, J., & Théry, C. (2005). Prévenir et soigner les maladies du cœur.
    Odile Jacob.`,
  ];
  const refsDisplay = () => {
    return references.map((ele) => <li>{ele}</li>);
  };
  let motClés = [
    "mot clé 1",
    "mot clé 2",
    "mot clé 3",
    "mot clé 4",
    "mot clé 1",
    "mot clé 2",
    "mot clé 3",
    "mot clé 4",
  ];
  /////
  let Résumé = `Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. "Uncle Bob" Martin shows how to bring greater professionalism and discipline to application architecture and design.
  As with his other books, Martin's Clean Architecture doesn't merely present multiple choices and options, and say "use your best judgment": it tells you what choices to make, and why those choices are critical to your success. Martin offers direct, no-nonsense answers to key architecture and design questions like:
  What are the best high level structures for different kinds of applications, including web, database, thick-client, console, and embedded apps?
  What are the core principles of software architecture?
  What is the role of the architect, and what is he/she really trying to achieve?
  What are the core principles of software design?
  How do designs and architectures go wrong, and what can you do about it?
  What are the disciplines and practices of professional architects and designers?
  Clean Architecture is essential reading for every software architect, systems analyst, system designer, and software manager — and for any programmer who aspires to these roles or is impacted by their work.`;
  /////
  let content = (i) => {
    return (
      <section className="motsClé">
        {motClés.map((ele, index) => {
          return index < 6 && <article>{ele}</article>;
        })}
      </section>
    );
  };
  return (
    <div>
      <div className="firstDiv" id="tt">
        <div className="imgReaction">
          {" "}
          <img src={image} alt="not found" id="imgDetails" />{" "}
          {/*article's cover*/}
          <span className="articleIcons">
            <CiHeart className="heartDownload" />
            <LuDownload className="heartDownload" />
          </span>
        </div>

        <div className="informations">
          <header id="mainInfo">{`${titre} - ${sousTitre}`}</header>
          {content()}
          <section id="end">
            <FaLightbulb id="bulb" />
            <p className="reminder">
              Ce livre est disponible en téléchargement gratuit en format PDF.
              Vous pouvez le lire en format texte ci-dessous.
            </p>
          </section>
        </div>
      </div>
      <div className="secondDiv">
        <label>Text intégral :</label>
        {/* <embed
          src="/Chapitre 4-flots_ROP_23.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        ></embed> */}
        <label>Résumé :</label>
        <p id="res">{Résumé}</p>
        <label id="aut">Auteurs et leurs institutions :</label>
        {authsDisplay()}
        <label>Références bibliographiques</label>
        <ul id="refers">{refsDisplay()}</ul>
      </div>
    </div>
  );
};
