const HeroBanner = () => (
  <div className="herobannerarea herobannerarea__box herobannerarea__marketplace">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12"
          // data-aos="fade-up"
        >
          <div className="herobannerarea__content__wraper text-center">
            <div className="herobannerarea__title">
              <div className="herobannerarea__small__title">
                <span>Education Solution</span>
              </div>
              <div className="herobannerarea__title__heading__2">
                <h2>
                  Massive Courses Available for Anyone<span>.</span>
                </h2>
              </div>
            </div>

            <div className="keyfeatures text-center">
              <ul>
                <li>
                  <i className="icofont-check-alt"></i>
                  <span>More than 2k Courses</span>
                </li>
                <li>
                  <i className="icofont-check-alt"></i>
                  <span>1.1k Free Courses</span>
                </li>
                <li>
                  <i className="icofont-check-alt"></i>
                  <span>150+ Instructors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="herobannerarea__icon">
      {/* <img
        className="hero__icon__1"
        src="../assets/./src/assets/img/register/register__2.png"
        alt="photo"
      /> */}
      <img
        className="hero__icon__2"
        src="./src/assets/img/herobanner/herobanner__6.png"
        alt="photo"
      />
      <img
        className="hero__icon__3"
        src="./src/assets/img/herobanner/herobanner__7.png"
        alt="photo"
      />
      <img
        className="hero__icon__4"
        src="./src/assets/img/herobanner/herobanner__7.png"
        alt="photo"
      />
    </div>
  </div>
);

export default HeroBanner;
