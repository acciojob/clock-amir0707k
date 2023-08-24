//your JS code here. If required.
      const pElement = document.getElementById("timer");
      setInterval(() => {
        const timer = new Date().toLocaleString();
        pElement.innerText = `${timer}`;
      },1000);