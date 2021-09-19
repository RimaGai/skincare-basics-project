function contactUs() {
        let name = prompt("What is your first name?");
        let email = prompt("What is your email address?");
        let help = prompt("Do you need help with your routine?");
        help = help.toLowerCase();
        let contactUs = document.querySelector("button");
        if (help === "yes") {
          contactUs.innerHTML =
            "Hey, " +
            name +
            "! " +
            "We will get in touch to help you to set up your routine!";
        } else {
          contactUs.innerHTML =
            "Hey, " +
            name +
            "! " +
            "Hope you enjoyed reading our skincare guide!";
        }
      }
      let contactUsButton = document.querySelector("button");
      contactUsButton.addEventListener("click", contactUs);