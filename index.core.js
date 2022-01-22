const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
//接管新标签页打开
const rawOpen = window.open;
window.open = function (url, target, feature) {
    confirm("即将在新标签页打开" + url + "，你想要继续吗？") && rawOpen(url, target, feature);
}

var autoSave = function () {
    document.body.dispatchEvent((new Event("unload", { "bubbles": true, "cancelable": false })))
}




function topTitle(title, loading) {
    document.getElementById("title").innerText = title;
    if (loading) {
        document.getElementById("loadingSvg").style.display = "";
    } else {
        document.getElementById("loadingSvg").style.display = "none";
    }
}

function topBtn(iconSrc, name) {
    let btn = document.createElement("div");
    btn.className = "topBtn"
    let icon = document.createElement("img");
    icon.src = iconSrc;
    icon.className = "topBtnIcon"
    btn.appendChild(icon);
    let text = document.createElement("H2")
    text.innerText = name;
    text.className = "topBtnText";
    btn.appendChild(text);
    document.getElementById("floatTop").appendChild(btn);
    return btn;
}

//Packed by IconPack 0.1.0
const iconPack = {
    save: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOS4zIDYuMDAwMTJIOC43QzcuMjA4ODMgNi4wMDAxMiA2IDcuMjA4OTUgNiA4LjcwMDEyVjM5LjMwMDFDNiA0MC43OTEzIDcuMjA4ODMgNDIuMDAwMSA4LjcgNDIuMDAwMUgzOS4zQzQwLjc5MTIgNDIuMDAwMSA0MiA0MC43OTEzIDQyIDM5LjMwMDFWOC43MDAxMkM0MiA3LjIwODk1IDQwLjc5MTIgNi4wMDAxMiAzOS4zIDYuMDAwMTJaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMiA2VjI0SDE1VjZIMzJaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNiAxMy4wMDAxVjE3LjAwMDEiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTAuOTk2OSA2LjAwMDEySDM1Ljk5ODUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
    clean: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgNS45MTM5NkgyOFYxMy45MTRINDNWMjEuOTE0SDVWMTMuOTE0SDIwVjUuOTEzOTZaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTggNDBINDBWMjJIOFY0MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE2IDM5Ljg5NzVWMzMuOTE0IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0IDM5Ljg5NzVWMzMuODk3NSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMiAzOS44OTc1VjMzLjkxNCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMiA0MEgzNiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    info: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik0yNCA0NEMyOS41MjI4IDQ0IDM0LjUyMjggNDEuNzYxNCAzOC4xNDIxIDM4LjE0MjFDNDEuNzYxNCAzNC41MjI4IDQ0IDI5LjUyMjggNDQgMjRDNDQgMTguNDc3MiA0MS43NjE0IDEzLjQ3NzIgMzguMTQyMSA5Ljg1Nzg2QzM0LjUyMjggNi4yMzg1OCAyOS41MjI4IDQgMjQgNEMxOC40NzcyIDQgMTMuNDc3MiA2LjIzODU4IDkuODU3ODYgOS44NTc4NkM2LjIzODU4IDEzLjQ3NzIgNCAxOC40NzcyIDQgMjRDNCAyOS41MjI4IDYuMjM4NTggMzQuNTIyOCA5Ljg1Nzg2IDM4LjE0MjFDMTMuNDc3MiA0MS43NjE0IDE4LjQ3NzIgNDQgMjQgNDRaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgMTFDMjUuMzgwNyAxMSAyNi41IDEyLjExOTMgMjYuNSAxMy41QzI2LjUgMTQuODgwNyAyNS4zODA3IDE2IDI0IDE2QzIyLjYxOTMgMTYgMjEuNSAxNC44ODA3IDIxLjUgMTMuNUMyMS41IDEyLjExOTMgMjIuNjE5MyAxMSAyNCAxMVoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNMjQuNSAzNFYyMEgyMy41SDIyLjUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjEgMzRIMjgiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    done: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik0xNCAyNEwxNS4yNSAyNS4yNU00NCAxNEwyNCAzNEwyMi43NSAzMi43NSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00IDI0TDE0IDM0TDM0IDE0IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
    fullscreen: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik02IDZMMTYgMTUuODk5NSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik02IDQxLjg5OTVMMTYgMzIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDIuMDAwMSA0MS44OTk1TDMyLjEwMDYgMzIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDEuODk5NSA2TDMyIDE1Ljg5OTUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMzMgNkg0MlYxNSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00MiAzM1Y0MkgzMyIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNSA0Mkg2VjMzIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTYgMTVWNkgxNSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
}

