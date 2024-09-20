const form = document.getElementById('sheetdb-form')
const cont = document.querySelector('section')


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Formani avtomatik jo'natilishini oldini olish

    const fullName = form['lastName'].value.trim();
    const phone = form['phone'].value.trim();

    const messageDiv = document.createElement('div');
    messageDiv.className = 'alert'; // Bu yerda kerakli classlarni qo'shing

    if (!fullName || !phone) {
        messageDiv.classList.add('alert-danger');
        messageDiv.innerText = 'Please fill in all fields before submitting!';
        cont.prepend(messageDiv); // Xabarni birinchi qilib qo'shish

        // Xabarni 1 soniyadan keyin o'chirish
        setTimeout(() => {
            messageDiv.remove();
        }, 2000); // 1000 millisekund = 1 sekund
    } else {
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(res => res.json())
            .then((req) => {
                messageDiv.classList.add('alert-success');
                messageDiv.innerText = 'Ma\'lumotlaringiz muvaffaqiyatli yuborildi!';
                cont.prepend(messageDiv);
                form.reset(); // Formani tozalash

                // Xabarni 1 soniyadan keyin o'chirish
                setTimeout(() => {
                    messageDiv.remove();
                }, 2000); // 1000 millisekund = 1 sekund
            }).catch((error) => {
                messageDiv.classList.add('alert-danger');
                messageDiv.innerText = 'Something went wrong. Please try again!';
                cont.prepend(messageDiv);

                // Xabarni 1 soniyadan keyin o'chirish
                setTimeout(() => {
                    messageDiv.remove();
                }, 1000); // 1000 millisekund = 1 sekund
            });
    }
});

