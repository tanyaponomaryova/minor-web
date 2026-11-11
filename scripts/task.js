function verify() {
  // сначала считываются текстовые значения из элементов, а потом превращаем в числа с плавающей точкой
  let A = parseFloat(document.getElementById('A').value);
  let H = parseFloat(document.getElementById('H').value);
  let R = parseFloat(document.getElementById('R').value);
  let M = parseFloat(document.getElementById('M').value);
  console.log(A, H, R, M);

  if (
    // проверяем являются ли считанные значения числами, положительными числами
    isNaN(A) ||
    isNaN(H) ||
    isNaN(R) ||
    isNaN(M) ||
    A <= 0 ||
    H <= 0 ||
    R <= 0 ||
    M < 0
  ) {
    document.getElementById('volumes').value = 'Введите положительные числа';
    document.getElementById('result1').value = 'не определен';
    document.getElementById('result2').value = 'не определен';
    document.getElementById('result3').value = 'не определен';
    return;
  }

  //   считаем объёмы
  let V1 = A * A * A;
  let V2 = Math.PI * R * R * H;

  //   пишем объёмы ёмкостей в поле
  //   округляем значения до двух знаков после запятой
  //   конкатенируем строки
  document.getElementById('volumes').value =
    'V1 = ' + V1.toFixed(2) + ', V2 = ' + V2.toFixed(2);

  if (M <= V1) {
    document.getElementById('result1').value = 'Поместится';
  } else {
    document.getElementById('result1').value = 'Не поместится';
  }

  if (M <= V2) {
    document.getElementById('result2').value = 'Поместится';
  } else {
    document.getElementById('result2').value = 'Не поместится';
  }

  if (M <= V1 + V2) {
    document.getElementById('result3').value = 'Поместится';
  } else {
    document.getElementById('result3').value = 'Не поместится';
  }
}

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);
