let info1 = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
let info2 = ["smart", "able", "absent-minded", "agile", "amazing", "amusing", "apathetic", "artificial", "attentive", "awful", "adventurous", "agreeable", "analytical"];
let info3 = ["Confucius", "Aristotle", "Plato", "Socrates", "David Hume", "Rene Descartes", "Wilhelm Hegel", "Immanuel Kant", "Friedrich Nietzsche", "Epicurus", "Laozi", "Voltaire", "Karl Marx", "Jean-Jacques Rousseau"];

const randomNumber = (array) => {return array[Math.floor(Math.random() * array.length)]}
let randomInfo1 = randomNumber(info1);
let randomInfo2 = randomNumber(info2);
let randomInfo3 = randomNumber(info3);

let displayMessage = `Today's piece of advice: ${randomInfo3} says that if you're a ${randomInfo1}, then you're probably ${randomInfo2}`;