document.addEventListener("DOMContentLoaded", function () {
    const ratingCanvas = document.getElementById("ratingChart");
    const movieRating = 8.7;
    new Chart(ratingCanvas, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: [movieRating, 10 - movieRating],
                    backgroundColor: ["#4BCB36", "rgba(75, 203, 54, 0.30)"],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 80,
            legend: false,
            tooltips: false,
        },
    });
});