import "../style/contact.css";

function Contact() {
  return (
    <div className="endpart">
      <div className="upper">
        <div className="contactlink">
          <div className="link1">
            <img src="/gmail.png" alt=""></img>
            <a href="mailto:yashika9654@gmail.com" target="_blank">
              Yashika9654@gmail.com
            </a>
          </div>
          <div className="link2">
            <img src="/linkedin.png" alt=""></img>
            <a
              href="https://www.linkedin.com/in/yashika-sharma-81110a291/"
              target="_blank"
            >
              Yashika Sharma
            </a>
          </div>
        </div>
        <div className="heading1">
          <h1>
            and<br></br>that's
          </h1>
        </div>
      </div>
      <div className="mid">
        <img src="/env.png" alt=""></img>
      </div>
      <div className="heading2">
        <h1>a wrap</h1>
      </div>
    </div>
  );
}

export default Contact;
