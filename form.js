document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Polje/-a niso pravilno izpolnjena."
            });

            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vaša ocena je bila poslana!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => form.reset(), 1500);
    });
});
