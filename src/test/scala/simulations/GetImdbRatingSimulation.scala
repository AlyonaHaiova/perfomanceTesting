package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class GetImdbRatingSimulation extends Simulation {

  val httpConf = http
    .baseUrl("https://imdb-api.com/en/API")
    .header("Accept", "application/json")

  val csvFeeder = csv("feeders/filmIdList.csv").circular

  def getRating() = {
    exec(http("Get film rating by id")
      .get("/Ratings/k_j51ia1da/${id}")
      .check(status.is(200)))
  }

    val scn = scenario("Get Rating test")
      .feed(csvFeeder)
      .exec(getRating())

  setUp(
    scn.inject(atOnceUsers(20))
  ).protocols(httpConf)

}