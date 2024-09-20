const form = document.getElementById('sheetdb-form')
const cont = document.querySelector('section')


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Formani avtomatik jo'natilishini oldini olish

    const fullName = form['lastName'].value.trim();
    const phone = form['phone'].value.trim();

    if (!fullName || !phone) {
        alert("Ma'lumotlarni to'liq kiriting")
    } else {
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(res => res.json())
            .then((req) => {
                alert('Xabaringiz yuborildi')
                form.reset(); // Formani tozalash
            })
    }
});

