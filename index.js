let info1 = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
let info2 = ["smart", "able", "absent-minded", "agile", "amazing", "amusing", "apathetic", "artificial", "attentive", "awful", "adventurous", "agreeable", "analytical"];
let info3 = ["Confucius", "Aristotle", "Plato", "Socrates", "David Hume", "Rene Descartes", "Wilhelm Hegel", "Immanuel Kant", "Friedrich Nietzsche", "Epicurus", "Laozi", "Voltaire", "Karl Marx", "Jean-Jacques Rousseau"];

let randomNumber = (Array) => Math.floor(Math.random() * Array.length)
let randomInfo1 = info1[randomNumber(info1)];
let randomInfo2 = info2[randomNumber(info2)];
let randomInfo3 = info3[randomNumber(info3)];

let displayMessage = `${randomInfo3} says that if you're a ${randomInfo1}, then you're probably ${randomInfo2}`

