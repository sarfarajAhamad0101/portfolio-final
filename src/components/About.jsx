function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p style={styles.paragraph}>
        I am currently pursuing a Diploma in Computer Science Engineering(2nd Year)
        at Guru Kashi University. Along with my studies, I am gaining practical industry
        experience through an internship at SRV Electrical Company.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center"
  },
  paragraph: {
    display: "-webkit-box",
    WebkitLineClamp: 2,   
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6"
  }
};

export default About;