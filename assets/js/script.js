// grabbing globals once to reduce load
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var button5 = document.getElementById("btn5");
var button6 = document.getElementById("btn6");
var modal1 = document.getElementById("t1m");
var modal2 = document.getElementById("t2m");
var modal3 = document.getElementById("t3m");
var modal4 = document.getElementById("t4m");
var modal5 = document.getElementById("t5m");
var modal6 = document.getElementById("t6m");
var historyMain = document.getElementById("historyMain");

// functions that populate the data on the tiles for contests
var initPage = {

  codeForcesInfo: function (data) {
    var t1Desc = document.getElementById("description-t1");
    var t1Date = document.getElementById("date-t1");
    var dateStr = data[0].start_time;
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    t1Date.innerHTML = formattedStartDate;
    if (data[0].status === "BEFORE") {
      t1Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t1Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t1Desc.innerHTML = "Started?: " + "Finished";
    }
    // modal setup
    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal1.append(title1m);
      modal1.append(desc1m);
      modal1.append(sDate1m);
      modal1.append(dura1m);
      modal1.append(eDate1m);
      modal1.append(soon1m);
      modal1.append(btn1m);
      modal1.append(brk1m);   

    }
    console.log('Code Forces:', data);
  },

  codeChefInfo: function (data) {
    var t2Desc = document.getElementById("description-t2");
    var t2Date = document.getElementById("date-t2");
    var dateStr = data[10].start_time;
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    t2Date.innerHTML = formattedStartDate;
    if (data[10].status === "BEFORE") {
      t2Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[10].status === "CODING") {
      t2Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t2Desc.innerHTML = "Started?: " + "Finished";
    }

    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal2.append(title1m);
      modal2.append(desc1m);
      modal2.append(sDate1m);
      modal2.append(dura1m);
      modal2.append(eDate1m);
      modal2.append(soon1m);
      modal2.append(btn1m);
      modal2.append(brk1m);   

    }

    console.log('Code Chef:', data);
  },

  atCoderInfo: function (data) {
    var t3Desc = document.getElementById("description-t3");
    var t3Date = document.getElementById("date-t3");
    var dateStr = data[0].start_time;
    var dateEnd = data[0].end_time;
    var endDate = new Date(dateEnd)
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    var formattedEndDate = endDate.toLocaleString();
    t3Date.innerHTML = formattedStartDate;
    if (data[0].status === "BEFORE") {
      t3Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t3Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t3Desc.innerHTML = "Started?: " + "Finished";
    }

    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal3.append(title1m);
      modal3.append(desc1m);
      modal3.append(sDate1m);
      modal3.append(dura1m);
      modal3.append(eDate1m);
      modal3.append(soon1m);
      modal3.append(btn1m);
      modal3.append(brk1m);   

    }

    console.log('Top Coder:', data);
  },

  hackerRankInfo: function (data) {
    var t4Desc = document.getElementById("description-t4");
    var t4Date = document.getElementById("date-t4");
    var dateStr = data[0].start_time;
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    t4Date.innerHTML = formattedStartDate;
    if (data[0].status === "BEFORE") {
      t4Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t4Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t4Desc.innerHTML = "Started?: " + "Finished";
    }

    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal4.append(title1m);
      modal4.append(desc1m);
      modal4.append(sDate1m);
      modal4.append(dura1m);
      modal4.append(eDate1m);
      modal4.append(soon1m);
      modal4.append(btn1m);
      modal4.append(brk1m);   

    }

    console.log('Hacker Rank:', data);
  },

  hackerEarthInfo: function (data) {
    var t5Desc = document.getElementById("description-t5");
    var t5Date = document.getElementById("date-t5");
    var dateStr = data[0].start_time;
    var dateEnd = data[0].end_time;
    var endDate = new Date(dateEnd)
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    var formattedEndDate = endDate.toLocaleString();
    t5Date.innerHTML = formattedStartDate;
    if (data[0].status === "BEFORE") {
      t5Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      t5Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t5Desc.innerHTML = "Started?: " + "Finished";
    }

    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal5.append(title1m);
      modal5.append(desc1m);
      modal5.append(sDate1m);
      modal5.append(dura1m);
      modal5.append(eDate1m);
      modal5.append(soon1m);
      modal5.append(btn1m);
      modal5.append(brk1m);   

    }

    console.log('Hacker Earth: ', data);
  },

  leetCodeInfo: function (data) {
    var t6Desc = document.getElementById("description-t6");
    var t6Date = document.getElementById("date-t6");
    var dateStr = data[1].start_time;
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    t6Date.innerHTML = formattedStartDate;
    if (data[1].status === "BEFORE") {
      t6Desc.innerHTML = "Started?: " + "Not Yet";
    } else if (data[1].status === "CODING") {
      t6Desc.innerHTML = "Started?: " + "Ongoing";
    } else {
      t6Desc.innerHTML = "Started?: " + "Finished";
    }

    for (let i = 0; i < data.length; i++) {
      const title1m = document.createElement('p');
      const desc1m = document.createElement('p');
      const sDate1m = document.createElement('p');
      const dura1m = document.createElement('p');
      const eDate1m = document.createElement('p');
      const soon1m = document.createElement('p');
      const btn1m = document.createElement('button');
      const brk1m = document.createElement('br');

      var sLoopDate = data[i].start_time;
      var eLoopDate = data[i].end_time;
      var loopStrDate = new Date(sLoopDate);
      var loopEndDate = new Date(eLoopDate);
      var loopedStrDate = loopStrDate.toLocaleString();
      var loopedEndDate = loopEndDate.toLocaleString();

      var durationResult = data[i].duration / 3600;
      var roundedResult = durationResult.toFixed(2);
      var resultNumber = parseFloat(roundedResult);

      title1m.classList.add("title");
      desc1m.classList.add("subtitle");
      sDate1m.classList.add("subtitle");
      dura1m.classList.add("subtitle");
      eDate1m.classList.add("subtitle");
      soon1m.classList.add("subtitle");
      btn1m.classList.add("button", "is-success");
      brk1m.classList.add("mb-2")
      title1m.innerHTML = data[i].name;
      desc1m.innerHTML = "Status: " + data[i].status;
      sDate1m.innerHTML = "Start Date: " + loopedStrDate;
      dura1m.innerHTML = "Duration: " + resultNumber + " Hour(s)";
      eDate1m.innerHTML = "End Date: " + loopedEndDate;
      soon1m.innerHTML = "Starting within 24 hours: " + data[i].in_24_hours;
      btn1m.innerHTML = "Register Here";

      if (resultNumber > 24) {
        var rawDayValue = data[i].duration / 86400;
        var roundedDayValue = rawDayValue.toFixed(2);
        var dayValueNumber = parseFloat(roundedDayValue);
        dura1m.innerHTML = "Duration: " + dayValueNumber + " Day(s)";
      }

      if (data[i].status === "BEFORE") {
        desc1m.innerHTML = "Started?: " + "Not Yet";
      } else if (data[i].status === "CODING") {
        desc1m.innerHTML = "Started?: " + "Ongoing";
        desc1m.classList.add("has-text-weight-bold", "has-text-danger");
      } else {
        desc1m.innerHTML = "Started?: " + "Finished";
      }

      btn1m.addEventListener('click', function() {
        window.open(data[i].url, '_blank');
      });

      modal6.append(title1m);
      modal6.append(desc1m);
      modal6.append(sDate1m);
      modal6.append(dura1m);
      modal6.append(eDate1m);
      modal6.append(soon1m);
      modal6.append(btn1m);
      modal6.append(brk1m);   

    }

    console.log('Leet Code: ', data);
  }
};
// fetching the api responses and fulfilling the promises for data
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

  // button event listeners
