// Chaos Party! — bağımlılıksız sunucu: oyunu (index.html) sunar + WebSocket odası
const http=require("http"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const PORT=process.env.PORT||3000,GUID="258EAFA5-E914-47DA-95CA-C5AB0DC85B11",clients=new Map();let nid=1;
const srv=http.createServer((q,r)=>{
  const u=q.url.split("?")[0];
  if(u==="/"||u==="/index.html"){r.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-cache"});return fs.createReadStream(path.join(__dirname,"index.html")).pipe(r)}
  r.writeHead(404);r.end("404");
});
function frame(data,op=1){const p=Buffer.isBuffer(data)?data:Buffer.from(data);let h;
  if(p.length<126)h=Buffer.from([128|op,p.length]);
  else if(p.length<65536){h=Buffer.alloc(4);h[0]=128|op;h[1]=126;h.writeUInt16BE(p.length,2)}
  else{h=Buffer.alloc(10);h[0]=128|op;h[1]=127;h.writeBigUInt64BE(BigInt(p.length),2)}
  return Buffer.concat([h,p])}
function readFrame(c){const b=c.buf;if(b.length<2)return null;const op=b[0]&15,masked=b[1]&128;let len=b[1]&127,o=2;
  if(len===126){if(b.length<4)return null;len=b.readUInt16BE(2);o=4}
  else if(len===127){if(b.length<10)return null;len=Number(b.readBigUInt64BE(2));o=10}
  const mo=o,start=o+(masked?4:0);if(b.length<start+len)return null;
  let data=Buffer.from(b.subarray(start,start+len));
  if(masked){const m=b.subarray(mo,mo+4);for(let i=0;i<data.length;i++)data[i]^=m[i%4]}
  c.buf=b.subarray(start+len);return{op,data}}
const send=(c,o)=>{try{c.s.write(frame(JSON.stringify(o)))}catch(e){}};
const broadcast=o=>clients.forEach(c=>send(c,o));
const peers=()=>broadcast({t:"peers",list:[...clients.values()].map(c=>({peer:c.id,presence:c.presence}))});
function onMsg(c,txt){let m;try{m=JSON.parse(txt)}catch(e){return}
  if(m.t==="presence"){c.presence=m.p&&typeof m.p==="object"?m.p:{};peers()}
  else if(m.t==="emit"&&typeof m.topic==="string")broadcast({t:"emit",topic:m.topic,data:m.data,peer:c.id})}
srv.on("upgrade",(q,s)=>{
  const k=q.headers["sec-websocket-key"];if(!k)return s.destroy();
  s.write("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: "+crypto.createHash("sha1").update(k+GUID).digest("base64")+"\r\n\r\n");
  const id="p"+(nid++)+Math.random().toString(36).slice(2,6),c={s,id,presence:{},buf:Buffer.alloc(0)};clients.set(id,c);
  send(c,{t:"hello",id});peers();
  s.on("data",d=>{c.buf=Buffer.concat([c.buf,d]);if(c.buf.length>300000)return s.destroy();
    let f;while((f=readFrame(c))!==null){if(f.op===8){s.end();return}if(f.op===9){s.write(frame(f.data,10));continue}if(f.op===1)onMsg(c,f.data.toString())}});
  s.on("close",()=>{clients.delete(id);peers()});s.on("error",()=>s.destroy());
});
srv.listen(PORT,()=>console.log("Chaos Party! http://localhost:"+PORT));
