class Feedback {
    constructor(name, email, wantsFacts) {
        this.name = name;
        this.email = email;
        this.wantsFacts = wantsFacts;
    }

    print() {
        console.log(
            `Обратная связь
Имя: ${this.name}
Почта: ${this.email}
Хочет больше фактов: ${this.wantsFacts ? "Да" : "Нет"}`
        );
    }
}

const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("reader-name").value;
    const email = document.getElementById("reader-email").value;
    const wantsFacts = document.getElementById("reader-interest").checked;

    const feedback = new Feedback(name, email, wantsFacts);

    feedback.print();
});