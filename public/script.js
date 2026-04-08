const senhaInput = document.getElementById("senha");
const forcaBarra = document.getElementById("forca");
const mensagem = document.getElementById("mensagem");
const senhaDigitada = document.getElementById("senhaDigitada");

senhaInput.addEventListener("input", () => {
  const senha = senhaInput.value;
  let forca = 0;

  // linha mostra senha digitada
  senhaDigitada.textContent = senha ? `Senha: ${senha}` : "";

  // regras
  if (senha.length >= 6) forca++;
  if (/[A-Z]/.test(senha)) forca++;
  if (/[0-9]/.test(senha)) forca++;
  if (/[^A-Za-z0-9]/.test(senha)) forca++;

  // atualizar interface
  switch (forca) {
    case 0:
    case 1:
      forcaBarra.style.width = "25%";
      forcaBarra.style.background = "#ff3b30"; // vermelho Apple
      mensagem.textContent = "Senha fraca";
      break;

    case 2:
      forcaBarra.style.width = "50%";
      forcaBarra.style.background = "#ff9500"; // laranja
      mensagem.textContent = "Senha média";
      break;

    case 3:
      forcaBarra.style.width = "75%";
      forcaBarra.style.background = "#ffcc00"; // amarelo
      mensagem.textContent = "Senha forte";
      break;

    case 4:
      forcaBarra.style.width = "100%";
      forcaBarra.style.background = "#34c759"; // verde Apple
      mensagem.textContent = "Senha muito forte";
      break;
  }
});
