const translations = {
	es: {
		pageTitle: "El caso del Manchester City: cargos y proceso | Periódico Deportivo",
		languageLabel: "Idioma",
		switchToDark: "Activar modo oscuro",
		switchToLight: "Activar modo claro",
		category: "Fútbol internacional / Finanzas",
		headline: "El caso del Manchester City: qué significan los cargos de la Premier League",
		subheadline: "La liga acusa al club de múltiples infracciones financieras entre 2009 y 2018. Estas son las claves del proceso y lo que se sabe hasta ahora.",
		byline: "Por Bruno Ruiz",
		publishDate: "5 de octubre de 2026",
		heroAlt: "Estadio Etihad, sede del Manchester City",
		heroCaption: "El caso reúne acusaciones relativas a varias temporadas de la Premier League.",
		investigationTitle: "Cómo empezó la investigación",
		investigationCopy: "En febrero de 2023, la Premier League remitió el caso del Manchester City a una comisión independiente. Las acusaciones se refieren a las temporadas 2009/10 a 2017/18 y surgieron tras una investigación de cuatro años sobre las finanzas del club.",
		cityAlt: "Estadio e instalaciones del Manchester City",
		cityCaption: "El periodo investigado comprende nueve temporadas, de 2009/10 a 2017/18.",
		claimsCopy: "Entre los cargos figuran presuntas infracciones relacionadas con la información financiera, los ingresos por patrocinio y la declaración de pagos a entrenadores y jugadores. Son alegaciones presentadas por la liga; no deben confundirse con hechos probados.",
		cooperationCopy: "La Premier League también acusa al club de no cooperar plenamente con su investigación. El Manchester City ha rechazado las acusaciones y ha declarado que cuenta con pruebas para respaldar su posición.",
		chargesTitle: "Qué está en discusión",
		chargesCopy: "El expediente incluye alegaciones sobre la exactitud de la información financiera, los ingresos comerciales, la remuneración de entrenadores y jugadores, el cumplimiento de reglas de la UEFA y las normas de sostenibilidad financiera de la Premier League. La comisión independiente debe evaluar las pruebas y los argumentos de ambas partes.",
		trophiesAlt: "Trofeos del Manchester City",
		trophiesCaption: "Los éxitos deportivos del club coinciden con parte del periodo investigado.",
		managerAlt: "Pep Guardiola, entrenador del Manchester City",
		managerCaption: "Las acusaciones también abarcan información sobre remuneraciones.",
		updateLabel: "Actualización",
		updateTitle: "La Premier League publicó una nota sobre una apelación",
		updateCopy: "El 2 de octubre de 2026, la liga publicó un comunicado titulado «Manchester City FC appeal decision of independent Commission». Consulta el comunicado para conocer los detalles; este artículo no presupone el resultado de la apelación.",
		updateLink: "Leer el comunicado del 2 de octubre de 2026",
		sidebarLabel: "Fuentes y contexto",
		courtAlt: "Mazo de juez, símbolo de un proceso legal",
		courtCaption: "El caso se tramita ante una comisión independiente.",
		sourcesTitle: "Fuentes oficiales",
		sourcesIntro: "Consulta los documentos de las instituciones implicadas:",
		sourcePremier: "Comunicado inicial de la Premier League (2023)",
		sourceCity: "Respuesta del Manchester City",
		sourceCas: "Tribunal de Arbitraje Deportivo (TAS / CAS)",
		footerCopy: "© 2026 Periódico Deportivo Digital. Información basada en fuentes públicas."
	},
	en: {
		pageTitle: "The Manchester City case: charges and process | Sports Daily",
		languageLabel: "Language",
		switchToDark: "Switch to dark mode",
		switchToLight: "Switch to light mode",
		category: "International football / Finance",
		headline: "The Manchester City case: what the Premier League charges mean",
		subheadline: "The league alleges multiple financial rule breaches between 2009 and 2018. Here are the key points in the case and what is known so far.",
		byline: "By Bruno Ruiz",
		publishDate: "October 5, 2026",
		heroAlt: "Etihad Stadium, home of Manchester City",
		heroCaption: "The case concerns allegations across several Premier League seasons.",
		investigationTitle: "How the investigation began",
		investigationCopy: "In February 2023, the Premier League referred Manchester City to an independent commission. The allegations concern the 2009/10 to 2017/18 seasons and followed a four-year investigation into the club’s finances.",
		cityAlt: "Manchester City stadium and facilities",
		cityCaption: "The period under investigation covers nine seasons, from 2009/10 to 2017/18.",
		claimsCopy: "The charges include alleged breaches concerning financial information, sponsorship revenue, and the reporting of payments to managers and players. These are allegations brought by the league and should not be confused with proven facts.",
		cooperationCopy: "The Premier League also alleges that the club did not fully cooperate with its investigation. Manchester City has rejected the allegations and said it has evidence to support its position.",
		chargesTitle: "What is being examined",
		chargesCopy: "The case includes allegations about the accuracy of financial information, commercial revenue, payments to managers and players, compliance with UEFA rules, and the Premier League’s financial sustainability rules. The independent commission is responsible for assessing the evidence and arguments from both sides.",
		trophiesAlt: "Manchester City trophies",
		trophiesCaption: "The club’s sporting success overlaps with part of the period under investigation.",
		managerAlt: "Pep Guardiola, Manchester City manager",
		managerCaption: "The allegations also cover information about remuneration.",
		updateLabel: "Update",
		updateTitle: "Premier League publishes statement about an appeal",
		updateCopy: "On October 2, 2026, the league published a statement titled “Manchester City FC appeal decision of independent Commission.” Consult the statement for details; this article does not assume the appeal’s outcome.",
		updateLink: "Read the October 2, 2026 statement",
		sidebarLabel: "Sources and context",
		courtAlt: "Judge’s gavel, a symbol of legal proceedings",
		courtCaption: "The case is being heard by an independent commission.",
		sourcesTitle: "Official sources",
		sourcesIntro: "Consult documents from the institutions involved:",
		sourcePremier: "Premier League’s initial statement (2023)",
		sourceCity: "Manchester City response",
		sourceCas: "Court of Arbitration for Sport (CAS)",
		footerCopy: "© 2026 Sports Daily. Information based on publicly available sources."
	}
};

