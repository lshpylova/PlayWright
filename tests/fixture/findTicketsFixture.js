// tests/fixtures/findTicketsFixture.js
const base = require('@playwright/test').test;

exports.test = base.extend({
  findTicketsData: async ({}, use) => {
    const data = {
      city1: "Kyiv",
      city2: "Gdansk",
      date: 11,
      link: "https://klr.com.ua/en/bus/khmelnytskyi/bonn"
    };
    await use(data);
  },
});