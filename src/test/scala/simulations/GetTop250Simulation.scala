package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*


class GetTop250Simulation extends Simulation {

  val httpConf = http
    .baseUrl("https://imdb-api.com/en/API")
    .header("Accept", "application/json")

  def getTop250() = {
    exec(http("Get top 250 IMDB movies")
      .get("/Top250Movies/k_j51ia1da")
      .check(status.is(200)))
  }

  val scn = scenario("Get Title test")
    .exec(getTop250())

  setUp(
    scn.inject(atOnceUsers(5))
  ).protocols(httpConf)

}
