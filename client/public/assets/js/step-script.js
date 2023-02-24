initMultiStepForm();

function initMultiStepForm() {
    const progressNumber = document.querySelectorAll(".step").length;
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

    if (progressNumber !== stepsNumber) {
        console.warn(
            "Error, number of steps in progress bar do not match number of pages"
        );
    }

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            inputsValid = validateInputs(this);
            // inputsValid = true;

            if (inputsValid) {
                slidePage.style.marginLeft = `-${
                    (100 / stepsNumber) * current
                }%`;
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${
                (100 / stepsNumber) * (current - 2)
            }%`;
            bullet[current - 2].classList.remove("active");
            progressCheck[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    submitBtn.addEventListener("click", function () {
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
            location.reload();
        }, 800);
    });

    function validateInputs(ths) {
        let inputsValid = true;

        const inputs =
            ths.parentElement.parentElement.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add("invalid-input");
            } else {
                inputs[i].classList.remove("invalid-input");
            }
        }
        return inputsValid;
    }
}


jQuery(($) => {
  $('.attachment input[type="file"]')
    .on('change', (event) => {
    let el = $(event.target).closest('.attachment').find('.btn-file');
    
    el
      .find('.btn-file__actions__item')
      .css({
        'padding': '135px'
      });
    
    el
      .find('.btn-file__preview')
      .css({
        'background-image': 'url(' + window.URL.createObjectURL(event.target.files[0]) + ')'
      });
  });
});


$(".dropdown dt a").on('click', function () {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function () {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
   return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});


$('.mutliSelect input[type="checkbox"]').on('click', function () {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
	  title = $(this).val() + ",";

  if ($(this).is(':checked')) {
	  var html = '<span title="' + title + '">' + title + '</span>';
	  $('.multiSel').append(html);
	  $(".hida").hide();
  } 
  else {
	  $('span[title="' + title + '"]').remove();
	  var ret = $(".hida");
	  $('.dropdown dt a').append(ret);

  }
});


$(".dropdown2 dt a").on('click', function () {
  $(".dropdown2 dd ul").slideToggle('fast');
});

$(".dropdown2 dd ul li a").on('click', function () {
  $(".dropdown2 dd ul").hide();
});

function getSelectedValue(id) {
   return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown2")) $(".dropdown2 dd ul").hide();
});


$('.mutliSelect input[type="checkbox"]').on('click', function () {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
	  title = $(this).val() + ",";

  if ($(this).is(':checked')) {
	  var html = '<span title="' + title + '">' + title + '</span>';
	  $('.multiSel').append(html);
	  $(".hida").hide();
  } 
  else {
	  $('span[title="' + title + '"]').remove();
	  var ret = $(".hida");
	  $('.dropdown2 dt a').append(ret);

  }
});


$(".dropdown3 dt a").on('click', function () {
  $(".dropdown3 dd ul").slideToggle('fast');
});

$(".dropdown3 dd ul li a").on('click', function () {
  $(".dropdown3 dd ul").hide();
});

function getSelectedValue(id) {
   return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown3")) $(".dropdown3 dd ul").hide();
});


$('.mutliSelect input[type="checkbox"]').on('click', function () {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
	  title = $(this).val() + ",";

  if ($(this).is(':checked')) {
	  var html = '<span title="' + title + '">' + title + '</span>';
	  $('.multiSel').append(html);
	  $(".hida").hide();
  } 
  else {
	  $('span[title="' + title + '"]').remove();
	  var ret = $(".hida");
	  $('.dropdown3 dt a').append(ret);

  }
});


$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});