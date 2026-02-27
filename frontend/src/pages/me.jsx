import "../style/me.css";

export default function Me() {
  return (
    <section className="me">
      <div className="container">
        <div className="left">
          <div className="texts">
            <div className="name">
              <img
                src="/STARS.png"
                alt=""
                style={{
                  marginLeft: "-50px",

                  width: "49px",
                  height: "65px",
                }}
              ></img>
              <h1>Yashika Sharma</h1>
            </div>

            <p>
              Hello, I am Yashika, a UI/UX designer and full stack developer who
              loves turning --ideas into intuitive, functional, meaningful and
              pleasing digital experiences
            </p>
          </div>
          <div className="texts">
            <p className="secondPara">
              With a blend of design thinking and engineering skills, I create
              products that look great, feel effortless, and work
              flawlessly—from the first wireframe to full deployment. Graduating
              in ECE (electronics and communication engineering) from GGSIPU in
              the batch 2023-2027.
            </p>
          </div>
          <div className="sets">
            <h1>Skills</h1>
            <div className="data">
              <div className="des" style={{ width: "50vw" }}>
                <h3>UI/UX</h3>
                <ul>
                  <li>UX Research</li>
                  <li> Wireframing </li>
                  <li>UI Design </li>
                  <li>Prototyping</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
              <div className="webdev" style={{ width: "50vw" }}>
                <h3>Web Development</h3>
                <ul>
                  <li>Frontend: HTML, Tailwind, React</li>
                  <li>Backend: Node.js, Express, MongoDB</li>
                  <li>APIs</li>

                  <li>Databases,Deployment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sw">
            <h1>Soft Ware</h1>
            <div className="apps">
              <img src="/SOFT.png" alt=""></img>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/me.png" alt=""></img>
        </div>
      </div>
    </section>
  );
}
