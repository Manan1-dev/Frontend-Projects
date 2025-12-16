import { getQuote } from "./ui.js";

const searchInput = document.querySelector("#search-input");
const toggleBtn = document.querySelector("#themeToggle");
const sidebarWrapper = document.querySelector("#sidebar-wrapper");
const motivationContent = document.querySelector("#motivation-content");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");

const apiUrl = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

document.addEventListener("DOMContentLoaded", () => {
    getQuote(apiUrl, motivationContent);
});






