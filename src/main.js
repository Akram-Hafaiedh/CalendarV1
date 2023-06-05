const headerDate = document.querySelector('#current-date');
const days = document.querySelector('#days');
const icons = document.querySelectorAll('#icons span')
// // console.log("🚀 ~ file: main.js:4 ~ icons:", icons)
// // console.log("🚀 ~ file: main.js:3 ~ days:", days)
let currentDate = new Date();
// // console.log("🚀 ~ file: main.js:3 ~ currentDate:", currentDate)
let currentYear = currentDate.getFullYear();
// // console.log("🚀 ~ file: main.js:5 ~ currentYear:", currentYear)
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
// // console.log("🚀 ~ file: main.js:7 ~ currentMonth:", currentMonth)

// // console.log("🚀 ~ file: main.js:9 ~ currentFullMonth:", currentFullMonth)


function renderCalendar() {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    // console.log("🚀 ~ file: main.js:19 ~ renderCalendar ~ daysInLastMonth:", daysInLastMonth)
    // // console.log("🚀 ~ file: main.js:15 ~ renderCalendar ~ daysInMonth:", daysInMonth);
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    // console.log("🚀 ~ file: main.js:20 ~ renderCalendar ~ firstDayOfMonth:", firstDayOfMonth)
    let lastDayOfMonth = new Date(currentYear, currentMonth, daysInMonth).getDay();
    // console.log("🚀 ~ file: main.js:24 ~ renderCalendar ~ lastDayOfMonth:", lastDayOfMonth)
    let oneDay = "";

    //* previous month
    for (let day = firstDayOfMonth; day > 0; day--) {
        // console.log(day);
        oneDay += `<li class='inactive z-1 relative w-1/7 mt-[30px] cursor-pointer hover:before:bg-gray-200 before:top-1/2 before:left-1/2 before:absolute before:content-empty before:-translate-x-1/2 before:-translate-y-1/2 before:h-10 before:w-10 before:rounded-full before:-z-1'>
                        ${daysInLastMonth - day + 1}
                    </li>`;
    }

    //* current month
    for (let day = 1; day <= daysInMonth; day++) {
        // console.log(day);
        let current =
            day === currentDay &&
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()
                ? "current"
                : "";
        oneDay += `<li class='${current} z-1 relative w-1/7 mt-[30px] cursor-pointer hover:before:bg-gray-200 before:top-1/2 before:left-1/2 before:absolute before:content-empty before:-translate-x-1/2 before:-translate-y-1/2 before:h-10 before:w-10 before:rounded-full before:-z-1'>${day}</li>`;
    }

    //* next month
    for (let day = lastDayOfMonth; day < 6; day++) {
        // console.log(day - lastDayOfMonth + 1);
        oneDay += `<li class='inactive z-1 relative w-1/7 mt-[30px] cursor-pointer hover:before:bg-gray-200 before:top-1/2 before:left-1/2 before:absolute before:content-empty before:-translate-x-1/2 before:-translate-y-1/2 before:h-10 before:w-10 before:rounded-full before:-z-1'>
                        ${day - lastDayOfMonth + 1}
                    </li>`;
    }

    let currentFullMonth = currentDate.toLocaleDateString('en-US', { month: 'long' })
    headerDate.innerText = currentFullMonth + ' ' + currentYear;
    days.innerHTML = oneDay;
}

renderCalendar();
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // console.log(icon);
        currentMonth = icon.id === 'prev' ? currentMonth - 1 : currentMonth + 1;
        icon.id === 'prev'
            ? currentDate.setMonth(currentDate.getMonth() - 1)
            : currentDate.setMonth(currentDate.getMonth() + 1);
        if (currentMonth < 0 || currentMonth > 11) {
            currentDate = new Date(currentYear, currentMonth, currentDay);
            currentYear = currentDate.getFullYear();
            currentMonth = currentDate.getMonth();
        }
        renderCalendar();
    });
});