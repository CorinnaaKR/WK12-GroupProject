import "./resources.css";

export default function ResourcePage() {
  return (
    <>
      <h1 className="resources">Resources</h1>
      <div className="all">
        <h2>National</h2>
        <p className="national">National Police Prevent</p>
        <ul>
          <li>
            ACT Early:
            <a className="links" href="https://actearly.uk/">
              {" "}
              https://actearly.uk/
            </a>
          </li>
          <li>Prevent advice line: 0800 011 3764, or in an emergency 999</li>
        </ul>
      </div>

      <div className="east">
        <h3>East of England</h3>
        <ul>
          <p className="norfolk">Norfolk Police Prevent team</p>
          <li>01953 423905 or 01953 423896</li>
          <li>
            <a className="links" href="mailto: prevent@norfolk.police.uk">
              Send email
            </a>
          </li>
          <li>
            {" "}
            Make a referral online at{" "}
            <a
              className="links"
              href="https://www.norfolk.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral"
            />
          </li>
        </ul>

        <p className="suffolk">Suffolk Police Prevent team</p>
        <ul>
          <li>01473 613500</li>
          <li>
            <a className="links" href="mailto: prevent@norfolk.police.uk">
              Send email
            </a>
          </li>
          <li>
            Make a referral online at{" "}
            <a
              className="links"
              href="https://www.suffolk.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
              https://www.suffolk.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
        </ul>

        <p className="cambridge">Cambridgeshire & Peterborough Prevent Team</p>
        <li>01480 422596</li>
        <li>
          <a className="links" href="mailto: prevent@cambs.pnn.police.uk">
            Send email
          </a>
        </li>
        <li>
          Make a referral online at{" "}
          <a
            className="links"
            href="https://www.cambs.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
          >
            https://www.cambs.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
          </a>
        </li>
      </div>

      <div className="midlands">
        <h4>East Midlands</h4>
        <p className="derby">Derbyshire Prevent Team</p>
        <ul>
          <li>0300 122 8694</li>
          <li>
            Make a referral online at{" "}
            <a
              className="links"
              href="https://www.derbyshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
              https://www.derbyshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
        </ul>

        <p className="notts">Nottinghamshire Prevent Team</p>
        <ul>
          <li>0800 011 3764</li>
          <li>
            <a className="links" href="mailto: prevent@notts.police.uk">
              Send email
            </a>
          </li>
          <li>
            <a
              className="links"
              href="Make a referral online at https://www.nottinghamshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
              Make a referral online at
              https://www.nottinghamshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
        </ul>

        <p className="leicester">Leicester Prevent Team</p>
        <ul>
          <li>
            Call 101 & enter extension 6770 Make a referral online at{" "}
            <a
              className="links"
              href="https://www.leics.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
              https://www.leics.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
        </ul>
      </div>

      <div className="yorkshire">
        <h5>Yorkshire & the Humber</h5>
        <p className="humber">Humberside Prevent Team</p>
        <ul>
          <li>01482 356413</li>
          <li>
            Make a referral online at
            <a
              className="links"
              href="https://www.humberside.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral"
            >
              https://www.humberside.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral
            </a>
          </li>
        </ul>
      </div>

      <div className="nw">
        <h6>North West</h6>
        <p className="liverpool">Liverpool Police Prevent Team</p>
        <ul>
          <li>0151 777 8506</li>
          <li>
            <a className="links" href="mailto: prevent@merseyside.police.uk">
              Send email
            </a>
          </li>
          <li>
            Make a referral online at{" "}
            <a
              className="links"
              href="https://www.merseyside.police.uk/advice/advice-and-information/t/prevent/prevent/alpha/prevent-referral/"
            >
              https://www.merseyside.police.uk/advice/advice-and-information/t/prevent/prevent/alpha/prevent-referral/
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
