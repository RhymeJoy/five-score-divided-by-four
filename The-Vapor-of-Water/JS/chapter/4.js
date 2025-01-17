const container = document.querySelector('.container');
const title = document.querySelector('.title');

    const paragraphs = [
        "<div class='preword'>坦白或許也是一種緩和壓力的方法...</div>",
        
        "<div style='text-align: center;'>***Oo0O0oO***</div>",

        "<div style='text-align: center; margin: -1em 0em'>[破空視角]</div>",
        "疲憊不堪的我，帶著同樣筋疲力盡的隊員們飛回水晶山脈的臨時山洞基地。落地的瞬間，僅存的力氣似乎也被抽乾，但還來不及喘口氣，我便直奔指揮室，準備向閃塵指揮官彙報這次的調查結果。踏入指揮室，我立正敬禮，用盡全身僅剩的力量壓制住聲音中的疲態，便開始報告。",
        "“閃塵指揮官，一等兵前來向您報告，關於一天前所分派的偵察任務。經過我們小隊深入調查，發現整個小馬國中部地區，包括坎特拉、小馬鎮以及蘋果魯薩等區域，已完全陷入混沌的污染之中。這些地方的景象簡直匪夷所思：房屋顛倒懸浮在空中、動物在失去重力，漂浮不定、白天與黑夜完全失序，交替得毫無規律，甚至連天空都降下了黏糊糊的巧克力雨。更糟糕的是，那雨不只影響視線，還讓我的翅膀到現在都還黏糊糊的，像是沾滿了蜂蜜似的，簡直無法集中精神飛行。",
        "除此之外，路上的植被與土地也出現了奇異的變化。蘋果樹結出了糖果般的果實，而地面的泥土則被奇怪的彩虹色條紋覆蓋，踩上去還會發出奇異的聲響，就像是踩在某種鬆軟的樂器上一般。當地的居民，有些徹底消失，有些卻似乎被困在一種難以言喻的瘋狂中。他們的行為毫無邏輯，有的在原地不停旋轉，有的甚至開始與無形的對象對話。”",
        "我深吸了一口氣，壓抑住內心的不安，繼續說道：“但最讓我們小隊感到焦慮的是，一直沒有任何無序的明確線索。我們已花了十多天時間，仔細搜尋整片大陸的中部地區，連每一片森林、每一座山丘都不曾放過，卻連一根毛都沒有發現。”",
        "我抬起疲憊的雙眼，凝視著閃塵指揮官，語氣中帶著隱隱的懇求：“閃塵，我們的資源與時間已快要耗盡。懇請您提供更多指示，或是派遣更多支援，否則恐怕我們的偵察行動難以為繼。”",
        "說完這番話，我站直身體，等待指揮官的回應，肩膀上的重量似乎更沉了幾分。",
        "“嗯~~~”閃塵指揮官低聲沉思著，皺著眉頭，輕輕敲了敲桌面，彷彿在權衡接下來的計畫。片刻後，他抬起頭，語氣中帶著一絲溫和與果斷：“你們先去好好休息一下吧！這樣毫無目的的搜尋也沒有任何意義。”",
        "他的語氣雖然平靜，卻帶著不容置疑的權威，讓我心頭一鬆的同時，又感到微微的羞愧，彷彿我們這十多天的努力仍然遠遠不夠，。閃塵接著補充道：“情況比我們預想的更加複雜，也許需要採取截然不同的方法才能解決問題。先是兩位公主的失蹤，再來是暮光她們的音訊全無，就連雲寶指揮官也被無序...處理掉了！”",
        "他深吸了一口氣，垂下目光片刻，隨即握緊蹄子，用一種壓抑著憤怒的語氣低聲道：“我本不該是站在這個位置上的，但如今情況所迫，我不得不接下這個責任。說真的，我現在恨不得立刻找到無序，把它狠狠地撕成碎片。”",
        "他的聲音在最後一句微微拔高，但隨後，他似乎意識到自己情緒的失控，快速地平復了下來。他抬頭望向我，目光重新變得堅定：“當然，你們的付出我都看在眼裡。接下來的任務規劃，交給我和參謀來重新設計。我保證，不會再讓你們承擔這種毫無頭緒的風險。”",
        "他停頓了一下，似乎在考慮如何措辭，語氣也隨之緩和了許多：“這段時間，你們每一個人都辛苦了。我命令你們現在立刻去休息，讓隊員們好好恢復體力。吃些東西，補充能量，保持適當的警戒，但不用太緊張。接下來幾個小時內，我會召集所有參謀重新研擬搜索策略，也許還會向其他分隊請求更多的支援。無論如何，我們絕不能讓混沌繼續蔓延。”",
        "他的聲音堅定而有力，像一道穩固的防線，為我們帶來了一絲從未有過的安全感。",
        "我立正敬禮，目光堅定地回應：“明白了，指揮官！謝謝您的信任與指導。”話音剛落，我靜默了幾秒，心中還有些話想說，於是試探性地開口：“還有一件事。請問水...”",
        "“蒸氣下士嗎？”閃塵指揮官抬起一邊眉毛，眼中閃過一絲促狹的笑意，打斷了我的話，“又想你女朋友了吧？”",
        "我一時語塞，臉頰瞬間熱了起來。 “不、不，指揮官，我是擔心...”",
        "“別解釋了，”閃塵指揮官輕輕擺了擺蹄，語氣透著些許調侃，嘴角微微上揚，“你的心思都寫在臉上了。放心吧，蒸氣下士很好，我已經派她和她的小隊出外執行任務了。他們的主要目標是協助那些需要幫助的小馬，次要的則是進行一些隨機偵查。”",
        "他頓了頓，語氣多了一絲嚴肅：“她很能幹，我相信她能妥善完成任務。至於你嘛，現在最該做的，就是先好好休息，把狀態調整到最佳。畢竟，如果讓女朋友看到你這副疲憊不堪的模樣，可是會扣分的，對吧？”",
        "這話讓我一時語塞，竟無法反駁，只能在心中暗暗嘆氣。隊伍裡傳來了幾聲忍俊不禁的輕笑聲，我偷偷瞄了一眼，果然看到幾個隊員正互相竊笑，似乎都在等著看我怎麼回應。",
        "我只能無奈地苦笑著，勉強挺直身體，抬蹄敬禮：“明白了，指揮官！我會照您的指示，馬上去休息！”",
        "離開指揮室後，我感覺肩膀上的壓力減輕了些許。雖然指揮官的話帶著些許玩笑意味，但也讓我更踏實了些——蒸氣沒事，她還在為這場艱難的戰役盡自己的全力。而我，也必須重新振作，不能辜負她的努力與信任。",
        
        "<div style='text-align: center;'>***Oo0O0oO***</div>",

        "“以上就是我早上醒來前夢到的夢。”欣韻語氣平淡，但她的眼神中帶著一絲不易察覺的困惑和不安。",
        "我愣了一下，沉默片刻才回過神來：“這…是夢？”",
        "欣韻點點頭，靠在椅背上輕輕嘆了口氣：“是啊，當時夢得很真實，甚至連每個細節都歷歷在目。醒來後我還摸了摸自己的頭頂，幸好沒有耳朵，也沒長尾巴。”她苦笑了一下，像是想用這種方式打破凝重的氣氛。",
        "“可是...”我皺起眉頭，“這個夢未免太奇怪了吧？就像是——”",
        "“就像是真實發生的事情。”她接過話頭，語氣低沉了一些。“我知道你要說什麼，銀錦，但它確實只是一場夢。至少，我希望如此。”",
        "客廳裡陷入短暫的靜默，我心裡卻有些說不出的異樣感。這真的是夢嗎？或者說，這僅僅只是夢嗎？",
        "我沉思片刻，隨後也決定把早上做的夢也說給在客廳的大家聽。隨著我描述夢中的場景，客廳的氣氛變得越來越微妙。",
        "“我的夢和欣韻的完全不一樣，但...”我停頓了一下，瞥了欣韻一眼，“它同樣跟小馬和那個無序有關。”",
        "妹妹聽完，皺起眉頭：“哥，妳們這是串通好的嗎？怎麼可能兩個人做的夢都跟小馬有關？”",
        "爸媽對視了一眼，顯然對這一連串奇怪的話題感到不解。我爸沉穩地說：“銀錦，欣韻，做夢的確是會有巧合，但你們兩個同時夢到小馬，這未免太奇怪了。夢裡還發生了什麼？”",
        "我稍微整理了一下思緒，繼續說道：“在夢裡的最後，我被那個叫無序的生物施了咒，然後就灰飛煙滅了！那種真實感...讓我一整天都覺得有些心神不寧。”",
        "雷飛靠在椅子上，突然開口：“其實，我也夢到了一些奇怪的事情，但我一直覺得可能是因為昨晚太累，才會亂夢一通。”他停頓了一下，語氣多了幾分猶豫，“不過...如果大家都夢到相似的東西，那就真的有點說不通了。”",
        "客廳的空氣像被凍住了一樣，每個人都陷入自己的思緒中。是不是僅僅只是夢，還是這些夢之間有著某種隱秘的聯繫？",
        "“你剛剛提到無序，那個是？”我妹帶著疑問的表情。我轉頭看向妹妹，看到她皺著眉頭，顯然對我提到的“無序”感到困惑。",
        "“無序是...”我稍微停頓了一下，斟酌著用詞，“其實我也不是很確定他是甚麼，應該算是一個畸形生物吧！夢中的形象是一個由多種動物特徵組成的混合生物。他有一個馬的頭部，頭頂長有一隻鹿角和一隻山羊角；右臂是獅子的前爪，左臂是鷹的爪子；右腿是山羊的腿，左腿是蜥蜴的腿，並擁有一條蛇形的尾巴。”",
        "我妹聽完後，眼神越來越震驚：“所以，你的夢裡出現了一個...這樣的怪物？”",
        "我點了點頭，繼續說：“是的，他的樣子真的很詭異，而且...”我稍微停頓了一下，似乎在努力回憶，“他的聲音，帶著一種詭譎的幽默感，就像他完全不在乎任何事，卻又好像在掌控一切。”",
        "欣韻皺著眉頭：“你夢到的這個‘無序’，聽起來像是一種象徵，或者說，是混亂本身的具現化。”",
        "“可能吧，”我耸了耸肩，“但我很清楚地記得，他說了一些話，大意是‘規則是無聊的，偶爾來點混亂才有趣’。然後，就是在那之後，我開始變成這樣的。”我指了指頭頂的馬耳朵和身後的尾巴。",
        "“這會不會只是你潛意識的創造？”我妹試探性地問。",
        "“也許吧，但如果只是夢，那為什麼我們的身體真的發生了變化？欣韻和雷飛也一樣。”我反問道。",
        "大家陷入了短暫的沉默，氣氛中彌漫著疑惑與不安。妹妹緩緩地說：“如果那個‘無序’真的存在，那麼...他會不會是這一切的源頭？”",
        "我和欣韻互相看了一眼，點了點頭。“也許我們得搞清楚他的意圖。”欣韻語氣堅定地說道，“不管是夢還是什麼，他似乎與我們的變化有著直接的聯繫。”",
        "“算了，先不管夢境了！”我深吸一口氣，語氣中透著一絲緊張，“有更重要的事情，就在剛剛吃飯的時候...”",
        "說著，我站起來，手指緩緩拉住腰間的褲子邊緣，稍稍往下拉了一些。隨著布料滑落，一條毛茸茸的尾巴便從褲腰後冒了出來，輕輕地晃動了一下。",
        "客廳裡瞬間鴉雀無聲，彷彿空氣都凝固了。",
        "“這是...什麼？”我妹終於開口，聲音裡滿是不可置信。她瞪大了眼睛，看著那條不可能存在的人類身上的尾巴。",
        "我爸皺起了眉頭，像是在努力理解眼前的景象。“銀錦，你這是在惡作劇嗎？這東西是怎麼回事？”",
        "“這不是惡作劇，爸。”我苦笑了一下，指著尾巴無奈地說，“它就是真的從我身上長出來的，我自己也完全搞不清楚這是怎麼回事！”",
        "欣韻一旁低頭看著，臉上帶著複雜的表情。她輕聲說道：“這件事真的不是銀錦能控制的，我們都經歷了奇怪的變化。”",
        "雷飛沉默了一會兒，忽然說道：“或許...這不是單純的身體變異。夢裡的事情，可能並不是巧合。”他的語氣很低，但足夠讓客廳裡每個人都聽得清清楚楚。",
        "我媽輕輕拍了拍自己的胸口，似乎還沒從震驚中恢復過來。她盯著我，半天才開口：“銀錦，這些變化是什麼時候開始的？還有...會不會越來越多？”",
        "我垂下眼，不敢直視他們，只能低聲說：“今天早上髮色變了，然後耳朵就長了...現在又多了尾巴。我不知道接下來還會怎樣。”",
        "整個房間的氣氛變得格外沉重，每個人都陷入了自己的思緒中，無法輕易消化這突然降臨的事實。",
        "我低頭看著自己的尾巴，心中充滿了矛盾的情緒。深吸了一口氣，我抬起頭，語氣低沉卻帶著一絲堅定：“我猜，再過不久，欣韻和雷飛也會長尾巴。”",
        "這句話像是一顆小石頭投入平靜的湖面，瞬間激起波瀾。",
        "欣韻一臉震驚地看著我，手下意識地摸了摸自己的屁股後，動作帶著些許遲疑，但果然感覺到了什麼。當指尖觸及那突出的毛茸茸感時，她的表情瞬間凝固了。臉上的不安毫無保留地展現出來，像是印證了她最不願意相信的猜測。",
        "“天啊...”欣韻低聲呢喃，整個人像是被釘在了原地，嘴唇微微顫抖，“我也有...我也長出來了？”",
        "她的聲音打破了客廳的靜默，雷飛忍不住上前一步，伸手摸了摸自己的後腰，但什麼都沒觸及到。他的表情瞬間鬆了一些，但卻也帶著不安的困惑：“我呢？我是不是也...？”",
        "“不一定，”我低聲說，但目光卻不自覺地掃過他的背後，“但如果真如我猜測的那樣，只是時間問題而已。”",
        "空氣再次變得沉重起來，連牆上的時鐘聲都似乎放大了。這時，我媽猛地站起來，臉色蒼白，語氣裡帶著一絲慌亂：“這不行，我們得去找醫生，找專家，找人幫忙！這到底是什麼東西？怎麼可能會發生在你們身上？”",
        "她的聲音讓所有人的目光都集中到了她身上，而她卻只是不斷地重複：“這不正常，這太不正常了...”",
        "我爸試圖讓她冷靜下來，輕輕地握住她的肩膀：“冷靜點，先聽孩子們說清楚再說。”他的聲音低沉且穩定，像是在用他的鎮定為我們撐起一片安全的空間。",
        "欣韻微微退後一步，似乎也被我媽的反應嚇到了，但她還是抬起頭來說：“阿姨，我們也不知道這是怎麼回事。一切都很突然，就像...就像我們的身體自己在變化。”",
        "我看了看她，又看向雷飛，他雖然什麼都沒說，但臉上寫滿了不安和壓抑的恐懼。我深吸一口氣，試圖讓自己看起來平靜些：“媽，我們知道這一切很難接受，但現在就算找醫生，他們也不一定知道該怎麼辦，而且我也不是很像被抓去秘密科學實驗室當研究材料。與其驚慌，我們更需要時間來弄清楚根本原因。”",
        "“可是...”我媽仍然不甘心地張口，但話還沒說完，我妹忽然開口了：“媽，哥說得對！不如先讓他們搞清楚狀況，然後再決定下一步要怎麼做。”她的語氣帶著一絲不尋常的冷靜，像是在努力讓場面不至於失控。",
        "我媽的反應讓客廳裡的氣氛更加凝重。她的動作很輕，卻像是一種無聲的控訴，讓人感到壓力沉重。她環顧我們每個人的臉，目光中充滿了矛盾的情緒，最後深深地嘆了一口氣，慢慢坐回沙發上。",
        "她雙手緊握著膝蓋，指節因用力而微微泛白，眼神低垂著，像是在努力壓抑心中的焦慮，又像是在努力讓自己冷靜下來接受這一切。",
        "片刻後，她終於開口，聲音有些顫抖，但語氣裡卻透著母親獨有的堅定：“銀錦，欣韻，雷飛...我不知道發生了什麼，也不知道該怎麼面對這種事。但不管怎樣，我只希望你們平安。”",
        "她的話讓我的心暖了一些，同時也感到一絲酸楚。我看了欣韻和雷飛一眼，他們眼裡都閃著複雜的情感，像是感動，又像是鬆了一口氣。",
        "“媽...”我低聲說，“謝謝妳，我真的不知道該怎麼面對，但至少有妳的支持，感覺輕鬆了一些。”",
        "“我們會一起面對。”我爸突然開口，他的語氣堅定得像一座山，“不管是什麼原因，我們都會陪著你們，找到答案。”",
        "這句話像是一股力量注入我們每個人心中，讓壓抑的氣氛緩和了一些。我媽抬起頭，強忍著眼淚，輕輕地點了點頭：“那就從現在開始，我們一起努力。”",
        "這一刻，我感覺到一種無形的力量圍繞著我們。儘管未知的命運讓人心生恐懼，但有家人的支持，我的心中多了一絲堅定。",
        "“謝謝叔叔和阿姨的支持。”他微微低下頭，語氣中充滿了對我父母的感激，“說真的，這種情況下，如果不是你們站在我們這邊，我真不知道該怎麼面對接下來的事情。”雷飛的話語帶著一種真誠的感激，讓整個房間的氣氛更溫暖了一些。",
        "我媽輕輕搖了搖頭，臉上露出一絲勉強的微笑：“雷飛，你不用客氣。不管發生什麼，你們現在是一起的，也就是我們家的一部分。只要我們還能幫得上忙，就一定不會袖手旁觀。”",
        "“對啊，”我爸接過話，語氣堅定地說，“現在最重要的是解決問題。這件事雖然讓人難以接受，但只要我們同心協力，就一定能找到出路。”",
        "雷飛抬起頭，眼中閃著一絲感動，他露出了一個久違的笑容：“真的很感謝你們。我們一定會努力，找到答案。”",
        "我和欣韻都看著雷飛，心中同樣充滿感激和一絲安慰。此時此刻，雖然未知的挑戰依然擺在眼前，但有這樣一個支持我們的家庭，我們彷彿看到了希望的一線曙光。",
        "雷飛剛剛坐下，臉上還帶著對我爸媽感激的神情，但突然間，他微微皺起了眉頭，像是感覺到了什麼不對勁。他下意識地往後挪了挪，重新調整了坐姿，但那種奇怪的感覺依然沒有消失。",
        "“等等...”雷飛低聲嘀咕，手不自覺地伸到自己的屁股後摸索了一下。很快，他的臉上露出了驚訝的表情，整個人僵住了，“不會吧……”",
        "我和欣韻立刻察覺到了他的異樣，迅速轉頭看向他。“怎麼了？”我忍不住問道，語氣中帶著些許的緊張。",
        "雷飛的手還停留在身後，他摸了幾下後，用一種難以置信的語氣說：“我...我好像也長尾巴了。”",
        "“什麼？！”欣韻的聲音一下子提高了幾度，她瞪大了眼睛，立刻站起來跑到雷飛旁邊，伸手朝他的背後確認，“真有嗎？你確定？”",
        "雷飛點點頭，臉上的表情十分複雜，有點慌亂，但又像是早有心理準備一般。他側過身子，讓我們看得更清楚了一些。雖然尾巴還沒完全長出來，但一小截蓬鬆的毛絨已經明顯地從他背後露出。",
        "“看來……”我低聲說，心中五味雜陳，“我們三個的情況，果然是一樣的。”",
        "雷飛無奈地嘆了口氣：“現在只希望尾巴不要太快長出來，至少讓我還能正常穿褲子。”",
        "這句話雖然略帶無奈，但也稍微緩和了緊張的氣氛。我爸媽對視了一眼，雖然眼中還有擔憂，但顯然他們已經做好了心理準備，接受接下來可能會發生的事情。",
        "“那現在呢？”我妹皺著眉問道，語氣裡充滿了期待與些許不安。",
        "我深吸了一口氣，看了一眼欣韻和雷飛，又看向我爸媽，他們的眼神裡帶著複雜的情緒，但更多的是支持和鼓勵。",
        "“現在……”我剛要開口，我媽忽然站了起來，臉上掛著一絲微笑，打斷了這份緊張的氣氛，“現在，來慶生吧！”",
        "她從身後拿出了一個精緻的小馬造型蛋糕，上面插滿了蠟燭，還有“生日快樂”的字樣，周圍用鮮奶油和水果裝飾得十分漂亮。",
        "“既然今天是特別的日子，就先把煩心事放一邊吧！吃蛋糕，開心點！”我媽的語氣輕快，似乎是刻意想讓氣氛變得輕鬆一些。",
        "大家一時之間愣住了，但隨即我妹最先反應過來，她眼睛一亮，輕聲說道：“對啊，今天可是哥和欣韻姐姐的生日！我們總不能讓這些事情破壞了氣氛。”",
        "欣韻也微微一笑，點了點頭：“阿姨說得對，先慶生吧，反正煩惱也不會一下子就解決。”",
        "雷飛看了一眼蛋糕，無奈地笑了笑：“好吧，難得有蛋糕吃，總得給壽星一點面子。”",
        "隨著大家的反應，氣氛終於緩和了下來。我媽將蛋糕放在桌上，插好蠟燭，點燃後輕輕推到我面前。燭光搖曳，映照著每個人臉上微微的笑意，雖然其中還夾雜著些許的不安，但此刻的溫暖是真實的。",
        "“快許願吧，兩位壽星！”我妹催促著，眼中閃著期待的光芒。旁邊的棉花也在對我喵喵叫，蹭著我彷彿也在祝我生日快樂。",
        "我看著眼前的蛋糕和搖曳的燭光，心中忽然升起一股複雜的情感。面對未知的未來，現在能有家人和朋友陪伴在側，已經是一種難能可貴的幸福。我低頭輕笑了一聲，轉頭看了一眼欣韻，她微笑地回看我，臉上少了些不安，多了些堅定。",
        "“那我先來許個願吧！”我輕輕閉上眼睛，對著大家說道，“希望不管未來怎麼變化，我們都能一起面對，一起找到答案。”",
        "我抬起頭，看著大家的臉龐，他們的笑容中充滿了溫暖和支持。輪到欣韻時，她猶豫了一下，輕聲說：“那我也許個願望吧。”閉上眼，她小聲說了些什麼，最後我們一起吹熄了蠟燭。",
        "“來來來，切蛋糕了！”我媽笑著說，將蛋糕刀遞給我，“壽星切的第一刀要小心，別把蛋糕弄倒囉！”",
        "“哥，記得第一塊要給我啊！”我妹在旁邊鬧著，逗得大家都笑了起來。雷飛則一邊搖頭一邊假裝搶著說：“那可不行，第一塊應該是我這個最支持你的人先拿到。”",
        "棉花不甘寂寞地喵喵叫著，四處蹭來蹭去，彷彿也在參與這場慶生的熱鬧中。我伸手揉了揉她的頭，忍不住笑出聲：“好了好了，第一塊是留給棉花的，怎麼樣？”",
        "這句話逗得大家哈哈大笑，壓抑了許久的緊張情緒終於徹底散去。我心中感到一陣釋然，雖然未來的變化依然未知，但至少此刻，這份溫馨的陪伴是真實的，是無法被奪走的。",
        "在吃完蛋糕後我提議。“今天也真的是有點累了。”我揉了揉眼睛，覺得一整天的情緒波動讓我精疲力盡。看著大家似乎都放鬆了些，我不禁輕輕地笑了笑，“好了，大家都去休息吧，今天真是辛苦了。我家三樓和四樓都有空房，如果想休息的話，隨時可以去。”",
        "我看到大家都有些疲憊的樣子，雷飛也打了個哈欠，欣韻則輕輕點了點頭，似乎對這個提議感到放鬆。媽媽也微笑著，對我說：“你也休息一下，明天再好好整理一下心情。這麼多事，一次處理不過來，慢慢來。”",
        "妹妹則笑著提議：“那我去三樓，想要待安靜一點的地方。大家都去吧，反正今晚就是大家放鬆的時刻。”",
        "聽到大家這麼說，我心裡的壓力也稍微減輕了一些。雖然明天還有很多未知的事等著我們處理，但至少今晚，大家可以在這裡稍作休息，重新整理情緒，為接下來的挑戰做好準備。",
        "“好，那我們明天再說。”我輕輕說道，努力保持平和的語氣，“大家都好好休息，謝謝你們的理解。”",
        "當大家各自走向自己選擇的房間時，我心裡暗自感謝著他們。或許，這些突如其來的變化會讓我們面臨許多難以預測的困難，但至少在這一刻，我們還有彼此的支持。這份溫暖，無論未來會如何，我都會牢牢記住。",
        "我和欣韻等大家都上樓後，關了客廳的燈，接著回到二樓的主臥。當我們走進二樓的主臥室，關上門後，整個房間內瞬間陷入了一片寧靜。這樣的寧靜在經歷過一天的紛亂與不安後，讓我感到一絲難得的平和。我深吸一口氣，放鬆身心，感覺到今天的所有情緒和壓力似乎都被這片寧靜所吸收。",
        "“今天真是...太多事情發生了。”我輕聲說，語氣中帶著些許疲倦。“一切都變得那麼難以理解，甚至連我自己都不確定該怎麼辦。”",
        "欣韻坐在床邊，輕輕地撫摸著她的手指，然後微微一笑，“我們都處於一個很陌生的境地，沒有誰能完全了解這種感覺。但不管怎樣，至少我們還有彼此，一起面對所有的挑戰。”",
        "她的話讓我心頭微微一暖。雖然我們依然面臨著未知的未來，但這份來自女友的支持，讓我對明天多了一些信心。",
        "“對，”我點點頭，“至少我們不孤單，這一點就足夠了。”",
        "我們相視一笑，在這片屬於彼此的寧靜中，似乎所有的困惑與恐懼都暫時被放在了一邊。今晚，我們不再討論那些讓人心力交瘁的事情，而是選擇在這份短暫的平靜中稍作休息，準備迎接明天的挑戰。",
        "“欸，對了，剛剛許的願望到底是什麼啊？”我挑起眉毛，故作神秘地問道，心裡卻已經開始期待她的回答。",
        "她瞥了我一眼，輕輕一笑，露出一絲狡黠的表情，然後故作神秘地說：“這個嘛，得留個小秘密，不能隨便告訴你。”",
        "“喔，是嗎？”我故意露出一副不信的樣子，隨即做出搔癢的姿勢，向她靠近。",
        "她眼神閃了閃，瞬間露出警覺的神情，然後她有些嚇得後退一步，笑著說：“來啊，有種你來搔我啊！”",
        "我笑了笑，慢慢放下手，故作失望的樣子：“怎麼，這麼怕我嗎？我可不會那麼輕易放過你喔。”",
        "她撇撇嘴，笑意仍然停留在眼角：“誰說我怕了，只是怕你搔不著我的秘密。”她的語氣裡帶著一絲挑釁，也讓氣氛更加輕鬆起來。",
        "我忍不住笑出聲，這樣的互動似乎又讓我們回到了最初無憂無慮的時光，至少在這一刻，我們都能忘掉那些困擾，享受這段難得的平靜。",
        "“好啦，妳的秘密就先留著，”我故作無奈地說，“但希望我能早點知道，畢竟我也是壽星。”",
        "她又輕輕笑了，撫摸了摸我的頭：“放心吧，所有的秘密總有一天會揭曉的。”",
        "我們的笑聲在房間裡回蕩，這一刻，我們不再談論那些讓人焦慮的事情，只是享受著彼此的陪伴。",
        "我向欣韻示意，笑著回答：“對啊，今天真是累壞了。洗個澡放鬆一下，然後好好休息吧！”",
        "欣韻微微笑了笑，隨後也走向浴室，兩人都不再說話，享受著這片刻的安靜。很快，我們洗漱完畢，各自回到床上，準備結束這一天。",
        "臥室裡的燈光柔和，外面的夜色安靜，我和欣韻都沉浸在各自的思緒中，心情似乎也隨著疲勞逐漸平靜。雖然未來充滿未知，但此刻，這份平靜是那麼珍貴。",
        "我們閉上眼，讓自己的呼吸逐漸放慢，最終進入了夢鄉。",
        
        "<div class='line'></div>",
        "<div style='margin-bottom: -1rem; font-weight: bold;'>備註：</div>",
        "<div style='margin-bottom: -4rem;'>向家人甚至是父母坦白，是一個大挑戰，至少主角們已經跨過那道檻了！</div>",
    ];

    paragraphs.reverse().forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        title.insertAdjacentElement('afterend', paragraph);
    });

//創作期間2025/01/16-2025/01/17