export const conversionTable: { [key: string]: [number, string] } = {
  league: [3, "mile"],
  mile: [1760, "yard"],
  furlong: [220, "yard"],
  yard: [3, "foot"],
  foot: [12, "inch"],
  inch: [2.54, "centimeter"],
  centimeter: [0.01, "meter"],
  meter: [1, "meter"],
};

export function convertToMeters(value: number, unit: string): number {
  if (unit in conversionTable) {
    console.log(unit)

    let multi = 1;

    while(true) {
      const conversion = conversionTable[unit]

      multi *= conversion[0]

      console.log(conversion[0])

      if(conversion[1] == unit) {
        return value * multi;
      }
      else {
        unit = conversion[1]
      }
    }
  }
  throw new Error(`unknown unit: ${unit}`);
}
