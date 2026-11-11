const change = document.getElementById('change');
change.addEventListener('click', change_all);

function change_all() {
  if (document.getElementsByTagName('div')[0].innerHTML === 'Котиков') {
    document.getElementsByTagName('div')[0].innerHTML = 'Kotikov';
    document.getElementsByTagName('div')[1].innerHTML = 'Korzhik';
    document.getElementsByTagName('div')[2].innerHTML = 'Demonovich';
    document.getElementsByTagName('div')[3].innerHTML = 'Male';
    document.getElementsByTagName('div')[5].innerHTML = 'G.SANKT-PETERBURG';
    document.getElementsByTagName('div')[6].innerHTML =
      'GU MVD PO G.SANKT-PETERBURGU';
  } else {
    document.getElementsByTagName('div')[0].innerHTML = 'Котиков';
    document.getElementsByTagName('div')[1].innerHTML = 'Коржик';
    document.getElementsByTagName('div')[2].innerHTML = 'Демонович';
    document.getElementsByTagName('div')[3].innerHTML = 'Муж';
    document.getElementsByTagName('div')[5].innerHTML = 'Г.САНКТ-ПЕТЕРБУРГ';
    document.getElementsByTagName('div')[6].innerHTML =
      'ГУ МВД ПО Г.САНКТ-ПЕТЕРБУРГУ';
  }
}
