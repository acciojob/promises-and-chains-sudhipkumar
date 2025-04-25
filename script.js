//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission

      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value);

      if (name === "" || isNaN(age)) {
        alert("Please enter valid details");
        return;
      }

      // Create a promise that resolves or rejects after 4 seconds
      const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      // Handle the promise
      checkAge
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });
