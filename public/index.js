const proceedButtons = document.querySelectorAll("a");

proceedButtons.forEach((proceed) => {
  const params = new URLSearchParams(window.location.search);

  let sub1 = params.get("sub1") || "";
  let sub2 = params.get("sub2") || "";
  let sub3 = params.get("sub3") || "";
  let sub4 = params.get("sub4") || "";
  let sub5 = params.get("sub5") || "";
  proceed.setAttribute(
    "href",
    `https://google.com?sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}`
  );
});
