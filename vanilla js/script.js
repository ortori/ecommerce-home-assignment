const colors = [
  "#A0E4CB",
  "#5DA7DB",
  "#7DE5ED",
  "#F8C4B4",
  "#7978FF",
  "#749F82",
  "#98A8F8",
  "#D58BDD",
];

const displayData = (data, nested, colorIdx, div) => {
  const mainDiv = document.createElement("div");
  const pId = document.createElement("p");
  const pSiteName = document.createElement("p");
  const pSiteUrl = document.createElement("p");
  const aSiteUrl = document.createElement("a");
  mainDiv.classList.add("main-container");
  mainDiv.style.minWidth = nested ? "200px" : "300px";
  mainDiv.style.marginLeft = nested ? "auto" : "";
  mainDiv.style.backgroundColor = colors[colorIdx];
  pId.textContent = `Id: ${data.id}`;
  pSiteName.textContent = `Site Name: ${data.name}`;
  pSiteUrl.textContent = `Site Url: ${data.name}`;
  aSiteUrl.href = `http://${data.url}`;
  aSiteUrl.target = "_blank";
  aSiteUrl.rel = "noreferrer";
  aSiteUrl.appendChild(pSiteUrl);
  mainDiv.append(pId, pSiteName, aSiteUrl);
  if (nested) {
    div.appendChild(mainDiv);
  } else {
    const body = document.querySelector("body");
    body.appendChild(mainDiv);
  }
  data?.subData?.forEach((data) => {
    displayData(data, true, colorIdx + 1, mainDiv);
  });
};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => displayData(data, false, 0));
  })
  .catch((err) => console.log(`There was a problem! (${err})`));
