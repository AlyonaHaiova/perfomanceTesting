package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*


class GetImdbTitleSimulation extends Simulation {

  val httpConf = http
    .baseUrl("https://imdb-api.com/en/API")
    .header("Accept", "application/json")

  val csvFeeder = csv("feeders/filmIdList.csv").circular

  def getTitle() = {
    exec(http("Get film title by id")
      .get("/Title/k_j51ia1da/${id}")
      .check(status.is(200)))
  }

  def getTitleWithFullActor() = {
    exec(http("Get film title by id")
      .get("/Title/k_j51ia1da/${id}/FullActor,")
      .check(status.is(200)))
  }

    val scn = scenario("Get Title test")
      .feed(csvFeeder)
      .exec(getTitle())
      .pause(5)
      .exec(getTitleWithFullActor())

  setUp(
    scn.inject(atOnceUsers(20))
  ).protocols(httpConf)

}

