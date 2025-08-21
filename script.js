const usernameInput = document.getElementById("username");
const messageBox = document.getElementById("username-message");

// 2. Define the rule exactly once
const usernameRule = {
  pattern: /^[a-zA-Z0-9_-]{3,16}$/,
  okMsg: "Valid username format",
  badMsg:
    "Username must be 3–16 characters, letters, numbers, underscores or hyphens only.",
};

// 3. Helper that shows the right message and color
function showUsernameMessage(isValid) {
  if (isValid) {
    messageBox.textContent = usernameRule.okMsg;
    messageBox.className = "validation-message success";
    usernameInput.classList.remove("error");
  } else {
    messageBox.textContent = usernameRule.badMsg;
    messageBox.className = "validation-message error";
    usernameInput.classList.add("error");
  }
}

usernameInput.addEventListener("input", () => {
  const isValid = usernameRule.pattern.test(usernameInput.value.trim());
  showUsernameMessage(isValid);
});

usernameInput.addEventListener("blur", () => {
  if (usernameInput.value.trim() !== "") {
    const isValid = usernameRule.pattern.test(usernameInput.value.trim());
    showUsernameMessage(isValid);
  }
});
