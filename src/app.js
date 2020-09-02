import "regenerator-runtime";
import "./styles.css";
import "./tailwind.css";
import "./styles/style.css";
import "./script/component/nav-bar.js";
import getDataCovid from "./script/view/data-covid.js";
import searchByKey from "./script/view/search-keyword.js";

getDataCovid();

document.addEventListener("DOMContentLoaded", searchByKey);
