// наведение карточек с планами
const plans = document.querySelectorAll(".plan");
plans.forEach(elem => {
    elem.addEventListener('mouseenter', function(event) {
        const planCentral = document.querySelector(".plan__central");
        if(planCentral) {
            planCentral.classList.remove("plan__central");
        }
        event.target.classList.add("plan__central");
    });
    // стиль на мобильных
    if(document.documentElement.clientWidth < 768) {
        elem.classList.add("plan_white");
    }
    else {
        elem.classList.remove("plan_white");
    }
});

// burger-menu
const menuBtn = document.querySelector(".menu-icon");
menuBtn.onclick = function() {
    document.querySelector(".header__nav").classList.toggle("header__nav--show")
}

// star rating
const buttonS = document.querySelectorAll(".rating_sign_input");
buttonS.forEach((button) => {
    button.addEventListener("click", function() {
        let checkedNumber = document.querySelector(".rating_sign_input:checked").value;
        buttonS.forEach((item) => {
            if(item.value <= checkedNumber) {
                item.closest(".rating_sign").classList.add("_active");
            }
            else {
                item.closest(".rating_sign").classList.remove("_active");
            };
        });
    });
});

// проверка пароля
const firstPassword = document.querySelector("#password-one");
const secondPassword = document.querySelector("#password-two");
firstPassword.addEventListener("input", validatePasswords);
secondPassword.addEventListener("input", validatePasswords);
function validatePasswords() {
    const password = firstPassword.value;
    const passwordCheck = secondPassword.value;
  
    if (password === passwordCheck) {
      firstPassword.classList.remove('invalid');
      secondPassword.classList.remove('invalid');
      firstPassword.classList.add('valid');
      secondPassword.classList.add('valid');
    } else {
      firstPassword.classList.remove('valid');
      secondPassword.classList.remove('valid');
      firstPassword.classList.add('invalid');
      secondPassword.classList.add('invalid');
    }
};
