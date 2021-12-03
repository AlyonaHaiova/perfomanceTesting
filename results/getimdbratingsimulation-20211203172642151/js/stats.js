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
        "total": "4220",
        "ok": "4220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7436",
        "ok": "7436",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5326",
        "ok": "5326",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4862",
        "ok": "4862",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5412",
        "ok": "5412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7031",
        "ok": "7031",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7355",
        "ok": "7355",
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
        "total": "0.625",
        "ok": "0.625",
        "ko": "-"
    }
},
contents: {
"req_get-film-rating-1ada7": {
        type: "REQUEST",
        name: "Get film rating by id",
path: "Get film rating by id",
pathFormatted: "req_get-film-rating-1ada7",
stats: {
    "name": "Get film rating by id",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4220",
        "ok": "4220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7436",
        "ok": "7436",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5326",
        "ok": "5326",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4862",
        "ok": "4862",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5412",
        "ok": "5412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7031",
        "ok": "7031",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7355",
        "ok": "7355",
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
        "total": "0.625",
        "ok": "0.625",
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
