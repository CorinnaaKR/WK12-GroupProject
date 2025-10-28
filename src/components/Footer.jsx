"use client";
export default function Footer() {
  const underlineLink = { textDecoration: "underline" };
  return (
    <>
      <p>
        A TechEd final project by{" "}
        <span style={underlineLink}>
          <a href="https://github.com/CorinnaaKR">CorinnaaKR</a>
        </span>
        ,{" "}
        <span style={underlineLink}>
          <a href="https://github.com/cru5her5412">Cru5her5412</a>
        </span>{" "}
        and{" "}
        <span style={underlineLink}>
          <a href="https://github.com/stenataphcalkin">Stenataphcalkin</a>
        </span>
      </p>
    </>
  );
}
