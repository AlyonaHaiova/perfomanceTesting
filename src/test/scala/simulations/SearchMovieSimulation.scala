package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class SearchMovieSimulation extends Simulation {

  val httpConf = http
    .baseUrl("https://imdb-api.com/en/API")
    .header("Accept", "application/json")


  val csvFeeder = csv("feeders/searchQueries.csv").circular


  def getSearchRequest() = {
    exec(http("Search request")
      .get("/SearchMovie/k_j51ia1da/${query}")
      .check(status.is(200)))
      .pause(5)
  }

    val scn = scenario("Search")
      .feed(csvFeeder)
      .exec(getSearchRequest())

  setUp(
    scn.inject(atOnceUsers(20))
  ).protocols(httpConf)


}

