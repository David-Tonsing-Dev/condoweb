import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FullFace from "../../assets/Images/prepage/full-face.png";
import Year2024 from "../../assets/Images/banner/2024.svg";
import BannerMiniCondo from "../../assets/Images/banner/bannerminicondo.svg";
import BannerMiniOndo from "../../assets/Images/banner/bannerminiondo.svg";
import CondoBannerLogo from "../../assets/Images/banner/condobannerlogo.svg";
import MovingCat from "../../assets/Images/about/moving-cat.gif";
import StillCat from "../../assets/Images/about/still-cats.png";
import ArrowSection2 from "../../assets/Images/about/arrow-section-2.svg";
import CatOnHead from "../../assets/Images/banner/catonhead.png";
import TwitterProfile from "../../assets/Images/about/twitter-profile.jpg";
import PixelatedX from "../../assets/Images/about/pixelated-x.svg";
import NathanLaryFinal from "../../assets/Images/frames/nathan-lary-final.png";
import RunningMan from "../../assets/Images/buy-token/running-man.gif";
import Coin from "../../assets/Images/buy-token/coin.gif";
import HowToBuyWalkingCat from "../../assets/Images/how-to-buy/how-to-buy-walking-cat.gif";
import HowToBuyFrame1 from "../../assets/Images/how-to-buy/frame-1.png";
import HowToBuyFrame2 from "../../assets/Images/how-to-buy/frame-2.png";
import HowToBuyFrame3 from "../../assets/Images/how-to-buy/frame-3.png";
import HowToBuyFrame4 from "../../assets/Images/how-to-buy/frame-4.png";
import TokenomicsBanner from "../../assets/Images/tokenomics/tokenomics-banner.svg";
import TokenomicsBannerMobile from "../../assets/Images/tokenomics/tokenomics-mobile-blue.svg";
import CatGifToken from "../../assets/Images/tokenomics/cat-gif-tokeno.gif";
import Tea from "../../assets/Images/tokenomics/tea.svg";
import Fan from "../../assets/Images/tokenomics/fan.svg";
import Bumbershoot from "../../assets/Images/audio/Bumbershoot.mp3";
import MusicBtn from "../../assets/Images/music-btn.svg";
import MusicMuteBtn from "../../assets/Images/mute-btn.svg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const musicElement = useRef();
  useEffect(() => {
    const carMoving = document.getElementById("ondo-main-img");
    let lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const currentScrollPosition = window.pageYOffset;
      const scrollDistance =
        (currentScrollPosition - lastScrollPosition) * 0.02;
      let targetPosition = "50%";
      if (scrollDistance > 0) {
        targetPosition = "0";
      }
      carMoving.style.left = targetPosition;
      lastScrollPosition = currentScrollPosition;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("load", () =>
      alert("keep the window play the music?")
    );
  }, []);

  const musicHandler = () => {
    console.log("musicElement", musicElement);
    const musicButton = document.getElementById("toggle-music-btn");
    const musicPlayer = document.getElementById("background-music");
    const movingCat = document.getElementById("moving-cat-gif");
    const stillCat = document.getElementById("still-cat-img");
    musicPlayer.play();
    movingCat.style.display = "block";
    stillCat.style.display = "none";

    musicButton.innerHTML = `<img src=${MusicBtn} alt="Music button" />`;
    musicButton.addEventListener("click", function () {
      if (musicPlayer.paused) {
        musicPlayer.play();
        musicButton.innerHTML = `<img src=${MusicBtn} alt="Music button" />`;
        movingCat.style.display = "block";
        stillCat.style.display = "none";
      } else {
        musicPlayer.pause();
        musicButton.innerHTML = `<img src=${MusicMuteBtn} alt="Music button" />`;
        movingCat.style.display = "none";
        stillCat.style.display = "block";
      }
    });

    const text =
      "Condo is here to break the mold! We're not just another memecoin, we're the first real-world asset (RWA) memetoken with a mission to empower the future of finance.";
    const textSpan = document.querySelector(".type-text");

    let index = 0;

    function type() {
      if (index < text.length) {
        textSpan.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
      }
    }
    type();
  };

  function copyContractAddress(event) {
    event.preventDefault();
    const contractAddressElement = document.getElementById("contractAddress");
    const tempInput = document.createElement("input");
    tempInput.value = contractAddressElement.innerText;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const copyIcon = document.getElementById("copyIcon");
    copyIcon.classList.remove("fa-copy");
    copyIcon.classList.add("fa-check");

    setTimeout(() => {
      copyIcon.classList.remove("fa-check");
      copyIcon.classList.add("fa-copy");
    }, 2000);
  }

  return (
    <>
      <main className="body-main">
        <nav className="navbar-bg">
          <div className="container silkscreen-regular">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src={FullFace} alt="nav-logo" width="50" height="60" />
                </a>
                <div className="social-links">
                  <i className="fa-brands fa-x-twitter"></i>
                  <i className="fa-brands fa-telegram ms-3"></i>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tokenomics">
                        Tokenomics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Claim Airdrop
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex gap-2 search-btns" role="search">
                    {/* <!-- <button
                    className="btn nav-btns-bg"
                    type="submit"
                    style="color: white"
                  >
                    Connect
                  </button> --> */}
                    <button
                      className="btn nav-btns-bg"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </form>
                  <div className="social-links-mobile">
                    <i className="fa-brands fa-x-twitter fa-xl"></i>
                    <i className="fa-brands fa-telegram ms-3 fa-xl"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </nav>
        <div className="banner-bg-section">
          <div className="container">
            <div className="banner-main-bg">
              <img
                alt="year-logo"
                width=""
                height=""
                className="year-logo m-auto"
                src={Year2024}
                style={{ color: "transparent" }}
              />
              <div className="ondo-owner-div">
                <div className="ondo-condo-banner">
                  <img
                    alt="condo"
                    width="120"
                    height="30"
                    className="lmao-img-text"
                    src={BannerMiniCondo}
                    style={{ color: "transparent" }}
                  />
                  <img
                    id="ondo-main-img"
                    alt="banner-main-gif"
                    width=""
                    height=""
                    className="banner-gif"
                    srcSet="
                https://res.cloudinary.com/dbtsrjssc/image/upload/v1712044147/car-img1_1_dgjnmn.png;
                https://res.cloudinary.com/dbtsrjssc/image/upload/v1712044147/car-img1_1_dgjnmn.png;
          "
                    src="https://res.cloudinary.com/dbtsrjssc/image/upload/v1712044147/car-img1_1_dgjnmn.png"
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt="banner-main-img"
                    width="83"
                    height="29"
                    className="text-banner-img"
                    src={BannerMiniOndo}
                    style={{
                      color: "transparent",
                      width: "83px",
                      height: "29px",
                    }}
                  />
                </div>
                <img
                  alt="title-img"
                  width=""
                  height=""
                  className="title-logo"
                  src={CondoBannerLogo}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 sec-2 container" id="about">
          <section className="silkscreen-regular">
            <div className="section-2-main mx-auto">
              <div className="section-2-data">
                <p className="section-2-text">
                  Condo is based on Nathan the founder of Ondo Finance. Condo is
                  about to make Nathan, the official ginger mascot of crypto.
                  <br />
                  Ondo = Condo
                </p>
                <img
                  id="moving-cat-gif"
                  alt="section-2-gif"
                  width="300"
                  height="100%"
                  className="moving-cat-gif"
                  srcSet={`${MovingCat}, ${MovingCat}`}
                  src={MovingCat}
                  style={{ color: "transparent" }}
                />
                <img
                  id="still-cat-img"
                  alt="section-2-gif"
                  width="300"
                  height="100%"
                  className="moving-cat-gif"
                  srcSet={`${StillCat}, ${StillCat}`}
                  src={StillCat}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="arrow-section-2-img-section">
                <img
                  alt="section-2-arrow"
                  width=""
                  height=""
                  className="arrow-section-2-img"
                  src={ArrowSection2}
                  style={{ color: "transparent" }}
                />
                <p className="text-section-3">
                  Condo features a 3% tax on both buying and selling. We plan to
                  strategically invest a portion of these taxes into top RWA
                  protocol products. This will not only support these projects
                  but also generate interest that will benefit our condo
                  treasury. Our ultimate goal is to establish partnerships with
                  leading RWA initiatives. By effectively managing our token's
                  growth, we aim to build a multi-million dollar treasury
                </p>
              </div>

              <div className="twitter-card">
                <img
                  alt="section-2-gif"
                  width="180"
                  height="100%"
                  className="fire-gif"
                  srcSet={`${CatOnHead}, ${CatOnHead}`}
                  src={CatOnHead}
                  style={{ color: "transparent" }}
                />
                <a
                  href="https://twitter.com/nathanlallman?lang=en"
                  target="_blank"
                >
                  <div className="card-data">
                    <img
                      width="47"
                      height="47"
                      src={TwitterProfile}
                      style={{ color: "transparent", borderRadius: "50%" }}
                    />
                    <div className="inner-txt-twitter-card">
                      <div className="twitter-box">
                        <p className="twitter-box-profile silkscreen-bold">
                          Nathan Allman
                        </p>
                      </div>
                      <p className="twitter-box-username">@nathanlallman</p>
                    </div>
                  </div>
                </a>
                <div className="tweet-twitter-box">
                  <div className="typing-text" data-testid="typing-text">
                    <span className="type-text"></span>
                    <span className="typing-cursor">|</span>
                  </div>
                </div>
                <img
                  alt=""
                  width="0"
                  height="0"
                  className="twitter-pixelated"
                  src={PixelatedX}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
        </div>
        <section className="section-3">
          <div className="container-fluid">
            <div className="section-3-main">
              <div className="blackrockimg-bg">
                <div className="container">
                  <div className="blackrock-handshake">
                    <img
                      src={NathanLaryFinal}
                      alt="collab"
                      className="colab-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-4 silkscreen-regular">
            <div className="container mx-auto sec-4">
              <div className="section-4-flex">
                <div className="coaster-img">
                  <img
                    src={RunningMan}
                    alt="runnning-gif"
                    className="running-main-img"
                  />
                </div>
                <div className="section-4-text">
                  <p className="text-p-section-4 silkscreen-regular">
                    Our mission is to invest in the future of real-world assets
                    (RWAs). <br />
                    <span className="text-p-section-4 silkscreen-bold">
                      {" "}
                      Here's how it works:
                    </span>
                  </p>
                  <ul className="section-4-list">
                    <li className="">
                      Transaction Tax: A small fee (3%) is collected on both
                      purchases and sales of the condo memetoken.
                    </li>
                    <li className="">
                      Treasury Investment: We strategically invest these funds
                      into leading RWA protocol products like Tbills and lending
                      pools.This will support these projects and generate
                      interest for the condo treasury.
                    </li>
                    <li className="">
                      Long-Term Growth: Our goal is to forge partnerships with
                      top RWA projects and build our treasury to reach tens of
                      millions of dollars
                    </li>
                  </ul>
                </div>
              </div>
              <img src={Coin} alt="coin" className="coin-img-bg" />
              <img src={Coin} alt="coin" className="coin-img2-bg" />
            </div>
          </div>
        </section>
        <section className="section-5">
          <div
            className="bg-how-to-buy mx-auto"
            data-background="../../assets/Images/how-to-buy/how-to-buy.png"
            style={{}}
          ></div>
          <div className="container animation-how-to-buy">
            <section className="section-5-main">
              <div className="how-to-buy-btn">
                <a href="" className="how-to-buy-flex">
                  <div className="buy-btn-inner">
                    <p className="silkscreen-bold buybtn-text">Buy $CONDO</p>
                  </div>
                  <div className="buy-btn-address">
                    <div className="contract-add silkscreen-regular pt-4">
                      <span>Contract Address:</span>
                      <p id="contractAddress" className="contract-address">
                        0xB0C2dsssco0xB0C2dssscoshcosiwehfcdncld6a
                      </p>
                    </div>
                    <div
                      className="copy-btn"
                      onClick={(event) => copyContractAddress(event)}
                    >
                      <i id="copyIcon" className="fa fa-copy"></i>
                    </div>
                  </div>
                </a>
              </div>
            </section>
            <img
              src={HowToBuyWalkingCat}
              alt="how-to-buy"
              className="laser-eyes-gif"
            />

            <div
              className="how-to-buy-frames"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
              }}
            >
              <a href="" className="img-1-how">
                <img src={HowToBuyFrame1} alt="frame" />
              </a>
              <a href="" className="img-2-how">
                <img src={HowToBuyFrame2} alt="frame" />
              </a>
              <a href="" className="img-3-how">
                <img src={HowToBuyFrame3} alt="frame" />
              </a>
              <a href="" className="img-4-how">
                <img src={HowToBuyFrame4} alt="frame" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div id="tokenomics" className="container">
            <div className="tokenomics-flex container mx-auto">
              <div className="left-tokenomics">
                <img
                  alt="tokenomics"
                  width="0"
                  height="0"
                  className="tokenomics-banner-img"
                  src={TokenomicsBanner}
                  style={{ color: "transparent" }}
                />
                <img
                  alt="tokenomics-mobile"
                  width="0"
                  height="0"
                  className="tokenomics-banner-img-mobile"
                  src={TokenomicsBannerMobile}
                  style={{ color: "transparent" }}
                />
                <img src={CatGifToken} alt="cry-cat" className="cry-cat-gif" />
              </div>
              <div className="tokenomics-right silkscreen-regular">
                <div className="tokenomics-first-row">
                  <div className="card-tokenomics">
                    <p className="card-toke-text-title silkscreen-bold">
                      Total Supply
                    </p>
                    <p className="">10,000,000,000(10B) $CONDO</p>
                    <div className="dots-tokenomics"></div>
                    <div className="dots-tokenomics-2"></div>
                    <div className="dots-tokenomics-3"></div>
                    <div className="dots-tokenomics-4"></div>
                  </div>
                  <div className="card-tokenomics">
                    <p className="card-toke-text-title silkscreen-bold">
                      Max Supply
                    </p>
                    <p className="">10,000,000,000(10B) $CONDO</p>
                    <div className="dots-tokenomics"></div>
                    <div className="dots-tokenomics-2"></div>
                    <div className="dots-tokenomics-3"></div>
                    <div className="dots-tokenomics-4"></div>
                  </div>
                  <div className="card-tokenomics">
                    <p className="card-toke-text-title silkscreen-bold">
                      Circulating Supply
                    </p>
                    <p className="">10,000,000,000(10B) $CONDO</p>
                    <div className="dots-tokenomics"></div>
                    <div className="dots-tokenomics-2"></div>
                    <div className="dots-tokenomics-3"></div>
                    <div className="dots-tokenomics-4"></div>
                  </div>
                </div>
                <div className="card-tokenomics-full-width">
                  <p className="silkscreen-bold card-toke-text-title">
                    Distribution
                  </p>
                  <div className="tokenomics-list-distribution">
                    <ul className="ul-distribution-list">
                      <li className="">40% Liquidity Pool.</li>
                      <li className="">50% Presale</li>
                      <li className="">5$ Airdrop</li>
                      {/* <!-- <li className="">3.5% Lil Pudgys Holders Airdrop.</li> --> */}
                    </ul>
                    <img
                      src={Tea}
                      alt="tokenomics-tea"
                      className="tea-img-tokenomics"
                    />
                  </div>
                  <div className="dots-tokenomics"></div>
                  <div className="dots-tokenomics-2"></div>
                  <div className="dots-tokenomics-3"></div>
                  <div className="dots-tokenomics-4"></div>
                </div>
                <div className="card-tokenomics-full-width">
                  <p className="silkscreen-bold card-toke-text-title">
                    $CONDO Information
                  </p>
                  <div className="tokenomics-list-distribution">
                    <ul className="ul-distribution-list">
                      {/* <!-- <li className="">
                      <div className="d-md-flex items-center gap-2">
                        <p className="">Contract Address:</p>
                        <div className="flex items-center gap-1">
                          <p id="contractAddress" className="contract-address">0xB0C2dsssco0xB0C2dssscoshcosiwehfcdncldscdDc6ashcosiwehfcdncldscdDc6a</p>
                        </div>
                        <div className="copy-btn" onClick="copyContractAddress(event)" style="cursor: pointer;">
                          <i id="copyIcon" className="fa fa-copy" ></i>
                      </div>
                      </div>
                    </li> --> */}
                      <li className="">
                        <div className="">
                          <p className="">Tax - 3% buy / 3% sell</p>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <p className="">No team allocation.</p>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <p className="">
                            Initial LP token burnt; Token contract renounced.
                          </p>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <p className="">ONDO = CONDO</p>
                        </div>
                      </li>
                    </ul>
                    <img
                      src={Fan}
                      alt="tokenomics-fan"
                      className="tokenomics-fan-img"
                    />
                  </div>
                  <div className="dots-tokenomics"></div>
                  <div className="dots-tokenomics-2"></div>
                  <div className="dots-tokenomics-3"></div>
                  <div className="dots-tokenomics-4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <hr
            style={{
              color: "#76c7fe",
              height: "3px",
              backgroundColor: "#76c7fe",
            }}
          />
          {/* <!-- <div className="footer-flex container">
          <p>CZ is not associated with $CONDO or its creation. This token is paying homage to a meme we all love and recognize. <br>$CONDO is a meme coin with no intrinsic value or utility.</p>
        </div> --> */}
          <div className="footer-flex container">
            <div className="logo-footer" style={{ cursor: "pointer" }}>
              <img src={FullFace} alt="logo-img" width="50" height="60" />
            </div>
            <div className="footer-center-section silkscreen-regular">
              <div className="footer-desc">
                <p>
                  CZ is not associated with $CONDO or its creation. This token
                  is paying homage to a meme we all love and recognize. <br />
                  $CONDO is a meme coin with no intrinsic value or utility.
                </p>
              </div>
              <div
                className="social-links-footer"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-brands fa-x-twitter fa-lg"></i>
                <i className="fa-brands fa-telegram ms-3 fa-lg"></i>
              </div>
              <div className="copyright-footer">
                <i className="fa fa-copyright"></i> All Rights Reserved CONDO
                2024
              </div>
            </div>

            <form
              className="search-btns silkscreen-regular"
              role="search"
              style={{ cursor: "pointer" }}
            >
              <button
                className="btn nav-btns-bg"
                type="submit"
                style={{ color: "white" }}
              >
                Buy
              </button>
            </form>
          </div>
        </footer>
      </main>
      <div className="audio-btns">
        <audio
          id="background-music"
          preload="auto"
          loop
          autoPlay
          ref={musicElement}
        >
          <source src={Bumbershoot} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {/* <!-- <iframe src="./Images/audio/Bumbershoot.mp3" allow="autoplay" frameborder="0"></iframe> --> */}
        <button id="toggle-music-btn" onClick={musicHandler}>
          <img src={MusicBtn} alt="Music button" />
          {/* <!-- <img src="./Images/mute-btn.svg" alt="Music button" /> --> */}
        </button>
      </div>
    </>
  );
};

export default Home;
