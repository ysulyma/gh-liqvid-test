(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,155958,t=>{t.v(t=>Promise.resolve().then(()=>t(510306)))},92182,645357,t=>{"use strict";var e=t.i(586814);let n=t=>{let e,n=new Set,i=(t,i)=>{let s="function"==typeof t?t(e):t;if(!Object.is(s,e)){let t=e;e=(null!=i?i:"object"!=typeof s||null===s)?s:Object.assign({},e,s),n.forEach(n=>n(e,t))}},s=()=>e,a={setState:i,getState:s,getInitialState:()=>r,subscribe:t=>(n.add(t),()=>n.delete(t))},r=e=t(i,s,a);return a},i=t=>t?n(t):n;t.s(["f",0,i],645357);let s=t=>t;function a(t,n=s){let i=e.default.useSyncExternalStore(t.subscribe,e.default.useCallback(()=>n(t.getState()),[t,n]),e.default.useCallback(()=>n(t.getInitialState()),[t,n]));return e.default.useDebugValue(i),i}let r=t=>{let e=i(t),n=t=>a(e,t);return Object.assign(n,e),n};t.s(["$",0,t=>t?r(t):r,"f",0,a],92182)},730564,t=>{t.v(e=>Promise.all(["static/chunks/076f2kddr60d3.js"].map(e=>t.l(e))).then(()=>e(629512)))},271281,t=>{t.v(e=>Promise.all(["static/chunks/3j1w8dcplx-sx.js"].map(e=>t.l(e))).then(()=>e(731220)))},285427,t=>{t.v(e=>Promise.all(["static/chunks/3zxv1spf_uc4f.js"].map(e=>t.l(e))).then(()=>e(539869)))},59473,t=>{t.v(e=>Promise.all(["static/chunks/17zo3hdw7jltz.js"].map(e=>t.l(e))).then(()=>e(947813)))},732664,t=>{t.v(e=>Promise.all(["static/chunks/0fh7sf3b24euv.js"].map(e=>t.l(e))).then(()=>e(224242)))},162219,t=>{t.v(e=>Promise.all(["static/chunks/02b4r_e0j4o-u.js"].map(e=>t.l(e))).then(()=>e(569996)))},985682,t=>{t.v(e=>Promise.all(["static/chunks/1fbane4fectu0.js"].map(e=>t.l(e))).then(()=>e(938020)))},82508,t=>{t.v(e=>Promise.all(["static/chunks/0rztwlmmi0aad.js"].map(e=>t.l(e))).then(()=>e(343313)))},805154,t=>{t.v(e=>Promise.all(["static/chunks/3byccvp3jfc7n.js"].map(e=>t.l(e))).then(()=>e(888383)))},582262,t=>{t.v(e=>Promise.all(["static/chunks/0-_964m-9a38r.js"].map(e=>t.l(e))).then(()=>e(176621)))},667055,t=>{t.v(e=>Promise.all(["static/chunks/152quy2ci0xmf.js"].map(e=>t.l(e))).then(()=>e(516051)))},408785,t=>{t.v(e=>Promise.all(["static/chunks/1q10ou7qrp5wr.js"].map(e=>t.l(e))).then(()=>e(953883)))},704451,t=>{t.v(e=>Promise.all(["static/chunks/1rjcpmnxtzyz5.js"].map(e=>t.l(e))).then(()=>e(872436)))},326051,t=>{t.v(e=>Promise.all(["static/chunks/2miiq0cn4poia.js"].map(e=>t.l(e))).then(()=>e(829624)))},515139,t=>{t.v(e=>Promise.all(["static/chunks/2nz9-abo991n9.js"].map(e=>t.l(e))).then(()=>e(49242)))},701226,t=>{"use strict";var e=t.i(53731),n=t.i(164177),i=t.i(289140),s=t.i(258576),a=t.i(950632),r=t.i(375791),l=t.i(767740),o=t.i(177133),c=t.i(907890),m=t.i(467772),h=t.i(456810),u=t.i(37248),u=u,d=t.i(715241),f=t.i(392854),p=t.i(698500),y=t.i(976175),v=t.i(234243),j=t.i(265736),b=t.i(74925),g=t.i(533164),x=t.i(586814);t.i(909239);var k=t.i(634038),P=t.i(505266),w=t.i(36703),A=t.i(368207),F=t.i(612586),R=t.i(333940),_=t.i(199176),S=t.i(835488);let q={"rhythms.ts":`/* ------------------------------ symbols ------------------------------ */
const syms = {
  rest8: "𝄾",
  rest4: "𝄽",
  rest2: "𝄼",
  rest1: "𝄻",

  note8: "𝅘𝅥𝅮",
  note4: "𝅘𝅥",
  note2: "𝅗𝅥",
  note1: "𝅝",

  dot: "𝅭",
  tie: "‿",
};

/* ------------------------------ symbols ------------------------------ */
type Note = {
  kind: "note";
  length: number;
};

type Rest = {
  kind: "rest";
  length: number;
};

type NoteRest = Note | Rest;

type Rhythm = NoteRest[];

/* ------------------------------ constructors ------------------------------ */
const note = (length) => ({ kind: "note", length });
const rest = (length) => ({ kind: "rest", length });

/** format a rhythm */
function fmt(...rhythm: NoteRest[]) {
  return rhythm
    .map((x) => {
      const { kind, length } = x;
      if (kind === "note") {
        switch (length) {
          case 1:
            return syms.note8;
          case 2:
            return syms.note4;
          case 3:
            return \`$\{syms.note4}$\{syms.dot}\`;
          case 4:
            return syms.note2;
        }
      } else {
        switch (length) {
          case 1:
            return syms.rest8;
          case 2:
            return syms.rest4;
          case 3:
            return \`$\{syms.rest4}$\{syms.dot}\`;
          case 4:
            return syms.rest2;
        }
      }
    })
    .join("");
}

function display(r: Rhythm) {
  console.log(fmt(...r));
}

/* ------------------------------ our code ------------------------------ */

/** generate all rhythms on n beats */
function rhythms(n) {
  return [...noteFirst(n), ...restFirst(n)];
}

/** generate all rhythms on n beats beginning with a note */
function noteFirst(n) {
  if (n === 1) return [[note(1)]];
  
  const tailNoteFirst = noteFirst(n - 1);
  const tailRestFirst = restFirst(n - 1);
  
  return [
    ...tailNoteFirst.map((tail) => [note(tail[0].length + 1), ...tail.slice(1)]),
    ...tailNoteFirst.map((tail) => [
      note(1),
      ...tail
    ]),
    ...tailRestFirst.map((tail) => [
      note(1),
      ...tail
    ]),
  ];
}

/** generate all rhythms on n beats beginning with a rest */
function restFirst(n) {
  if (n === 1) return [[rest(1)]];
  const tailNoteFirst = noteFirst(n - 1);
  const tailRestFirst = restFirst(n - 1);

  return [
    ...tailNoteFirst.map((tail) => [rest(1), ...tail]),
    ...tailRestFirst.map((tail) => [
      rest(tail[0].length + 1),
      ...tail.slice(1),
    ]),
  ];
}

const n = 2;
console.log(\`Rhythms on $\{n} beats:\`);
for (const r of rhythms(2)) {
  display(r);
}

for (let i = 0; i < 5; ++i) {
  const num = rhythms(i).length;
  console.log(i, num);
}`};var N=t.i(364975),z=t.i(699151),O=t.i(413157);t.i(525098).f,z.f,O.f;let $=new N.m(new URL("[lang]/mathober/4-linear-recurrence/[part]","https://content.epiplexis.xyz/next/").toString()),C=(0,s.f)({code:async()=>t.A(730564).then(t=>t.default),fibonacci:async()=>t.A(59473).then(t=>t.default),intro:async()=>t.A(985682).then(t=>t.default),linear:async()=>{try{return await t.A(582262).then(t=>t.default)}catch{return[]}}});function E(){let t,e,i=(0,n.c)(3),{part:s}=(0,r.useProjectParams)(),a=(0,x.use)(C[s]);return i[0]!==a?(t=()=>((0,F.h)(a),T),e=[a],i[0]=a,i[1]=t,i[2]=e):(t=i[1],e=i[2]),(0,x.useEffect)(t,e),null}function T(){return(0,F.h)(null)}let K=["main"],I=(0,s.f)({code:async()=>t.A(271281).then(t=>t.default),fibonacci:async()=>t.A(732664).then(t=>t.default),intro:async()=>t.A(82508).then(t=>t.default),linear:async()=>(0,o.promiseAllKeyed)({main:t.A(667055).then(t=>t.default.main),main1:t.A(408785).then(t=>t.default.main),main2:t.A(704451).then(t=>t.default.main),main3:t.A(326051).then(t=>t.default.main)}).then(({main:t,main1:e,main2:n,main3:i})=>({main:(0,S.f)(t,e,n,i)}))}),U=(0,s.f)({code:async()=>t.A(285427),fibonacci:async()=>t.A(162219),intro:async()=>t.A(805154),linear:async()=>t.A(515139)},"default");function B(){let t,i,s=(0,n.c)(13),{lang:l,part:m}=(0,r.useProjectParams)();s[0]===Symbol.for("react.memo_cache_sentinel")?(t={threshold:.3},s[0]=t):t=s[0];let y=(0,A.E)(t),v=(0,a.useRecordings)();if(s[1]!==v||s[2]!==y||s[3]!==l||s[4]!==m){let t,n;s[6]!==v||s[7]!==y||s[8]!==l?(t=t=>(0,e.jsx)(_.f,{replay:y.then(()=>(0,o.promiseAllKeyed)({main:v[l][t].main.fetch("@lqv+tldraw/recording.json"),main1:v[l][t].main1.fetch("@lqv+tldraw/recording.json"),main2:v[l][t].main2.fetch("@lqv+tldraw/recording.json"),main3:v[l][t].main3.fetch("@lqv+tldraw/recording.json")})).then(e=>{let{main:n,main1:i,main2:s,main3:a}=e,r=v[l][t];return(0,c.f)([n],[i,{start:p.f.from(r.main.duration)}],[s,{start:p.f.from(r.main.duration).plus(r.main1.duration)}],[a,{start:p.f.from(r.main.duration).plus(r.main1.duration).plus(r.main2.duration)}])}),children:(0,e.jsx)(G,{})}),s[6]=v,s[7]=y,s[8]=l,s[9]=t):t=s[9],s[10]!==v||s[11]!==y?(n=()=>(0,e.jsx)(R.T,{files:q,replay:y.then(()=>v.en.code.main.dir("@lqv+codemirror").fetch("recording.json"))}),s[10]=v,s[11]=y,s[12]=n):n=s[12],i=h.f.value(m).pipe(u.whenOr("intro","fibonacci",()=>(0,e.jsx)(_.f,{replay:y.then(()=>v[l][m].main.distribute().fetch("@lqv+tldraw/recording.json")),children:(0,e.jsx)(G,{})})),d.f.when("linear",t),d.f.when("code",n),f.f.exhaustive),s[1]=v,s[2]=y,s[3]=l,s[4]=m,s[5]=i}else i=s[5];return i}function G(){let t=(0,P.T)(),e=(0,b.P)();return(0,l.injectGlobal)({b64Vecs:k.k,ed:t,playback:e}),null}function L(t){let s,a,r,l,o=(0,n.c)(6);o[0]===Symbol.for("react.memo_cache_sentinel")?(s={threshold:.3},o[0]=s):s=o[0];let c=(0,A.E)(s);return o[1]===Symbol.for("react.memo_cache_sentinel")?(a=(0,m.f)("draggable pointer-events-none h-2/5 transition-[translate] duration-300 ease-in-out","in-[.no-face]:hidden in-[.settings-open]:-translate-x-48 in-[.speed-open]:-translate-y-26","absolute right-0 z-(--z-floating-face)"),o[1]=a):a=o[1],o[2]===Symbol.for("react.memo_cache_sentinel")?(r={seconds:10},o[2]=r):r=o[2],o[3]!==c||o[4]!==t?(l=(0,e.jsx)(i.f,{className:a,defer:c,preload:r,...t}),o[3]=c,o[4]=t,o[5]=l):l=o[5],l}t.s(["ClientContent",0,function(t){let i,s,l,o,c,m,b,k,P=(0,n.c)(30),{aspectRatio:R,hasAudio:_,hasCaptions:S,hasHls:q,hasTranscript:N}=t,{lang:z,part:O}=(0,r.useProjectParams)(),C=(0,x.use)(I[O]),T=(0,x.use)(U[O]);P[0]!==C?(i=new v.f((0,g.i)(K,C)),P[0]=C,P[1]=i):i=P[1];let G=i,V=(0,a.useRecordings)(),D=$.dir(".liqvid");P[2]===Symbol.for("react.memo_cache_sentinel")?(s={threshold:.3},P[2]=s):s=P[2];let H=(0,A.E)(s),W=F.G,J=(0,y.a)(t=>D.dir(z).dir(O).file(`social/liqvid-studio-${t}.png`));P[3]===Symbol.for("react.memo_cache_sentinel")?(l=void 0,P[3]=l):l=P[3];let M=T?{...T,path:D.dir(z).dir(O).dir("thumbs").pattern(`%c/%s.${T.imageFormat}`)}:void 0,Q=N?H.then(()=>D.dir(z).dir(O).fetch("audio/transcript.json")):void 0;P[4]!==V||P[5]!==_||P[6]!==H||P[7]!==z||P[8]!==O?(o=_&&h.f.value(O).pipe(u.whenOr("intro","code","fibonacci",t=>(0,e.jsx)(w.f,{defer:H,src:V[z][t].main})),d.f.when("linear",t=>{let n=V[z][t];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(w.f,{defer:H,src:n.main}),(0,e.jsx)(w.f,{defer:H,src:n.main1,start:n.main.duration}),(0,e.jsx)(w.f,{defer:H,src:n.main2,start:p.f.from(n.main.duration).plus(n.main1.duration)}),(0,e.jsx)(w.f,{defer:H,src:n.main3,start:p.f.from(n.main.duration).plus(n.main1.duration).plus(n.main2.duration)})]})}),f.f.exhaustive),P[4]=V,P[5]=_,P[6]=H,P[7]=z,P[8]=O,P[9]=o):o=P[9];let X=S&&(0,e.jsx)(j.f,{default:!0,defer:H,kind:"captions",src:D.dir(z).dir(O).dir("audio").file("captions.vtt"),srcLang:z});return P[10]!==V||P[11]!==q||P[12]!==z||P[13]!==O?(c=q&&(0,e.jsx)(L,{greenscreen:!0,hls:h.f.value(O).pipe(u.whenOr("intro","code","fibonacci",t=>V[z][t].main.distribute().dir("@liqvid+media/hls").file("stream.m3u8")),d.f.when("linear",t=>["main","main1","main2","main3"].map(e=>V[z][t][e].distribute().dir("@liqvid+media/hls").file("stream.m3u8"))),f.f.exhaustive),style:{bottom:"calc(var(--lv-controls-height) * var(--lv-controls-visible))",transition:"translate 200ms ease-in-out, height 1s ease-in-out"}}),P[10]=V,P[11]=q,P[12]=z,P[13]=O,P[14]=c):c=P[14],P[15]===Symbol.for("react.memo_cache_sentinel")?(m=(0,e.jsx)(E,{}),b=(0,e.jsx)(B,{}),P[15]=m,P[16]=b):(m=P[15],b=P[16]),P[17]!==W||P[18]!==R||P[19]!==q||P[20]!==H||P[21]!==G||P[22]!==o||P[23]!==X||P[24]!==c||P[25]!==J||P[26]!==l||P[27]!==M||P[28]!==Q?(k=(0,e.jsxs)(W,{aspectRatio:R,coverImage:J,defer:H,hasHls:q,hideWith:"invisible",loadingScreen:!0,plugins:l,script:G,thumbs:M,tldraw:!0,transcript:Q,children:[o,X,c,m,b]}),P[17]=W,P[18]=R,P[19]=q,P[20]=H,P[21]=G,P[22]=o,P[23]=X,P[24]=c,P[25]=J,P[26]=l,P[27]=M,P[28]=Q,P[29]=k):k=P[29],k}],701226)},197709,t=>{t.v(e=>Promise.all(["static/chunks/2buw2d0u6j5-r.js","static/chunks/2-opq1vxow5e3.js","static/chunks/40krnhc19cotr.css"].map(e=>t.l(e))).then(()=>e(399112)))},773089,t=>{t.v(t=>Promise.resolve().then(()=>t(375791)))},923097,t=>{t.v(t=>Promise.resolve().then(()=>t(341437)))},730173,t=>{t.v(e=>Promise.all(["static/chunks/08x1esbpps41m.js"].map(e=>t.l(e))).then(()=>e(572794)))}]);