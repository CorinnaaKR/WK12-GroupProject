import "./resources.css";

export default function ResourcePage() {
  return (
    <div className="resourceMain">
      <h1 className="resources">Resources</h1>
      <p className="context">Need advice or have concerns?</p>
      <div className="all">
        
        <p className="national">
          <h2>National</h2>
        <p className="national"><b>National Police Prevent</b>
           <ul>
          <li>
            ACT Early:
            <a href="https://actearly.uk/">
              {" "}
              https://actearly.uk/
            </a>
          </li>
          <li>Prevent advice line: 0800 011 3764, or in an emergency 999</li>
        </ul>
        </p></p>
       
      </div>

      <div className="east">
        <h3>East of England</h3>
        <ul>
          <p className="norfolk"><b>Norfolk Police Prevent team</b>
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
              href="https://www.norfolk.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral">
                https://www.norfolk.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral
              </a>
          </li>
          </p>
        </ul>

        <p className="suffolk"><b>Suffolk Police Prevent team</b>
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
        </p>

        <p className="cambridge"><b>Cambridgeshire & Peterborough Prevent Team</b>
        <ul>
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
        </ul>
        </p>
      </div>

      <div className="midlands">
        <h4>East Midlands</h4>
        <p className="derby"><b>Derbyshire Prevent Team</b>
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
        </p>

        <p className="notts"><b>Nottinghamshire Prevent Team</b>
        <ul>
          <li>0800 011 3764</li>
          <li>
            <a className="links" href="mailto: prevent@notts.police.uk">
              Send email
            </a>
          </li>
          <li>
            Make a referral online at{" "}

            <a
              className="links"
              href="https://www.nottinghamshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
               https://www.nottinghamshire.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
        </ul>
        </p>

        <p className="leicester"><b>Leicester Prevent Team</b>
        <ul>
          <li>
            Call 101 & enter extension 677
            <li>Make a referral online at{" "}
            <a
              className="links"
              href="https://www.leics.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/"
            >
              https://www.leics.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral/
            </a>
          </li>
          </li>
        </ul>
        </p>
      </div>

      <div className="yorkshire">
        <h5>Yorkshire & the Humber</h5>
        <p className="humber"><b>Humberside Prevent Team</b>
        <ul>
          <li>01482 356413</li>
          <li>
Make a referral online at{" "}            <a
              className="links"
              href="https://www.humberside.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral"
            >
              https://www.humberside.police.uk/advice/advice-and-information/t/prevent/prevent/beta/prevent-team-referral
            </a>
          </li>
        </ul>
        </p>
      </div>

      <div className="nw">
        <h6>North West</h6>
        <p className="liverpool">Liverpool Police Prevent Team
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
        </p>
      </div>
    </div>
  );
}
