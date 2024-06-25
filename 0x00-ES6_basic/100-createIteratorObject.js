export default function createIteratorObject(report) {
  const res = [];
  for (const value of Object.values(report.allEmployees)) {
    res.push(...value);
  }
  return res;
}
