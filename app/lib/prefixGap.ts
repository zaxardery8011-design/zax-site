// 前綴字（「Proof:」「證據：」）與後面內容之間要不要空格，由前綴字結尾決定：
// 半形字元結尾（英文 "Proof:"）補一格空白；全形「：」結尾（中文）照舊緊接。
export const prefixGap = (label: string) => (/[\x21-\x7e]$/.test(label) ? " " : "");
