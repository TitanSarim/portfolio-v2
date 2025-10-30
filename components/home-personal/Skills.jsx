import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <section className="my-skills section-padding" id="skills">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                I&apos;m proud to work with <br />a
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/react/61DAFB"
                    alt="React"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">React</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/nextdotjs/FFFFFF"
                    alt="Next.js"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">93%</span>
              </div>
              <h6 className="fz-18">Next.js</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/nodedotjs/339933"
                    alt="Node.js"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">92%</span>
              </div>
              <h6 className="fz-18">Node.js</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/nestjs/E0234E"
                    alt="NestJS"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">NestJS</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/react/61DAFB"
                    alt="React Native"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">88%</span>
              </div>
              <h6 className="fz-18">React Native</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/jenkins/D24939"
                    alt="DevOps & CI/CD (Jenkins)"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">89%</span>
              </div>
              <h6 className="fz-18">DevOps & CI/CD</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image
                    src="https://cdn.simpleicons.org/kubernetes/326CE5"
                    alt="AWS & Kubernetes"
                    width={64}
                    height={64}
                  />
                </div>
                <span className="value">87%</span>
              </div>
              <h6 className="fz-18">AWS & Kubernetes</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
