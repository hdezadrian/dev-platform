const supabaseClient = supabase.createClient(
    "https://ecdggcbbnaezejtnotkc.supabase.co",
    "sb_publishable_XHEcIbFVkdrPSv4PZW4SSw_IHL-nWpk"
);

const googleButton = document.querySelectorAll(".oauth-button")[0];

googleButton.addEventListener("click", async () => {

    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google"
    });

    if (error) {
        console.error("Google login error:", error);
    }

});

const githubButton = document.querySelectorAll(".oauth-button")[1];

githubButton.addEventListener("click", async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "github"
    });

    if (error) {
        console.error("GitHub login error:", error);
    }
});


const discordButton = document.querySelectorAll(".oauth-button")[2];

discordButton.addEventListener("click", async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "discord"
    });

    if (error) {
        console.error("Discord login error:", error);
    }
});

const createAccountButton = document.querySelector(".create-account-button");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelectorAll('input[type="password"]')[0];
const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];

createAccountButton.addEventListener("click", () => {
    const inputs = [
        emailInput,
        passwordInput,
        confirmPasswordInput
    ];

    let hasError = false;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.classList.add("error");
            hasError = true;
        } else {
            input.classList.remove("error");
        }
    });

    if (hasError) {
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
    return;
    }

}); 