async function init() {
    topTitle("检查Service Worker", true);
    if (navigator.serviceWorker && !navigator.serviceWorker.controller) {
        topTitle("安装Service Worker", true);
        await navigator.serviceWorker.register('./sw.js', { scope: '/' });
        await sleep(5000)
        document.location.reload();
    }
    if (navigator.userAgent.indexOf("WOW64") > 1) {
        alert("你正在64位操作系统上使用32位浏览器!\n为了更快的访问速度请改用64位浏览器!")
    }
    topTitle("正在加载菜单", true);
    topBtn(iconPack.save, "存档管理").addEventListener("click", function () {
        player.pause();
        player.removeEventListener("click", autoSave);
        var currentSave = btoa(JSON.stringify(localStorage));
        if (!document.getElementById("savePanel")) {
            var savePanel = document.createElement("div");
            savePanel.id = "savePanel";
            savePanel.innerHTML = `<input type="text" id="save" style="height:32px;right: 32px;width:calc(100% - 42px);">
            <img class="topBtn" id="applyBtn" style=" margin: 2px;width: 28px;height: 28px;padding: 0px;">`
            document.body.appendChild(savePanel);
            var applyBtn = document.getElementById("applyBtn");
            applyBtn.src = iconPack.done;
            applyBtn.addEventListener("click", function () {
                if (document.getElementById("save").value == currentSave) {
                    savePanel.style.display = "none";
                    player.addEventListener("click", autoSave);
                    player.play();
                } else {
                    try {
                        if (confirm("新存档解析成功，你确定要覆盖当前存档吗？")) {
                            topTitle("应用新存档", true);
                            window.addEventListener("unload", function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                let localStorageTemp = JSON.parse(atob(document.getElementById("save").value));
                                let keys = Object.keys(localStorageTemp);
                                for (var i = 0; keys[i]; i++) {
                                    localStorage[keys[i]] = localStorageTemp[keys[i]];
                                }
                            }, true);
                            document.location.reload();
                        } else {
                            savePanel.style.display = "none";
                            player.addEventListener("click", autoSave);
                            player.play();
                        }
                    } catch (e) {
                        alert("存档解析失败，请检查存档是否完整\n本地存档未进行任何改动")
                        savePanel.style.display = "none";
                        player.addEventListener("click", autoSave);
                        player.play();
                    }
                }
            })
        } else {
            document.getElementById("savePanel").style.display = "";
        }
        var saveInput = document.getElementById("save");
        saveInput.value = currentSave;
    });
    topBtn(iconPack.fullscreen, "全屏").addEventListener("click", async function () {
        await document.getElementById("player").requestFullscreen();
    })
    topBtn(iconPack.clean, "清理缓存").addEventListener("click", async function () {
        topTitle("清理缓存中", true);
        await caches.keys().then(async function (names) {
            for (let name of names)
                await caches.delete(name);
        });
        topTitle("清理完成，刷新中", true);
        document.location.reload();
    });
    topBtn(iconPack.info, "关于").addEventListener("click", function () {
        rawOpen("./about.html", "_blank")
    })
    topTitle("加载Ruffle", true);
    let ruffleScript = document.createElement("script");
    document.body.appendChild(ruffleScript);
    var onRuffleLoad = function () { };
    function waitRuffleLoad() {
        return new Promise(resolve => {
            onRuffleLoad = function () {
                resolve();
            }
        });
    }
    ruffleScript.onload = function () { onRuffleLoad(); };
    ruffleScript.src = "./ruffle/ruffle.js";
    await waitRuffleLoad();
    window.RufflePlayer = window.RufflePlayer || {};
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    player.config = {
        "autoplay": "on",
        "unmuteOverlay": "hidden",
        "letterbox": "off",
        "warnOnUnsupportedContent": false,
        "contextMenu": false,
        "backgroundColor": "#FFFFFF",
    }
    player.id = "player";
    player.addEventListener("click", autoSave)
    document.body.appendChild(player);
    topTitle("下载游戏资源（26.7M）", true);
    URL.createObjectURL(await (await fetch("./swf.woff")).blob())
    try {
        await player.load("./swf.woff");
        topTitle("加载游戏", true);
        setTimeout(function () { topTitle("海之声", false); }, 1500);
    } catch (e) {
        alert("加载失败!原因为" + e);
    }
}
init();