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
