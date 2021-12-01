import { Link } from "react-router-dom";
import Card from "../composants/card";

function About() {
    return(
      <>
        <main>
            <h2>Hello world !</h2>
            <p>Let's burn in hell !</p>
        </main>
        <Card></Card>
        <nav>
            <Link to='/'>Home</Link>
        </nav>

      </>
    )  
}

export default About