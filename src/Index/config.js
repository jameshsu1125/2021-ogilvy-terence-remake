import { createContext } from 'react';

export const Context = createContext();

export const POSITIONS_STATE = {
	account: '業務',
	strategy: '策略',
	creative: '創意',
	pr: '公關',
	digital: '數位體驗',
};

export const defaultContext = {
	position: POSITIONS_STATE.account,
};

export const POSITION_DESCRIPTION = {
	[POSITIONS_STATE.account]: [
		'「你以為的業務，很不一樣。」',
		'代理商的業務不僅止於溝通橋樑，是品牌一條龍服務的關鍵領頭羊、是整合一切瑣碎與創意專案管理製作人、更是行銷最前線的顧問。',
		'任何科系都能在此起步、找到最適合你的戰鬥位置，行得瀟灑、有你的專屬風格，才夠真本事。',
	],
	[POSITIONS_STATE.strategy]: [
		'策略是連結生意與創意的重要橋樑。',
		'透過觀察外在行為、分析內在動機，精準找出核心課題，',
		'憑依著獨特洞察，指引專案往正確的方向前進；',
		'並讓創意人員在天馬行空之餘，能真正發揮動人的影響力。',
	],
	[POSITIONS_STATE.creative]: [
		'能把尋常之事，說出一朵不一樣的花。',
		'這時代的動人故事不只是說書人自說自話，更是和聽故事的人同理、共享、交換價值觀與體驗。',
		'做創意，就要：',
		'能說，能做，能觸動。',
	],
	[POSITIONS_STATE.pr]: [
		'公關，公共關係，公關不只關注消費者，更涵蓋品牌與公眾上各種利害關係人（Stakeholder）的「全面」關係。如： 外部-媒體、非營利組織、政府單位；內部：員工。',
		'公關需善於挖掘利害關係人之洞察，發展有感議題，透過具影響力的議題內容，藉由具影響力的接觸媒介與形式，創造別人幫你好話的機會，建立企業聲譽、讓品牌真正發揮影響力。',
	],
	[POSITIONS_STATE.digital]: [
		'消費者體驗是指顧客與品牌的產品和服務互動，所產⽣的感知和感受的總和，跨越了品牌與顧客之間的整個交互旅程和⽣命週期。',
		'顧客體驗不僅包含⼈類理性的思考，更融合了複雜的情感、感覺和情緒在內。我們透過數據、科技和創意的運用融合，為品牌策劃並落實具個人化的顧客體驗。',
		'團隊組成包含數據分析師、數位體驗策略、用戶體驗設計、顧客關係管理與 SCRM、績效媒體策劃執行、以及 Martech 開發團隊人員。',
	],
};

export const POSITION_TRANING = {
	[POSITIONS_STATE.account]: [
		'全面體驗專案從無到有的過程',
		'了解商業課題產出創意解決方案的',
		'背後思考',
		'訓練溝通與說服策略技巧',
		'資訊的梳理與歸納',
	],
	[POSITIONS_STATE.strategy]: [
		'品牌商業課題界定與解決',
		'奧美獨家策略心法與思維',
		'系統性思考、表達與呈現',
	],
	[POSITIONS_STATE.creative]: [
		'參與創意簡報到發想執行',
		'從說得精準，到說得精妙',
		'鍛鍊垂直與水平思考整合',
		'提升創意鑑賞能力與標準',
	],
	[POSITIONS_STATE.pr]: [
		'參與公關提案，從資料蒐集、發想到執行',
		'建立溝通應對技巧與標準',
		'參與協助媒體或 KOL 連繫、活動執行',
	],
	[POSITIONS_STATE.digital]: [
		'藉由小數據和大數據的挖掘分析，產生洞察與觀點',
		'應用數據驅動的行銷方法和工具，幫助規劃品牌獲客和留客的行銷活動',
		'以顧客為核心，設計個人化的品牌體驗、打造創新數位平台或服務',
		'（包含UX/UI設計、忠誠度禮遇計畫、數位平台上的服務功能...等）',
		'了解如何從零開始打造有意義的數位互動平台，包含的項目管理與溝通協調',
	],
};

