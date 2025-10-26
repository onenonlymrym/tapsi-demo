const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);


    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

// const accordionHeaders = document.querySelectorAll(".accordion__header");
// const accordion = document.querySelector(".accordion");
// accordionHeaders.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target.parentElement);
//     e.target.parentElement.classList.toggle("accordion__expanded");
//   });
// });

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", (e) => {
    // If the clicked element (or one of its parents) has the 'accordion__add' class, do nothing
    if (e.target.closest(".accordion__add")) return;

    // Find the closest .accordion element (the parent container)
    const accordion = header.closest(".accordion");
    
    // Toggle the expanded class - this will open if closed, close if open
    accordion.classList.toggle("accordion__expanded");
  });
});