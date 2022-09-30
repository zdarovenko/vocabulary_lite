const dictionaryData = [
	{
		russian: 'с',
		german: 'mit'
	},
	{
		russian: 'много',
		german: 'viel'
	},
	{
		russian: 'ветренный',
		german: 'windig'
	},
	{
		russian: 'прохладный',
		german: 'kühl'
	},
	{
		russian: 'горячий',
		german: 'heiß'
	},
	{
		russian: 'холодный',
		german: 'kalt'
	},
	{
		russian: 'где?',
		german: 'wo?'
	},
	{
		russian: 'откуда?',
		german: 'woher?'
	},
	{
		russian: 'куда?',
		german: 'wohin?'
	},
	{
		russian: 'привет',
		german: 'hallo'
	},
	{
		russian: 'пока, до свидания',
		german: 'tschüs'
	},
	{
		russian: 'кто?',
		german: 'wer?'
	},
	{
		russian: 'как? какой?',
		german: 'wie?'
	},
	{
		russian: 'из (откуда-то)',
		german: 'aus'
	},
	{
		russian: 'тоже, также',
		german: 'auch'
	},
	{
		russian: 'спасибо',
		german: 'danke'
	},
	{
		russian: 'да',
		german: 'ja'
	},
	{
		russian: 'нет',
		german: 'nein'
	},
	{
		russian: 'очень',
		german: 'sehr'
	},
	{
		russian: 'и',
		german: 'und'
	},
	{
		russian: 'разведен',
		german: 'geschieden'
	},
	{
		russian: 'женат, замужем',
		german: 'verheiratet'
	},
	{
		russian: 'вместе',
		german: 'zusammen'
	},
	{
		russian: 'но',
		german: 'aber'
	},
	{
		russian: 'один, одинокий',
		german: 'allein'
	},
	{
		russian: 'неправильный, неправильно',
		german: 'falsch'
	},
	{
		russian: 'правильный, правильно',
		german: 'richtig'
	},
	{
		russian: 'что?',
		german: 'was?'
	},
	{
		russian: 'на, в, по',
		german: 'auf'
	},
	{
		russian: 'всегда',
		german: 'immer'
	},
	{
		russian: 'уже',
		german: 'schon'
	},
	{
		russian: 'сейчас',
		german: 'jetzt'
	},
	{
		russian: 'безработный',
		german: 'arbeitlos'
	},
	{
		russian: 'в данный момент',
		german: 'zur Zeit'
	},
	{
		russian: 'потому что, так как',
		german: 'weil'
	},
	{
		russian: 'ее',
		german: 'ihr, ihre'
	},
	{
		russian: 'его',
		german: 'sein, seine'
	},
	{
		russian: 'какой, какая, какие, который',
		german: 'welche'
	},
	{
		russian: 'нет (существительное)',
		german: 'kein'
	},
	{
		russian: 'не, нет, ни',
		german: 'nicht'
	},
	{
		russian: 'в',
		german: 'in'
	},
	{
		russian: 'у, возле, для',
		german: 'bei'
	},
	{
		russian: 'холостой',
		german: 'ledig'
	},
	{
		russian: 'готовый, готово',
		german: 'fertig'
	},
	{
		russian: 'как, в качестве',
		german: 'als'
	},
	{
		russian: 'твой, твоя',
		german: 'dein, deine'
	},
	{
		russian: 'мой, моя',
		german: 'mein, meine'
	},
	{
		russian: 'здесь',
		german: 'hier'
	},
	{
		russian: 'или',
		german: 'oder'
	},
	{
		russian: 'точно',
		german: 'genau'
	},
	{
		russian: 'больше',
		german: 'mehr'
	},
	{
		russian: 'сегодня',
		german: 'heute'
	},
	{
		russian: 'вчера',
		german: 'gestern'
	},
	{
		russian: 'завтра',
		german: 'morgen'
	},
	{
		russian: 'назад, обратно',
		german: 'zurück'
	},
	{
		russian: 'до, пока',
		german: 'bis'
	},
	{
		russian: 'солнечный',
		german: 'sonnig'
	},
	{
		russian: 'старый, взрослый',
		german: 'alt'
	},
	{
		russian: 'молодой',
		german: 'jung'
	},
	{
		russian: 'немецкий',
		german: 'Deutsch'
	},
	{
		russian: 'французский',
		german: 'Französisch'
	},
	{
		russian: 'итальянский',
		german: 'Italienisch'
	},
	{
		russian: 'испанский',
		german: 'Spanisch'
	},
	{
		russian: 'английский',
		german: 'Englisch'
	},
	{
		russian: 'русский',
		german: 'Russisch'
	},
	{
		russian: 'финский',
		german: 'Finnisch'
	},
	{
		russian: 'нидерландский',
		german: 'Niederländisch'
	},
	{
		russian: 'чешский',
		german: 'Tschechisch'
	},
	{
		russian: 'Венгрия',
		german: 'Ungarn'
	},
	{
		russian: 'немного',
		german: 'bisschen'
	},
	{
		russian: 'как минимум',
		german: 'mindestens'
	},
	{
		russian: 'облачный',
		german: 'wolkig'
	},
	{
		russian: 'дождливый',
		german: 'regnerisch'
	},
	{
		russian: 'мужской род',
		german: 'maskulin'
	},
	{
		russian: 'женский род',
		german: 'feminin'
	},
	{
		russian: 'средний род',
		german: 'neutrum'
	},
	{
		russian: 'хороший',
		german: 'gut'
	},
	{
		russian: 'плохой',
		german: 'schlecht'
	},
	{
		russian: 'большой',
		german: 'groß'
	},
	{
		russian: 'маленький',
		german: 'klein'
	},
	{
		russian: 'дорогой',
		german: 'teuer'
	},
	{
		russian: 'дешевый',
		german: 'billig'
	},
	{
		russian: 'выгодный',
		german: 'günstig'
	},
	{
		russian: 'действительно, в самом деле',
		german: 'wirklich'
	},
	{
		russian: 'уродливый',
		german: 'hässlich'
	},
	{
		russian: 'длинный',
		german: 'lang'
	},
	{
		russian: 'хороший, красивый',
		german: 'schön'
	},
	{
		russian: 'легкий, простой',
		german: 'leicht'
	},
	{
		russian: 'короткий',
		german: 'kurz'
	},
	{
		russian: 'сложный, трудный',
		german: 'schwer'
	},
	{
		russian: 'только, лишь',
		german: 'nur'
	},
	{
		russian: 'круглый, округлый',
		german: 'rund'
	},
	{
		russian: 'угловатый',
		german: 'eckig'
	},
	{
		russian: 'черный',
		german: 'schwarz'
	},
	{
		russian: 'красный',
		german: 'rot'
	},
	{
		russian: 'желтый',
		german: 'gelb'
	},
	{
		russian: 'оранжевый',
		german: 'orange'
	},
	{
		russian: 'синий',
		german: 'blau'
	},
	{
		russian: 'зеленый',
		german: 'grün'
	},
	{
		russian: 'коричневый',
		german: 'braun'
	},
	{
		russian: 'белый',
		german: 'weiß'
	},
	{
		russian: 'пустой',
		german: 'leer'
	},
	{
		russian: 'узкий, тонкий',
		german: 'schmal'
	},
	{
		russian: 'наполовину',
		german: 'halb'
	},
	{
		russian: 'полный',
		german: 'voll'
	},
	{
		russian: 'важный',
		german: 'wichtig'
	},
	{
		russian: 'новый',
		german: 'neu'
	},
	{
		russian: 'еще раз',
		german: 'noch einmal'
	},
	{
		russian: 'каждый',
		german: 'jeder'
	},
	{
		russian: 'пожалуйста',
		german: 'bitte'
	},
	{
		russian: 'о чем?',
		german: 'worüber?'
	},
	{
		russian: 'кого? чей?',
		german: 'wessen?'
	},
	{
		russian: 'кому? чему?',
		german: 'wem?'
	},
	{
		russian: 'кого? что?',
		german: 'wen?'
	},
	{
		russian: 'похожий',
		german: 'ähnlich'
	},
	{
		russian: 'когда?',
		german: 'wann?'
	},
	{
		russian: 'красивый (человек)',
		german: 'hübsch'
	},
	{
		russian: 'симпатичный',
		german: 'sympathisch'
	},
	{
		russian: 'клево',
		german: 'toll'
	},
	{
		russian: 'вообще не (нет)',
		german: 'gar nicht'
	},
	{
		russian: 'никогда',
		german: 'nie'
	},
	{
		russian: 'почти никогда',
		german: 'fast nie'
	},
	{
		russian: 'иногда',
		german: 'manchmal'
	},
	{
		russian: 'довольно часто',
		german: 'oft'
	},
	{
		russian: 'наверно, возможно',
		german: 'vielleicht'
	},
	{
		russian: 'до',
		german: 'vor'
	},
	{
		russian: 'после',
		german: 'nach'
	},
	{
		russian: 'комфортный',
		german: 'komfortabel'
	},
	{
		russian: 'приятный',
		german: 'angenehm'
	},
	{
		russian: 'к сожалению',
		german: 'leider'
	},
	{
		russian: 'скоро',
		german: 'bald'
	},
	{
		russian: 'особенно',
		german: 'besonders'
	},
	{
		russian: 'вежливо',
		german: 'höflich'
	},
	{
		russian: 'невежливо',
		german: 'unhöflich'
	},
	{
		russian: 'что-нибудь',
		german: 'etwas'
	},
	{
		russian: 'вкусно',
		german: 'lecker'
	},
	{
        russian: 'вам тоже (в ответ) (2 синонима)',
        german: 'gleichfalls, ebenfalls'
    },
    {
        russian: 'медленно',
        german: 'langsam'
    },
    {
        russian: 'громко',
        german: 'laut'
    },
    {
        russian: 'быстро',
        german: 'schnell'
    },
    {
        russian: 'тихо',
        german: 'leis'
    },
    {
        russian: 'совсем, вполне',
        german: 'ganz'
    },
    {
        russian: 'добрый, милый',
        german: 'nett'
    },
    {
        russian: 'прибираться',
        german: 'räumen'
    },
    {
        russian: 'скучно',
        german: 'langweilig'
    },
    {
        russian: 'мало',
        german: 'wenig'
    },
    {
        russian: 'там',
        german: 'dort'
    },
    {
        russian: 'прочь',
        german: 'weg'
    },
    {
		russian: 'происходить',
		german: 'passieren'
	},
	{
		russian: 'свежий',
		german: 'frisch'
	},
	{
		russian: 'хрустящий',
		german: 'knackig'
	},
	{
		russian: 'в самом деле (2)',
		german: 'eigentlich'
	},
	{
		russian: 'чистый',
		german: 'sauber'
	},
	{
		russian: 'кислый',
		german: 'sauer'
	},
	{
		russian: 'некоторый (some)',
		german: 'einige'
	},
	{
		russian: 'в дополнение к этому',
		german: 'außerdem'
	},
	{
		russian: 'пунктуальный',
		german: 'pünktlich'
	},
	{
		russian: 'стройный',
		german: 'schlank'
	},
	{
		russian: 'просто, простой',
		german: 'einfach'
	},
	{
		russian: 'грандиозный, большой',
		german: 'großartig'
	},
	{
		russian: 'немедленно, тотчас',
		german: 'sofort'
	},
	{
		russian: 'вдруг, внезапно',
		german: 'plötzlich'
	},
	{
		russian: 'настоящий, подлинный',
		german: 'echter'
	},
	{
		russian: 'редкий',
		german: 'selten'
	},
	{
		russian: '= most',
		german: 'meist'
	},
	{
		russian: 'выше, наверху',
		german: 'oben'
	},
	{
		russian: 'далекий, далеко',
		german: 'weit'
	},
	{
		russian: 'чтобы',
		german: 'damit'
	},
	{
		russian: 'никто',
		german: 'niemand'
	},
	{
		russian: 'наслаждаться',
		german: 'genießen'
	},
	{
		russian: 'беременная',
		german: 'schwanger'
	},
	{
		russian: 'возможно',
		german: 'möglich'
	},
	{
		russian: 'наконец-то, в конце концов',
		german: 'endlich'
	},
	{
		russian: 'бледный',
		german: 'blass'
	},
	{
		russian: 'надежный, верный',
		german: 'zuverlässig'
	},
	{
		russian: 'даже',
		german: 'sogar'
	},
	{
		russian: 'кто-то, кто-нибудь',
		german: 'jemand'
	},
	{
		russian: '= hopefully',
		german: 'hoffentlich'
	},
	{
		russian: 'в середине, в центре',
		german: 'mitten'
	},
	{
		russian: 'опасный',
		german: 'gefährlich'
	},
	{
		russian: 'бесцельно, бесцельный',
		german: 'ziellos'
	},
	{
		russian: 'грустный',
		german: 'traurig'
	},
	{
		russian: 'ужасно, ужасный',
		german: 'schreklich'
	},
	{
		russian: 'взволнованно, нервно, судорожно',
		german: 'aufgeregt'
	},
	{
		russian: 'б/у',
		german: 'gebraucht'
	},
	{
		russian: 'пытаться, пробовать',
		german: 'versuchen'
	},
	{
		russian: 'торопливо, поспешно',
		german: 'eilig'
	},
	{
		russian: 'жестко, крепко',
		german: 'fest'
	},
	{
		russian: 'просто',
		german: 'gerade'
	},
	{
		russian: 'случайно',
		german: 'zufällig'
<<<<<<< HEAD
	}
=======
	},
	{
		russian: 'занятия (в классе)',
		german: 'der Unterricht'
	},
	{
		russian: 'пример',
		german: 'das Beispiel, Beispiele'
	},
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	// {
	// 	russian: '',
	// 	german: ''
	// },
	
