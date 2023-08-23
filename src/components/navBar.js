import Link from "next/link";
import Image from "next/image";
// import Header from '../components/header';
import Logo from '../images/logo.jpg';


export default function NavBar (){

    return(
            <div>
                <Image 
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={100}
                />
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/pages/presentation">Présentation</Link>
                        </li>
                        <li>
                            <Link href="/pages/competence">compétences</Link>
                        </li>
                        <li>
                            <Link href="/pages/service">Services</Link>
                        </li>
                        <li>
                            <Link href="/pages/projets">Projets</Link>
                        </li>
                        <li>
                            <Link href="/pages/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}