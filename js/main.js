const form = document.getElementById('sheetdb-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById('sheetdb-form')),
    }) .then(res => res.json())
    .then(req => console.log(req))
})