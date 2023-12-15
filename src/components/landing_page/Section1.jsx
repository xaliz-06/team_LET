import letlogo from "../../assets/letlogo.png";

// import "../../routes/route-styles/styles1.module.css";

export default function Section1() {
  return (
    <div>
      <section id="section1">
        <div className="textspace">
          <ul>
            <li>
              <h1 id="LET">
                Welcome to LET-Learn,Earn
                <br />
                &Teach
              </h1>

              <h3 id="LET-CONTENT">
                Unlock the full potential of peer-to-peer learning <br />
                with our comprehensive solution, catering to all
                <br />
                your educational needs in one convenient place
              </h3>
            </li>
            <div id="imgposition">
              <img id="image1" src={letlogo} />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}
