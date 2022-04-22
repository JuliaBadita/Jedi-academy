import { API_MAILGUN_DOMAIN, API_MAILGUN_KEY, ADMIN_EMAIL } from "../config";

async function sendEmail(name, email, message){
    let form = new FormData();
    form.append("from", `${name} <${email}>`);
    form.append("to", email);
    form.append("subject", 'Académie : Demande de contact');
    form.append("html", message);
    return fetch(`${API_MAILGUN_DOMAIN}`, {
        method: "POST",
        headers: {
            Authorization: 'Basic ' +btoa('api:'+API_MAILGUN_KEY),
        },
        body: form
    })
    .then((res) => res.json())
    .catch((error) => {
        error.json()
    });
}

export default {
    sendEmail
};
