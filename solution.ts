const formatValue = (
  value: number | string | boolean
): number | string | boolean | undefined => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
  return value;
};

console.log(formatValue(true));
