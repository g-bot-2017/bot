const linebot = require('../index.js');

const bot = linebot({
	channelId: process.env.1544329889,
	channelSecret: process.env.59844eb05fa2946355afe5dc6fd46a37,
	channelAccessToken: process.env.jlK1k3fIaNjzQMFFAz1IcpQymHMFX8hu6KePYX/Y+kOwAyN4ikp1tqPOCAOaLzotpt53+sMSgNxidVeYiUzcEwjrveRxDe2q1yZ96ebyxECpqTWjt5h9GzzcD/T1iUFceu8W4hvfqYpyJcANaVyLuAdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function (event) {
	event.reply(event.message.text).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
