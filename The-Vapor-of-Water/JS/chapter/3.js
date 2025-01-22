const container = document.querySelector('.container');
const title = document.querySelector('.title');

    const paragraphs = [
        "<div class='preword'>未來到底該怎麼辦...</div>",
        "要搬得東西可不少，而就在我們把食材全放到廚房後，我爸突然冷不防地問了我：“欣韻呢？她沒有和妳在一起嗎？她的父母稍早有聯絡我們，說他們還在北部忙，這次恐怕沒辦法一起過來慶生了…”",
        "我心裡一緊，強迫自己維持鎮定，微微一笑回答：“她有些事情要處理，可能晚一點才會過來。”我盡量讓語氣聽起來自然，不希望他們察覺到有什麼不對勁。",
        "我爸似乎並沒有多想，只是點了點頭，繼續將食材擺放到合適的位置。廚房裡的氛圍變得稍微輕鬆了些，然而，我的內心卻始終無法平靜。這一切都太不尋常了，我能夠感受到每一個細節的壓力。",
        "我深吸一口氣，決定先專心幫忙準備晚餐，努力讓自己不再過度焦慮。",
        "我開始動手幫忙我媽準備晚餐，儘管心中還是隱隱有些不安，手上的動作卻越來越熟練。爸他一邊忙著安排餐桌，一邊和我們閒聊著日常瑣事，暫時似乎並沒有察覺到我的異樣。",
        "在忙碌的過程中，我的心情漸漸平靜下來。即使那雙馬耳朵還時不時地提醒我現實的不可思議，但我知道，這一切必須冷靜處理，無論如何不能讓他們發現。",
        "晚餐的準備逐漸接近尾聲，桌子上擺滿了美味的菜餚，家裡的氛圍也變得溫馨起來。儘管心裡的隱憂依然存在，但此刻的我知道，還有很多事需要做，無論是面對這些變化，還是和家人相處，必須一步一步來。",
        "當我把最後一盤餐點放到桌上後，我留意到本該在划手機的妹妹卻一直盯著我的臉看，我心裡一驚，想說我身上的變化該不會不小心露出來了吧？然而，她卻問了我忘記要去注意到的地方。",
        "我心跳突然加速，瞬間腦袋一片空白，忙著在心中快速回想自己是不是無意間露出了什麼蹤跡。妹妹的眼神依然盯著我，顯然，她發現了什麼不對勁。",
        "她雖然皺眉但卻輕聲地問道：“痾...哥，室內幹嘛戴棒球帽啊？還有應該不是我眼殘吧！你的耳朵呢？怎麼不見了？”",
        "我愣住了，隨後才發現，她指的是我原本的耳朵。我的心頭一陣慌亂，仿佛整個世界突然天翻地覆，什麼都變得不確定了。此刻的我，心裡更亂了，腦袋裡湧現出一堆混亂的念頭，開始感覺到無所適從。我強迫自己冷靜下來，試圖理清當下的情況，但每一個念頭都像是泡沫一樣隨時會破裂。",
        "我回過神來，發現妹妹還是皺著眉頭盯著我看，她又問了一次：“哥，嗨囉...還在線嗎？”語氣裡帶著幾分調侃，卻也透著不解。",
        "我強擠出一個僵硬的笑容，試圖讓自己的語氣聽起來正常一點：“啊，抱歉，剛剛有點走神了。你剛剛說什麼？”心裡卻像揣了一隻小鹿，亂跳不止。",
        "“我問你耳朵的事啊，怎麼看起來好像不太對？”她半開玩笑地說，但眼神裡卻滿是疑惑，甚至帶著一點試探。",
        "“耳朵？”我假裝不在意地摸了摸頭頂，隨即打哈哈地說：“你是不是眼花了阿？我這不是一切正常嗎？”但我能感覺到自己的聲音有些發虛。",
        "隨後，我感覺心中壓力像山崩一樣傾瀉而來，真的撐不住了！我下意識地摀住原本耳朵的位置，彷彿那空無一物的地方還能給我一絲安全感，害怕消失的它們突然被人注意到，暴露在眾人眼前一樣。連一句解釋都來不及說，我快步走向房間，留下滿臉錯愕的家人。",
        "推開房門，我迅速將門反鎖，背靠在門板上，腦中一片混亂。整個人彷彿被無形的壓力籠罩，胸口悶得喘不過氣。我雙手捂著頭，蜷縮在地上，嘗試讓自己冷靜下來，但腦中的思緒卻越理越亂。",
        "“我該怎麼辦？”我喃喃自語，聲音帶著明顯的顫抖。房間裡只剩下我急促的呼吸聲，空氣中瀰漫著濃濃的壓抑。",
        "就在這時，一個輕柔的聲音打破了沉默。“銀錦，你還好嗎？”欣韻的聲音帶著關切，從房間的一角傳來。她小心翼翼地走近我，動作輕緩，彷彿害怕驚動到一隻受驚的動物。",
        "我抬起頭看了她一眼，眼神充滿了茫然和無助。“我真傻，遮住了頭髮和小馬耳朵，卻把人耳給忘了！還被我妹給注意到。我不知道該怎麼面對這一切...這太荒唐了。”我的聲音微弱，幾乎快被空氣吞沒。",
        "欣韻蹲下身來，與我平視，她的眼神柔和卻堅定，手卻不自覺地撓起我頭頂的耳朵。毛茸茸的觸感伴隨著輕輕的撓動，讓我感覺到一股意外的舒適感。“我知道這很難接受，但不管發生什麼事，我們都會一起面對的。”她的語氣像春日的暖風，輕輕地撫過我壓抑的心。隨後，她伸出手輕輕地搭在我的肩膀上，給了我一絲安慰。",
        "我得承認，她撓耳朵的動作讓我感到前所未有的放鬆，幾乎讓人暫時忘卻心中的煩惱。我深吸了一口氣，試圖讓自己的情緒穩定下來。“可是，我的家人...他們一定會發現的，我該怎麼解釋？”我的聲音依然帶著顫抖，壓抑的情緒讓胸口如同壓著巨石。",
        "欣韻停下了撓耳朵的動作，微微皺眉，似乎在斟酌該如何回應。“銀錦，我們可以試著慢慢地告訴他們，當然也包括我的家人，讓他們知道情況有多特殊。”她的語氣溫柔但堅定，彷彿在暗示，無論這條路多艱難，我們都能走過去。",
        "我低下頭，腦中翻湧著各種可能的情景，將我內心的矛盾與焦慮推向高潮，終於，壓抑許久的淚水還是止不住地滑落，滴答落在地板上，化作無聲的訴說。然而，就在這片混亂與無助中，欣韻的手始終輕輕地搭在我肩膀上，那一份溫暖透過她的掌心傳遞到我心中，像一道穿透黑暗的燈光。她的存在彷彿告訴我，無論眼前的路多難走，我都不是孤身一人。",
        "“銀錦，”欣韻的聲音柔和又堅定，像春雨般滋潤我的焦灼，“妳不需要一個人承受所有的壓力，無論面對什麼，我都會陪著妳。”她慢慢地蹲下來，與我平視，眼神中充滿了關切和支持。",
        "我吸了吸鼻子，抬起頭看著她，雖然視線依舊模糊，但她的面容卻顯得那麼清晰。我張了張嘴，聲音沙啞卻帶著微弱的希望，“真的...能過去嗎？”",
        "欣韻微微一笑，語氣堅定又溫暖，“一定可以的，我們一起來想辦法，好嗎？”",
        "那一刻，我感覺到胸口的壓力稍微鬆動了一些，雖然未來依舊充滿未知，但有她的支持，至少我不再那麼害怕。",
        "就在這份稍稍平靜下來的氛圍中，我突然感覺到背靠的房門傳來敲門的震動感，那沉穩的節奏像是在小心翼翼地試探。我瞬間屏住呼吸，心跳開始加速，腦海中浮現出無數個可能性——是家人發現了什麼嗎？還是他們只是想詢問為什麼我突然離席？",
        "欣韻也被這聲音驚動了，她看了我一眼，眼神中帶著一絲詢問與擔憂。我輕輕地搖了搖頭，示意她先別出聲。",
        "門外傳來了我爸媽和妹妹的聲音，溫柔中帶著幾分試探：“銀錦，怎麼了？你剛剛突然跑回房間，是不是身體不舒服？還是有什麼事想跟媽說？還有你剛剛在電話上到底有什麼想要說的？",
        "我咬了咬牙，內心掙扎不已。到底該怎麼回應才能不讓她擔心，又不暴露我現在的異樣？我轉頭看向欣韻，她用眼神示意我冷靜，不用急著回應。",
        "“我沒事，媽。”我終於開口，語氣努力保持平靜，“剛剛有點不舒服，想先休息一下，妳們不用擔心。”",
        "門外沉默了一會兒，接著傳來我爸關心的聲音：“不舒服？你到底是怎麼呢？剛剛還聽見你哭呢！”",
        "我聽見爸的聲音中帶著擔心，感覺到那股焦急的情緒穿透了門。我閉上眼睛，深吸了一口氣，腦中一片混亂。我的心情像被無形的重壓著，痛苦地掙扎著，但無論如何，我知道無法再繼續隱瞞下去。這不是我可以輕易逃避的問題。",
        "“夠了，你一個男生哭什麼？我現在就進去。”我聽見爸的腳步聲漸漸靠近，門的把手輕微轉動，預示著他即將進來。我迅速整理了一下情緒，抹去眼角的淚水，盡力讓自己顯得平靜一點。",
        "欣韻的眼神再次給了我些許安慰，雖然她無法理解現在的情況，但她始終默默支持著我。",
        "門被推開，爸爸站在門口，目光直直地看著我，臉上的表情帶著濃濃的擔憂，甚至還帶著些許不解與驚訝。“銀錦，真的沒事嗎？你剛剛...哭了？還有，你不是說欣韻不在嗎？”他聲音雖然柔和，但語氣裡的關心無法掩蓋，眼裡充滿了關切。",
        "然而，當他的目光掃到我頭頂時，語氣瞬間變得困惑且充滿疑問：“阿你們頭上那是什麼東西？”他微微瞇起眼，彷彿不敢相信自己所看到的畫面。",
        "我整個人僵住了，一時之間竟不知道該如何回應。他的視線轉向躲在我身後的欣韻，她同樣一臉尷尬，手不自覺地摸了摸自己頭頂那對新生的小馬耳，彷彿這樣就能掩飾事實。然而，對於爸爸而言，這一切根本無法被合理解釋。",
        "“爸...”我的喉嚨像是被什麼堵住了一樣，艱難地吐出一個字，隨後又陷入沉默。欣韻微微低下頭，不敢直視他，整個房間的空氣彷彿都凝固了。",
        "“這...你們這是...”爸爸試圖開口，但顯然他也不知道該如何形容眼前的場景。他的目光在我和欣韻之間來回游移，最後停在了我的臉上，等著我給出一個解釋。",
        "“爸，我...”我咬著嘴唇，心裡的壓力幾乎要將我壓垮，但依然努力讓自己的聲音保持平穩，“我們…身上出了點問題，一時半會兒可能解釋不清楚。”我盡量模糊帶過，希望能為自己爭取一點時間。",
        "“問題？”爸爸眉頭皺得更緊了，語氣中帶著隱約的擔憂與不安，“到底是出了什麼問題會讓變成這樣？”",
        "我一時語塞，無法立刻給出回應，只能低頭避開他的目光。欣韻輕聲開口，試圖幫我解圍：“叔叔，其實我們自己也不知道發生了什麼，一切都來得很突然…”",
        "爸爸沒有說話，只是定定地看著我們，像是在等著更多的答案。那一刻，我的心情複雜到極點，既害怕又矛盾，卻又隱隱期待著或許能從他眼裡找到一絲支持和理解。",
        "就在這時，我的妹妹也從一旁湊了過來，眼神裡帶著些許好奇，隨即忍不住發問：“哥，雖然我知道你們是小馬迷，但也沒必要隨時都帶著那玩意吧！而且還去染了頭髮？”她語氣輕鬆，甚至帶點戲謔，顯然還沒有意識到事情的嚴重性。",
        "說完，她還直接走近了一步，伸手摸了一下我頭頂的耳朵。我瞬間僵住，條件反射地退後一步，卻又為了掩飾而假裝冷靜。她驚訝地縮回手，眼裡多了一絲疑惑：“咦？感覺好真，你到底花了多少錢？連觸感都做得這麼細緻！”",
        "我張了張嘴，想要解釋什麼，但腦子裡一片混亂，竟一句話都說不出來。欣韻見狀，試圖緩和氣氛：“啊，這個...算是一個特殊的變化吧，我們還在試圖搞清楚是怎麼回事。”她強擠出一個笑容，語氣裡卻透著隱隱的緊張。",
        "妹妹聽完反而更疑惑了：“變化？你們是在說什麼啊？”她的目光在我和欣韻之間來回打量，像是在試圖拼湊出一個完整的答案。",
        "房間裡的氣氛一下子變得更加微妙，我知道，如果不說點什麼，恐怕很快就會失控。但該怎麼解釋呢？這種連我們自己都無法理解的情況，又該怎麼讓別人相信？",
        "“爸，媽！”我深吸一口氣，抬起頭望向站在眼前的至親，他們的表情寫滿了擔憂與不解。我的聲音帶著些微的顫抖，“天啊，到底該從何說起呢？這一切實在太荒唐了，我自己都難以置信。”",
        "他們三個就靜靜地看著我，等著我繼續說下去。",
        "“事情是從今天早上開始的...我們還在酒店過夜，”我努力整理著思緒，“早上醒來後，欣韻和我都感覺有些奇怪。起初我們只以為是太累了，沒多想，但很快我們發現了身體上出現了一些...變化。”我的語氣越來越低，最後幾個字幾乎像是從喉嚨裡擠出來的一樣。",
        "“變化？”我媽皺起眉頭，表情顯得更加困惑，“什麼樣的變化？”",
        "我低下頭，無意識地伸手摸了摸頭頂的耳朵，那柔軟的觸感再次提醒了我這不是夢。“像這樣，”我抬起頭，指了指自己頭頂那雙小馬耳朵，“我們的耳朵，開始變成了這個樣子...而且，還不止這些。”",
        "房間裡一瞬間陷入死寂，他們的表情從驚訝逐漸轉為震驚。媽媽掩住嘴，似乎一時間無法接受眼前的事實；爸爸則皺起眉頭，像是在努力理清這荒誕的局面。",
        "“這...這到底是怎麼回事？”我媽終於開口，語氣中滿是不可置信。",
        "“我們也不知道。”欣韻接過話，努力讓自己的語氣聽起來冷靜一些，“早上屁股先是多了個圖案，再來髮色也變了，最後長了個新的耳朵，這一切都來得太突然了，我們現在只能盡量在網上找答案，但目前還沒找到有用的線索。”",
        "我爸沉思了一會兒，才慢慢開口：“也就是說，這不是你們故意裝的，而是...真的發生了？”",
        "我點點頭，喉嚨像是被什麼堵住了一樣，說不出話來。我的目光緊緊盯著他們，心裡充滿了忐忑和不安，等待著他們的反應。",
        "房間裡的靜默沉甸甸地壓著每個人，氣氛讓人感到窒息。過了一陣子，我媽終於開口，語氣中多了一絲堅定和溫柔：“在這聊這個太沉重了。來來來，我們都煮好了晚餐，大家一起來吃吧！”",
        "她的提議像是一道陽光，驅散了房間裡的壓抑。我和欣韻愣了一下，然後下意識地點了點頭。",
        "“媽，你們真的不想多問點什麼嗎？”我試探性地問道，心裡仍然充滿了不安。",
        "“銀錦，現在最重要的不是追問，而是先讓大家冷靜下來，好好吃頓飯。”她微笑著說，走到我身邊輕輕拍了拍我的肩膀，“不管發生什麼事，我們都是一家人，總能找到解決的辦法。”",
        "我爸也點點頭，語氣沉穩：“你媽說得對。先吃飯，之後再慢慢聊。”",
        "我看向欣韻，她微微點頭，給了我一個鼓勵的眼神。最終，我深吸一口氣，低聲說道：“好吧，那我們先去吃飯。”",
        "爸媽先行下樓後，只剩我們三個還在樓上，當我們經過雷飛的房間時，房門突然震了一下，聲音雖然輕微，但在寂靜的樓道裡顯得格外明顯。我眉頭微皺，心中暗想：他是在偷聽嗎？",
        "旁邊的妹妹顯然也注意到了這異樣。她停下腳步，疑惑地看著門，然後轉頭低聲問我：“哥，這是怎麼回事？裡面有人？”",
        "“哎...還記得我剛剛有提到另一個朋友也是跟我們一樣嗎？”",
        "妹妹皺了皺眉，眼中閃過一絲驚訝和不解：“什麼意思？你是說，裡面還有一個像你們一樣的...朋友？”她壓低聲音，小心翼翼地問。",
        "我點了點頭，神情有些複雜：“對，他叫雷飛。他早上就和我們一起經歷了這一切，只是我怕他嚇到你們，所以才讓他一直躲在房間裡。”",
        "妹妹似乎有點消化不良，呆站了幾秒鐘後，小聲嘟囔著：“所以，這都是真的...不只是你們倆，還有其他人？”她的語氣中帶著不確定和一絲不安。",
        "“是真的。”我嘆了口氣，試著用平靜的語氣讓她安心，“不過我們現在也在努力弄清楚原因，還有該怎麼處理接下來的事。”",
        "妹妹沉默了一會兒，最終點了點頭：“好吧...雖然我還是不太懂，但我相信你們會處理好的。只要不是危險的事情就行。”",
        "我停下腳步，深吸了一口氣，然後轉身走到雷飛的門前，伸手敲了敲門。妹妹站在一旁，看著我，眼裡閃過一絲疑惑和期待。",
        "“雷飛，”我語氣堅定地說，“出來吧。既然我妹已經發現了，你遲早也會被我爸媽撞見。不如一起面對，總比躲在房裡要好。”",
        "門內安靜了幾秒，隨後傳來雷飛略帶掙扎的聲音：“真的要這樣嗎？他們會怎麼看我們？我...不太確定。”",
        "我靠在門框上，語氣放緩了一些：“我懂你的擔心，但你想啊，如果他們突然看到你，一定會更加嚇到。不如我們主動告訴他們，至少我們還能掌控一點局面。”",
        "房門終於緩緩打開了一條縫隙，雷飛探出頭來，臉上的表情複雜極了，既有猶豫，也有一絲認命。他看了一眼站在旁邊的妹妹，似乎更感到不安。",
        "“哥，他是雷飛吧？”妹妹率先開口，語氣有點興奮，又帶著幾分緊張，“他一直都待在房間裡嗎？為什麼不出來呢？”",
        "雷飛無奈地推開了門，慢慢走了出來，手還下意識地撓了撓頭頂的耳朵。“因為...這個樣子。”他低聲說，語氣中有些不自在。",
        "妹妹瞪大了眼睛，嘴巴微張，似乎一時間無法接受眼前的事實。但她並沒有後退，反而湊近了一些，仔細地盯著雷飛的耳朵，忍不住伸出手想摸。",
        "“這...好毛茸茸哦！”她忍不住脫口而出，然後猛地收回手，“啊，對不起！我只是太好奇了...”",
        "雷飛無奈地笑了笑：“沒關係，你好奇也正常。其實我也不知道該怎麼面對你們，但既然都這樣了，就只能硬著頭皮了。”",
        "我拍了拍他的肩膀，示意他放輕鬆：“好了，既然你也出來了，那我們就一起下去吧。總得讓爸媽知道我們的情況。”",
        "一下樓，我爸媽才注意到家裡居然還有另一個人。先是我爸皺了皺眉頭，隨即問道：“銀錦，這是怎麼回事？你朋友怎麼會在你家？還有...他頭上那對耳朵...”",
        "我靠在樓梯扶手上，努力保持平靜，語氣放緩了一些：“爸、媽，我知道這一切看起來很怪，但你們聽我說。這是雷飛，我的朋友，他...也跟我們一樣，正在經歷一些非常奇怪的事情。”",
        "雷飛尷尬地撓了撓頭，動作又讓他頭上的耳朵晃了晃，顯得格外醒目。他低聲補充道：“其實，我也不知道是怎麼回事。早上起來後就變成這樣了，我和銀錦還有欣韻一直在試著找答案，但到現在...也沒頭緒。”",
        "我爸似乎還沒完全相信，目光在雷飛和我之間來回掃視，神情越發複雜：“銀錦，你告訴我，這到底是真的，還是你們在搞什麼惡作劇？”",
        "我深吸一口氣，正視他們的眼睛，語氣堅定而嚴肅：“爸、媽，這不是惡作劇，也不是我們想要的。我知道這很荒唐，但我們真的不知道該怎麼辦。今天是我們第一天發現身體變化的，我們需要時間，還有你們的信任。”",
        "客廳裡沉默了幾秒鐘，最後我媽嘆了口氣，輕聲說道：“好吧，這事情看起來是挺嚴重的。不過...我們先吃飯吧，邊吃邊說，我們總能一起想辦法的。”",
        "我點了點頭，朝雷飛和欣韻使了個眼色。雷飛雖然有些緊張，但還是跟著我走了過去。我深吸一口氣，回頭看了欣韻一眼，她微微一笑，似乎在鼓勵我。無論接下來會怎麼樣，至少現在我們不用再隱瞞了。",
          
        "<div style='text-align: center; line-height: 9em;'>***-－oOo－-***</div>",

        "餐桌上擺滿了色香味俱全的佳餚：酒蒸蛤蠣散發著淡淡的酒香和海鮮的鮮味，香蔥油雞的嫩滑肉質被淋上一層亮澤的蔥油，苦瓜羊肉的清苦與鮮美在舌尖交織，青椒肉絲則是色澤誘人，搭配著青紅椒的清脆口感。而紅燒牛肉湯則是整桌的壓軸，濃郁的湯底伴隨著軟爛的牛肉，帶來溫暖又滿足的感覺。",
        "這頓飯雖然是為了慶生而準備，但對我們來說，卻成了今天特別的一部分。一旁的爸媽和妹妹還在驚訝與困惑中交談，而雷飛則低著頭默默地挾菜，顯得有些拘束。",
        "我端著湯碗，心裡五味雜陳：原本是平凡的一天，如今卻被這不可思議的變化徹底顛覆。而眼前的這桌豐盛晚餐，也讓我更加意識到，無論多大的變故，家人和朋友依然是我最大的支持。",
        "“來，大家先吃吧。”我媽開口，試圖緩和氣氛，“不管發生什麼，飯總還是要吃的。”",
        "吃到一半，我突然感覺到屁股有些不適，像是坐在什麼凸出的東西上。這股奇怪的感覺越來越明顯，讓我坐立難安。我偷偷挪了挪身子，想換個姿勢，但那不適感卻更為強烈。",
        "我低頭偷偷瞄了一眼椅子後方，確實看到衣服下方有什麼東西微微鼓起，還隨著我的動作輕輕晃動了一下。腦中瞬間閃過一個荒唐的念頭：尾巴？我一下子僵住了，筷子停在半空，連呼吸都變得小心翼翼。",
        "“哥，你怎麼了？”妹妹敏銳地察覺到我的異樣，抬起頭關心地問道。桌上的其他人也停下了動作，目光齊刷刷地投向我。",
        "“呃，沒事，就是...坐久了有點累。”我勉強擠出一個笑容，隨便找了個理由搪塞過去。但內心早已炸開了鍋：這真的不可能吧？怎麼連尾巴也長出來了？",
        "我放下筷子，強擠出一個勉強的微笑：“對不起，我先去一下廁所。”說完，我幾乎沒給家人反應的時間，便匆匆站起來，盡量自然地走向廁所。",
        "關上門的瞬間，我長長地吐了一口氣，靠在門板上，腦袋亂成一團。剛剛坐下來的感覺再一次湧現，我伸手往背後探去，果然摸到了一個陌生的、細長的東西——它柔軟、溫熱，還微微抽動了一下。",
        "“我靠，真的是尾巴！”我壓低聲音的尖叫。",
        "我的心跳加速，視線落在鏡子裡的自己，整個人都陷入了難以置信的混亂中。一瞬間，各種恐懼與不安湧上心頭：怎麼回事？這是什麼情況？為什麼這一切都在我身上發生？",
        "我用冷水拍了拍臉，努力讓自己冷靜下來。但尾巴的存在感實在太過明顯，甚至讓我感到不安地輕微抖動。我咬了咬牙，腦海中只有一個念頭：現在該怎麼辦？",
        "就在我努力整理思緒時，廁所門外傳來敲門聲，先是輕輕地敲了兩下，隨後傳來我妹的聲音：“哥，你還好嗎？怎麼去了這麼久？”",
        "還沒等我回應，欣韻也在外面低聲問道：“銀錦，發生什麼事了？是不是出了什麼狀況？”",
        "接著，又傳來雷飛的聲音，語氣中帶著些許擔憂：“喂，你沒事吧？”",
        "聽著門外他們你一句我一句的關心，我的頭痛得更厲害了。他們都察覺到了不對勁，而現在的我，根本沒法給出一個合理的解釋。該怎麼辦？要不要就這樣坦白？",
        "我抬起頭，看著鏡子裡狼狽的自己，深吸了一口氣，試圖讓自己的聲音聽起來不那麼顫抖：“我沒事，真的...只是...只是需要一點時間冷靜一下。”",
        "外面短暫安靜了幾秒，但我能感受到門外的氣氛越來越緊張。我妹小聲嘀咕了一句：“哥，你真的很奇怪，剛剛吃飯也不太對勁。”",
        "欣韻則繼續柔聲說：“銀錦，無論發生什麼，我們都在這裡陪你，你可以慢慢說，我們不會逼你。”",
        "雷飛的聲音則稍微沉了些：“我們都已經經歷這麼多了，再躲下去也沒用，不如讓他們知道。”",
        "我握緊了拳頭，心中的矛盾與壓力達到頂點。坦白，還是繼續隱瞞？",
        "我深吸了一口氣，看著鏡子裡的自己，努力讓心跳稍微平穩下來。終於，我伸手打開了廁所門。門外的三張臉，寫滿了擔憂和疑惑。他們的目光齊刷刷地落在我身上，讓我感到無所遁形。",
        "“好吧，我坦白。”我低聲開口，語氣帶著一絲苦澀。“你們可能不會相信，但這不是我能控制的事情。剛剛我之所以那麼不自在，是因為……”我停頓了一下，掙扎著要不要繼續說下去。",
        "雷飛嘆了口氣，站在我旁邊拍了拍我的肩膀，像是在給我勇氣。他看向其他人說：“其實不只是他，我們三個都有類似的變化。現在他們大概還沒注意到，銀錦的‘小馬化’，比我們進展得更快。”",
        "“什麼小馬化？”我妹挑眉，語氣裡充滿困惑。",
        "“字面意思，”我咬著牙，側身站到更亮的地方，指了指自己的頭頂。“我長了這對耳朵，還有...現在好像連尾巴都出來了。”",
        "聽到這話，我妹的臉色瞬間變了，她驚訝地張大嘴，像是想說什麼，但一句話都吐不出來。欣韻拉了拉她的手，語氣柔和但認真：“是真的，我們也不知道為什麼，但這些變化不是假裝的。”",
        "爸媽的聲音從客廳傳來，似乎在詢問我們為什麼這麼久沒回去。我妹臉上掠過一絲慌張，她低聲說：“哥，這事怎麼跟爸媽說？”",
        "“或許……我們應該讓他們親眼看到。”雷飛沉聲提議。",
        "我心一橫，點了點頭，說：“也許是時候了。”",
        
        "<div class='line'></div>",
        "<div style='margin: -1rem 0rem; font-weight: bold;'>備註：</div>",
        "<div style='margin-bottom: -4rem;'>第一天：可愛標誌、髮色、小馬耳朵、尾巴？</div>",
    ];

    paragraphs.reverse().forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        title.insertAdjacentElement('afterend', paragraph);
    });

//創作期間2025/01/13-2025/01/16