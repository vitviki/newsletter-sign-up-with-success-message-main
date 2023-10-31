const submit_btn = document.getElementById('submit_btn');
const email_input = document.getElementById('email');
const error_status = document.getElementById('error_status');
const email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;


submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = email_input.value;

    if (email === '') {
     return;   
    }
    if (!email_regex.test(email)) {
        error_status.style.visibility = 'visible';
        email_input.style.backgroundColor = '#fbe7e3';
        email_input.style.borderColor = "#fc6547";
        email_input.style.color = "#fc6547";
    } else {
        error_status.style.visibility = 'hidden';
        window.location = 'thanks_page.html';
    }
});