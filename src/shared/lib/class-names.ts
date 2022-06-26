export const classNames = (...cls: Array<ClassName>): string => {
  const active: Array<string> = [];

  for (const cl of cls) {
    if (typeof cl === 'string') {
      active.push(cl);
      continue;
    }

    if (typeof cl === 'object') {
      for (const key in cl) {
        if (cl[key]) {
          active.push(key);
        }
      }
    }
  }

  return active.join(' ');
};
