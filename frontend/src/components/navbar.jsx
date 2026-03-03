import "./navbar.css";

export default function Navbar() {
  return (
    <div className="mainNav">
      <div className="navbar">
        <img src="/vector.png" alt=""></img>
        <h2>|</h2>
        <p
          style={{
            backgroundColor: "#B4F200",
            padding: "0.2rem 1rem",
            borderRadius: "3px",
          }}
        >
          File
        </p>
        <p>Me</p>
        <p>Work</p>
        <p>Services</p>
        <p>Get-In-Touch</p>
      </div>
    </div>
  );
}
