// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function( $ )
	{
	
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	4500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			}
		
		// Listeners
		$('.sticky').ready(function()
			{
			// If 'autoclose' is enabled, set a timer to close the sticky
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
			});
		// Closing a sticky
		$('.sticky-close').click(function()
			{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var UserName = ["con meo","ALS» ßvt Khô Máu","ALS»Trùm ßos Tóp","8Plus Back chien","Garena cccccc","dinh menh £eoTop","XI solo di","garena oc cko","ŠV» Vẫn Số 1","EL 11m Penlaty","£ïöñ   Văn»«Tạo","ÇG37  VüaVòngCấm","Prïsön «Naruta»","Lion Tia Sang 74","bgfchg","Waker","dsahdasjkdas","»united« DucLoc","BALIHAITO","HOoZy","THANHTAO0506","DENMEOTADUOC","SÂULƯỜI","GIANG2017LC","TinhSauThienThu","Khánh  MaxT","Trãï½Þü½ReüŠ","sukem2110","NgocTraj91","damphuong2","caidet111111","Xin Em WL","» ÑLG· Šnipërs «","Bắc Kiều Phong","Harlley","KinhKhung102","stinglz","Ohhhq","CSvip1","CaliTrlolz8","» Žeus Perirus","CSvip1","JannaMechanics","WTFbot","garandet","PakerXI","300K 1 Em","đamezogiaoduc","BatQuy999","tranthanh1123","Di Du Di","» Highbury «","Nupa Kachi","Zbuum","TinhTang004","Ngokinh1223","LemonBoy","Monkey","xekoxe1","Cong Viet","AFC KonTum","HupNheEm","kirito2","Toansida1","ip body","dauxanh10","HoangDeDo","3VN Lucky","LongCat4","anh ju em","Ko Can Thiet","Durex Huy Bùi","redbox111","ThánhBos VănTạo","id Bramen","LzLamCko","CT GLXH12345","C9Hai","FunFrock","CLGLourlo","sukem2020","cunphat","khanhkhungvcl","fdasbkjdjbsad","Isuyu","CLGDandyLite","ProG ProG","»HFC« Than gio","lalala11112","»ProG«CCCC","baocaosu11112","Ác Ma Bên Em","Hiếu Cris KTK","»ProG«¶ìñhẢø","CatTeam GLXH","TaoKoSoDauNhe","WB Giao Gịch","»ProG«     Šm£","RyanChoi","ProG¯Great Again","»ProG« S2 Trinh","beophied","» Perkz «","C9SoIo","Thợ SửaỐngNước","Cty thien duong","congchanhidol","Khong Phai","HackAcc100","Không Hơn Thua","Ahihi107","galatao1233","bembem2322","CFVN152","123lalala11","bebebe12111","kaka989866","C9LemonNation","maplestreet8","thangcaloc12","hatamor","popo1222","Jerk Lewis","KŠtar ÇhiPu","HãyLàMộtKỷNiệm","metvaicc","coccoc98","banvatoi98","Entry Cuối Cùng","hhaydoiday","playmkngsupport","« ŠR » Šorylove","Ác Ma Bên Em","gian ho","»Physicx«","»Žeus","toanlagame","huonghana1","KyMaxOcCko","toan1888","«Highbury»","sinhoccko","VTCmuonnam","Lam Tac","duongtoan2112","xuxu121212","HoangDeToi","toan1005","gagaga1221","Hên Quá Mà","nhanvsqua","Robbey007","Văn Tạo Tái Xuất","VN Nói Là Làm","SupperGameNet","»Dragon« I am Ý","Thấy Là Né","Muốn £ên Tóp 10","»HFC« Diệu Anh","vayprao123","ÇG5 Kiatisak¹","asdasdnmasbdasm","»ProG« Suka Suka","GoldStars","vantaogaqua","The »Lion«King","»ProG« TíChuột","Thái Dương","KG VanHung","is alo id 69 is","Tý Ðại Ca","½«Hoàï Thüöñg»½","MÈØ DÄi CÄ IS","TỳnhSầuThiênThu","Quyết Chiu Hp","IS GaCaoLanh","Fan DuongLe Idol","Đánh Đổi Tất Cả","TìnhSầuThiênThu","tohutieu668","Khánh MaxT Ơi","is69 cr7","K¡ngT¡ênS¡nh","s2torres9","AnhCan LionKing","Khánh MaxT Đây","Germany »Kid«","Sâu¦Hot","»United« King","ProG Tí Chuôt jr","Frostalicious","¯ Nghệ Sĩ ¯","somtime1","69 LQNG  GA IS","ProG »Diệu»«Anh«","ProG ThuongSport","DrMu Len top","ProG Xuân  Thinh","nghiaql94","ProG ProGmaer","ProG Than Toc","kenynguyen2109","ethantus2012","MasterVanTao","HLVHuykaka","S7VEN14","NANGCAPXITCMNR","super_thaisutu","Fastandfurious88","ĐừngBuồnTorres88","DurezDLK","SATTHUTOP1","FFÇ° ßất ßại","hetgameroi01","HACKING BS THAT","Durex Quân","LiquidDominate","TheToiLaAi","Durexronando","BillyBoss","kjmluyen28","TaketheDraw","ST2g","TĩnhGia ThanhHoá","Durex ILoveYou","HUYtorres9999","5sao5sao99","len top nhe","DDABONG","Daydreamin","Nightlie","luongcongdong01","DuyPhan202394","KTKtrieukaka","DuyPhan202394","Bischu","CRBRakin","Chaox","Durex Tài Dũng","MotherDurex","DuRex Pair Play","khoa nua di","truhanzoa","You Die Soon","Ngô Kinh","ĐừngBuồnTorres3","KTKtrieukaka","Durex Special©","tuanhenryno1","taolacongacon","TiensiNoAkuma","phuongsaigon2015","dungbuong2015","SuperMetroid","giahan133","hetluon2015","MaxDuongVinhLog","coBBz","titaVINGLOG","KEGIUPDOHIHI","MaxDuongVinhLog","KŠtar ¶Vương MU¶","AnDa","titaxi21","conanfifa3","kieuphongfifa","Alyssa","titaXI","KHINAOKHOCOTOI","Phanimal","FO3HN ZðPhy 1981","smurfsmurf","BenNguyen","rhrhdgdgsg","Linsanityy","trungaru","ELNinoNBD","FO3BD BAGGIO","zotit3","«Çüöng»Båç»Çái»","giabaokd51289","UnetiHN Çu Ñhỏ","MinhThien©","Bố Mày Là Văn","HP»Huyên«","Wzric","Hoàng»Ðông Tà","GOD HoangThanh","GOD QuangVinh","GOD GiaLapXH","¯¯¶OP»¯Ñµmber ¹","¯¯¶OP»¯Ñumber ¹","FO3BD Anh Quốc","HctMike","Cam On Cuoc Song","GOD TungLinh","latebloomer","CRBFyre","FO3BD MìXàoGiòn","FO3BD Zodiac","ZoTit2","Sunieeeee","KŠtar Hải Dương","Saskio","DadeFakerPawn","KŠtar NgµyễnHøàn","HoLüöñgtëÑÐíëþ","62 ¶Hiếu¶","Fernando¸Torres","»United«ß¡ñ¬","hihi   hehe","IMbz","miqo","VoyboyCARRY","99988877765 ","KŠtar °Çaptain°","themassacre8","Ayr","FFÇ° YanT NT","FFÇ° Tổng Thống ","zaikhoaito","FFÇ° KhắcQuý","ĐừngBuồnTorres","S7VEN14","nvbyrtyrtyr65465","ljhkl8768","grf543535","damphuong2","ImHet107 ","DucAnh1012","IDxuixeo125","mntre5435","Vũ Vương","LiquidInoriTV","ikyuhi","mhgfh","XuyeniuA7 ","KatLissEverdeen","PoppersOP","hg424","KingRonalldo","hgfhf546456	","TEESEMM","Cyprincess","Quang Thịnh","urbutts","maplestreeTT","MUFCvangans","mhgfh","VeryBitter","uytu6456	","MrJuvel","hgf6456","	hjg655","hgfhfrhtr45","kjhkj7868","jhk76iuy","mbm65757","kjhk77567","ixou","Taeyawn","yeupoppy","gtfh654646","fre432424","l09iiiopip","TLIWDominate","Vsepr","ktSmurf","	lkj879789","Soredemo","ROBERTxLEE","lit157","tr4234","uhjk765756","lk8976868","SoYung","Tuoooor","Polx","Agolite","CloudWater","Delta","LAGOrbwalk","sexycan","SimonHawkes","Rohammers","NMEInnoX","ChineseJester","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","ZnipetheDog","hiitsviper","HappyBirfdizzay","Abou222","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","14h","Xpecial","CLGThink","Aiciel","oerh","butttpounder","TalkPIayLove","jordank","conwuy","MeganFoxisGG","0978362219","TallerACE","nhâtnhiquan","King ViCam","Em Lit157","SGF TheVu ","TAO LÀ LINH","BennyHung","	PhươngThếNgoc","xTc4","	William021012","Sa Tăng","binbo43","Bạch Løng Mã","DeeJayLady","BMTmareaVIP","trumcuoicaibip","BMTtikitakaVIP","TanHat","Dusty","Tôn Ngộ Không","MrDinh1990FC","Trư Bát Giới","LilBuu","Diamond","cesuna","BigolRon","xSojin","Gh3ttoWatermelon","KingofMemes","111094Jrh","bive","Yammy","FasScriptor","Docxm","GVBunnyFuFuu","Alphabetical","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","GangstaSwerve","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","kyaasenpaix3","gurminder","VwSKhoachitizer","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CLGDeftsu","XerbeK","CeIestic","RedEyeAkame","Kerpal","xFSNSaber","MakNooN","Hcore","MrGamer","zeralf","Fenixlol","Indivisible","SHOWMETHEMONEY","Adorations","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","SillyAdam","WWWWWWWWWWWWWWMW","tempname456543","FeedOn","iJesus69","OmegaB","Riftcrawl","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","RiceFox","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","Pyrr","TheCptAmerica","NtzNasty","SlowlyDriftnAway","cre4tive","LAGGoldenShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","BarbecueRibs","TitanDweevil","HeroesOfTheStorm","JRT94","RedBerrrys","Rockblood","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","MikeytheBully","7Qing","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","Nikkone","WeixiaTianshi","QQ346443922","FoxDog","Tahx","Hawk","Haruka","Scrumm","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","MonkeyDufle","M1ssBear","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Smoian","Piaget","Xiaomi","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","NhatNguyen","Nebulite","IAmTheIRS","TedStickles","LOD","CallMeExtremity","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","Manco","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","ilyTaylor","Zaineking","QualityADC","LingTong","DyrudeJstormRMX","AnObesePanda","silvermidget","CornStyle","LafalgarTaw","Zeyzal","Meowwwwwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","SerenityKitty","Contractz","WWvvWvvWvvwWwvww","BlueHole","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai","HeXrisen","CptJack","Sleepyz","HurricaneJanna","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","FreeGaming","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Sunohara","Ryzer","SpiritDog","Kazma","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","RoseByrne","Kammgefahr","VwSSandvich","TDKLouisXGeeGee","Picarus","erwinbooze","xrawrgasm","Tangularx","CSauce","Back2Nexus","SepekuAW","Chuuper","Airtom","pro711","Theifz","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","k3soju","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","Iggypop","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Karmix","Alestz","svbk","KissMeRDJ","TeaMALaoSong","drallaBnayR","CHRISTHORMANN","KnivesMillions","MahNeega","Sphinx","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","BrianTheis","ShorterACE","morippe","Meatmush","Dusey","Paperkat","Submit","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","NtzLeopard","UnKooL","Desu","Born4this","sickening","AllianceMike","Dinklebergg","YouGotFaker","FusionSin","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","AliBracamontes","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","Erurikku","ReeferChiefer420","WonderfulTea","Gamely","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","HentaiKatness69","Ayai","EREnko","Cruzerthebruzer","Connort","Anoledoran","BiggestNoob","Anangelababy007","TrojanPanda","MasterCoach","Kirmora","wswgou","NMEotterr","DragonxCharl","uJ3lly","moosebreeder","Strompest","Kurumx","Protective","LegacyofHao","DkBnet","koreas","AxelAxis","NiMaTMSiLe","Preachy","WoahItsJoe","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","Herald0fDeath","ChowPingPong","QuanNguyen","interest","Slylittlefox121","VictimOfTalent","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","CowGoesMooooo","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","LoveSick","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","Zookerz","LiShengShun","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","Hazedlol","SrsBznsBro","Spreek","Toxil","JustinJoe","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","DoctorElo","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","CatVomit","Likang45","PSiloveyou","xtsetse","ClydeBotNA","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","Astro","deDeezer","Jayms","v1anddrotate","JGLafter","UhKili","Aceyy","Zik","RiNDiN","Grandederp","KawaiiTheo","Senjogahara","Th3FooL","GusTn","TheTyrant","GoJeonPa","DJJingYun","Egotesticle","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","RockleeCtrl","Xode","QQ459680082","KittenAnya","Zakard","MARSIRELIA","WallOfText","SireSnoopy","kelppowder","Hxadecimal","onelaugh","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","suzuXIII","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","WhatisLove","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","KillerHeedonge","AsianSGpotato","whiteclaw","GATOAmyTorin","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","givesyouwiings","LoveIy","Packy","Ntzsmgyu","Susice","Dontqqnubz","mikeshiwuer","Chulss","MASTERDING","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","Foolish","jivhust1","KMadKing","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Pulzar","Windgelu","Suadero","Zulgor","Senks","cAbstracT","SwagersKing","AkameBestGirl","ThePrimaryEdict","arthasqt","Lobstery","MisterOombadu","TheFriendlyDofu","Oryziaslatipes","ugg1","Flandoor","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","MrCow","METALCHOCOB0","Dessias","LevelPerfect","midVox","Junha","Hickus","gamepiong","AirscendoSona","HellooKittie","Jesse","Rainaa","ILoveNASoloQ","Colonelk1","DeTRFZerost","Szmao","TacoKat","1tzJustVictor","HomedogPaws","DioDeSol","PeterBrown","FrannyPack","AbsoluteFridges","TheBiddler","ELMdamemitai","Old","Pavle","nathanielbee","MakiIsuzuSento","nweHuang","EvanRL","yorozu","forgivenbow","alexxisss","Cloverblood","Entities","Believe","Chiruno","Xiaobanma","BestJanna","Neko","TheEyeofHorus","IGotSunshine","Shade20","Sprusse","Imacarebear","Kenleebudouchu","LockDownExec","Chubymonkey","HunterHagen","Applum","DaoKho","MrBlackburn","beatmymeat","BestDota2Sona","chubbiercheeks","KillaKast","Betsujin","TheAmberTeahouse","BellaFlica","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Bulgogeeeee","Nerzhu1","Lovelyiris","QuantumFizzics","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Papasmuff","TheBroskie","Wadenation","Flyinpiggy","Wingsofdeathx","IamOsiris","ArtThief","LotusEdge","fwii","Kios","Shampu","Nickpappa","Yukari","RayXu","Emeraldancer","TwoPants","EnzoIX","Jacka","Plumber","Skadanton","C9TGleebglarbu","BonQuish","GrimmmmmmmReaper","SmoSmoSmo","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","RBbabbong","MASTERROSHl","dabestmelon","Potatooooooooooo","KasuganoHaru","C9BalIs","stainzoid","MrArceeSenpaiSir","sweetinnocence","Firehazerd","EpicLynx","2011","PandaCoupIe","Moelon","KingKenneth","Skinathonian","FelixCC","snowmine","Acme","QmoneyAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","Promitio","DeTRFMoyashi","Hordstyle","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","0Sleepless","pr0llylol","AxelsFinalFlame","DrSeussGRINCH","ZENPhooka","oMizu","HamSammiches","Pcboy","RamenWithCheese","Yook","Dafreakz","Winno","XxWarDoomxX","LifelessEyes","UrekMazin0","FrenchLady","Pillowesque","GodOfZed","D3cimat3r","broIy","1stTimeDraven","Exxpression","godofcontrol","nokappazone","Shoopufff","IlIIlIIIlIIIIIII","Fragnat1c","Abidius","irvintaype","YellOwish","japanman","CaristinnQT","LeithaI","Kitzuo","Akatsuki","ROBERTZEBRONZE","aenba","Arcenius","Torgun","Ryden7","Entus","CutestNeo","MonkeyDx","Xerosenkio","JHHoon","DeTFMCeros","Rakinas","MetaRhyperior","MegaMilkGG","EmilyVanCamp","SecretofMana","Snidstrat","SJAero","Mixture","Teaz89","ArizonaGreenTea","AKASIeepingDAWG","sh4pa","Hanjaro","BestFelixNA","Dragles","TummyTuck","sciberbia","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","BlueRainn","lilgrim","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD"];
	var CountryFlags = ["//i.imgur.com/PKDzUWS.png","//i.imgur.com/PKDzUWS.png"];
	var Platforms =["<span class='platfrom-append'>trên</span> MÁY TÍNH","<span class='platfrom-append'>trên</span> IOS","<span class='platfrom-append'>on</span> ANDROID","<span class='platfrom-append'>on</span> ĐIỆN THOẠI","<span class='platfrom-append'>on</span> ANDROID"];	
	var FUTresources =["<span class='activity-futcoins'>1.000.000 EP</span><span class='activity-futpoints'>50000 CASH</span>","<span class='activity-futcoins'>800.000 EP</span><span class='activity-futpoints'>40.000 CASH</span>","<span class='activity-futcoins'>600.000 EP</span><span class='activity-futpoints'>100.000 CASH</span>","<span class='activity-futcoins'>200.000 EP</span><span class='activity-futpoints'>100.000 CASH</span>","<span class='activity-futcoins'>800.000 EP</span><span class='activity-futpoints'>20.000 CASH</span>", "<span class='activity-futcoins'>600.000 EP</span><span class='activity-futpoints'>60.000 CASH</span>", "<span class='activity-futcoins'>1.000.000 EP</span><span class='activity-futpoints'>100.000 CASH</span>", "<span class='activity-futcoins'>400.000 EP</span><span class='activity-futpoints'>80.000 CASH</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 2500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 6500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	
	function random_username()
	{
	 return UserName[rng(0,UserName['length']-1)];
	}
	function random_platform()
	{
	 return Platforms[rng(0,Platforms['length']-1)];
	}
	function random_flag()
	{
	 return CountryFlags[rng(0,CountryFlags['length']-1)];
	}
	function random_futresource()
	{
	 return FUTresources[rng(0,FUTresources['length']-1)];
	}
}); 
