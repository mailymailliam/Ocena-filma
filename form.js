document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

      
        if (form.checkValidity()) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Vaša ocena je bila uspešno poslana!",
                showConfirmButton: false,
                timer: 1500
            });

            
            setTimeout(() => form.submit(), 1500);
        } 
        else {
            Swal.fire({
                icon: "error",
                title: "Napaka",
                text: "Izpolniti morate vsa polja!",
            });
        }
    });
});
