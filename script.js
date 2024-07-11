const toggleBtn = document.querySelector(".toggle-btn");
const dropdown = document.querySelector(".dropdown");
const closeMenu = document.querySelector(".close");
let isOpen = false;
// toggleBtn.addEventListener('click', () => {
//     dropdown.classList.toggle('top-0')
// })

// closeMenu.addEventListener('click', () => {
//     dropdown.classList.toggle('-top-[600px]')
// })
toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    dropdown.classList.add("top-0");
    dropdown.classList.remove("-top-[600px]");
  } else {
    dropdown.classList.add("-top-[600px]");
    dropdown.classList.remove("top-0");
  }
});
closeMenu.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    dropdown.classList.add("top-0");
    dropdown.classList.remove("-top-[600px]");
  } else {
    dropdown.classList.add("-top-[600px]");
    dropdown.classList.remove("top-0");
  }
});
console.log(isOpen);
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "WPPOOL Index",
        data: [10, 20, 35, 50, 80, 45, 80, 75, 60, 80, 70, 80],
        borderColor: "#FC714D",
        backgroundColor: "#FC714D",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Google Index",
        data: [5, 15, 50, 70, 85, 50, 85, 50, 60, 90, 80, 70],
        borderColor: "#AFCD80",
        backgroundColor: "#AFCD80",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Microsoft Index",
        data: [1, 25, 20, 68, 50, 80, 75, 60, 70, 70, 50, 60],
        borderColor: "#615DE3",
        backgroundColor: "#615DE3",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Twitter Index",
        data: [5, 20, 60, 80, 60, 75, 80, 40, 40, 50, 40, 30],
        borderColor: "#6F34A1",
        backgroundColor: "#6F34A1",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
    },
  };

  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
});
