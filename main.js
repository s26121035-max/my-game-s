const events = [

{
    name:"足腰の弱いおばあさん",

    image:"oba.jpg",

    text:"車いすになってもいろんな場所へ行きたいわぁ。\nすべての地面をアスファルトにしてくれないかしら？",

    accept:{
        gameover:true,
        message:
`森林はすべて伐採されました。

野生動物は住む場所を失いました。

雨水は地面へ染み込まず、
川は干上がりました。

地球は滅亡しました。`
    },

    reject:{
        gameover:false,
        message:"自然は守られました。"
    }

},

{
    name:"貧乏な漁師",

    image:"fisher.png",

    text:"もっと魚を獲りたい。\n全部の魚を捕まえられる網を授けてください！",

    accept:{
        gameover:true,
        message:
`海の魚は絶滅しました。

海鳥もクジラも餌を失いました。

陸上の動物たちは人類に食べつくされました。

地球は滅亡しました。`
    },

    reject:{
        gameover:false,
        message:"資源を守る漁業が続けられました。"
    }

},

{
    name:"仕事が軌道に乗り始めた工場長",

    image:"factory.png",

    text:"森を開発して巨大工場を建てたい！",

    accept:{
        gameover:true,
        message:
`森林はなくなりました。

温暖化が進みました。

工場排水により水質は悪化しました。

多くの生き物が絶滅しました。

地球は滅亡しました。`
    },

    reject:{
        gameover:false,
        message:"環境に優しい工場づくりが始まりました。"
    }

}

];

let current = 0;

const image = document.getElementById("character");
const name = document.getElementById("name");
const text = document.getElementById("text");

const accept = document.getElementById("accept");
const reject = document.getElementById("reject");

function loadEvent(){

    let e = events[current];

    image.src = e.image;

    name.textContent = e.name;

    text.innerHTML = e.text.replace(/\n/g,"<br>");

}

loadEvent();

accept.onclick = function(){

    let e = events[current];

    if(e.accept.gameover){

        document.body.innerHTML=`

        <div style="text-align:center;margin-top:80px;">

        <h1 style="color:red;">GAME OVER</h1>

        <p style="font-size:25px;white-space:pre-line;">
        ${e.accept.message}
        </p>

        <button class="restart" onclick="location.reload()">もう一度遊ぶ</button>

        </div>

        `;

    }

}

reject.onclick = function(){

    alert(events[current].reject.message);

    current++;

    if(current>=events.length){

        ending();

    }

    else{

        loadEvent();

    }

}

function ending(){

document.body.innerHTML=`

<div style="text-align:center;margin-top:80px;">

<h1>GOOD END</h1>

<h2>あなたは生態系を守る神でした。</h2>

<p style="font-size:22px;">

人々は自然と共存する方法を考えるようになりました。

<br><br>

森には動物が住み、

川には魚が泳ぎ、

空には鳥が飛び続けています。

<br><br>

あなたは地球を救いました。

</p>

<button class="restart" onclick="location.reload()">

タイトルへ戻る

</button>

</div>

`;

}