var t1Button = document.getElementById("button-t1");
var t2Button = document.getElementById("button-t2");
var t3Button = document.getElementById("button-t3");

var initPage = {

  codeForcesInfo: function (data) {
    // var t1Title = document.getElementById("title-t1");
    var t1Desc = document.getElementById("description-t1");
    var t1Date = document.getElementById("date-t1");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t1Title.innerHTML = data[0].name;
    t1Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
      t1Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t1Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t1Desc.innerHTML = "Started?: " + "Finished";
    }

    console.log('Code Forces:', data);
  },

  codeChefInfo: function (data) {
    // var t2Title = document.getElementById("title-t2");
    var t2Desc = document.getElementById("description-t2");
    var t2Date = document.getElementById("date-t2");
    var dateStr = data[10].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t2Title.innerHTML = data[10].name;
    t2Date.innerHTML = formattedDate;
    if (data[10].status === "BEFORE") {
      t2Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[10].status === "CODING") {
      t2Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t2Desc.innerHTML = "Started?: " + "Finished";
    }

    console.log('Code Chef:', data);
  },

  atCoderInfo: function (data) {
    // var t3Title = document.getElementById("title-t3");
    var t3Desc = document.getElementById("description-t3");
    var t3Date = document.getElementById("date-t3");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t3Title.innerHTML = data[0].name;
    t3Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
      t3Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t3Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t3Desc.innerHTML = "Started?: " + "Finished";
    }
    console.log('Top Coder:', data);
  },

  hackerRankInfo: function(data) {
    // var t4Title = document.getElementById("title-t4");
    var t4Desc = document.getElementById("description-t4");
    var t4Date = document.getElementById("date-t4");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t4Title.innerHTML = data[0].name;
    t4Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
      t4Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t4Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t4Desc.innerHTML = "Started?: " + "Finished";
    }
    console.log('Hacker Rank:', data);
  },

  hackerEarthInfo: function(data) {
    // var t5Title = document.getElementById("title-t5");
    var t5Desc = document.getElementById("description-t5");
    var t5Date = document.getElementById("date-t5");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t5Title.innerHTML = data[0].name;
    t5Date.innerHTML = formattedDate;
    if (data[0].status === "BEFORE") {
      t5Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t5Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t5Desc.innerHTML = "Started?: " + "Finished";
    }
    console.log('Hacker Earth: ', data);
  },

  leetCodeInfo: function(data) {
    // var t6Title = document.getElementById("title-t6");
    var t6Desc = document.getElementById("description-t6");
    var t6Date = document.getElementById("date-t6");
    var dateStr = data[1].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
    // t5Title.innerHTML = data[1].name;
    t6Date.innerHTML = formattedDate;
    if (data[1].status === "BEFORE") {
      t6Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[1].status === "CODING") {
      t6Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t6Desc.innerHTML = "Started?: " + "Finished";
    }
    console.log('Leet Code: ', data);
  }
};

var fetchPromises = [
  fetch("https://kontests.net/api/v1/at_coder").then(response => response.json()),
  fetch("https://kontests.net/api/v1/codeforces").then(response => response.json()),
  fetch("https://kontests.net/api/v1/code_chef").then(response => response.json()),
  fetch("https://kontests.net/api/v1/hacker_rank").then(response => response.json()),
  fetch("https://kontests.net/api/v1/hacker_earth").then(response => response.json()),
  fetch("https://kontests.net/api/v1/leet_code").then(response => response.json())
];

Promise.all(fetchPromises)
  .then(responses => {
    const [atCoderData, codeForcesData, codeChefData, hackerRankData, hackerEarthData, leetCodeData] = responses;
    initPage.atCoderInfo(atCoderData);
    initPage.codeForcesInfo(codeForcesData);
    initPage.codeChefInfo(codeChefData);
    initPage.hackerRankInfo(hackerRankData);
    initPage.hackerEarthInfo(hackerEarthData);
    initPage.leetCodeInfo(leetCodeData);
  })
  .catch(error => {
    console.log('Error:', error);
  });