import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import HeroRectangleOne from "../assets/imagens/rectangle_One.png";
import HeroRectangleTwo from "../assets/imagens/rectangle_Two.png";
import "../styles/hero.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            //dar um jeito de deixar o overflow-y: hidden
        } else {
            // remover o over y hidden
        }
        console.log("Minha nossa, nossa, nooooossa");
    }, [showMobileMenu])
    return (
        <>
            <header className="container py-sm">

                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={300} height={100} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>


            </header>
            <section id="hero">
                <span className="desktop-only">
                </span>
                <div className="container content">
                    <p className="desktop-only">Bem vindo</p>
                    <h1>
                        Seu site para joga RPG de mesa
                    </h1>
                    <p>
                        Um site focado para aprender e jogar com seus amigos um rpg de mesa tanto personalizado quanto sistemas ja existentes 
                    </p>
                    <div className="flex gap-1.5">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja Mais" secondary />
                        </span>
                    </div>
                </div>
            </section>


        </>

    )
}