async function fetchAdviceAPI() {
  await fetch("https://api.adviceslip.com/advice")
    .then(async (data) => {
      if (data.status === 200) {
        const result = await data.json();
        document.querySelector(".adviceId").innerHTML =
          "Advice #" + result.slip.id;
        document.querySelector(".quote").innerHTML =
          '"' + result.slip.advice + '"';
      }
    })
    .catch((e) => {
      alert(e.message);
    });
}

fetchAdviceAPI();
