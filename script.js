const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "fa";


function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "fa" ? "rtl" : "ltr";

    document.body.dir =
        language === "fa" ? "rtl" : "ltr";


    document.querySelectorAll("[data-fa]").forEach(element => {

        const text = element.dataset[language];

        if (text) {
            element.textContent = text;
        }

    });


    languageBtn.textContent =
        language === "fa" ? "EN" : "FA";


    try {
        localStorage.setItem("imperial-language", language);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }

}


// Language button

languageBtn.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "fa" ? "en" : "fa";

    changeLanguage(newLanguage);

});


// Mobile navigation

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("nav");


menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Restore saved language

let savedLanguage = "fa";

try {
    savedLanguage =
        localStorage.getItem("imperial-language") || "fa";
} catch (error) {
    savedLanguage = "fa";
}

changeLanguage(savedLanguage);
