<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de IMC</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-100 from-green-100 via-white to-blue-50 min-h-screen flex items-center justify-center">
  <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-blue-600 mb-2">Aplicativo Saúde</h1>
    </div>

    <form id="formulario" method="post" class="space-y-5">
      <div>
        <label for="nome" class="block text-gray-700 font-medium mb-1">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg "
          required>
      </div>

      <div>
        <label for="peso" class="block text-gray-700 font-medium mb-1">Peso (kg)</label>
        <input type="number" id="peso" name="peso" step="0.1" placeholder="Digite seu Peso"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          required>
      </div>

      <div>
        <label for="altura" class="block text-gray-700 font-medium mb-1">Altura (m)</label>
        <input type="number" id="altura" name="altura" step="0.01" placeholder="Digite sua altura"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          required>
      </div>

      <button type="submit"
        class="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
        Calcular
      </button>

      <div class="mt-4 text-lg text-center min-h-12 bg-blue-100 flex items-center justify-center">
          <?php
              if ($_SERVER['REQUEST_METHOD'] === 'POST') 
               {
                  $nome = $_POST['nome'];
                  $peso = $_POST['peso'];
                  $altura = $_POST['altura'];

                  if ($peso > 0 && $altura > 0) {
                    $imc = $peso/($altura*$altura);
                
                    if ($imc < 18.5) {
                      $resultado = 'Abaixo do peso';
                    } else if ($imc < 25) {
                      $resultado = 'Peso normal';
                    } else if ($imc < 30) {
                      $resultado = 'Sobrepeso';
                    } else if ($imc < 35) {
                      $resultado = 'Obesidade grau 1';
                    } else if ($imc < 40) {
                      $resultado = 'Obesidade grau 2';
                    } else {
                      $resultado = 'Obesidade grau 3(mórbida)';
                    }
                    echo '<strong>Olá, ',$nome,'! <br>seu IMC: <strong>',number_format($imc, 2),'<br>',$resultado;
                  }else{
                    echo '<strong>Informe valores válidos para peso e altura.';
                  }
                }
            ?>
        </div>
    </form>
</body>
</html>