function checkTemperature(temp: number): string {
  if (temp < 0) {
    return "Freezing!";
  } else if (temp < 20) {
    return "Cold";
  } else if (temp < 30) {
    return "Warm";
  } else {
    return "Hot!";
  }
}

// テスト
console.log(checkTemperature(-5));  // Freezing!
console.log(checkTemperature(10));  // Cold
console.log(checkTemperature(25));  // Warm
console.log(checkTemperature(33));  // Hot!


// リテラル・テンプレートによる書き換え例 ===================================

// 温度を受け取って、その状態を文字列で返す関数
function checkTemperature(temp: number): string {

  // 返すメッセージの変数を用意
  let status = "";

  // 条件分岐で状態を決める
  if (temp < 0) {
    status = "Freezing!";
  } else if (temp < 20) {
    status = "Cold";
  } else if (temp < 30) {
    status = "Warm";
  } else {
    status = "Hot!";
  }

  // テンプレートリテラルで、変数を文字列に埋め込む
  // バッククォート (`) と ${ } を使うのがポイント！
  return `現在の気温は ${temp}℃、状態は「${status}」です。`;
}

// テスト
console.log(checkTemperature(-5));  // 現在の気温は -5℃、状態は「Freezing!」です。
console.log(checkTemperature(10));  // 現在の気温は 10℃、状態は「Cold」です。
console.log(checkTemperature(25));  // 現在の気温は 25℃、状態は「Warm」です。
console.log(checkTemperature(33));  // 現在の気温は 33℃、状態は「Hot!」です。
