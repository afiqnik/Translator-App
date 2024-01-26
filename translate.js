const translations = {
  "malay" : {
    "hello" : "Hai",
    "world" : "Dunia",
    "welcome" : "Selamat Datang",
    "goodbye" : "Selamat Tinggal",
    "thank you" : "Terima Kasih"
  },
};

export function translate(language, inputText) {
  return translations[language][inputText];
}