export const POSITION_ABILITY = {
	[POSITIONS_STATE.account]: ['溝通協調與各單位專案協作', '創意刺激與案例研究', '專案庶務執行力'],
	[POSITIONS_STATE.strategy]: [
		'協助蒐整消費者行為與市場趨勢',
		'從行為觀察聚焦提煉出人性洞察',
		'協助完成理性與感性兼備的提案',
	],
	[POSITIONS_STATE.creative]: ['積極參與表達與討論', '懂得團隊分工與合作', '積極收集與分析案例'],
	[POSITIONS_STATE.pr]: [
		'積極參與表達與討論',
		'了解團隊分工與合作',
		'積極收集與分析案例',
		'成效分析與報告撰寫',
	],
	[POSITIONS_STATE.digital]: [
		'協助利用數據工具蒐整數據並產生觀點',
		'參與品牌體驗策略研究和用戶體驗流程設計',
		'協助控管數位技術相關專案之流程和時程，確保交付',
		'溝通協調新行銷技術應用，包含與開發團隊的溝通',
		'支援 CRM/SCRM 的常規運營與報告',
		'協助 Martech 系統的操作',
	],
};

export const POSITION_TRAIT = {
	[POSITIONS_STATE.account]: [
		'對人性、事物充滿好奇心',
		'喜歡統籌、具備強大行動力',
		'樂於與人交流、溝通',
	],
	[POSITIONS_STATE.strategy]: [
		'對世間萬物有自己的見解',
		'好奇大眾行為背後的原因',
		'享受有邏輯、系統的思考',
	],
	[POSITIONS_STATE.creative]: [
		'享受發想時的痛並快樂著',
		'縝密觀察與注意人心所向',
		'敢於深掘並表達與眾不同',
	],
	[POSITIONS_STATE.pr]: [
		'尊重與積極開放的態度',
		'對人事物具備同理心、好奇心',
		'享受多方協調及壓力下的成長',
	],
	[POSITIONS_STATE.digital]: [
		'對數字敏感，喜愛分析數據',
		'對數位行銷、細分人群和個人化傳播與體驗有想法',
		'對前瞻性行銷技術應用具有憧憬並躍躍欲試',
		'具有創新的解決問題思維、堅持不懈',
		'擅長團隊協作與溝通',
	],
};

export const MASTER = [
	{
		name: '呂豐餘 F.Y Lu',
		position: '集團董事總經理',
		className: 'Presentation Skill',
		speech: ['他深信好的廣告具有無比的影響力', '而且會讓世界變得更好。'],
	},
	{
		name: '曾致暐 Derrick Tseng',
		position: '董事總經理',
		className: '廣告基本要件',
		speech: ['廣告是物理的科學，心理的藝術。', '我們理性說服，感性影響。'],
	},
	{
		name: '莊若芸 Zoe Chuang',
		position: '董事總經理',
		className: 'Communication Design',
		speech: ['你的人生有兩個選擇，來過或沒來過。'],
	},
	{
		name: '龔大中 Giant Kung',
		position: '集團創意長',
		className: 'Big Idea',
		speech: ['在未竟的天空之城，', '我們說的都是那些', '非常 old fashioned 的故事。'],
	},
	{
		name: '蔣依潔 EJ Chiang',
		position: '執行創意總監暨社群總指導',
		className: '社群創意',
		speech: ['讓紅領帶陪你找到當代最有', '感染力的解決方案。'],
	},
	{
		name: '郭育滋 Veronica Kuo',
		position: '集團數位長',
		className: '顧客體驗',
		speech: [
			'每一個偉大而成功的品牌，絕不只是',
			'形象包裝得夠好而已，',
			'而是懂得以消費者為中心，',
			'不斷地因時制宜，提供令人滿意',
			'甚至充滿驚喜的個人化顧客體驗。',
		],
	},
	{
		name: '葉明桂 Mingguay Yeh',
		position: '集團首席策略顧問',
		className: '策略原理',
		speech: ['對創意不夠熱情的，', '在我們這行待不久。', '但在這行卻可以學到很多。'],
	},
	{
		name: '施淑芳 Amy Shih',
		position: '集團策略長',
		className: '策略跟你想的一樣嗎',
		speech: [
			'策略，即是解題，',
			'充滿創意、同時有效地解題。',
			'無論是乘船、飛機、抑或火箭，',
			'只要能達彼方，就不只萬法千方。',
		],
	},
	{
		name: '張裕昌 Adonis Chang',
		position: '總經理',
		className: '公關危機',
		speech: ['公關人要自信，', '優雅並從容的影響世界。'],
	},
];
