const { Telegraf } = require("telegraf");
const TOKEN = "6976582329:AAEjk_us2V6q5HapRNwV4QaSNfurCr7c9jU";
const bot = new Telegraf(TOKEN);

const web_link = "shoozia-telegram-web-shop.vercel.app";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
