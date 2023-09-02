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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia temporibus maiores vitae!
                    <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum officiis eligendi fugiat aliquid eos.
                </p>
            </div>
            <button className="btn btn-primary">Go to my web</button>
            </div>

            <div className="Top--section--img">
                <img src="./img/image.png" alt="Top section" />

            </div>
       </section> 
    );
}