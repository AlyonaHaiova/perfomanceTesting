var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1487",
        "ok": "1487",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2574",
        "ok": "2574",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2084",
        "ok": "2084",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2128",
        "ok": "2128",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2345",
        "ok": "2345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2528",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2565",
        "ok": "2565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_get-top-250-imd-d65b0": {
        type: "REQUEST",
        name: "Get top 250 IMDB movies",
path: "Get top 250 IMDB movies",
pathFormatted: "req_get-top-250-imd-d65b0",
stats: {
    "name": "Get top 250 IMDB movies",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1487",
        "ok": "1487",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2574",
        "ok": "2574",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2084",
        "ok": "2084",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2128",
        "ok": "2128",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2345",
        "ok": "2345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2528",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2565",
        "ok": "2565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
