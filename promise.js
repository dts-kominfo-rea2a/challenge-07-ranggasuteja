const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();
    const semuaData = [...dataIXX, ...dataVGC];
    const result = semuaData.filter((e) => e.hasil === emotion);
    return result.length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