window.addEventListener('load', () => {
  // grabbing all the buttons
  const buttons = document.querySelectorAll('.btn-this');

  // array for localStorage
  let selectedButtons = [];

  // the event listener for grabbing button inputs to add to history
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // grabbing the title
      const titleText = button.parentNode.querySelector('.title').textContent;

      // check if the title already exists in the selectedButtons array
      const titleExists = selectedButtons.some(entry => entry.title === titleText);
      if (titleExists) {
        // if the entry is already in search history, it won't be added again.
        return;
      }

      // this adds the button ID and the title text of the selection to the array
      selectedButtons.push({ buttonId: button.id, title: titleText });

      // limiting the number of selected buttons to 5
      if (selectedButtons.length > 5) {
        // remove the oldest entry from the array
        selectedButtons.shift();
      }

      // setting the localStorage
      localStorage.setItem('selectedButtons', JSON.stringify(selectedButtons));

      // update the history listing
      updateHistoryListing();
    });
  });

  // function to update the history listing
  function updateHistoryListing() {
    const historyMain = document.getElementById('historyMain');
    historyMain.innerHTML = "";

    selectedButtons.forEach(entry => {
      const historyEntry = document.createElement("a");
      historyEntry.href = "#";
      historyEntry.classList.add("panel-block");
      historyEntry.textContent = entry.title;
      historyMain.append(historyEntry);
    });
  }

  // retrieving the array from localStorage and updating the buttons' selection history listings
  const savedSelection = localStorage.getItem('selectedButtons');
  if (savedSelection) {
    selectedButtons = JSON.parse(savedSelection);
    selectedButtons.forEach(entry => {
      const button = document.getElementById(entry.buttonId);
      if (button) {
        button.classList.add('selected');
      }
    });

    // update the history listing
    updateHistoryListing();
  }
});