// Data counters
let totalCount = 8;
let interviewCount = 0;
let rejectedCount = 0;

// Update UI stats
function updateDisplay() {
  document.getElementById("total-count").innerText = totalCount;
  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectedCount;
  document.getElementById("job-total-text").innerText = totalCount;
}

// Change card status (Interview/Rejected)
function handleStatus(id, newStatus) {
  const statusElement = document.getElementById("st" + id);
  const currentStatus = statusElement.innerText;

  if (currentStatus !== newStatus) {
    if (currentStatus === "INTERVIEW") interviewCount--;
    if (currentStatus === "REJECTED") rejectedCount--;

    statusElement.innerText = newStatus;
    statusElement.className =
      "inline-block text-[10px] font-bold px-2 py-1 rounded mt-4 mb-4 uppercase";

    if (newStatus === "INTERVIEW") {
      statusElement.style.color = "#10b981";
      statusElement.style.backgroundColor = "#f0fdf4";
      interviewCount++;
    } else {
      statusElement.style.color = "#ef4444";
      statusElement.style.backgroundColor = "#fef2f2";
      rejectedCount++;
    }

    updateDisplay();
  }
}

// Remove card from list
function handleDelete(id) {
  const statusElement = document.getElementById("st" + id);
  const currentStatus = statusElement.innerText;

  if (currentStatus === "INTERVIEW") interviewCount--;
  if (currentStatus === "REJECTED") rejectedCount--;

  const card = document.getElementById("card" + id);
  if (card) card.remove();

  totalCount--;
  updateDisplay();
  checkEmptyState();
}

// --- Filter Logic (Using For Loop) ---

// Switch active button styles
function updateButtonStyles(activeId) {
  const buttons = ["btn-all", "btn-int", "btn-rej"];
  // for loop used instead of forEach
  for (let i = 0; i < buttons.length; i++) {
    const btn = document.getElementById(buttons[i]);
    btn.className =
      "px-5 py-1.5 bg-white border border-gray-200 text-gray-500 rounded text-sm font-medium hover:bg-gray-50";
  }

  document.getElementById(activeId).className =
    "px-5 py-1.5 bg-[#3b82f6] text-white rounded text-sm font-medium";
}

// Show/Hide "No jobs available" message
function checkEmptyState() {
  const cards = document.querySelectorAll(".job-card");
  let hasVisibleCard = false;

  // for loop to check visible cards
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].style.display !== "none") {
      hasVisibleCard = true;
      break; //
    }
  }

  const emptyState = document.getElementById("empty-state");
  if (!hasVisibleCard) {
    emptyState.classList.remove("hidden");
    emptyState.classList.add("flex");
  } else {
    emptyState.classList.add("hidden");
    emptyState.classList.remove("flex");
  }
}

// Filter: Show All
function showAll() {
  updateButtonStyles("btn-all");
  const cards = document.querySelectorAll(".job-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
  checkEmptyState();
}

// Filter: Show Interviews
function showInterviews() {
  updateButtonStyles("btn-int");
  const cards = document.querySelectorAll(".job-card");
  for (let i = 0; i < cards.length; i++) {
    const status = cards[i].querySelector('[id^="st"]').innerText;
    if (status === "INTERVIEW") {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
  checkEmptyState();
}

// Filter: Show Rejected
function showRejected() {
  updateButtonStyles("btn-rej");
  const cards = document.querySelectorAll(".job-card");
  for (let i = 0; i < cards.length; i++) {
    const status = cards[i].querySelector('[id^="st"]').innerText;
    if (status === "REJECTED") {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
  checkEmptyState();
}
