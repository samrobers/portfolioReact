function Main() {
  return (
    <>
      <section className="row">
        <section className="row mb-5">
          <article className="col-sm-4">
            <h4 className="ml-5">About me</h4>
          </article>
          <article className="col-sm-7">
            <p>
              {" "}
              Hello my name is Sam Roberson. I am Full stack web developer with
              a strong desire for critical thinking and utilizing iterative
              development methodology. Completed full stack developer bootcamp
              and received a certificate from Denver university. Over 300 plus
              hours learning and coding to better my skills. To mention some of
              the technologies I have procured experience with throughout the
              course are HTML, CSS, Javascript, Jquery, Node.js, Express.js,
              React.js, NoSql, Mongo. Currently also halfway through information
              systems and technology bachelor's degree. Great ability to
              participate in team collaboration and lead as well. Drive to
              approach new programming challenges using the resources at my
              disposal to overcome them and always furthering my knowledge to be
              better than I was the day before.{" "}
            </p>
          </article>
        </section>
        <section className="row mt-5">
          <article className="col-sm-4">
            <h4 className="ml-5" id="projects">
              Projects
            </h4>
          </article>
          <article className="col-sm-7">
            <div className="row row-cols-1 row-cols-md-2">
              <a href="https://chequelito.github.io/theDailyDive/">
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="./assets/images/project 1 pic.PNG"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">The Daily Dive</h5>
                      <p className="card-text ">
                        The one stop shop to plan your day and get caught up on
                        the news most important to you.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://samrobers.github.io/weather-app/">
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="./assets/images/weatherdash.PNG"
                      className="card-img-top"
                      alt="Weather Dashboard"
                    />
                    <div className="card-body ">
                      <h5 className="card-title">Weather Dashboard</h5>
                      <p className="card-text">
                        A weather app that will display the current weather
                        along with the next 5 day forecast.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://shop-a-lot.herokuapp.com/">
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="./assets/images/shopalot.PNG"
                      className="card-img-top"
                      alt="shop-a-lot e-commerce"
                    />
                    <div className="card-body">
                      <h5 className="card-title">shop-a-lot</h5>
                      <p className="card-text">
                        Dungeons and Dragons themed e-commerce site.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://samrobers.github.io/calendar-weekly/">
                <div className="col mb-4 ">
                  <div className="card ">
                    <img
                      src="./assets/images/schedpic.PNG"
                      className="card-img-top "
                      alt="scheduler"
                    />
                    <div className="card-body ">
                      <h5 className="card-title">Work Day Scheduler</h5>
                      <p className="card-text ">
                        A calendar application that allows items to be saved for
                        the future to refer back to.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}
export default Main;
