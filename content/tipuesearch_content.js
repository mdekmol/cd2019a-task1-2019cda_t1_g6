var tipuesearch = {"pages": [{'title': '執行規劃', 'text': '\n 概略規劃： \n 12 週 - 完成各組員應完成任務分配 \n 13 週 - 回報各週任務狀況、操作 影片上傳至 Youtube \n 14 週 - 將所有影片上傳至 Youtube, 內容送回組分支, 準備與 master 分支合併 \n 15 週 - 確認各組員已經完成所有任務與 html 及 pdf 專案報告製作. \n 16 週 - 完成各組員的期末簡報影片上傳與嵌入, 完成分組專案報告 pdf 檔案上傳與連結 \n 17 週 - 在課堂上進行分組簡報 \n 細部規劃： \n 送球機構設計與模擬 \n 第十四週> 製作運球機構>完成 \n 第十五週>足球台各零件配合>完成 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 送球機構配合>完成 \n 手足球模擬 \n 第十三週>導入繪製零件(手足球、送球機構) \n 第十四週>各零組件從動、主動設定完成 \n 第十五週>送球機構完成動作設定 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0手足球進入最後設定檢查 第十六週>手足球模擬設定完成 \n 零件尺寸分析 \n 第十一週> 設計足球台/送球機構 \n 第十三週> 設計零件功能：伸縮、旋轉、移動 \n 第十四週>分工繪製各細項零件 \n 第十五週>集合各部零件設計，匯入配合 \n 系統功能 \n 第 十三 週>零組件功能程式設定 \n 第十四週>討論各分項細節問題 \n 第十五週>修復配合後各零組件程式問題 \n 製作pdf和投影片 \n 第十五週>討論各人員分配製作內容 \n 第十六週>製作所負責之任務 \n 第十七週>整合各組所作之內容、校閱內文 \n \n', 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案結論 \n', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': 'Onshape繪製手足球零件 \n 球檯 \n \n 桿子固定器 \n \n 放球口 \n \n 桿子 \n \n 把手 \n \n 球門 \n \n 球員 \n \n 由於原本球員形狀過於複雜導致模擬不順 \n 替換為以下形狀 \n \n \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': '細部設計與 BOM', 'text': '', 'tags': '', 'url': '細部設計與 BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '鍵盤雙人對打程式 \n import vrep import sys, math import keyboard  #導入鍵盤 # child threaded script:  # 內建使用 port 19997 若要加入其他 port, 在 serve 端程式納入 #simExtRemoteApiStart(19999)   vrep.simxFinish(-1)   clientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5) if clientID!= -1:  print("Connected to remote server") else:  print(\'Connection not successful\')  sys.exit(\'Could not connect\') \n KickBallV = 360  R_KickBallVel = (math.pi/180)*KickBallV B_KickBallVel = -(math.pi/180)*KickBallV \n errorCode,lrev_handle=vrep.simxGetObjectHandle(clientID,\'lrev\',vrep.simx_opmode_oneshot_wait) errorCode,lmo_handle=vrep.simxGetObjectHandle(clientID,\'lmo\',vrep.simx_opmode_oneshot_wait) errorCode,rrev_handle=vrep.simxGetObjectHandle(clientID,\'rrev\',vrep.simx_opmode_oneshot_wait) errorCode,rmo_handle=vrep.simxGetObjectHandle(clientID,\'rmo\',vrep.simx_opmode_oneshot_wait) #定義平移軸旋轉軸 \n def a1():  errorCode=vrep.simxSetJointTargetVelocity(clientID,lmo_handle,20,vrep.simx_opmode_oneshot_wait) def d1():   errorCode=vrep.simxSetJointTargetVelocity(clientID,lmo_handle,-20,vrep.simx_opmode_oneshot_wait) def w1():   errorCode=vrep.simxSetJointTargetVelocity(clientID,lrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait) def s1():  errorCode=vrep.simxSetJointTargetVelocity(clientID,lrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait) def j2():  errorCode=vrep.simxSetJointTargetVelocity(clientID,rmo_handle,-1.5,vrep.simx_opmode_oneshot_wait) def l2():   errorCode=vrep.simxSetJointTargetVelocity(clientID,rmo_handle,1.5,vrep.simx_opmode_oneshot_wait) def i2():   errorCode=vrep.simxSetJointTargetVelocity(clientID,rrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait) def k2():  errorCode=vrep.simxSetJointTargetVelocity(clientID,rrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait) #定義平移軸及旋轉軸的速度 \n vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait) #開始 \n while True:  try:  if keyboard.is_pressed(\'a\'):  a1()  elif keyboard.is_pressed(\'d\'):  d1()  elif keyboard.is_pressed(\'w\'):  w1()  elif keyboard.is_pressed(\'s\'):   s1()  elif keyboard.is_pressed(\'4\'):   j2()  elif keyboard.is_pressed(\'6\'):  l2()  elif keyboard.is_pressed(\'8\'):  i2()  elif keyboard.is_pressed(\'5\'):   k2()  else:  pass  except:  break #執行按鍵 \n \n', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '送球機構每週進度', 'text': 'W12軌道設計 \n 軌道1 \n \n 軌道2 \n \n 軌道3 \n \n W13送球機構設計 \n 送球機構1 \n \n 送球機構2 \n \n 送球機構3 \n \n W14收球底版 \n \n \n', 'tags': '', 'url': '送球機構每週進度.html'}, {'title': '每週進度問題討論', 'text': 'W13 \n 上網找尋該機構相關資料 \n 討論繪製 送球機構雛形 \n 分工後各自設計零件 \n W14 \n 組員討論機構設計，繪製出送球機構用以組合於手足球檯上 \n \n \n \n \n W15 \n 原先設計送球機構位置軌道配置 \n \n 在軌道末端處本要接上送球機構上去，但因送球機構會與球桿位置造成干涉，所以後續組員討論後決議改變軌道與送球機構台位置。 \n 可能利用架高軌道解決與球檯與球桿干涉問題 \n 如下圖： \n \n', 'tags': '', 'url': '每週進度問題討論.html'}, {'title': '送球機構設計與模擬', 'text': '', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '系統功能展示', 'text': '', 'tags': '', 'url': '系統功能展示.html'}, {'title': '手足球自動回擊', 'text': '\n', 'tags': '', 'url': '手足球自動回擊.html'}, {'title': 'Lua鍵盤控制球員', 'text': '\n \n 檔案下載 \n 參考資料: https://www.youtube.com/watch?v=Lc4GaaS7-jA \n', 'tags': '', 'url': 'Lua鍵盤控制球員.html'}, {'title': '手足球電腦對人python', 'text': '\n 檔案下載: https://github.com/mdekmol/cd2019a-task1-2019cda_t1_g6/tree/gh-pages/vrep%E6%AA%94%E6%A1%88/handfootball(pc) \n', 'tags': '', 'url': '手足球電腦對人python.html'}, {'title': '結案報告', 'text': '', 'tags': '', 'url': '結案報告.html'}, {'title': '專案口頭簡報', 'text': '', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '\n', 'tags': '', 'url': '專案報告書.html'}, {'title': '期中課程內容', 'text': '操作影片課程內容整理 \n', 'tags': '', 'url': '期中課程內容.html'}, {'title': '簡介', 'text': '協同產品設計實習-AG6 \n 課程初衷 「將技術放在學生體驗的最前沿」 \n 課程起源： https://2019wcm.blogspot.com/2019/01/blog-post.html \n', 'tags': '', 'url': '簡介.html'}, {'title': '組員名單', 'text': '組長:仝允丞 40623150 \n 組員:簡稜雅 40623107 \n 組員:廖彥霖 40623147 \n 組員:黃盟泰 40623137 \n 組員:黃子軒 40623136 \n 組員: 陳霖\xa0 \xa0 \xa0 40623155 \n 組員:林國蓁\xa0 40423122 \n 組員:蔡憲佳\xa0 40423249 \n BLOGGER: https://mde2019ag6.blogspot.com/ \n', 'tags': '', 'url': '組員名單.html'}, {'title': '建立隨身系統', 'text': '藉由隨身系統，以了解隨身系統(P37)運作方式， \n 學習系統的操作使用與設定，打造所需的隨身系統環境 。 \n', 'tags': '', 'url': '建立隨身系統.html'}, {'title': '新增資料夾', 'text': '建立一個資料夾 \n 已用後續創建data資料夾來連結Y槽內容 \n', 'tags': '', 'url': '新增資料夾.html'}, {'title': 'SciTE使用', 'text': '安裝SciTE檔案至剛才所創立的data資料夾中 \n 使用windos的 \xa0 full download版本 \n 下載 SciTE程式：: https://www.scintilla.org/SciTEDownload.html \n 開啟SciTE>設定檔案內容 \n \n 使用Ctr+F找到"code.page"並改為下圖所示 \n \n \n', 'tags': '', 'url': 'SciTE使用.html'}, {'title': '安裝Python入可攜系統', 'text': '1.安裝時點選自定義安裝 \n \n 2.勾取所需功能選擇 \n \n 3.設定安裝路徑 \n \n 4. 利用" HxD 二位元編輯器軟體 " \n 設定 >\xa0 C:\\p37\\Scripts\\pip.exe \n 使用 Ctr+F 功能找尋 C： \\p37 並改為 Y：\\p37\\ \n 如下圖紅字處 \n \n 更改完成後將p37資料移至data資料夾 \n', 'tags': '', 'url': '安裝Python入可攜系統.html'}, {'title': 'start.bat製作', 'text': '利用安裝的 SciTE 製作 start.bat 檔案 \n \n', 'tags': '', 'url': 'start.bat製作.html'}, {'title': 'stop.bat製作', 'text': '同 start.bat製作 \n 利用安裝的 SciTE 製作 stop.bat 檔案 \n \n', 'tags': '', 'url': 'stop.bat製作.html'}, {'title': '差異比對', 'text': '在製作過程中想要快速了解兩個檔案之間的差異， 可以使用 Kdiff3 程式來快速比對出不一樣的地方。 \n', 'tags': '', 'url': '差異比對.html'}, {'title': '導入ungit', 'text': '1. 下載\xa0 kmol_2019.7z , 接著再下載 \xa0 nodejs_with_ungit.7z \xa0： \n \n 圖片來源： 點此觀看 \n 2. 將 nodejs 放入 kmol_2019 的 data 目錄中： \n \n 3. 設定啟動 start.bat 中的 ungit 命列列搜尋路徑(start_cadlab.bat同樣)： \n 路徑指令：set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n \n *此在"SciTE"程式編撰 \n \n 4. 將 path8 納入 path 設定： \n \n 5. 設定 USERPROFILE 環境變數 \n 路徑指令： set USERPROFILE=%Disk%:\\home \n \n 6.關閉重啟查看是否ungit指令可否使用： \n \n 導入影片： https://www.youtube.com/watch?v=lB-spECfhr8 \n 詳細步驟網頁： https://2019wcm.blogspot.com/2019/03/ungit.html \n \n \n ------------------------------------------------------------------------------------------------------------- \n *首推時發現錯誤bug，問題如下： \n \n 查詢錯誤後發現是有一個檔案名叫"index.lock"去擋到上學期所學的版本推法。 \n 2019.03.11解決辦法： \n 移除"Y:\\tmp\\ag6\\.git"內的 " index .lock"檔 \n \n 但不知道此阻擋的檔案是否是為了讓我們利用ungit去推送、編輯網頁，此有待下次上課詢問老師，但當下解決辦法便為移除此檔。 \n 參考網址： 請點此 \n', 'tags': '', 'url': '導入ungit.html'}, {'title': '可攜程式懶人包', 'text': '課堂上老師釋出可攜系統懶人包於課程網站 \n 課程網站連結： https://2019wcm.blogspot.com/ \n 懶人包版可攜系統： 請點此 \n', 'tags': '', 'url': '可攜程式懶人包.html'}, {'title': 'Portable Python', 'text': '進入 mde.tw ，進入 2019 網際內容管理課程示範網 誌 ，點入 portable python \n 開始進入本次的編輯教學網頁： \n \n ------------------------------------------------------------------------------------------------------------- \n 使用 \n git config --edit --system \n 跳出此畫面 \n \n 往下移動，使用按鍵"J"到最底下 \n \n 連按兩次d鍵，刪除此行 \n 接著按下Esc >  輸入 : wq \xa0 \xa0(儲存剛剛所刪之動作) \n 接著於Y:tmp下輸入"sh"會跑出下圖： \n \n 接著於scite貼上 \n ssh-keygen -t  rsa  -b 4096 -C "This is my key" \n 修改 "" 內註解 \n \n 修改後貼上 \n \n 查看y:home底下是否有.ssh資料夾 \n 若沒有就使用 \n mkdir  .ssh \n 以用來建立資料夾 \n \n 接著就持續Enter以建立key \n \n 後續到 \n Y:\\home\\.ssh \n 查看是否有無建立成功 \n \n 使用scite打開"id_rsa.pub"，把內容key複製起來 \n 開啟github>登入個人帳號>setting>SSH and GPG keys>新增KEY \n \n 接著輸入下圖步驟： \n \n 完成後會出現 \n \n 教師示範影片 \n \n', 'tags': '', 'url': 'Portable Python.html'}, {'title': '網路故障排除', 'text': '遇到學校伺服器IP掛掉問題 Step1.關閉網路第四版協定 \n \n 打開IPV6 \n 修改內容設定，打開DNS並輸入 \n 2001:b000:168::1 \n \n 修改proxy內容 \n [2001:288:6004:17::4] \n \n 完成修改後便能上網 \n', 'tags': '', 'url': '網路故障排除.html'}, {'title': '組員個人作業', 'text': '', 'tags': '', 'url': '組員個人作業.html'}, {'title': '40623136', 'text': '\n \n \n 心得:這半學期學到了很多新的東西,像是建立可攜式系統,ungit,vrep等等.而vrep這個程式在上學期就有上到,但我是負責繪圖,所以並沒有深入了解.所以這學期是第一次學習使用vrep,學習的過程中,因為都是英文,因此我不只是了解如何使用vrep,也學到了很多的單字. \n', 'tags': '', 'url': '40623136.html'}, {'title': '40623137', 'text': '\n \n \n 心得 : 剛開始學習vrep時就遇到問題，那就是全部都是英文的，光是要搞懂就花了很多時間，開始照著教學的步驟一步一步做的時候時常做到一半還要翻譯中文，前半部都很順利地做出來，到後面要設定感測器跟鏡頭的時候遇到很多問題，途中求助了很多同學後來還是順利的完成，結果也相當的順利。 \n', 'tags': '', 'url': '40623137.html'}, {'title': '40623147', 'text': '自製可攜系統 \n v-rep bubbleRob實習 \n 心得:這學期一開始就在學習vrep，也馬上就 遇到問題，很多東西都沒那麼熟悉，而且手冊也是英文的，也些不懂的單字也要用英英字典，慢慢地了解這個手冊的項目，讓我學會的這個程式能做些甚麼，很多地方都學習，有些做得比較快的同學，我就多花時間找他們求助，也有跟我一樣遇到瓶頸的同學，我們就一起討論，摸索手冊想表達的東西，最後就做出來了。 \n VirtualBox創建影片 \n \n', 'tags': '', 'url': '40623147.html'}, {'title': '40623150', 'text': '自製可攜程式系統 \n Bubble Rob Vrep模擬 \n \n', 'tags': '', 'url': '40623150.html'}, {'title': '40623107', 'text': '自製可攜程式系統 \n Vrep製作及模擬過程 \n \n bubbleRob檔案 \n', 'tags': '', 'url': '40623107.html'}, {'title': '40623155', 'text': '自製可攜程式系統 \n \n ----------------------------------------------------------------------------- \n Vrep bubble \n 心得： 利用了兩個禮拜多時間來稿懂英文的步驟說明，並藉著一步步地操作後才做出這次練習，在中英對照下相互交錯著看，並一次次詢問同學如何製作才能順利地做出來。 這次的vrep練習讓我更加理解到了如何做動程式、感測器如何運作等等....。 這次的題目，我建立了一個球體並放上感知器後就能讓圓球體藉由撞擊到圓柱後後感測轉向，而擺設的圓柱間距則不能讓球體跑離這範圍內，再藉由vision sensor能夠即時看到 球體目前前方狀況。 ----------------------------------------------------------------------------------- \n VirtualBox建立虛擬主機 \n \n', 'tags': '', 'url': '40623155.html'}, {'title': '40423122', 'text': '\n', 'tags': '', 'url': '40423122.html'}, {'title': '40423249', 'text': '\n', 'tags': '', 'url': '40423249.html'}, {'title': '問題與討論', 'text': '', 'tags': '', 'url': '問題與討論.html'}, {'title': 'Git手冊', 'text': '', 'tags': '', 'url': 'Git手冊.html'}, {'title': '電子書', 'text': 'Git pdf手冊 \n 線上觀看手冊 \n https://git-scm.com/book/zh-tw/v2 \n', 'tags': '', 'url': '電子書.html'}, {'title': '手冊重點', 'text': '開始 \n 版本控制系統 \n \n 利用RCS指令可控制任一版本資料，其 工作原理是在硬碟上保存一堆特殊格式的補丁集合，通過套用功能，便可以重新產生出每個版本的檔案內容。 \n Git控制方法分成 集中化與分散式版本控制系統 \n 集中化版本控制系統 \n \n 好處： \n 1.清楚了解分組內各成員所做進度 2.管理員統一控制所有開發者權限 3.各用戶端統一使用統一版本系統，好管理 壞處： 1.中央伺服器發生故障，各開發者便無法協同合作 2.統一集中資料會有遺失資料風險 \n 分散式版本控制系統 因集中化控制的不便，進而衍化出分散式控制系統 \n 優點： 1.任一協同伺服器故障，事後都能以任一用戶端鏡像還原 2.能與許多遠端倉儲互動，使不同地方群組能在不一樣的地方完成同一專案協同合作 3.階層式的分工合作 \n ------------------------------------------------------------------------------------------------------------- \n Git完整性 \n 1.Git 中所有的物件在儲存前都會被計算校驗碼（checksum）並以校驗碼參照物件。 2.計算較驗碼 機制稱為 SHA-1 雜湊演算法。 一個校驗碼是由 40 個 16 進位的字母（0–9 和 a–f）所組成，Git 會根據檔案的內容和資料夾的結構來計算。\xa0 3.\xa0Git 的資料庫內，每個檔案都是用其內容的校驗碼來儲存，而不是使用檔名。 \n Git狀態 \n 1.已提交（committed）： 檔案己安全地存在你的本地端資料庫。 \n 2. 已修改（modified）： 檔案已被修改但尚未提交到本地端資料庫。\xa0 \n 3. 已預存（staged）： 已預存代表這檔案將會被存到下次你提交的快照中。 \n \n Git工作流程 \n 1.你在你工作目錄修改檔案。 \n 2.預存檔案，將檔案的快照新增到預存區。 \n 3.做提交的動作，這會讓存在預存區的檔案快照永久地儲存在 Git 目錄中。 \n Git基礎 \n 取得倉儲 \n 命令格式： git clone [url] 1. https:// 2.git:// 3.user@server:path/to/repo.git \n 檢查檔案狀態 \n 命令格式：git status 用來偵測哪些檔案處在什麼樣的狀態下的主要工具 \n 使用 git status -s \xa0 或 \xa0 git status --short會得到一種較精簡的修改 新增檔案 \n 命令格式： git add. 用以追蹤新的檔案、預存檔案使用 \n 提交修改 \n 命令格式：git commit \n 預備提交本次變更使用 \n \n 移除檔案 \n \n 命令格式： git rm \n 從預存區中移除已追蹤檔案 \n \n 變更檔案 \n \n \n 命令格式：git mv file_from file_to\n 於 \xa0Git 中重新命名一個檔案 \n \n \n 復原檔案 \n \n 命令格式：git commit --amend \n 復原上一個提交內容 \n \n 推送檔案 \n \n 命令格式：git push \n 完成近端內容，推回上游 \n \n \n 新增別名 \n \n 命令格式：git config \n 替指令設定別名 \n \n \n 標籤 \n \n 命令格式：git tag \n 用此功能來標出發行版本 \n \n 檢視遠端 \n \n 命令格式：git remote \n 檢視已設定的遠端版本庫， 列出每個遠端版本庫的「簡稱」 \n \n 使用Git分支 \n 用於 \n \n \n 開發一個網站。 \n \n \n 建立一個分支以實現一個新故事。 \n \n \n 在這個分支上進行開發。 \n \n \n 用於分支（branch）與合併（merge）工作流程 \n 建立分支 \n 使用指令： git branch \n 此會在 目前提交上新建一個指標 \n \n 切換分支 \n \n 使用指令： git checkout \n 切換到一個已經存在的分支 \n \n 分支歷史 \n \n 使用指令： git log \n 查出提交歷史，顯示分支指標所在與歷史如何被分離開來。 \n \n \n 伺服器上的Git \n 通訊協定種類： \n Local protocols \n \n \n 優點： \n 1.可將倉儲副本傳送到各開發者具共享權限的位置， 並同於設置其他共享目錄一樣設置存取、編輯的權限。 \n 2.運用git指令 ，使共同開發者更方便推送到遠端，同時也方便存取使用。 \n 缺點: \n 1.共享存取通常更難以從多個位置進行設定和存取。 \n 2.若使用個人電腦的話，則需安裝遠端系統，否則會連基本網路存取都還要來得困難與慢上許多。 \n 3.每個共同編寫者都具有對“遠端”目錄的訪問權限，無法限制或阻擋使用者更改或刪除內部Git文件或破壞遠端倉儲。 \n SSH通訊協定( Secure Shell ) \n 優點: \n 1.SSH相較容易設置，且保護程式較多。 \n 2.透過SSH存取資安是安全的，所有數據傳輸都經過加密和身份驗證。 \n 3.像HTTP/S、Git與Local protocols一樣，讓數據在傳輸前盡量接近。 \n 缺點: \n 1.無法通過它對倉儲進行匿名存取。 \n 2.如果想允許匿名存取並且仍使用SSH，則需設定SSH以利推送，但其內容可能會被其他人獲取。 \n Git協定 \n 優點: \n 1.目前最快的網絡傳輸協議。 \n 2.若為共同倉儲或為不需身份驗證進行讀取，則需設定Git保護程式。 \n 3.Git倉儲可供所有人clone。 \n 缺點: \n 1.缺乏身份驗證。 \n 2.通常為唯一存取權限(即推送、寫入等)，若開啟推送存取權限，則擁有此URL的任何人都可推送到倉儲內。 \n HTTP \n 可分為兩種，分別為新制與舊制。 \n 新制: \n 與SSH或Git協定的運行方式非常相似，它可以設置為像git://協議一樣匿名服務，也可以通過SSH協議等身份驗證和加密來推送。 \n 舊制: \n 直接將Git倉儲提供設置為來自Web服務器的普通文件。優點於設置的簡單性。但此外，任何皆可訪問倉儲Web服務器的人都可以存取此倉儲。 \n 以下優缺點於新制HTTP \n 優點: \n 1.能夠使用用戶名和密碼進行身份驗證。 \n 2.通過HTTPS以讀取方式提供倉儲。 \n 缺點: \n 與某些服務器上的SSH相比，在HTTP/S上使用Git可能會有點棘手。 \n -------------------------------------------------------------------------------------------- \n 在伺服器上佈署Git： \n 要clone倉儲以新增倉儲，使用該--bare選項運行clone命令。將指令尾端輸入.git。 \n 使用指令： \xa0git clone --bare my_project my_project.git \n \n 使用後 在目錄中會有Git目錄數據的副本my_project.git。 \n \n 以下指令等同於上述指令，但文件部分會存在些許細微差別。 \n 使用指令：cp -Rf my_project/.git my_project.git \n \n 將倉儲複製到下來設置新的倉儲： \n 假設/srv/git存在於該服務器上，並已設置一個名為git.example.com的SSH服務器，而希望將所有Git存儲庫存儲在該/srv/git目錄下。 \n \n 使用指令：scp -r my_project.git  user@git.example.com:/srv/git \n \n 接著對有這目錄及SSH的權限的用戶便可以clone，也有推送訪問權限。 \n \n 使用指令： git clone user@git.example.com:/srv/git/my_project.git \n \n 如果git init使用該--shared選項執行命令，Git將自動將寫入權限正確添加到倉儲。 \n \n 使用指令： \n ssh  user@git.example.com \n cd /srv/git/my_project.git \n git init --bare --shared \n \n ----------------------------------------------------------------------------------------------------------- \n 個人的SSH公鑰： \n \n 輸入指令後有出現文件為id_dsa(id_rsa)為自己私人的密鑰，而文件後方多了.pub則為公鑰。 \n \n 如下： \n ~/.ssh為目錄 \n \xa0cd ~/.ssh \n \xa0ls \n authorized_keys2 \n id_dsa \n known_hosts \n config \n id_dsa.pub \n *若無金 鑰時，可輸入下列指令來創建。 \n 指令：ssh-keygen \n 接著會需要確保密鑰（.ssh/id_rsa）的位置，需輸入兩次密碼，不需要則可空白。 \n 如用戶需要複製有公鑰文件的內容，輸入下列指令。 ~/.ssh/id_rsa為公鑰位置 \n cat ~/.ssh/id_rsa.pub \n ----------------------------------------------------------------------------------------------------- \n 伺服器的設定： \n 如需設定SSH存取的服務端，則需使用下列方式來進行身分驗證。 \n << git為用戶名、 .ssh為目錄、authorized_keys為驗證>> \n 指令： \n sudo adduser git \n su git \n cd \n mkdir .ssh && chmod 700 .ssh \n touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys \n 如需要新增開發人員的SSH公鑰，並將其保存到臨時文件中。 指令如下: \n <<範例為john為開發人員的SSH公鑰>> \n cat /tmp/id_rsa.john.pub \n 在一個沒有工作目錄的情況下設置一個空儲存庫。 \n cd /opt/git \n mkdir project.git \n cd project.git \n git init --bare \n 將文件推送至遠端倉儲。 \n <<myproject為文件>> \n ----------------------------------------------------------------------------------------- \n Git常駐程式 \n 若不想將所有人都新增SSH金鑰時，以維護近端的方式運行下列指令: *此方法設定方便而快速，但因沒有密鑰的身分驗證，所以任何人都可以存取裡面的內容* \n git daemon --reuseaddr --base-path=/opt/git/ /opt/git/ \n --reuseaddr是允許服務器重新啟動而無需等待舊連接超時 \n --base-path是允許人們克隆項目而不指定整個路徑 \n >>最後的路徑則需宣告Git維護程序在哪查找所要導出的倉儲<< \n 若防火牆正執行，還需在正在設置它的資料夾上的檔案9418處打一個洞。 但建議將此維護方法作為擁有倉儲的唯讀權限的用戶使用。 \n 在Ubuntu計算機上，您可以使用Upstart的腳本，並在文件中放入腳本。 \n *文件為/etc/init/local-git-daemon.conf* \n 腳本: \n start on startup \n stop on shutdown \n exec /usr/bin/git daemon \\ \n --user=git --group=git \\ \n --reuseaddr \\ \n --base-path=/opt/git/ \\ \n /opt/git/ \n respawn \n 要在不重新啟動的情況下運行計算機時 \n initctl start local-git-daemon \n 允許未驗證的用戶存取指定的倉儲。 \n cd /path/to/project.git \n touch git-daemon-export-ok \n \n \n 分散式的Git \n 分散式工作流程 \n 分散式工作流程分為三種 \n 集中式工作流程、整合式管理員工作流程、企業型工作流程 \n 集中式工作流程： \n 如前者有人推送，後者必須合併前者的版本，不然會無法推送至儲存庫，是因為避免前者的資料被覆蓋。 \n 整合式管理員工作流程： \n 倉儲維護人=A、開發人員=B \n A推送到公共倉儲。 \n B clone該倉儲並進行改動，並推上他們的版本。 \n B向A發送一封電子郵件，要求A提取更改。 \n A將B的repo添加為遠端，合併原先的資料，推送到主倉儲。 \n 企業型工作流程： \n 老闆=A、副手=B、開發人員=C \n 正常的C會在他們主題的分支上工作，並在重新定義他們在master上的工作。而master分支是獨裁者的分支。 \n B將C的主題分支合併到B的master分支中。 \n A將B的master分支合併到A的master分支中。 \n A將他們推master送到倉儲，以便其他C可以對其進行重新定義。 \n ------------------------------------------------------------------------------------ \n 分散式的Git-對專案進行貢獻 \n 個人：進入分支後的歷史圖(示意圖) \n \n 團體：整合分支圖(示意圖) \n \n \n', 'tags': '', 'url': '手冊重點.html'}, {'title': 'Ungit', 'text': '', 'tags': '', 'url': 'Ungit.html'}, {'title': 'Open', 'text': '輸入ungit \n \n 開啟後頁面 \n \n', 'tags': '', 'url': 'Open.html'}, {'title': 'Commit&Push', 'text': '有任何更新，這邊會跳出此視窗，可以用來做COMMIT的動作 \n 在此更新commit可輸入中文，更能表達出想commit的東西 \n \n 在title裡輸入commit註解，接著按下 按下commit&push \n \n 輸入github帳號密碼 \n \n 輸入完後便推送完成 \n \n', 'tags': '', 'url': 'Commit&Push.html'}, {'title': '期中報告', 'text': '', 'tags': '', 'url': '期中報告.html'}, {'title': '40623107-1', 'text': '\n', 'tags': '', 'url': '40623107-1.html'}, {'title': '40623137-1', 'text': '\n', 'tags': '', 'url': '40623137-1.html'}, {'title': '40623147-1', 'text': '\n', 'tags': '', 'url': '40623147-1.html'}, {'title': '40623150-1', 'text': '\n', 'tags': '', 'url': '40623150-1.html'}, {'title': '40623155-1', 'text': '\n', 'tags': '', 'url': '40623155-1.html'}, {'title': '40623136-1', 'text': '\n \n', 'tags': '', 'url': '40623136-1.html'}, {'title': '40423122-11', 'text': '\n', 'tags': '', 'url': '40423122-11.html'}, {'title': '40423249-1', 'text': '\n', 'tags': '', 'url': '40423249-1.html'}]};