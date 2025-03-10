
import classes from "./main-header.module.css";
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="logo image"  priority/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                           <NavLink href="/meals" >Browse meals</NavLink>
                        </li>
                        <li>
                             <NavLink href="/community" >Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
    </>
    
    )
}