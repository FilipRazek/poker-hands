export default {
  preset: "ts-jest",
  passWithNoTests: true,
  // match only files with .test.ts or .spec.ts extension
  testRegex: "\\.(test|spec)\\.ts$",
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
};
