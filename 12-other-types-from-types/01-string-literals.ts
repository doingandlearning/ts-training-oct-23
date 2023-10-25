type World = "world";
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";
type Greeting = Hello | Goodbye;

type Salutation = `${Greeting} ${World}`;

type domains = "sport" | "iplayer" | "news";

enum domainList {
	"sport" = "sport",
	"iplayer" = "iplayer",
	"news" = "news"
}
type allowed_urls = `https://bbc.co.uk/${domainList}`;

type lang = "en" | "ar" | "fr" | "gr";
type languageUrls = `https://${lang}.bbc.co.uk`;

enum LanguageUrls {
	`https://en.bbc.co.uk`
}