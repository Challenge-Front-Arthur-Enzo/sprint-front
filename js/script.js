// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato1");
    const mensagemRetorno = document.getElementById("mensagem-retorno");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
  
      if (!nome || !email || !mensagem) {
        mensagemRetorno.textContent = "Preencha todos os campos corretamente!";
        mensagemRetorno.style.color = "red";
      } else {
        mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
        mensagemRetorno.style.color = "green";
        form.reset();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  // VALIDAÇÃO FORMULÁRIO CONTATO
  const formContato = document.getElementById("form-contato");
  const mensagemRetorno = document.getElementById("mensagem-retorno");

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = formContato.nome.value.trim();
      const email = formContato.email.value.trim();
      const mensagem = formContato.mensagem.value.trim();

      if (!nome || !email || !mensagem) {
        mensagemRetorno.textContent = "Preencha todos os campos corretamente!";
        mensagemRetorno.style.color = "red";
      } else {
        mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
        mensagemRetorno.style.color = "green";
        formContato.reset();
      }
    });
  }

  // FORMULÁRIO DE CADASTRO + AGENDA
  const formCadastro = document.getElementById("cadastro-form");
  const msg = document.getElementById("mensagem-lembrete");
  const simulador = document.getElementById("simulador-whatsapp");

  if (formCadastro) {
    formCadastro.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = formCadastro.agendamento_paciente.value;
      const data = formCadastro.agendamento_data.value;
      const tipo = formCadastro.tipo_consulta.value;

      msg.innerHTML = `👋 Olá, ${nome}!<br>
        Você tem uma ${tipo.toLowerCase()} agendada para o dia <strong>${data}</strong>.<br>
        Deseja confirmar sua presença?<br>
        Responda com <strong>SIM</strong> ou <strong>NÃO</strong>.`;

      simulador.style.display = "block";
      formCadastro.reset();
    });
  }
});

// AÇÕES DOS BOTÕES DO SIMULADOR
function confirmarPresenca() {
  alert("✅ Presença confirmada com sucesso!");
}

function reagendarConsulta() {
  alert("📅 Sua solicitação de reagendamento foi recebida.");
}

document.addEventListener("DOMContentLoaded", function () {
  const formConsulta = document.getElementById("consulta-agendamento-form");
  const resultado = document.getElementById("resultado-consulta");
  const resposta = document.getElementById("resposta-consulta");

  if (formConsulta) {
    formConsulta.addEventListener("submit", function (e) {
      e.preventDefault();

      const doc = formConsulta.documento.value.trim();

      if (doc) {
        // Simulação de consulta
        resposta.innerHTML = `✅ Agendamento encontrado:<br>
        <strong>Paciente:</strong> João Silva<br>
        <strong>Data:</strong> 12/06/2025<br>
        <strong>Tipo:</strong> Consulta Presencial<br>
        <strong>Status:</strong> Confirmado`;

        resultado.style.display = "block";
      } else {
        resposta.textContent = "❌ Nenhum agendamento encontrado.";
        resultado.style.display = "block";
      }
    });
  }
});

  