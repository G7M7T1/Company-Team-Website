ScrollReveal().reveal(".section-1-heading", { delay: 200, duration: 3000 });
ScrollReveal().reveal(".section-heading", { delay: 100, duration: 2000 });
ScrollReveal().reveal(".customer.card-3", { delay: 200, duration: 1000 });
ScrollReveal().reveal(".customer.card-2", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".customer.card-1", { delay: 300, duration: 1000 });

ScrollReveal().reveal(".team-member.card-1", { delay: 200, duration: 1000 });
ScrollReveal().reveal(".team-member.card-2", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".team-member.card-3", { delay: 300, duration: 1000 });

ScrollReveal().reveal(".form-container", { delay: 300, duration: 1000 });

document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
