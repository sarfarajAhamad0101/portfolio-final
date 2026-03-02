function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2>Skills</h2>

      <div style={styles.grid}>
        <div style={styles.card}>HTML</div>
        <div style={styles.card}>CSS</div>
        <div style={styles.card}>JAVASCRIPT</div>
        <div style={styles.card}>PYTHON</div>
        <div style={styles.card}>GITHUB</div>
        <div style={styles.card}>GIT</div>
        <div style={styles.card}>REACT</div>
        <div style={styles.card}>PHP</div>

        </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#131010"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
  },
  card: {
    padding: "15px 30px",
    background: "#00adb5",
    color: "white",
    borderRadius: "8px"
  }
};

export default Skills;