export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/image.png" alt="About Me" />
        </div>
        <div className="Top--section--content--box about--section--box">
          <div className="Top--section--content">
            
            <h1 className="skills-section--heading">About Me</h1>
            <p className="Top--section-description">
            "Hello, I'm Ruchika, a passionate mobile developer specializing in React Native and React JS. My focus is on creating user-centric, cross-platform apps that combine elegance with efficiency. With a track record of prioritizing user satisfaction and staying updated with industry trends, I excel in building intuitive interfaces, optimizing performance, and solving complex coding challenges. Explore my portfolio to see my latest projects and let's collaborate to bring your mobile app ideas to life!"
                        </p>
            {/* <p className="Top--section-description">
            Furthermore, my enthusiasm for learning and my capacity to quickly adapt to diverse technology stacks make me a valuable asset. I approach challenges with resilience and enthusiasm, always striving to achieve set goals."
            </p> */}
             {/* <p className="Top--section-description">
            Furthermore, my enthusiasm for learning and my capacity to quickly adapt to diverse technology stacks make me a valuable asset. I approach challenges with resilience and enthusiasm, always striving to achieve set goals."
            </p> */}
          </div>
        </div>
      </section>
    );
  }