const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome');
  const id = document.querySelector('#id');
  const tipoCliente = document.querySelector('#tipo_cliente');
  const endereco = document.querySelector('#endereco');
  const cep = document.querySelector('#cep');
  const dataNascimento = document.querySelector('#data_nascimento');
  const vendedor = document.querySelector('#vendedor');
  const limiteCredito = document.querySelector('#limite_credito');

  try {
    if (!nome.value || !id.value || !tipoCliente.value || !endereco.value || !cep.value || !dataNascimento.value || !vendedor.value || !limiteCredito.value) {
      throw new Error('Por favor, preencha todos os campos.');
    }

    if (!/^[a-zA-Z]+$/.test(nome.value)) {
      throw new Error('O campo nome deve conter apenas letras.');
    }

    if (!/^[a-zA-Z]+$/.test(vendedor.value)) {
      throw new Error('O campo nome do vendedor deve conter apenas letras.');
    }

    if (!/^\d+$/.test(id.value)) {
      throw new Error('O campo ID deve conter apenas números.');
    }

    if (!/^\d+$/.test(cep.value)) {
      throw new Error('O campo cep deve conter apenas números.');
    }

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const dataNasc = new Date(dataNascimento.value);
    const anoNasc = dataNasc.getFullYear();

    const idade = anoAtual - anoNasc;

    if (idade > 90) {
      throw new Error('A idade máxima permitida é de 90 anos.');
    }

    if (anoNasc > 2023) {
      throw new Error('A data de nascimento deve ser anterior a 2023.');
    }

    // Armazena as informações em cookies :)
    document.cookie = `nome=${nome.value}`;
    document.cookie = `id=${id.value}`;

    alert('Cadastro realizado com sucesso!');
    form.reset();
  } catch (error) {
    alert(error.message);
  }
});

