import _ from "lodash";

const LINE_SEPARATOR: string = "\n";

/**
 * If the value is null, "null", "NULL", or an empty string, return "", otherwise return the value
 *
 * @param {string} value - The value to check if it's null.
 * @return {string} a string or empty string if null.
 */
function nullify(value: string): string {
  return ["NULL", "null", null, ""].includes(value) ? "" : value;
}

/**
 * Use common line separator, which parses each line as the contents of a JSON array
 *
 * @param {string} line - The line of text to parse.
 * @return {string[]} An array of strings
 */
function parseLine(line: string): string[] {
  return line.split(",");
}

/**
 * It splits the CSV into lines, then it splits each line into values, then it creates an object from
 * each line using the headers as keys and the values as values
 *
 * @param {string} csv - The CSV data to be parsed
 * @return {Record<string, any>[]} An array of objects.
 */
function parseToObjects(csv: string): Record<string, any>[] {
  // Split data into lines and separate headers from actual data using Array spread operator
  const [headerLine, ...lines] = csv.split(LINE_SEPARATOR);

  // Split headers line into an array
  const headers: string[] = parseLine(headerLine).map((item: string) => _.snakeCase(item));

  // Create objects from parsing lines. There will be as much objects as lines
  const objects = lines.map((line: string) =>
    parseLine(line).reduce((object, value, index) => ({ ...object, [headers[index]]: nullify(value) }), {})
  );

  return objects;
}

/**
 * "Split the CSV into lines, then parse each line into an array of strings."
 *
 * The first thing we do is split the CSV into lines. We do this by using the split() method on the
 * string. The split() method takes a string as an argument and returns an array of strings. The string
 * we pass to split() is the LINE_SEPARATOR constant
 *
 * @param {string} csv - the CSV string to parse
 * @return {Array<string[]>} An array of arrays of strings.
 */
function parseToStrings(csv: string): string[][] {
  return csv
    .split(LINE_SEPARATOR)
    .map((line: string, index: number): string[] =>
      index === 0
        ? parseLine(line).map((item: string) => _.snakeCase(item))
        : parseLine(line).map((cell: string) => nullify(cell))
    );
}

/**
 * It takes a CSV string and returns an array of objects or an array of string arrays
 *
 * @param {string} csv - The CSV string to parse.
 * @param {boolean} [toJson=true] - boolean = true
 * @return {Record<string, any>[] | Array<string[]>} An array of objects or an array of arrays.
 */
export function parse(csv: string, toJson: boolean = true): Record<string, any>[] | string[][] {
  const parsed: Record<string, any>[] | string[][] = toJson ? parseToObjects(csv) : parseToStrings(csv);
  return parsed.slice(0, -1);
}

/**
 * It takes an array of objects and returns a CSV string
 *
 * @param {Record<string, any>[]} data - The data to be converted to CSV.
 * @return {string} A deparsed csv string
 */
export function deparse(data: Record<string, any>[]): string {
  const replacer = (_: string, value: any) => (value === null ? "" : value);
  const header: string[] = Object.keys(data[0]);

  return [
    header.join(","),
    ...data.map((row) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(",")),
  ].join(LINE_SEPARATOR);
}
