function copyToClipboard() {
    const text = 'AKYkEmhcoGdgc7kEqTBzr8UjXc5Y6uPXnW7EKjaxAHim';
    navigator.clipboard.writeText(text).then(() => {
        showAlert();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

//wallet.js
