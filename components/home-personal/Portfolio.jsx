"use client";
import React, { useEffect } from "react";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".cards .card-item");
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% " + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section id="projects" className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="https://www.linkedin.com/in/sofware-engineer-full-stack-developer/details/projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        React Native
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Mapbox
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        AWS
                      </a>
                    </div>
                    <h4>Barbunny — Restaurant Discovery App</h4>
                  </div>
                  <div>
                    <p>
                      Mobile app for restaurant visibility: maps, reservations,
                      staff & dishes, realtime offers via WebSockets and push
                      notifications.
                    </p>
                    {/* <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Vue
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Kafka
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Redis
                      </a>
                    </div>
                    <h4>AI Shop Solution — Sales CRM (Auto)</h4>
                  </div>
                  <div>
                    <p>
                      AI‑powered CRM with GPT‑5 insights, Form.io workflows,
                      realtime updates, and microservices for dealership
                      operations.
                    </p>
                    {/* <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Next.js
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Kafka
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Redis
                      </a>
                    </div>
                    <h4>Jetolink — Scholarships & Jobs Portal</h4>
                  </div>
                  <div>
                    <p>
                      Multi‑role platform with payments, credits, and realtime
                      chat; microservices architecture for scalable deployments.
                    </p>
                    {/* <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Next.js
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        TypeScript
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        PostgreSQL
                      </a>
                    </div>
                    <h4>Travelcation — UAE Travel Platform</h4>
                  </div>
                  <div>
                    <p>
                      Vendor onboarding, attractions booking, payments,
                      insurance docs; microservices backend with Node.js and
                      integrations.
                    </p>
                    {/* <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        WhatsApp Bot
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Twilio
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Kafka
                      </a>
                    </div>
                    <h4>Kupi — Transport Ticketing (Africa)</h4>
                  </div>
                  <div>
                    <p>
                      WhatsApp chatbot to search routes and buy tickets; SaaS
                      admin panel for operators built with Next.js and
                      PostgreSQL.
                    </p>
                    {/* <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ clients</span>
            trusted me worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
