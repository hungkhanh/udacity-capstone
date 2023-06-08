export function getSelectData(select = []) {
  return Object.fromEntries(select.map((e) => [e, true]));
}
