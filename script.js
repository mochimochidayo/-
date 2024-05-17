const audioData = {
    "这.mp3": {"pinyin": "zhè", "simplified": "这"},
    "位.mp3": {"pinyin": "wèi", "simplified": "位"},
    "是.mp3": {"pinyin": "shì", "simplified": "是"}
};

let currentAudio = '';

function playRandomAudio() {
    const audios = Object.keys(audioData);
    currentAudio = audios[Math.floor(Math.random() * audios.length)];
    const audio = new Audio(`./${currentAudio}`);
    audio.play();
}

document.getElementById('playAudio').addEventListener('click', playRandomAudio);

document.getElementById('submitAnswer').addEventListener('click', () => {
    const userPinyin = document.getElementById('pinyin').value.trim();
    const userSimplified = document.getElementById('simplified').value.trim();
    const correctPinyin = audioData[currentAudio].pinyin;
    const correctSimplified = audioData[currentAudio].simplified;

    let result = `正解: ピンイン - ${correctPinyin}, 簡体字 - ${correctSimplified}<br>`;
    result += `あなたの答え: ピンイン - ${userPinyin}, 簡体字 - ${userSimplified}<br>`;
    result += (userPinyin === correctPinyin && userSimplified === correctSimplified) ? '正解！' : '不正解';

    document.getElementById('result').innerHTML = result;
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('pinyin').value = '';
    document.getElementById('simplified').value = '';
    document.getElementById('result').innerHTML = '';
    playRandomAudio();
});
