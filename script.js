const countries = [
  { code: "aw", name: "Aruba" },
  { code: "af", name: "Afghanistan" },
  { code: "ao", name: "Angola" },
  { code: "ai", name: "Anguilla" },
  { code: "ax", name: "Åland Islands" },
  { code: "al", name: "Albania" },
  { code: "ad", name: "Andorra" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "ar", name: "Argentina" },
  { code: "am", name: "Armenia" },
  { code: "as", name: "American Samoa" },
  { code: "aq", name: "Antarctica" },
  { code: "tf", name: "French Southern Territories" },
  { code: "ag", name: "Antigua and Barbuda" },
  { code: "au", name: "Australia" },
  { code: "at", name: "Austria" },
  { code: "az", name: "Azerbaijan" },
  { code: "bi", name: "Burundi" },
  { code: "be", name: "Belgium" },
  { code: "bj", name: "Benin" },
  { code: "bq", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "bf", name: "Burkina Faso" },
  { code: "bd", name: "Bangladesh" },
  { code: "bg", name: "Bulgaria" },
  { code: "bh", name: "Bahrain" },
  { code: "bs", name: "Bahamas" },
  { code: "ba", name: "Bosnia and Herzegovina" },
  { code: "bl", name: "Saint Barthélemy" },
  { code: "by", name: "Belarus" },
  { code: "bz", name: "Belize" },
  { code: "bm", name: "Bermuda" },
  { code: "bo", name: "Bolivia, Plurinational State of" },
  { code: "br", name: "Brazil" },
  { code: "bb", name: "Barbados" },
  { code: "bn", name: "Brunei Darussalam" },
  { code: "bt", name: "Bhutan" },
  { code: "bv", name: "Bouvet Island" },
  { code: "bw", name: "Botswana" },
  { code: "cf", name: "Central African Republic" },
  { code: "ca", name: "Canada" },
  { code: "cc", name: "Cocos (Keeling) Islands" },
  { code: "ch", name: "Switzerland" },
  { code: "cl", name: "Chile" },
  { code: "cn", name: "China" },
  { code: "ci", name: "Côte d'Ivoire" },
  { code: "cm", name: "Cameroon" },
  { code: "cd", name: "Congo, The Democratic Republic of the" },
  { code: "cg", name: "Congo" },
  { code: "ck", name: "Cook Islands" },
  { code: "co", name: "Colombia" },
  { code: "km", name: "Comoros" },
  { code: "cv", name: "Cabo Verde" },
  { code: "cr", name: "Costa Rica" },
  { code: "cu", name: "Cuba" },
  { code: "cw", name: "Curaçao" },
  { code: "cx", name: "Christmas Island" },
  { code: "ky", name: "Cayman Islands" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czechia" },
  { code: "de", name: "Germany" },
  { code: "dj", name: "Djibouti" },
  { code: "dm", name: "Dominica" },
  { code: "dk", name: "Denmark" },
  { code: "do", name: "Dominican Republic" },
  { code: "dz", name: "Algeria" },
  { code: "ec", name: "Ecuador" },
  { code: "eg", name: "Egypt" },
  { code: "er", name: "Eritrea" },
  { code: "eh", name: "Western Sahara" },
  { code: "es", name: "Spain" },
  { code: "ee", name: "Estonia" },
  { code: "et", name: "Ethiopia" },
  { code: "fi", name: "Finland" },
  { code: "fj", name: "Fiji" },
  { code: "fk", name: "Falkland Islands (Malvinas)" },
  { code: "fr", name: "France" },
  { code: "fo", name: "Faroe Islands" },
  { code: "fm", name: "Micronesia, Federated States of" },
  { code: "ga", name: "Gabon" },
  { code: "gb", name: "United Kingdom" },
  { code: "ge", name: "Georgia" },
  { code: "gg", name: "Guernsey" },
  { code: "gh", name: "Ghana" },
  { code: "gi", name: "Gibraltar" },
  { code: "gn", name: "Guinea" },
  { code: "gp", name: "Guadeloupe" },
  { code: "gm", name: "Gambia" },
  { code: "gw", name: "Guinea-Bissau" },
  { code: "gq", name: "Equatorial Guinea" },
  { code: "gr", name: "Greece" },
  { code: "gd", name: "Grenada" },
  { code: "gl", name: "Greenland" },
  { code: "gt", name: "Guatemala" },
  { code: "gf", name: "French Guiana" },
  { code: "gu", name: "Guam" },
  { code: "gy", name: "Guyana" },
  { code: "hk", name: "Hong Kong" },
  { code: "hm", name: "Heard Island and McDonald Islands" },
  { code: "hn", name: "Honduras" },
  { code: "hr", name: "Croatia" },
  { code: "ht", name: "Haiti" },
  { code: "hu", name: "Hungary" },
  { code: "id", name: "Indonesia" },
  { code: "im", name: "Isle of Man" },
  { code: "in", name: "India" },
  { code: "io", name: "British Indian Ocean Territory" },
  { code: "ie", name: "Ireland" },
  { code: "ir", name: "Iran, Islamic Republic of" },
  { code: "iq", name: "Iraq" },
  { code: "is", name: "Iceland" },
  { code: "il", name: "Israel" },
  { code: "it", name: "Italy" },
  { code: "jm", name: "Jamaica" },
  { code: "je", name: "Jersey" },
  { code: "jo", name: "Jordan" },
  { code: "jp", name: "Japan" },
  { code: "kz", name: "Kazakhstan" },
  { code: "ke", name: "Kenya" },
  { code: "kg", name: "Kyrgyzstan" },
  { code: "kh", name: "Cambodia" },
  { code: "ki", name: "Kiribati" },
  { code: "kn", name: "Saint Kitts and Nevis" },
  { code: "kr", name: "Korea, Republic of" },
  { code: "kw", name: "Kuwait" },
  { code: "la", name: "Lao People's Democratic Republic" },
  { code: "lb", name: "Lebanon" },
  { code: "lr", name: "Liberia" },
  { code: "ly", name: "Libya" },
  { code: "lc", name: "Saint Lucia" },
  { code: "li", name: "Liechtenstein" },
  { code: "lk", name: "Sri Lanka" },
  { code: "ls", name: "Lesotho" },
  { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" },
  { code: "lv", name: "Latvia" },
  { code: "mo", name: "Macao" },
  { code: "mf", name: "Saint Martin (French part)" },
  { code: "ma", name: "Morocco" },
  { code: "mc", name: "Monaco" },
  { code: "md", name: "Moldova, Republic of" },
  { code: "mg", name: "Madagascar" },
  { code: "mv", name: "Maldives" },
  { code: "mx", name: "Mexico" },
  { code: "mh", name: "Marshall Islands" },
  { code: "mk", name: "North Macedonia" },
  { code: "ml", name: "Mali" },
  { code: "mt", name: "Malta" },
  { code: "mm", name: "Myanmar" },
  { code: "me", name: "Montenegro" },
  { code: "mn", name: "Mongolia" },
  { code: "mp", name: "Northern Mariana Islands" },
  { code: "mz", name: "Mozambique" },
  { code: "mr", name: "Mauritania" },
  { code: "ms", name: "Montserrat" },
  { code: "mq", name: "Martinique" },
  { code: "mu", name: "Mauritius" },
  { code: "mw", name: "Malawi" },
  { code: "my", name: "Malaysia" },
  { code: "yt", name: "Mayotte" },
  { code: "na", name: "Namibia" },
  { code: "nc", name: "New Caledonia" },
  { code: "ne", name: "Niger" },
  { code: "nf", name: "Norfolk Island" },
  { code: "ng", name: "Nigeria" },
  { code: "ni", name: "Nicaragua" },
  { code: "nu", name: "Niue" },
  { code: "nl", name: "Netherlands" },
  { code: "no", name: "Norway" },
  { code: "np", name: "Nepal" },
  { code: "nr", name: "Nauru" },
  { code: "nz", name: "New Zealand" },
  { code: "om", name: "Oman" },
  { code: "pk", name: "Pakistan" },
  { code: "pa", name: "Panama" },
  { code: "pn", name: "Pitcairn" },
  { code: "pe", name: "Peru" },
  { code: "ph", name: "Philippines" },
  { code: "pw", name: "Palau" },
  { code: "pg", name: "Papua New Guinea" },
  { code: "pl", name: "Poland" },
  { code: "pr", name: "Puerto Rico" },
  { code: "kp", name: "Korea, Democratic People's Republic of" },
  { code: "pt", name: "Portugal" },
  { code: "py", name: "Paraguay" },
  { code: "ps", name: "Palestine, State of" },
  { code: "pf", name: "French Polynesia" },
  { code: "qa", name: "Qatar" },
  { code: "re", name: "Réunion" },
  { code: "ro", name: "Romania" },
  { code: "ru", name: "Russian Federation" },
  { code: "rw", name: "Rwanda" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "sd", name: "Sudan" },
  { code: "sn", name: "Senegal" },
  { code: "sg", name: "Singapore" },
  { code: "gs", name: "South Georgia and the South Sandwich Islands" },
  { code: "sh", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "sj", name: "Svalbard and Jan Mayen" },
  { code: "sb", name: "Solomon Islands" },
  { code: "sl", name: "Sierra Leone" },
  { code: "sv", name: "El Salvador" },
  { code: "sm", name: "San Marino" },
  { code: "so", name: "Somalia" },
  { code: "pm", name: "Saint Pierre and Miquelon" },
  { code: "rs", name: "Serbia" },
  { code: "ss", name: "South Sudan" },
  { code: "st", name: "Sao Tome and Principe" },
  { code: "sr", name: "Suriname" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },
  { code: "se", name: "Sweden" },
  { code: "sz", name: "Eswatini" },
  { code: "sx", name: "Sint Maarten (Dutch part)" },
  { code: "sc", name: "Seychelles" },
  { code: "sy", name: "Syrian Arab Republic" },
  { code: "tc", name: "Turks and Caicos Islands" },
  { code: "td", name: "Chad" },
  { code: "tg", name: "Togo" },
  { code: "th", name: "Thailand" },
  { code: "tj", name: "Tajikistan" },
  { code: "tk", name: "Tokelau" },
  { code: "tm", name: "Turkmenistan" },
  { code: "tl", name: "Timor-Leste" },
  { code: "to", name: "Tonga" },
  { code: "tt", name: "Trinidad and Tobago" },
  { code: "tn", name: "Tunisia" },
  { code: "tr", name: "Turkey" },
  { code: "tv", name: "Tuvalu" },
  { code: "tw", name: "Taiwan, Province of China" },
  { code: "tz", name: "Tanzania, United Republic of" },
  { code: "ug", name: "Uganda" },
  { code: "ua", name: "Ukraine" },
  { code: "um", name: "United States Minor Outlying Islands" },
  { code: "uy", name: "Uruguay" },
  { code: "us", name: "United States" },
  { code: "uz", name: "Uzbekistan" },
  { code: "va", name: "Holy See (Vatican City State)" },
  { code: "vc", name: "Saint Vincent and the Grenadines" },
  { code: "ve", name: "Venezuela, Bolivarian Republic of" },
  { code: "vg", name: "Virgin Islands, British" },
  { code: "vi", name: "Virgin Islands, U.S." },
  { code: "vn", name: "Viet Nam" },
  { code: "vu", name: "Vanuatu" },
  { code: "wf", name: "Wallis and Futuna" },
  { code: "ws", name: "Samoa" },
  { code: "ye", name: "Yemen" },
  { code: "za", name: "South Africa" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" }
];

const select = document.getElementById("countrySelect");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.code;
  option.textContent = country.name;
  select.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".fancy-input select");

  selects.forEach(select => {
    const toggleFilledClass = () => {
      if (select.value !== "") {
        select.classList.add("filled");
      } else {
        select.classList.remove("filled");
      }
    };

    select.addEventListener("focus", () => {
      select.classList.add("filled");
    });

    select.addEventListener("change", toggleFilledClass);

    select.addEventListener("blur", toggleFilledClass);

    toggleFilledClass();
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".fancy-input").forEach(el => {
      el.classList.remove("error");
      const dialog = el.querySelector(".error-dialog");
      if (dialog) dialog.remove();
    });

    const requiredFields = form.querySelectorAll("input[required], select[required]");

    for (let field of requiredFields) {
      const isEmpty = field.tagName === "SELECT"
        ? !field.value
        : !field.value.trim();

      if (isEmpty) {
        const wrapper = field.closest(".fancy-input");
        wrapper.classList.add("error");

        if (!wrapper.querySelector(".error-dialog")) {
          const errorDialog = document.createElement("div");
          errorDialog.classList.add("error-dialog");
          errorDialog.innerText = "This field can’t be empty. Please fill it in.";
          wrapper.appendChild(errorDialog);
        }

        field.focus();
        return;
      }
    }

    const name = document.getElementById("firstName").value.trim();
    window.location.href = `thankyou.html?name=${encodeURIComponent(name)}`;
  });

  const requiredFields = form.querySelectorAll("input[required], select[required]");
  requiredFields.forEach(field => {
    const eventType = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventType, () => {
      const wrapper = field.closest(".fancy-input");
      const isEmpty = field.tagName === "SELECT"
        ? !field.value
        : !field.value.trim();

      if (!isEmpty) {
        wrapper.classList.remove("error");
        const existingDialog = wrapper.querySelector(".error-dialog");
        if (existingDialog) existingDialog.remove();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const openBtn = document.getElementById("openVideo");
  const closeBtn = document.getElementById("closeModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const backdrop = modal.querySelector(".video-backdrop");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  });

  function closeModal() {
    modal.classList.remove("active");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.left');
const nextBtn = document.querySelector('.carousel-btn.right');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
track.style.transform = `translateX(-${currentIndex * 100}%)`;
dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
});
}

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
updateCarousel();
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % slides.length;
updateCarousel();
});

dots.forEach((dot, idx) => {
dot.addEventListener('click', () => {
    currentIndex = idx;
    updateCarousel();
});
});