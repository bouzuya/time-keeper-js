const lpad = (s: string, n: number, p: string): string => {
  return p.repeat(n - s.length) + s;
};

export { lpad };
