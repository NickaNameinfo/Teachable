import HeroBanner from "./HeroBanner";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <div className="best__categories sp_top_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=linux"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">Linux</h3>
                    <span className="best__categories__more">5 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=clound"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Cloud Computing Courses
                    </h3>
                    <span className="best__categories__more">3 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=programming"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Programming & Frameworks
                    </h3>
                    <span className="best__categories__more">8 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=controlSystem"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Programming Control System
                    </h3>
                    <span className="best__categories__more">2 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=devops"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">Devops</h3>
                    <span className="best__categories__more">1 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=configuration"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Configuration Tool
                    </h3>
                    <span className="best__categories__more">2 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=cloudNative"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      CloudNative-Observability Tools
                    </h3>
                    <span className="best__categories__more">5 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=container"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Container technology
                    </h3>
                    <span className="best__categories__more">3 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=visualization"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      BI & Visualization
                    </h3>
                    <span className="best__categories__more">3 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=artificial"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">
                      Artificial Intelligence
                    </h3>
                    <span className="best__categories__more">3 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* categories Item Start */}
              <div
                className="best__categories__item aos-init"
                //
              >
                <Link
                  className="best__categories__link"
                  to="/Courses/?title=dataScience"
                >
                  <div className="best__categories__info">
                    <h3 className="best__categories__name">Data Science</h3>
                    <span className="best__categories__more">6 Courses</span>
                  </div>
                </Link>
              </div>
              {/* categories Item End */}
            </div>
          </div>
        </div>
      </div>
      <>
        {/* counter__section__start */}
        <div className="counterarea sp_bottom_50 sp_top_50">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                // data-aos="fade-up"
              >
                <div className="counterarea__text__wraper">
                  {/* <div className="counter__img">
                    <img
                      loading="lazy"
                      src="./src/assets/img/counter/counter__1.png"
                      alt="counter"
                    />
                  </div> */}
                  <div className="counter__content__wraper">
                    <div className="counter__number">
                      <span className="counter">27</span>+
                    </div>
                    <p>Total Acheivment</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                // data-aos="fade-up"
              >
                <div className="counterarea__text__wraper">
                  <div className="counter__img">
                    {/* <img
                      loading="lazy"
                      src="./src/assets/img/counter/counter__2.png"
                      alt="counter"
                    /> */}
                  </div>
                  <div className="counter__content__wraper">
                    <div className="counter__number">
                      <span className="counter">145</span>+
                    </div>
                    <p>TOTAL STUDENTS</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                // data-aos="fade-up"
              >
                <div className="counterarea__text__wraper">
                  {/* <div className="counter__img">
                    <img
                      loading="lazy"
                      src="./src/assets/img/counter/counter__3.png"
                      alt="counter"
                    />
                  </div> */}
                  <div className="counter__content__wraper">
                    <div className="counter__number">
                      <span className="counter">10</span>k
                    </div>
                    <p>TOTAL INSTRUCTOR</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                // data-aos="fade-up"
              >
                <div className="counterarea__text__wraper">
                  {/* <div className="counter__img">
                    <img
                      loading="lazy"
                      src="./src/assets/img/counter/counter__4.png"
                      alt="counter"
                    />
                  </div> */}
                  <div className="counter__content__wraper">
                    <div className="counter__number">
                      <span className="counter">214</span>+
                    </div>
                    <p>OVER THE WORLD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter__section__end*/}
      </>

      <>
        {/* register__section__start*/}
        <div className="registerarea sp_top_90">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
                // data-aos="fade-up"
              >
                <div className="registerarea__wraper">
                  <div className="section__title registerarea__section__title">
                    <div className="section__title__button">
                      <div className="default__small__button">Course List</div>
                    </div>
                    <div className="section__title__heading heading__underline">
                      <h2>
                        Register Your <span>Account </span>Get free access to{" "}
                        <small>60000</small> online course
                      </h2>
                    </div>
                  </div>
                  <div className="registerarea__content">
                    <div className="registerarea__video">
                      <div className="video__pop__btn">
                        <Link
                          className="video-btn"
                          to="https://www.youtube.com/watch?v=vHdclsdkp28"
                        >
                          {" "}
                          <img
                            loading="lazy"
                            src="./src/assets/img/icon/video.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="registerarea__para">
                        <p>
                          Learn Something new &amp; Build Your Career From
                          Anywhere In The World
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12"
                // data-aos="fade-up"
              >
                <div className="registerarea__form">
                  <div className="registerarea__form__heading">
                    <h4>Reach us</h4>
                  </div>
                  <form action="#">
                    <input
                      className="register__input"
                      type="text"
                      placeholder="Your Name"
                    />
                    <div className="row">
                      <div className="col-xl-6">
                        <input
                          className="register__input"
                          type="text"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-xl-6">
                        <input
                          className="register__input"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <input
                      className="register__input"
                      type="text"
                      placeholder="Address"
                    />
                    <textarea
                      className="register__input textarea"
                      name="#"
                      id="#"
                      cols={30}
                      rows={10}
                      defaultValue={"Comment"}
                    />
                    <div className="registerarea__button">
                      <Link className="default__button" to="#">
                        Sign Up
                        <i className="icofont-long-arrow-right" />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="registerarea__img">
            <img
              loading="lazy"
              className="register__1"
              src="./src/assets/img/register/register__1.png"
              alt="register"
            />
            <img
              loading="lazy"
              className="register__2"
              src="./src/assets/img/register/register__2.png"
              alt="register"
            />
            <img
              loading="lazy"
              className="register__3"
              src="./src/assets/img/register/register__3.png"
              alt="register"
            />
          </div>
        </div>
        {/* register__section__start*/}
      </>

      <div className="aboutarea__3 testimonial__area__2 sp_bottom_90 sp_top_120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 custom__review__grid"
              // data-aos="fade-up"
            >
              <div className="section__title aboutarea__3__section__title">
                <div className="section__title__heading">
                  <h2>
                    What They Say
                    <br />
                    About us
                  </h2>
                </div>
              </div>
              <div className="aboutarea__3__content">
                <p>
                  Krosum provide placement oriented training for the student’s
                  community to help them shape their career. We have been
                  providing both in-house and online trainings in the following
                  areas.
                </p>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 custom__review__grid"
              // data-aos="fade-up"
            >
              <div className="aboutarea__content__wraper__3">
                <div className="aboutarea__para__3">
                  <p>
                    Friendly and encouraging python classes in krosumLabs I’m
                    attending python class from Karthik sir. He is really great
                    in understanding the student needs & goal and bring our
                    efforts/stuff in a kind and friendly way. I feel much more
                    confident after attending his sessions.I highly recommend
                    this training centre to all and specially those who are
                    stuck in programming part. Just join here and break your
                    blockers and achieve your goal in coding.
                  </p>
                  <div className="aboutarea__icon__3">
                    <i className="icofont-quote-left" />
                  </div>
                  <div className="testi-box_bottom mt-3">
                    <div>
                      <h3 className="testi-box_name">
                        Friendly and encouraging python classes…
                      </h3>
                      <span className="testi-box_desig">srini vas</span>
                    </div>
                    <div className="testi-box_review">
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 custom__review__grid"
              // data-aos="fade-up"
            >
              <div className="aboutarea__content__wraper__3">
                <div className="aboutarea__para__3">
                  <p>
                    I organized a Python guest lecture for students at my
                    university, and it was exceptionally well-delivered by Mr.
                    Karthick (Krosum Labs). He demonstrated a keen understanding
                    of the students' learning pace. Within just two days, he
                    managed to cover a plethora of concepts efficiently,
                    ensuring no time was wasted. The students overwhelmingly
                    expressed their satisfaction with his session, leaving
                    positive reviews. His exceptional teaching style and the
                    valuable content he delivered have left us eager for more of
                    his sessions in the future.
                  </p>
                  <div className="aboutarea__icon__3">
                    <i className="icofont-quote-left" />
                  </div>
                  <div className="testi-box_bottom mt-3">
                    <div>
                      <h3 className="testi-box_name">
                        Guest Lecture-Python Packages and Modules
                      </h3>
                      <span className="testi-box_desig">kanthimathi s</span>
                    </div>
                    <div className="testi-box_review">
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutarea__img__3">
          <img
            loading="lazy"
            className="aboutarea__3__img__1"
            src="./src/assets/img/about/about_6.png"
            alt="about"
          />
          <img
            loading="lazy"
            className="aboutarea__3__img__2"
            src="./src/assets/img/about/about_7.png"
            alt="about"
          />
          <img
            loading="lazy"
            className="aboutarea__3__img__3"
            src="./src/assets/img/about/about_9.png"
            alt="about"
          />
        </div>
      </div>

      <>
        {/* footer__section__start */}
        <div className="footerarea">
          <div className="container">
            <div className="footerarea__newsletter__wraper">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                  // data-aos="fade-up"
                >
                  <div className="footerarea__text">
                    <h3>
                      Still You Need Our <span>Support</span> ?
                    </h3>
                    <p>
                      Don’t wait make a smart &amp; logical quote here. Its
                      pretty easy.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                  // data-aos="fade-up"
                >
                  <div className="footerarea__newsletter">
                    <div className="footerarea__newsletter__input">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Enter your email here"
                        />
                        <div className="footerarea__newsletter__button">
                          <button type="submit" className="subscribe__btn">
                            Subscribe Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
              <div className="row">
                <div className="col-xl-3 col-lg-3">
                  <div className="copyright__logo">
                    <Link to="https://html.themewin.com/">
                      <img
                        loading="lazy"
                        src="./src/assets/img/logo/logo_2.png"
                        alt="logo"
                        width={200}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="footerarea__copyright__content footerarea__copyright__content__2">
                    <p>
                      Copyright © <span>2023</span> by nicknameinfotech. All
                      Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="footerarea__icon footerarea__icon__2">
                    <ul>
                      <li>
                        <Link to="http://facebook.com/" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="http://twitter.com/" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>

                      <li>
                        <Link to="http://linkedin.com/" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer__section__end */}
      </>
    </div>
  );
};
export default HomePage;
