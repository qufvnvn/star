window.onload = function () {
  //1번
  for (let i = 0; i < 5; i++) {
    document.write('*');
  }
  document.write('<br>');
  document.write('<hr>');

  //2번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //3번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //4번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //5번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //6번
  for (i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //7번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp;');
    }
    for (let k = 5; k > i; k--) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //8번
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i + 1; j--) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //9번
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < 2 * (5 - i) - 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  //10번
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i + 1; j--) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < 2 * (5 - i) - 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  // 공백 별찍기

  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      // 공백 출력
      for (let j = 10 - 1; j > i; j--) {
        document.write('&nbsp;&nbsp;');
      }
      // 별 출력
      for (let k = 0; k < 2 * i + 1; k++) {
        document.write('*');
      }
      document.write('<br>');
    } else {
      // 아래쪽 두 삼각형의 공백과 별 출력
      for (let j = 0; j < 11 - 1 - i; j++) {
        document.write('&nbsp;&nbsp;');
      }
      for (let k = 0; k < 2 * i + 1 - (11 - 1); k++) {
        document.write('*');
      }
      // 두 삼각형 사이의 공백
      for (let l = 0; l < 1 * (11 - 1 - i); l++) {
        document.write('&nbsp;&nbsp;');
      }
      // 오른쪽 삼각형의 별 출력
      for (let m = 0; m < 2 * i + 1 - (11 - 1); m++) {
        document.write('*');
      }
      document.write('<br>');
    }
  }
};
