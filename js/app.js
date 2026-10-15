const form = document.getElementById("form-login");
const nick = document.getElementById("nick");
const clave = document.getElementById("clave");
const ver = document.getElementById("ver");
const mensaje = document.getElementById("mensaje");

ver.addEventListener("click", () => {
  const oculto = clave.type === "password";
  clave.type = oculto ? "text" : "password";
  ver.textContent = oculto ? "Ocultar" : "Mostrar";
  ver.setAttribute("aria-label", oculto ? "Ocultar contraseña" : "Mostrar contraseña");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.classList.remove("ok");

  if (!nick.value.trim() || !clave.value) {
    mensaje.textContent = "Completa el nick y la contraseña.";
    (nick.value.trim() ? clave : nick).focus();
    return;
  }
  if (clave.value.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    clave.focus();
    return;
  }
  mensaje.classList.add("ok");
  mensaje.textContent = "Bienvenido, " + nick.value.trim() + ".";
});
