const github = require("@actions/github");
const axios = require("axios");
const moment = require("moment");

const tag = github.context.ref;
const actor = github.context.actor;
const version = tag.slice(11);

const changelog = process.env.CHANGES;
const accessToken = process.env.GH_TOKEN;

const currentDate = moment().format("DD-MM-YYYY");

const title = `Release ${version}`;
const body = `**Автор релиза:** ${actor}\n\n**Дата релиза:** ${currentDate}\n\n**Номер версии:** ${version}\n\n**Changelog:**\n${changelog}`;

const url = `https://api.github.com/repos/dapetrov/Infrastr-dz2/issues`;
const headers = {
  Authorization: `Bearer ${accessToken}`,
  Accept: "application/vnd.github.v3+json",
};
const data = {
  title: title,
  body: body,
  labels: ["RELEASE"],
};
axios
  .post(url, data, { headers })
  .then((response) => {
    console.log("Запись в реестре релизов успешно создана.");
  })
  .catch((error) => {
    console.error("Ошибка при создании записи в реестре релизов.");
    console.error(error.response.data);
  });
