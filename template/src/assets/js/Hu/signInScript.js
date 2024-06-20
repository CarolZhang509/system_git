
    document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.getElementById('sign-in-button');
    checkSignInStatus();

    signInButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    performSignIn();
});

    function performSignIn() {
    Swal.fire({
    title: '签到成功！',
    text: '您已成功签到。',
    icon: 'success',
    confirmButtonText: '好的',
    timer: 1500
});

    signInButton.classList.remove('btn-primary');
    signInButton.classList.add('btn-success');
    signInButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle me-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            签到成功
        `;

    // Record sign in time
    const currentTime = new Date().getTime();
    localStorage.setItem('signInTime', currentTime.toString());

    // Set timeout to reset sign in status after 5 minutes
    setTimeout(resetSignInStatus, 30000); // 300000 ms = 5 minutes
}

    function checkSignInStatus() {
    const signInTime = localStorage.getItem('signInTime');
    const currentTime = new Date().getTime();

    if (signInTime && (currentTime - parseInt(signInTime, 10) < 30000)) {
    // Still within 5 minutes
    signInButton.classList.remove('btn-primary');
    signInButton.classList.add('btn-success');
    signInButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle me-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                签到成功
            `;
    setTimeout(resetSignInStatus, 30000 - (currentTime - parseInt(signInTime, 10)));
} else {
    resetSignInStatus();
}
}

    function resetSignInStatus() {
    localStorage.removeItem('signInTime');
    signInButton.classList.add('btn-primary');
    signInButton.classList.remove('btn-success');
    signInButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock me-2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            每日签到
        `;
}
});
