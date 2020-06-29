export function singularOrPlural(amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

export function toMoney(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
