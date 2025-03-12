// ✅ পেজ লোড হলে অ্যানিমেশন দেখানোর জন্য
document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector(".profile-container"); // 🔹 Profile container সিলেক্ট করা
    profileContainer.style.opacity = "0"; // 🔹 শুরুতে অপ্রকাশ্য করা
    profileContainer.style.transform = "translateY(50px)"; // 🔹 নিচে সরানো

    setTimeout(() => {
        profileContainer.style.transition = "opacity 1s ease, transform 1s ease"; // 🔹 অ্যানিমেশন যোগ করা
        profileContainer.style.opacity = "1"; // 🔹 দৃশ্যমান করা
        profileContainer.style.transform = "translateY(0)"; // 🔹 উপরে আনা
    }, 500);
});

// ✅ সোশ্যাল মিডিয়া লিংকে হোভার করলে অ্যানিমেশন যোগ করা
const socialLinks = document.querySelectorAll(".social-links a"); // 🔹 সোশ্যাল লিংকগুলো সিলেক্ট করা

socialLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)"; // 🔹 মাউস গেলে বড় হবে
        this.style.transition = "transform 0.3s"; // 🔹 মসৃণ অ্যানিমেশন
    });

    link.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)"; // 🔹 মাউস সরালে আগের মাপে ফিরে যাবে
    });
});