>>>>>>> 13fa5f9f73ac69a12e0ccf3f4765c610769af463
];


let dictionaryIndex = 0;
let errorsCount = 0;
let completed = false;
let dictionary = null;


const main = document.getElementById('main');
const restart = document.getElementById('restart');
const init = document.getElementById('init');
const all = document.getElementById('all');
const mid = document.getElementById('mid');
const last = document.getElementById('last');
const input = document.getElementById('check');
const quetsion = document.getElementById('question');
const counter = document.getElementById('counter');
const errorsCounter = document.getElementById('errors');

restart.addEventListener('click', () => {
	init.style.display = 'flex';
	main.style.display = 'none';
})

last.addEventListener('click', () => {
	start('last');
})

mid.addEventListener('click', () => {
	start('mid');
})

all.addEventListener('click', () => {
	start('all');
})

document.addEventListener('keydown', (event) => {
	if (event.code === 'Enter') {
		event.preventDefault();
		check();
	}
})

function start(mode) {
	dictionaryIndex = 0;
	errorsCount = 0;
	completed = false;
	dictionary = null;

	switch (mode) {
		case 'all':
			dictionary = dictionaryData;

			break;
		case 'mid':
			dictionary = dictionaryData.slice(dictionaryData.length - 50, dictionaryData.length);

			break;
		case 'last':
			dictionary = dictionaryData.slice(dictionaryData.length - 100, dictionaryData.length);

			break;
		default:

			break;
	}

	shuffle(dictionary);
	updateCounters();
	quetsion.innerHTML = dictionary[0].russian;

	init.style.display = 'none';
	main.style.display = 'flex';
}

function updateCounters() {
	counter.innerHTML = `${dictionaryIndex}/${dictionary.length}`;
	errorsCounter.innerHTML = `${errorsCount}`;
}

function check() {
	const value = input.value;

	if (!Boolean(value) || completed) {
		return;
	}

	if (value !== dictionary[dictionaryIndex].german) {
		errorsCount++;
		updateCounters();
		alert('Неправильно! Правильный вариант: ' + dictionary[dictionaryIndex].german);

		return;
	}

	dictionaryIndex++;

	updateCounters();

	if (dictionaryIndex >= dictionary.length) {
		alert('Все!');
		completed = true;

		return;
	}

	quetsion.innerHTML = dictionary[dictionaryIndex].russian;
	input.value = null;

	return
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// class Word {
// 	single = null;
// 	multiple = null;
// 	type = null;
// 	fall = null;

// 	constructor(config) {

// 	}
// }