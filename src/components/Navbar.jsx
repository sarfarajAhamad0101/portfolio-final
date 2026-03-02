function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{ color: "#00adb5" }}></h2>
      <div>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 60px",
    background: "#111",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  link: {
    marginLeft: "25px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  }
};

export default Navbar;