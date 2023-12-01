function showPage(elementId) {
    $(`#${elementId}`).addClass('slide-in-from-right').show();
}
function hidePage(elementId) {
    $(`#${elementId}`).hide();
}

function validateIstForm() {
    // Validate each field
    validateTitle();
    validateOptionIsSelected();
    validateDescription();

    // Check if there are any errors
    if ($(".Error").length > 0) {
        // If there are errors, prevent form submission
        return false;
    }

    // If no errors, allow form submission
    hidePage('page1');
    showPage('page2');
    return true;
}
function validate2ndForm() {
    // Validate each field
    validateOrgName();
    validateOrgUrl();

    // Check if there are any errors
    if ($(".Error").length > 0) {
        // If there are errors, prevent form submission
        return false;
    }
    // If no errors, allow form submission

    hidePage('page2')
    showPage('page3')

    return true;
}
function validate3rdForm() {
    // Validate each field
    validateCheckboxes();
    validateFirstName();
    validateLastName();
    validateOrgName2();
    validateWorkPhone();
    validateWorkEmail();
    // Check if there are any errors
    if ($(".Error").length > 0) {
        // If there are errors, prevent form submission
        return false;
    }
    // If no errors, allow form submission
    alert("form submitted")
    return true;
}

function validateField(value, errorSelector, errorMessage, fieldElement) {
    if (value === "") {
        $(errorSelector).html(`*${errorMessage}`);
        $(errorSelector).addClass("Error");
        fieldElement.addClass('background-yellow');
        fieldElement.removeClass('background-green');


    } else {
        $(errorSelector).html("");
        $(errorSelector).removeClass("Error");
        fieldElement.addClass('background-green');
        fieldElement.removeClass('background-yellow');

    }
}

function validateTitle() {
    let title = $("#title").val();
    validateField(title, ".titleError", "Please fill in the title field", $('#title'));
}

function validateOptionIsSelected() {
    let selectedOption = $("#type").val();
    validateField(selectedOption, ".selectError", "Please select an option", $('#type'));
}

function validateDescription() {
    let description = $("#description").val();
    validateField(description, ".descriptionError", "Please fill in the description field", $('#description'));
}

function validateOrgName() {
    let orgName = $("#org-name").val();
    validateField(orgName, ".org-name-error", "Please fill this field", $('#org-name'));
}

function validateOrgName2() {
    let orgName = $("#org-name2").val();
    validateField(orgName, ".org-name-error2", "Please fill this field", $('#org-name2'));
}

function validateOrgUrl() {
    let orgName = $("#url").val();
    validateField(orgName, ".url-error", "Please fill this field", $('#url'));
}

function validateFirstName() {
    let firstName = $("#first-name").val();
    validateField(firstName, ".first-name-error", "Please fill this field", $('#first-name'));
}

function validateLastName() {
    let lastName = $("#last-name").val();
    validateField(lastName, ".last-name-error", "Please fill this field", $('#last-name'));
}

function validateWorkPhone() {
    // let workPhone = $("#work-phone").val();
    // validateField(workPhone, ".phone-error", "Please fill this field", $('#work-phone'));
    let workPhone = $("#work-phone").val();
    if (!/^\d{10,}$/.test(workPhone)) {
        $(".phone-error").html("*Please enter a valid 10-digit phone number");
        $(".phone-error").addClass("Error");
        $("#work-phone").addClass('background-yellow');
        $("#work-phone").removeClass('background-green');
    } else {
        $(".phone-error").html("");
        $(".phone-error").removeClass("Error");
        $("#work-phone").addClass('background-green');
        $("#work-phone").removeClass('background-yellow');
    }
}
function validateWorkEmail() {
    // let workEmail = $("#work-email").val();
    // validateField(workEmail, ".email-error", "Please fill this field", $('#work-email'));
    let workEmail = $("#work-email").val();
    // Basic email validation using a regular expression
    if (!/^\S+@\S+\.\S+$/.test(workEmail)) {
        $(".email-error").html("*Please enter a valid email address");
        $(".email-error").addClass("Error");
        $("#work-email").addClass('background-yellow');
        $("#work-email").removeClass('background-green');
    } else {
        $(".email-error").html("");
        $(".email-error").removeClass("Error");
        $("#work-email").addClass('background-green');
        $("#work-email").removeClass('background-yellow');
    }
}

function validateCheckboxes() {
    if (!$('#checkbox1').prop('checked')) {
        $('.checkbox1Error').html('*This field is required');
        $('.checkbox1Error').addClass('Error');
    } else {
        $('.checkbox1Error').html('');
        $('.checkbox1Error').removeClass('Error');
    }

    if (!$('#checkbox2').prop('checked')) {
        $('.checkbox2Error').html('*This field is required');
        $('.checkbox2Error').addClass('Error');
    } else {
        $('.checkbox2Error').html('');
        $('.checkbox2Error').removeClass('Error');
    }
}

function navigateToPage(currentPage, nextPage) {
    $(`#${currentPage}`).hide();
    $(`#${nextPage}`).show();
}
