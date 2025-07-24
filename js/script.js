document.getElementById("btnLimpar").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.value = "";
  });
});

document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {
  const input1 = document.getElementById("cincocent");
  const input2 = document.getElementById("dezcent");
  const input3 = document.getElementById("vintecincocent");
  const input4 = document.getElementById("cinquentacent");
  const input5 = document.getElementById("um");

  const input6 = document.getElementById("dois");
  const input7 = document.getElementById("cinco");
  const input8 = document.getElementById("dez");
  const input9 = document.getElementById("vinte");
  const input10 = document.getElementById("cinquenta");
  const input11 = document.getElementById("cem");
  const input12 = document.getElementById("duzentos");

  const calc1 = Number(input1.value) * 0.05;
  const calc2 = Number(input2.value) * 0.1;
  const calc3 = Number(input3.value) * 0.25;
  const calc4 = Number(input4.value) * 0.5;
  const calc5 = Number(input5.value) * 1;

  const subtotal1 = calc1 + calc2 + calc3 + calc4 + calc5;

  const calc6 = Number(input6.value) * 2;
  const calc7 = Number(input7.value) * 5;
  const calc8 = Number(input8.value) * 10;
  const calc9 = Number(input9.value) * 20;
  const calc10 = Number(input10.value) * 50;
  const calc11 = Number(input11.value) * 100;
  const calc12 = Number(input12.value) * 200;

  const subtotal2 = calc6 + calc7 + calc8 + calc9 + calc10 + calc11 + calc12;

  const total = subtotal1 + subtotal2;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById("subtotal1").value = formatter.format(subtotal1);
  document.getElementById("subtotal2").value = formatter.format(subtotal2);
  document.getElementById("total").value = formatter.format(total);
}
