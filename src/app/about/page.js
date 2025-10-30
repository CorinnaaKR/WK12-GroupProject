export default function AboutPage() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "2px solid #2BD872",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        <i>About Heli</i>
      </h1>
      <p style={{ marginBottom: "10px" }}>
        Our Interactive learning portal focuses on the UK Government&apos;s
        counter-terrorism strategy known as Prevent. Through this, we aim to
        provide an engaging means to help identify or assess vulnerable
        individuals who may be at risk of radicalisation.
      </p>

      <p style={{ marginBottom: "10px" }}>
        Through the use of interactive fiction, we aim to bring a conscientious
        and active approach to this training to further cement the importance of
        this training in the user&apos;s mind by immersing them in the situation
        and how they might handle this interaction as opposed to static learning
        such as leaflet or slides.
      </p>

      <p style={{ marginBottom: "10px" }}>
        Through this increased engagement, we hope to see users take this
        information onboard to a greater degree, allowing them to recall the
        information and act appropriately in the moment.
      </p>

      <p>
        As the programme expands, we aim to include a greater variety of
        situations, branching narratives, and greater depth of thinking to fully
        explore the scenarios presented, driving safety through learning,
        engagement and conscious decision making.{" "}
      </p>
    </div>
  );
}
