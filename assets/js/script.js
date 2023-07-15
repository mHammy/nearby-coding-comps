// grabbing globals once to reduce load
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var button5 = document.getElementById("btn5");
var button6 = document.getElementById("btn6");
var historyMain = document.getElementById("historyMain");

// functions that populate the data on the tiles for contests
var initPage = {

  codeForcesInfo: function (data) {
    var t1Desc = document.getElementById("description-t1");
    var t1Date = document.getElementById("date-t1");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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
    var t2Desc = document.getElementById("description-t2");
    var t2Date = document.getElementById("date-t2");
    var dateStr = data[10].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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
    var t3Desc = document.getElementById("description-t3");
    var t3Date = document.getElementById("date-t3");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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

  hackerRankInfo: function (data) {
    var t4Desc = document.getElementById("description-t4");
    var t4Date = document.getElementById("date-t4");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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

  hackerEarthInfo: function (data) {
    var t5Desc = document.getElementById("description-t5");
    var t5Date = document.getElementById("date-t5");
    var dateStr = data[0].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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

  leetCodeInfo: function (data) {
    var t6Desc = document.getElementById("description-t6");
    var t6Date = document.getElementById("date-t6");
    var dateStr = data[1].start_time;
    var date = new Date(dateStr);
    var formattedDate = date.toLocaleString();
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
  const buttons = document.querySelectorAll('.button');

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
    historyMain.innerHTML = ""; // Clear existing content

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