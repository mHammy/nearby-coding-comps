// grabbing globals once to reduce load
var modal1 = document.getElementById("t1m");
var modal2 = document.getElementById("t2m");
var modal3 = document.getElementById("t3m");
var modal4 = document.getElementById("t4m");
var modal5 = document.getElementById("t5m");
var modal6 = document.getElementById("t6m");
var modal7 = document.getElementById("t7m");
var modal8 = document.getElementById("t8m");
var modal9 = document.getElementById("t9m");
var historyMain = document.getElementById("historyMain");

// functions that populate the data on the tiles for contests
var initPage = {
  setCompetitionInfo: function (data, descElement, dateElement, modalElement) {

    var dateStr = data[0].start_time;
    var startDate = new Date(dateStr);
    var formattedStartDate = startDate.toLocaleString();
    dateElement.innerHTML = formattedStartDate;
    if (data[0].status === "BEFORE") {
      descElement.innerHTML = "Started?: " + "Not Yet";
    } else if (data[0].status === "CODING") {
      descElement.innerHTML = "Started?: " + "Ongoing";
    } else {
      descElement.innerHTML = "Started?: " + "Finished";
    }

    var descText = "";
    if (data[0].status === "BEFORE") {
      descText = "Not Yet";
      descElement.style.backgroundColor = "yellow"; // Set background color for "Not Yet"
    } else if (data[0].status === "CODING") {
      descText = "Ongoing";
      descElement.style.backgroundColor = "orange"; // Set background color for "Ongoing"
    } else {
      descText = "Finished";
      descElement.style.backgroundColor = "green"; // Set background color for "Finished"
    }
    descElement.innerHTML = "Started?: " + descText;

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

      btn1m.addEventListener('click', function () {
        window.open(data[i].url, '_blank');
      });

      modalElement.append(title1m);
      modalElement.append(desc1m);
      modalElement.append(sDate1m);
      modalElement.append(dura1m);
      modalElement.append(eDate1m);
      modalElement.append(soon1m);
      modalElement.append(btn1m);
      modalElement.append(brk1m);
    }

    console.log(data);
  },
// each tile getting updated with information external view and internal modal view
  codeForcesInfo: function (data) {
    var descElement = document.getElementById("description-t1");
    var dateElement = document.getElementById("date-t1");
    var modalElement = modal1;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  codeChefInfo: function (data) {
    var descElement = document.getElementById("description-t2");
    var dateElement = document.getElementById("date-t2");
    var modalElement = modal2;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  atCoderInfo: function (data) {
    var descElement = document.getElementById("description-t3");
    var dateElement = document.getElementById("date-t3");
    var modalElement = modal3;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  hackerRankInfo: function (data) {
    var descElement = document.getElementById("description-t4");
    var dateElement = document.getElementById("date-t4");
    var modalElement = modal4;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  hackerEarthInfo: function (data) {
    var descElement = document.getElementById("description-t5");
    var dateElement = document.getElementById("date-t5");
    var modalElement = modal5;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  leetCodeInfo: function (data) {
    var descElement = document.getElementById("description-t6");
    var dateElement = document.getElementById("date-t6");
    var modalElement = modal6;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  codeForcesGymInfo: function (data) {
    var descElement = document.getElementById("description-t7");
    var dateElement = document.getElementById("date-t7");
    var modalElement = modal7;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  csAcademyInfo: function (data) {
    var descElement = document.getElementById("description-t8");
    var dateElement = document.getElementById("date-t8");
    var modalElement = modal8;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  },

  topCoderInfo: function (data) {
    var descElement = document.getElementById("description-t9");
    var dateElement = document.getElementById("date-t9");
    var modalElement = modal9;
    this.setCompetitionInfo(data, descElement, dateElement, modalElement);
  }
};

// fetching the api responses and fulfilling the promises for data
var fetchPromises = [
  fetch("https://kontests.net/api/v1/at_coder").then(response => response.json()),
  fetch("https://kontests.net/api/v1/codeforces").then(response => response.json()),
  fetch("https://kontests.net/api/v1/code_chef").then(response => response.json()),
  fetch("https://kontests.net/api/v1/hacker_rank").then(response => response.json()),
  fetch("https://kontests.net/api/v1/hacker_earth").then(response => response.json()),
  fetch("https://kontests.net/api/v1/leet_code").then(response => response.json()),
  fetch("https://kontests.net/api/v1/codeforces_gym").then(response => response.json()),
  fetch("https://kontests.net/api/v1/cs_academy").then(response => response.json()),
  fetch("https://kontests.net/api/v1/top_coder").then(response => response.json())
];

Promise.all(fetchPromises)
  .then(responses => {
    const [atCoderData, codeForcesData, codeChefData, hackerRankData, hackerEarthData, leetCodeData, codeForcesGymData, csAcademyData, topCoderData] = responses;
    initPage.atCoderInfo(atCoderData);
    initPage.codeForcesInfo(codeForcesData);
    initPage.codeChefInfo(codeChefData);
    initPage.hackerRankInfo(hackerRankData);
    initPage.hackerEarthInfo(hackerEarthData);
    initPage.leetCodeInfo(leetCodeData);
    initPage.codeForcesGymInfo(codeForcesGymData);
    initPage.csAcademyInfo(csAcademyData);
    initPage.topCoderInfo(topCoderData);
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
        const titleText = button.parentNode.querySelector('.title').textContent;
  
        // check if the title already exists in the selectedButtons array
        const titleExists = selectedButtons.some(entry => entry.title === titleText);
        if (titleExists) {
          return;
        }
  
        // this adds the button ID and the title text of the selection to the array
        selectedButtons.push({ buttonId: button.id, title: titleText });
  
        // limiting the number of selected buttons to 7
        if (selectedButtons.length > 7) {
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
  
      // mapping of button IDs to modal targets for search history
      const modalTargets = {
        btn1: '#modal-js-btn1',
        btn2: '#modal-js-btn2',
        btn3: '#modal-js-btn3',
        btn4: '#modal-js-btn4',
        btn5: '#modal-js-btn5',
        btn6: '#modal-js-btn6',
        btn7: '#modal-js-btn7',
        btn8: '#modal-js-btn8',
        btn9: '#modal-js-btn9'
      };
  
      selectedButtons.forEach(entry => {
        const historyEntry = document.createElement("a");
        historyEntry.href = "#";
        historyEntry.classList.add("panel-block" , "history-grad");
        historyEntry.textContent = entry.title;
        historyEntry.id = entry.buttonId;
        historyEntry.addEventListener('click', () => {
          // redirect to index.html with the modal open
          window.location.href = `index.html?modal=${entry.buttonId}`;
        });
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
  
    // code to open modal on index.html based on URL query
    const modalTargets = {
        btn1: '#modal-js-btn1',
        btn2: '#modal-js-btn2',
        btn3: '#modal-js-btn3',
        btn4: '#modal-js-btn4',
        btn5: '#modal-js-btn5',
        btn6: '#modal-js-btn6',
        btn7: '#modal-js-btn7',
        btn8: '#modal-js-btn8',
        btn9: '#modal-js-btn9'
    };
  
    const urlParams = new URLSearchParams(window.location.search);
    const modalParam = urlParams.get('modal');
    if (modalTargets.hasOwnProperty(modalParam)) {
      const targetId = modalTargets[modalParam];
      const targetModal = document.querySelector(targetId);
      if (targetModal) {
        targetModal.classList.add('is-active');
      } else {
        console.error(`Modal target '${targetId}' not found.`);
      }
    }
  });