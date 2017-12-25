$(document).ready(function() {
	
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 100);
	
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBar(20, $('#progressBar'));
		
	var select = $( "#futcoins-amount-wrapper" );
	var slider = $( "<div id='slider-futcoins'></div>" ).insertAfter( select ).slider({
		min: 0,
		max: 1000000,
		value: 0,
		range: "min",
		change: function(event, ui) { 
			var sliderValue = $( "#slider-futcoins" ).slider( "option", "value" );				
			$('#futcoins-amount').html(sliderValue);
			if(sliderValue == '200000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '400000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-futcoins').removeClass('btn-disabled');
			}
			else if (sliderValue == '600000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '800000') {
				progressBar(80, $('#progressBar'));
				$('#increase-futcoins').removeClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '1000000') {
				progressBar(100, $('#progressBar'));
				$('#increase-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeIn();
			}
		}        
	});	
	
	$('#increase-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue + 200000 );
	});

	$('#decrease-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue - 200000 );
	});

	function progressBarPoints(percent, $element) {
		var progressBarPointsWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarPointsWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarPoints(20, $('#progressBarPoints'));
	var selectPoints = $( "#futpoints-amount-wrapper" );
	var sliderPoints = $( "<div id='slider-futpoints'></div>" ).insertAfter( selectPoints ).slider({
		min: 0,
		max: 50000,
		value: 0,
		range: "min",
		change: function(event, ui) { 
				var sliderValuePoints = $( "#slider-futpoints" ).slider( "option", "value" );
				$('#futpoints-amount').html(sliderValuePoints);
					if(sliderValuePoints == '7000') {
						progressBarPoints(10, $('#progressBarPoints'));
						$('#decrease-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '14000') {
						progressBarPoints(20, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '21000') {
						progressBarPoints(30, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '28000') {
						progressBarPoints(40, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '35000') {
						progressBarPoints(50, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '42000') {
						progressBarPoints(60, $('#progressBarPoints'));
					}
					else if (sliderValuePoints == '49000') {
						progressBarPoints(80, $('#progressBarPoints'));
						$('#increase-futpoints').removeClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '50000') {
						progressBarPoints(100, $('#progressBarPoints'));
						$('#increase-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeIn();
					}
				}        
	});				

	$('#increase-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue + 7000 );
	});

	$('#decrease-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue - 7000 );
	});
	
	$('#first-step-button').click(function () {
		$('#account-information-wrapper').fadeIn(250);
		$('#close-account-information-wrapper').click(function () {
			$('#account-information-wrapper').fadeOut(100);
		});
	});
	
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));	

	function loading_step() {
		$('#account-information-wrapper').fadeOut(50);
		$('#resources-select-wrapper').fadeOut(500, function() {
			$('#processing-wrapper').fadeIn(500, function() {
				var $console_message_username_msg = $('#account-username').val();
				var $console_message_platform_msg = $('#account-platform').val();
				var $console_message_futcoins_msg = $('#slider-futcoins').slider("option", "value");   
				var $console_message_futpoints_msg = $('#slider-futpoints').slider("option", "value");
				var $console_message = $('.console-message');
				if ($(window).width() < 600) {
					window.scrollTo(0, $("#processing-wrapper").offset().top);
				}	
				setTimeout(function() {
					$('.starting-loading-wrapper').fadeIn();
					$console_message.text('Đang tải dữ liệu...');	
					progressBarConsole(3, $('#progressBarConsole'));			
				}, 0 );
				setTimeout(function() { 
					$console_message.text('Chuẩn bị dữ liệu...');	
					progressBarConsole(15, $('#progressBarConsole'));			
				}, 1000 );
				setTimeout(function() { 
					$console_message.text('Đang tải...');	
					progressBarConsole(18, $('#progressBarConsole'));			
				}, 1800 );
				setTimeout(function() { 
					$console_message.html("Tìm kiếm Tài khoản <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> ...");	
					progressBarConsole(22, $('#progressBarConsole'));			
				}, 3000 );
				setTimeout(function() { 
					$console_message.html("Kết nối tới Tài khoản <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> trên <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>");	
					$('.starting-loading-wrapper').fadeOut(500, function() {
						$('.console-username-wrapper').fadeIn();
						$('.console-platform-wrapper').fadeIn(500);
					});		
					progressBarConsole(26, $('#progressBarConsole'));			
				}, 5000 );
				setTimeout(function() { 
					$console_message.html("Kết nối thành công tới Tài khoản <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>");
					$('#console-username-value').text($('#account-username').val());
					$('#console-platform-value').text($('#account-platform').val());
					$('#console-success-confirmation-username').fadeIn();
					$('#console-success-confirmation-platform').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});					
					progressBarConsole(30, $('#progressBarConsole'));			
				}, 8000 );
				setTimeout(function() { 
					$console_message.html("Chuẩn bị khởi tạo tài nguyên");	
					progressBarConsole(35, $('#progressBarConsole'));			
				}, 10000 );
				setTimeout(function() { 
					$console_message.html("Đang tạo các gói gian lận EP");	
					progressBarConsole(38, $('#progressBarConsole'));			
				}, 11000 );
				setTimeout(function() { 
					$console_message.html("Đang tạo <span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> EP");
					$('.console-futcoins-wrapper').fadeIn(500, function() {
						var $console_futcoins_countto = $('#slider-futcoins').slider("option", "value");
						$('#console-futcoins-value').countTo({
							from: 0,
							to: $console_futcoins_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(42, $('#progressBarConsole'));			
				}, 12500 );
				setTimeout(function() {
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> <span class='console-message-success'>Gian lận EP thành công</span>");
					$('#console-success-confirmation-futcoins').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(55, $('#progressBarConsole'));			
				}, 16000 );
				setTimeout(function() { 
					$console_message.html("Đang tạo các gói gian lận CASH");	
					progressBarConsole(58, $('#progressBarConsole'));			
				}, 18000 );
				setTimeout(function() { 
					$console_message.html("Đang tạo <span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> CASH");
					$('.console-futpoints-wrapper').fadeIn(500, function() {
						var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
						$('#console-futpoints-value').countTo({
							from: 0,
							to: $console_futpoints_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(62, $('#progressBarConsole'));			
				}, 19500 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> <span class='console-message-success'>Gian lận CASH thành công</span>");
					$('#console-success-confirmation-futpoints').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(74, $('#progressBarConsole'));			
				}, 23000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-success'>Tất cả tài nguyên gian lận thành công</span>");	
					progressBarConsole(80, $('#progressBarConsole'));			
				}, 24900 );
				setTimeout(function() { 
					$console_message.html("Tối ưu hóa các gói được tạo ra");	
					progressBarConsole(84, $('#progressBarConsole'));			
				}, 25900 );
				setTimeout(function() { 
					$console_message.html("Dọn dẹp dấu vết gian lận");	
					progressBarConsole(90, $('#progressBarConsole'));			
				}, 27000 );
				setTimeout(function() { 
					$console_message.html("Khởi động trình xác minh con người");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 28000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-error'>Tự động xác minh thất bại</span>");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 30000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>Bắt buộc xác minh thủ công</span>");
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 32500 );
				setTimeout(function() {
					$('#human-verification').fadeIn();
					$console_message.html("Đang chờ xác minh");	
					if ($(window).width() < 600) {
						window.scrollTo(0, $("#human-verification").offset().top);
					}					
				}, 33500 );
			});
		});		
		
		
		var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
		$('#console-futpoints-value').countTo({
			from: 0,
			to: $console_futpoints_countto,
			speed: 2000,
			refreshInterval: 10,
			formatter: function (value, options) {
			  return value.toFixed(options.decimals);
			}
		});        	
    }
	
	$('#second-step-button').click(function() {
		if ($('#account-username').val() != '') {
			loading_step()
		}
		else {
			swal("Error", "Hãy nhập tên Tài khoản.", "error");
		}
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$('.f-s').fancySelect();
	
});


var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["LeSongVi", "SieuNhanMap", "KingXDiane", "ZzDuyZzNinhGiang", "Jadesecurity", "69 KT", "x Cay Ba Mù", "LBK Nobi", "VNSTARR2017", "FO3giang123456", "DC MULegend", "MU92© Lê Phương", "riventaukhua", "M® ßeañ", "BLÅCK³	", "nghialion22", "SAOo0oLUAN", "taometquaman", "vinhhuycr7", "Brave Warriors", "Kr lincoln", "VuHuyenMai", "LinkKadepgai", "TUAN", "GameMaster", "FO3BossGaming", "tommy_phuc", "Trong_Tin", "Raiden", "nguyenvuige", "nhok ac", "minhprond123", "Prosever100", "trunggaming", "Tuan123456", "thetien1975", "Bin^[Y]", "Ohhhq", "ninjalead69xxx", "Zombie", "ice", "ThanhHung", "Hoàng Trang", "Anh Tuấn 688", "Kappa Say rồi", "TùngSter", "Sún", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "Kaka.FO3", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["Hack được tối đa bao nhiêu EP thế?", "Có ai thử hack chưa?", "Nó có hoạt động không thế?", "Sao nó dễ vkl v :)) ?", "Đéo thể tin được, hack thành công và bị khóa cmn tk -.-.", "đm tao mới hack đc 100000 EP, hack tiếp có bị khóa k.", "Hack trên đt méo được các mày ạ.", "we we giúp cái xác minh đi?", "Á ĐÙ!", "VKLLLLLLLL!", "Đéo tin!", "Đéo muốn tin nhưng là sự thật", "haha", "ez vl", "víp pro", "Giờ làm gì đây", "Đụ má im hết tao thích cái web này rồi đó", "chào ae", "Có khi nào bị khóa không v?", "cái xác minh đó không dùng trên đt được à?", "Nó có miễn phí không thế?", "Chờ 5 tiếng rồi mà ohyeah sơn tùng tao vẫn chưa hack được?", "Thơm", "Đéo", "Tao biết :)))))))))", "Chính xác nó làm cho trang web này bớt nhảm, hack không được ăn chửi :v", "uk", "có thể", "Tao đéo chờ được nữa đâuuuuuu", "cái này có hack thật không vậy?", "Vote cho web.", "Ngon =)", "<message deleted>", "chốn lùa ơn mừng v", "địt =]]z", "Tao thích rồi đó", "kết bạn solo fifa không mtml ?", "FO3 Zone đã đưa tao tới đây !", "Ê địt mẹ spam con cặc?", "thằng nào làm 1 game không?", "bản cập nhật tiếp theo của fo3 là lại vứt xó thôi", "cái này làm tao tiết kiệm nhiều tiền vl", "có ai bị khóa tk chưa?", "rất mừng vì tìm ra trang web này", "ae nào có link OP mới nhất không, bị xóa mẹ rồi", "tao thề tao thấy link web này trên stream của Phụng Pyt", "đù má kinh vậy trời", "địt mẹ hài?", "hên có thằng bạn nói vào đây :)))) ngon", "cảm ơn tới chủ web", "ê xác minh xong rồi sao nữa?", "địt mẹ hack 1 lần có chút xíu tiền", "miễn phí không thế?", "bye ae", "ok cảm ơn nhiều :v", "lấy được bao nhiêu lần thế", "ấn tượng vl", "10 phút mới hack xong mà mỗi lần có chút tiền làm lz gì", "cần giúp gấp", "địt cụ", "Đóng trang web lại nếu không muốn vào tù", "web như cặc", "hack fo3 la co that", "ok hack được 200k EP và bị khóa tài khoản 6 tháng, good game vl", "hack thật dễ dàng hihi", "Ai solo không ? kết bạn nhanh đê", "ibx tao cái, facebook linhlam.77261", "mấy con gà chơi mà hack", "EA đâu ddos đi này", "hôm nay là ngày may mắn của tao :)))", "ngày mai thì không biết sao chứ hôm nay hack được cứ hack sập FO3 đi hút máu vl", "tụi mày ngu lắm hack mỗi lần ít thôi hack nhiều là bị phát hiện liền", "để tạo cái tk mới hack là biết ngay", "có hack fo4 ko?", "có tụt cash hay ep không thế?", "tao mới làm đại gia quất thằng ronaldo UL :))) mất 10 ngày ngày nào cũng vào hack mệt vc", "đậu, kiểu này fo3 sập sớm", "tao thua", "chào ae lại là tao đây :3", "có cách nào hack nhanh hơn không, mỗi lần hack mỗi lần xác minh mệt vc", "vkl, hack được thật à", "đù má xác minh mệt vãi lồn", "anh em nào lấy link auto hot key hack cho nhanh không nè", "thơm rồi hehe, chuẩn bị mua Ronaldo ul", "tao làm 10 lần rồi hack được đúng 1 lần", "tks", "tao tưởng tao mơ chớ", "EP ngon, nhưng quá ít", "lại có động lực cày lại", "từ khi có bản hack này tao đã bỏ game ;)", "cảm ơn đội ngũ dev", "cảm ơn cho ai đó làm nó hoạt động", "cảm ơn vì tin nhắn đó", "Khi nào tụi m chơi?", "tao tưởng ms có tao biết cái này", "tôi có nhiều ý tưởng cho trang web đây, mà sợ mai các không còn thấy các ông hoạt động nữa :v", "best web", "tao đã bỏ xvideos để qua chơi cái này luôn", "tao nghi bị khóa tài khoản qá", "hjhj ai muốn xúc giá ảo không", "ae nào hack nhiều tiền giúp em xúc thằng Javi +8 cái cảm mơn nhiều ạ?", "hóng garena update :v", "ai đang sủa thế :)) ?", "I come from Korea server", "check tên tao đi tao giàu vãi cả bướm", "khi nào tui bị khóa tk @@", "thằng ất ơ ngu học nào cũng hack được", "chỉ có lũ gà mới đi hack, giỏi thì tự cày con mẹ chúng mày đi", "Ai vote ddos web này :))))))))))))))", "CẶC CCCCCCCCCCCCCCCC", "Chờ xác minh lâu vc", "bạn là nam hay nữ thế?", "nghĩ đi, cái này hack được mãi không ??", "hack được 1 tỷ sau 1 tuần, lâu vc tao có thể cày được nhiều hơn thế", "tks, đã mua được Neymar WB ^^", "cái này thchs hợp với người dùng đt thôi, dùng máy tính cày nhiều tiền hơn, cái này mà cày nhiều là ăn cái ban liền", "ok ngon", "Tôi nghĩ là nên giới hạn số EP hack được trong 1 ngày", "81 GIA LAI !!!", "nghĩ đi", "dc r, nhưng 1 ngày nào đó sẽ không hack được nữa", "vẫn hack được à", "ấn tượng vl", "thằng bn t sẽ ngã ngửa =]]z :D", "tuyệt đỉnh ", "đù, cái xác nhận con người con cặc gì đấy mệt vl", "có thằng nào không biết xác minh như tao không ?", "nhiều người vào web lag vl", "ai tạo ra webs này thế?", "nhận kèo xúc giá ảo?", "hack CASH là ăn khóa ngay!", "sơm tí nữa chắc Gà chưa biết mà ban", "giờ nhìn lại mới thấy gà rán hút màu vcl", "khinh người vl", "đừng có lạm dụng cái hack này", "Có ai cần giúp không?", "Ê có khi nào có thằng report cái ăn khóa tài khoản k v", "Không có chuyện vịt con xấu xí hóa thiên nga đâu, nó căn bản chính là thiên nga", "Tao tuyên bố tao đẹp trai nhất ở đây? chúng mày tuổi lz sánh vai", "muahahahahahahahahahahahahha", "Quá tam ba bận chưa là gì cả, một khi đã thất bại thì 99 lần hay 100 lần cũng như nhau", "suy nghĩ đi", "Cứ từ từ rồi đâu sẽ có đó!", "Đen thôi, đỏ quên đi", " report cho garena chưa?", "Giờ thì tao tin rồi đấy", "Akon - Right Now (Na Na Na)", "ai sub giúp nanazz58 giùm với", "Ê dùng điện thoại thì sao", "Cái đéo gì?", "ừ tao cũng mới hack được", "tadakadada", "MOTHER FUCKERRRRRRRRRRRRRRR", "sướng vl", "3 v 3 Roleplay ???", "lz minh mày có hack ở đây không thế?", "hóng fake lag fo3", "ddddddddd", "áđâsđâsđá?", "ok tao ổn?", "đù lag đến nỗi phải F5 mới được", "tao dùng đến lần thứ 3 và mới được 3,014.500 EP", "nó có thật không thế các bạn?", "paaâppâppâpp?", "ĐMCS", "Chói lóa vl, hơn cả giác ngộ Đảng", "khi nào online cũng toàn thấy trẻ trâu trong nhóm chat, đm bớt trẩu đi mấy con chó", "không hack được là có thằng chết", "mong cái này làm lượng người chơi Fifa online đông trở lại", "cảm ơnnnnnnnnnnn nhiềuuuuuuuu!", "chờ hơi lâu rồi đấy", "giao hữu không các cụ", "Giết tao đi, add xác minh làm đéo gì, giết tao đi đcm", "aasdasdasd", "Tôi sẽ gửi 1 ảnh chụp màn hình cho NPH FO3", "Mất EP ??", "tôi đồng ý", "hack ổn rồi nhưng vẫn bị tụt tiền", "tao ghét chúng mày", "thế đéo nào search hack fo3 lại ra cái này, google bưng bô cho tội phạm à", "hack thành công ", "Sky ơi !!! SAY Ố YEAH", "bạn thích nó?", "Tuyệt tác của kiệt tác", "Tôi muốn chơi từ Hàn Quốc (tôi dùng google translate because my Vietnamese is bad)", "tui sẽ ở đây vv", "vl Kaka.FO3 ở đây à mới thấy hiện tên", "chúng mày sủa nhiều vkl", "chat nhiều vl", "this works for Thailand players right?", "hi tôi là người mới chơi fo3?", "t mới hack và ngồi chờ nó đây", "hack trên đt nexus được không?", "...^^", "vui tính vl", "FO3 ơi anh tới đây", "10 phút trước có ai thấy lag không", "tôi thật sự không thích hack chút nào", "thế mày ở đây làm lz gì", "tưởng tượng bị khóa tài khoản là hết muốn hack", "okay", "Hack cái này có ổn không vậy", "Cảm ơn vì đã public cái này cho anh em FO3 ^^", "uhm", "Ai muốn xúc giá ảo free?", "bánh bao thơm ngon vl", "hack được 100k trừ hết mẹ 500m của bố mày", "yayy", "máy chủ beta ngon đấy", "tìm hiểu hack FO4 đi anh zai ơi", "Cần bản hack cho Liên minh, cảm ơn trước", "Nếu bạn có thể tạo 1 bản hack lol thì tôi sẽ trả bạn 50 triệu, gửi qua ngân hàng liền!"];
var ChatAntiBot = ["Cái lồn tao đéo phải bot", "Đụ mẹ mày ? Có giống bot nói chuyện với mày không?", "đúng rồi bot mẹ mày đấy", "bot? tui ở đây để spam :))", "mày bị ngu à? nếu tao là bot thì Google tuổi tôm", "ừ bot =]]z, 0101010110 muahahahhahaha :v", "không, không phải bot"];


$(document).ready(function() {


    ChatStart();
    ChatLog("Chào mừng đến chat room, gửi liên kết hoặc spam có thể làm bạn bị kick.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  đụ mẹ đừng có spam nữa, chơi chơi không chơi thì cút');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  Lần đầu tiên đi hack à :)))) lần đầu tiên là bị ăn banned đấy');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'đừng có nghe thằng ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' nói, thích thì vào solo 1 trận. Sủa lắm vl');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};
