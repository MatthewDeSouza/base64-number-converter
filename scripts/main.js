function convertDec() {
  const toBinary = document.getElementById("binary").checked;
  const toOctal = document.getElementById("octal").checked;
  const toDecimal = document.getElementById("decimal").checked;
  const toHex = document.getElementById("hex").checked;

  let input = +document.getElementById("input").value;

  if (isNaN(input)) {
    alert("Input is not a number!");
    return;
  }

  if (toBinary) {
    document.getElementById("output").value = input.toString(2);
  }
  if (toOctal) {
    document.getElementById("output").value = input.toString(8);
  }
  if (toDecimal) {
    document.getElementById("output").value = input.toString(10);
  }
  if (toHex) {
    document.getElementById("output").value = input.toString(16);
  }
}

function base64Calc() {
  const encode = document.getElementById("encode").checked;
  const input = document.getElementById("input").value;

  if (encode) {
    document.getElementById("output").value = btoa(input);
    return;
  }
  document.getElementById("output").value = atob(input);
}

function switchTheme() {
  let base = getComputedStyle(document.documentElement).getPropertyValue("--base");
  console.log(base);
  const setTheme = (entry) =>
    Object.entries(entry).forEach((v) =>
      document.querySelector(":root").style.setProperty(v[0], v[1])
    );

  if (base === "#eff1f5") {
    const mocha = {
      "--rosewater": "#f5e0dc",
      "--flamingo": "#f2cdcd",
      "--pink": "#f2cdcd",
      "--mauve": "#cba6f7",
      "--red": "#f38ba8",
      "--maroon": "#eba0ac",
      "--peach": "#fab387",
      "--yellow": "#f9e2af",
      "--green": "#a6e3a1",
      "--teal": "#94e2d5",
      "--sky": "#89dceb",
      "--sapphire": "#74c7ec",
      "--blue": "#89b4fa",
      "--lavender": "#b4befe",
      "--text": "#cdd6f4",
      "--subtext1": "#bac2de",
      "--subtext0": "#a6adc8",
      "--overlay2": "#9399b2",
      "--overlay1": "#7f849c",
      "--overlay0": "#6c7086",
      "--surface2": "#585b70",
      "--crust": "#313244",
      "--surface0": "#585b70",
      "--base": "#1e1e2e",
      "--mantle": "#181825",
      "--surface1": "#11111b",
    };
    setTheme(mocha);
    document.getElementById("icon").setAttribute("src", "images/sun.png");
    return;
  }

  if (base === "#1e1e2e") {
    const latte = {
      "--rosewater": "#dc8a78",
      "--flamingo": "#dd7878",
      "--pink": "#ea76cb",
      "--mauve": "#8839ef",
      "--red": "#d20f39",
      "--maroon": "#e64553",
      "--peach": "#fe640b",
      "--yellow": "#df8e1d",
      "--green": "#40a02b",
      "--teal": "#179299",
      "--sky": "#04a5e5",
      "--sapphire": "#209fb5",
      "--blue": "#1e66f5",
      "--lavender": "#7287fd",
      "--text": "#4c4f69",
      "--subtext1": "#5c5f77",
      "--subtext0": "#6c6f85",
      "--overlay2": "#7c7f93",
      "--overlay1": "#8c8fa1",
      "--overlay0": "#9ca0b0",
      "--surface2": "#acb0be",
      "--surface1": "#bcc0cc",
      "--surface0": "#ccd0da",
      "--base": "#eff1f5",
      "--mantle": "#e6e9ef",
      "--crust": "#dce0e8",
    };
    setTheme(latte);
    document.getElementById("icon").setAttribute("src", "images/moon.png");
    return;
  }
}

// function switchTheme() {
//   let css = document.getElementById("theme").getAttribute("href");
//   if (css === "styles/main.css") {
//     document
//       .getElementById("theme")
//       .setAttribute("href", "styles/main-dark.css");
//     document.getElementById("icon").setAttribute("src", "images/sun.png");
//     return;
//   }

//   if (css === "styles/main-dark.css") {
//     document.getElementById("theme").setAttribute("href", "styles/main.css");
//     document.getElementById("icon").setAttribute("src", "images/moon.png");
//     return;
//   }
// }