import { Button } from "react-scroll";

export default function Top() {
    return (
       <section id="TopSection" className="Top--section">
            <div className="Top--section--content--box">
                <div className="Top--section--content">
                <p className="section--tittle">Hey, Im Ruchika</p>
                <h1 className="Top--section--tittle">
                <span className="Top--section--tittle--color">Mobile </span>{""}
                <br/>
                Developer
                </h1>
                <p className="Top--section--description "  >
                As an undergraduate pursuing a BSc (Hons) in Computing and Information Systems, I am actively seeking a new internship opportunity within the IT industry.
                
                </p>
            </div>
            <a href="https://www.linkedin.com/in/ruchikarg97/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Go to my Linkein</button>
            </a>
            </div>

            <div className="Top--section--img">
                <img src="./img/image.png" alt="Top section" />

            </div>
       </section> 
    );
}