function checkPassword() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "bahagiaselaluyaa") {

        document.getElementById("password-page").style.display = "none";
        document.getElementById("love-page").style.display = "flex";

    } else {

        error.textContent = "Password salah!";

    }
}


function startLoading() {

    // Ambil musik yang sudah ada
    const music = document.getElementById("backgroundMusic");

    // Mulai musik ketika tombol diklik
    music.play();

    // Hilangkan halaman love
    document.getElementById("love-page").style.display = "none";

    // Tampilkan halaman loading
    document.getElementById("loading-page").style.display = "flex";


    // Tunggu 3 detik
    setTimeout(function() {

        // Hilangkan loading
        document.getElementById("loading-page").style.display = "none";

        // Tampilkan halaman Happy Birthday
        document.getElementById("birthday-page").style.display = "flex";

    }, 6000);
}