// 1) 変数：基本型注釈
let userName: string = "tomo";
let age: number = 55;
let isPaid: boolean = false;
let tags: string[] = ["ts", "beginner"];

// 2) 関数：引数/戻り値の型 + オプショナル引数
function greet(name: string, nickname?: string): string {
  const n = nickname ? ` (${nickname})` : "";
  return `Hello, ${name}${n}!`;
}

// 3) ユニオンの絞り込み：string | number | undefined -> number
function toPrice(input: string | number | undefined): number {
  if (typeof input === "number") return input;
  if (typeof input === "string") {
    const n = Number(input.trim());
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

// 4) 簡易テスト（型ホバーで確認）
const a = greet(userName);
const b = greet(userName, "kawa");
const p1 = toPrice("1200");     // number
const p2 = toPrice(980);        // number
const p3 = toPrice(undefined);  // number(=0)


                                                                                                                                                                                                                                                                                                                                                                                                                                            