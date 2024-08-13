'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Link from 'next/link';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{' '}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m <span className="main-color">Sarim</span>
              </h1>
              <h3>I am a software engineer</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From the inception of a project to its completion, i
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <Link
                      href="#contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </Link>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">Me@msarim.me</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+92 310 672 787 4 </span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
