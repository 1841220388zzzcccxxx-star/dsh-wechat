import { createWeixinApi } from '../src/weixin-api.mjs';

const login = await createWeixinApi().beginLogin();
const qrUrl = new URL(login.qrcodeUrl);

console.log(JSON.stringify({
  ok: true,
  qrHost: qrUrl.hostname,
  qrTokenLength: login.qrcode.length,
  note: 'A fresh Tencent Weixin QR login session was created; no token or QR URL was printed or saved.',
}, null, 2));