const languageSelect = document.getElementById("language-select");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function readPreference(key, fallback) {
	try {
		return localStorage.getItem(key) || fallback;
	} catch {
		return fallback;
	}
}

function savePreference(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {
		return;
	}
}

function updateThemeLabel() {
	const copy = translations[languageSelect.value] || translations.es;
	const isDark = document.documentElement.dataset.theme === "dark";
	const label = isDark ? copy.switchToLight : copy.switchToDark;
	themeToggle.setAttribute("aria-label", label);
	themeToggle.title = label;
	themeIcon.textContent = isDark ? "☀" : "◐";
}

function setLanguage(language) {
	const selectedLanguage = translations[language] ? language : "es";
	const copy = translations[selectedLanguage];
	document.documentElement.lang = selectedLanguage;
	document.title = copy.pageTitle;
	languageSelect.value = selectedLanguage;

	document.querySelectorAll("[data-i18n]").forEach((element) => {
		element.textContent = copy[element.dataset.i18n];
	});
	document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
		element.alt = copy[element.dataset.i18nAlt];
	});
	document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
		element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
	});
	languageSelect.setAttribute("aria-label", copy.languageLabel);
	updateThemeLabel();
	savePreference("article-language", selectedLanguage);
}

function setTheme(theme) {
	const selectedTheme = theme === "dark" ? "dark" : "light";
	document.documentElement.dataset.theme = selectedTheme;
	updateThemeLabel();
	savePreference("article-theme", selectedTheme);
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
themeToggle.addEventListener("click", () => {
	const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
	setTheme(nextTheme);
});

setLanguage(readPreference("article-language", "es"));
setTheme(readPreference("article-theme", "light"));
