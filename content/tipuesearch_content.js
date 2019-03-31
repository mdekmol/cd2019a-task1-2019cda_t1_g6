var tipuesearch = {"pages": [{'title': '簡介', 'text': '協同產品設計實習-AG6 \n 課程初衷 「將技術放在學生體驗的最前沿」 \n 課程起源： https://2019wcm.blogspot.com/2019/01/blog-post.html \n', 'tags': '', 'url': '簡介.html'}, {'title': '組員名單', 'text': '組長:仝允丞 40623150 \n 組員:簡稜雅 40623107 \n 組員:廖彥霖 40623147 \n 組員:黃盟泰 40623137 \n 組員:黃子軒 40623136 \n 組員:陳霖\xa0 \xa0 \xa0 40623155 \n 組員:林國蓁\xa0 40423122 \n 組員:蔡憲佳\xa0 40423249 \n BLOGGER: https://mde2019ag6.blogspot.com/ \n', 'tags': '', 'url': '組員名單.html'}, {'title': '課程內容整理', 'text': '', 'tags': '', 'url': '課程內容整理.html'}, {'title': '建立隨身系統', 'text': '藉由隨身系統，以了解隨身系統(P37)運作方式， \n 學習系統的操作使用與設定，打造所需的隨身系統環境 。 \n', 'tags': '', 'url': '建立隨身系統.html'}, {'title': '新增資料夾', 'text': '建立一個資料夾 \n 已用後續創建data資料夾來連結Y槽內容 \n', 'tags': '', 'url': '新增資料夾.html'}, {'title': 'SciTE使用', 'text': '安裝SciTE檔案至剛才所創立的data資料夾中 \n 使用windos的 \xa0 full download版本 \n 下載 SciTE程式：: https://www.scintilla.org/SciTEDownload.html \n 開啟SciTE>設定檔案內容 \n \n 使用Ctr+F找到"code.page"並改為下圖所示 \n \n \n', 'tags': '', 'url': 'SciTE使用.html'}, {'title': '安裝Python入可攜系統', 'text': '1.安裝時點選自定義安裝 \n \n 2.勾取所需功能選擇 \n \n 3.設定安裝路徑 \n \n 4. 利用" HxD 二位元編輯器軟體 " \n 設定 >\xa0 C:\\p37\\Scripts\\pip.exe \n 使用 Ctr+F 功能找尋 C： \\p37 並改為 Y：\\p37\\ \n 如下圖紅字處 \n \n 更改完成後將p37資料移至data資料夾 \n', 'tags': '', 'url': '安裝Python入可攜系統.html'}, {'title': 'start.bat製作', 'text': '利用安裝的 SciTE 製作 start.bat 檔案 \n \n', 'tags': '', 'url': 'start.bat製作.html'}, {'title': 'stop.bat製作', 'text': '同 start.bat製作 \n 利用安裝的 SciTE 製作 stop.bat 檔案 \n \n', 'tags': '', 'url': 'stop.bat製作.html'}, {'title': '差異比對', 'text': '在製作過程中想要快速了解兩個檔案之間的差異， 可以使用 Kdiff3 程式來快速比對出不一樣的地方。 \n', 'tags': '', 'url': '差異比對.html'}, {'title': '導入ungit', 'text': '1. 下載\xa0 kmol_2019.7z , 接著再下載 \xa0 nodejs_with_ungit.7z \xa0： \n \n 圖片來源： 點此觀看 \n 2. 將 nodejs 放入 kmol_2019 的 data 目錄中： \n \n 3. 設定啟動 start.bat 中的 ungit 命列列搜尋路徑(start_cadlab.bat同樣)： \n 路徑指令：set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n \n *此在"SciTE"程式編撰 \n \n 4. 將 path8 納入 path 設定： \n \n 5. 設定 USERPROFILE 環境變數 \n 路徑指令： set USERPROFILE=%Disk%:\\home \n \n 6.關閉重啟查看是否ungit指令可否使用： \n \n 導入影片： https://www.youtube.com/watch?v=lB-spECfhr8 \n 詳細步驟網頁： https://2019wcm.blogspot.com/2019/03/ungit.html \n \n \n ------------------------------------------------------------------------------------------------------------- \n *首推時發現錯誤bug，問題如下： \n \n 查詢錯誤後發現是有一個檔案名叫"index.lock"去擋到上學期所學的版本推法。 \n 2019.03.11解決辦法： \n 移除"Y:\\tmp\\ag6\\.git"內的 " index .lock"檔 \n \n 但不知道此阻擋的檔案是否是為了讓我們利用ungit去推送、編輯網頁，此有待下次上課詢問老師，但當下解決辦法便為移除此檔。 \n 參考網址： 請點此 \n', 'tags': '', 'url': '導入ungit.html'}, {'title': '可攜程式懶人包', 'text': '課堂上老師釋出可攜系統懶人包於課程網站 \n 課程網站連結： https://2019wcm.blogspot.com/ \n 懶人包版可攜系統： 請點此 \n', 'tags': '', 'url': '可攜程式懶人包.html'}, {'title': 'Portable Python', 'text': '進入 mde.tw ，進入 2019 網際內容管理課程示範網 誌 ，點入 portable python \n 開始進入本次的編輯教學網頁： \n \n ------------------------------------------------------------------------------------------------------------- \n 使用 \n git config --edit --system \n 跳出此畫面 \n \n 往下移動，使用按鍵"J"到最底下 \n \n 連按兩次d鍵，刪除此行 \n 接著按下Esc > 輸入 :wq\xa0 \xa0(儲存剛剛所刪之動作) \n 接著於Y:tmp下輸入"sh"會跑出下圖： \n \n 接著於scite貼上 \n ssh-keygen -t rsa -b 4096 -C "This is my key" \n 修改""內註解 \n \n 修改後貼上 \n \n 查看y:home底下是否有.ssh資料夾 \n 若沒有就使用 \n mkdir .ssh \n 以用來建立資料夾 \n \n 接著就持續Enter以建立key \n \n 後續到 \n Y:\\home\\.ssh \n 查看是否有無建立成功 \n \n 使用scite打開"id_rsa.pub"，把內容key複製起來 \n 開啟github>登入個人帳號>setting>SSH and GPG keys>新增KEY \n \n 接著輸入下圖步驟： \n \n 完成後會出現 \n \n 教師示範影片 \n \n <<<<<<< HEAD ======= \n', 'tags': '', 'url': 'Portable Python.html'}, {'title': '網路故障排除', 'text': '遇到學校伺服器IP掛掉問題 Step1.關閉網路第四版協定 \n \n 打開IPV6 \n 修改內容設定，打開DNS並輸入 \n 2001:b000:168::1 \n \n 修改proxy內容 \n [2001:288:6004:17::4] \n \n 完成修改後便能上網 \n >>>>>>> 4b4c3265ff280db5d1ef9b73db538ee546d23627 \n', 'tags': '', 'url': '網路故障排除.html'}, {'title': '組員操作影片', 'text': '', 'tags': '', 'url': '組員操作影片.html'}, {'title': '可攜系統操作', 'text': '40623136 \n \n 40623137 \n \n \n 40623147 \n \n 40623150 \n \n', 'tags': '', 'url': '可攜系統操作.html'}, {'title': '問題與討論', 'text': '', 'tags': '', 'url': '問題與討論.html'}, {'title': 'Git手冊', 'text': '幾乎每一種版本控制系統（Version Control System，以下簡稱 VCS）都支援某種形式的分支（branch）功能， 使用分支意味著你可以從開發主線上分離開來，然後在不影響主線的情況下繼續工作。 有人把 Git 的分支模型視為它的「殺手級功能」， 它有何特別之處呢？新建分支的操作幾乎可以在瞬間完成，並且一般來說切換不同分支也很快； 跟其它的 VCS 不一樣的地方是 Git 鼓勵在工作流程中頻繁地使用分支與合併（merge），即使一天之內進行許多次都沒問題。 \n git branch 命令 :建立一個新的分支這會在目前提交上新建一個指標，它並不會切換到這個分支。 \n git checkout 命令 :切換到一個已經存在的分支。 \n *切換分支會修改工作目錄裡的檔案 當你在 Git 中切換分支時，工作目錄內的檔案將會被修改； 如果切換到舊分支，你的工作目錄會回復到看起來就像當初你最後一次在這個分支提交時的樣子。 如果 Git 無法很乾淨地切換過去，它就不會讓你切換過去。 \n git merge 命令 :緊急修正分支進行合併。', 'tags': '', 'url': 'Git手冊.html'}]};