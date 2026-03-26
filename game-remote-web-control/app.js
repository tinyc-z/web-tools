/**
 * CyGame Web Control Panel — Standalone Multi-Game Version
 * Works with CyCoolThrow, CyFlameFloor, CyTetris
 * Server configs stored in localStorage
 * Supports: zh (中文), en (English), ar (العربية)
 */

(function () {
    'use strict';

    // ===== i18n =====
    const LANG_KEY = 'cy_web_control_lang';
    const translations = {
        zh: {
            emptyTitle: '尚未配置游戏服务器',
            emptyHint: '点击右上角 ⚙ 添加服务器',
            gameStatus: '游戏状态',
            serviceStatus: '服务状态',
            gameControl: '游戏控制',
            selectGame: '选择游戏',
            selectLevel: '选择关卡',
            gameDuration: '游戏总时长（秒）',
            startGame: '启动游戏',
            stopGame: '停止游戏',
            logs: '操作日志',
            clear: '清除',
            noLogs: '暂无日志',
            serverConfig: '服务器配置',
            serverConfigHint: '配置要控制的游戏服务器地址（将保存在浏览器本地）',
            serverNamePlaceholder: '名称，如：CyCoolThrow',
            serverUrlPlaceholder: '地址，如：http://192.168.1.100:12345',
            add: '添加',
            loading: '加载中...',
            selectGameFirst: '请先选择游戏',
            noGames: '无可用游戏',
            noLevels: '无关卡配置',
            noServers: '暂无服务器',
            fillRequired: '请填写名称和地址',
            invalidUrl: '请输入有效的 http 或 https 地址',
            switchedTo: '已切换到',
            configLoaded: '游戏配置加载成功',
            configFailed: '配置加载失败',
            configError: '无法加载配置',
            selectFirst: '请先选择游戏',
            starting: '启动游戏',
            level: '关卡',
            startSuccess: '游戏启动成功 ✓',
            startFailed: '启动失败',
            startError: '启动请求失败',
            stopping: '停止游戏...',
            stopSuccess: '游戏已停止 ✓',
            stopFailed: '停止失败',
            stopError: '停止请求失败',
            delete: '删除',
            language: '语言 / Language',
            // Status labels
            statusWaiting: '等待连接',
            statusIdle: '空闲等待中',
            statusLoading: '游戏加载中',
            statusReady: '准备就绪',
            statusWaitingStart: '等待开始',
            statusRunning: '游戏进行中',
            statusPassed: '关卡通过',
            statusOver: '游戏结束',
            statusPaused: '游戏暂停',
            statusStarting: '即将开始',
        },
        en: {
            emptyTitle: 'No game servers configured',
            emptyHint: 'Click the ⚙ icon to add servers',
            gameStatus: 'Game Status',
            serviceStatus: 'Service Status',
            gameControl: 'Game Control',
            selectGame: 'Select Game',
            selectLevel: 'Select Level',
            gameDuration: 'Game Duration (seconds)',
            startGame: 'Start Game',
            stopGame: 'Stop Game',
            logs: 'Activity Log',
            clear: 'Clear',
            noLogs: 'No logs yet',
            serverConfig: 'Server Configuration',
            serverConfigHint: 'Configure game server addresses (saved in browser local storage)',
            serverNamePlaceholder: 'Name, e.g.: CyCoolThrow',
            serverUrlPlaceholder: 'URL, e.g.: http://192.168.1.100:12345',
            add: 'Add',
            loading: 'Loading...',
            selectGameFirst: 'Select a game first',
            noGames: 'No games available',
            noLevels: 'No levels configured',
            noServers: 'No servers',
            fillRequired: 'Please fill in both name and URL',
            invalidUrl: 'Please enter a valid http or https URL',
            switchedTo: 'Switched to',
            configLoaded: 'Game config loaded ✓',
            configFailed: 'Config load failed',
            configError: 'Cannot load config',
            selectFirst: 'Select a game first',
            starting: 'Starting game',
            level: 'Level',
            startSuccess: 'Game started ✓',
            startFailed: 'Start failed',
            startError: 'Start request failed',
            stopping: 'Stopping game...',
            stopSuccess: 'Game stopped ✓',
            stopFailed: 'Stop failed',
            stopError: 'Stop request failed',
            delete: 'Delete',
            language: 'Language',
            statusWaiting: 'Waiting',
            statusIdle: 'Idle',
            statusLoading: 'Loading game',
            statusReady: 'Ready',
            statusWaitingStart: 'Waiting to start',
            statusRunning: 'Game in progress',
            statusPassed: 'Level passed',
            statusOver: 'Game over',
            statusPaused: 'Paused',
            statusStarting: 'Starting',
        },
        ar: {
            emptyTitle: 'لم يتم تكوين خوادم الألعاب',
            emptyHint: 'انقر على أيقونة ⚙ لإضافة خوادم',
            gameStatus: 'حالة اللعبة',
            serviceStatus: 'حالة الخدمة',
            gameControl: 'التحكم باللعبة',
            selectGame: 'اختر لعبة',
            selectLevel: 'اختر مرحلة',
            gameDuration: 'مدة اللعبة (ثواني)',
            startGame: 'بدء اللعبة',
            stopGame: 'إيقاف اللعبة',
            logs: 'سجل العمليات',
            clear: 'مسح',
            noLogs: 'لا توجد سجلات',
            serverConfig: 'إعدادات الخادم',
            serverConfigHint: 'قم بإعداد عناوين خوادم الألعاب (يتم الحفظ محلياً في المتصفح)',
            serverNamePlaceholder: 'الاسم، مثال: CyCoolThrow',
            serverUrlPlaceholder: 'العنوان، مثال: http://192.168.1.100:12345',
            add: 'إضافة',
            loading: 'جارٍ التحميل...',
            selectGameFirst: 'اختر لعبة أولاً',
            noGames: 'لا توجد ألعاب',
            noLevels: 'لا توجد مراحل',
            noServers: 'لا توجد خوادم',
            fillRequired: 'يرجى ملء الاسم والعنوان',
            invalidUrl: 'يرجى إدخال عنوان http أو https صالح',
            switchedTo: 'تم التبديل إلى',
            configLoaded: 'تم تحميل إعدادات اللعبة ✓',
            configFailed: 'فشل تحميل الإعدادات',
            configError: 'تعذر تحميل الإعدادات',
            selectFirst: 'اختر لعبة أولاً',
            starting: 'بدء اللعبة',
            level: 'المرحلة',
            startSuccess: 'تم بدء اللعبة ✓',
            startFailed: 'فشل البدء',
            startError: 'فشل طلب البدء',
            stopping: 'جارٍ إيقاف اللعبة...',
            stopSuccess: 'تم إيقاف اللعبة ✓',
            stopFailed: 'فشل الإيقاف',
            stopError: 'فشل طلب الإيقاف',
            delete: 'حذف',
            language: 'اللغة / Language',
            statusWaiting: 'في الانتظار',
            statusIdle: 'خامل',
            statusLoading: 'تحميل اللعبة',
            statusReady: 'جاهز',
            statusWaitingStart: 'في انتظار البدء',
            statusRunning: 'اللعبة قيد التشغيل',
            statusPassed: 'تم اجتياز المرحلة',
            statusOver: 'انتهت اللعبة',
            statusPaused: 'متوقفة مؤقتاً',
            statusStarting: 'جارٍ البدء',
        }
    };

    let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || translations.zh[key] || key;
    }

    function applyI18n() {
        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        // RTL
        if (currentLang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.removeAttribute('dir');
            document.documentElement.setAttribute('lang', currentLang === 'zh' ? 'zh-CN' : 'en');
        }
        // Active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(LANG_KEY, lang);
        applyI18n();
        // Re-populate selects with translated text
        if (Object.keys(gamesConfig).length > 0) {
            populateGameSelect();
            const gameCode = dom.gameSelect.value;
            populateLevelSelect(gameCode);
        } else if (dom.gameSelect) {
            dom.gameSelect.innerHTML = `<option value="">${t('loading')}</option>`;
            dom.levelSelect.innerHTML = `<option value="">${t('selectGameFirst')}</option>`;
        }
        // Update dynamic status text
        if (lastGameStatus !== undefined) {
            updateGameStatus(lastGameStatus, isRunning);
        }
    }

    // ===== Config =====
    const STORAGE_KEY = 'cy_web_control_servers';
    const POLL_INTERVAL = 2000;
    const REQUEST_TIMEOUT = 5000;

    // ===== DOM =====
    const $ = (id) => document.getElementById(id);

    const dom = {
        serverTabs: $('serverTabs'),
        emptyState: $('emptyState'),
        mainContent: $('mainContent'),
        statusIndicator: $('statusIndicator'),
        statusLabel: $('statusLabel'),
        statusDetail: $('statusDetail'),
        serviceVersion: $('serviceVersion'),
        serviceState: $('serviceState'),
        serviceIssues: $('serviceIssues'),
        gameSelect: $('gameSelect'),
        levelSelect: $('levelSelect'),
        timeInput: $('timeInput'),
        btnStart: $('btnStart'),
        btnStop: $('btnStop'),
        btnClearLog: $('btnClearLog'),
        logContainer: $('logContainer'),
        btnSettings: $('btnSettings'),
        settingsModal: $('settingsModal'),
        btnCloseModal: $('btnCloseModal'),
        serverList: $('serverList'),
        newServerName: $('newServerName'),
        newServerUrl: $('newServerUrl'),
        btnAddServer: $('btnAddServer'),
        langSwitcher: $('langSwitcher'),
        issuesPanel: $('issuesPanel'),
        issuesRow: $('issuesRow'),
    };

    // ===== State =====
    let servers = [];
    let activeServerId = null;
    let gamesConfig = {};
    let isRunning = false;
    let pollTimer = null;
    let serverOnlineMap = {};
    let lastGameStatus = undefined;

    // ===== localStorage Helpers =====
    function loadServers() {
        try { servers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
        catch { servers = []; }
    }
    function saveServers() { localStorage.setItem(STORAGE_KEY, JSON.stringify(servers)); }

    // ===== Utility =====
    function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

    function fetchWithTimeout(url, options = {}, timeout = REQUEST_TIMEOUT) {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), timeout);
        return fetch(url, { ...options, signal: ctrl.signal })
            .then(r => { clearTimeout(tid); return r; })
            .catch(e => { clearTimeout(tid); throw e; });
    }

    function getBaseUrl() {
        const srv = servers.find(s => s.id === activeServerId);
        return srv ? srv.url.replace(/\/+$/, '') : '';
    }

    // ===== Logging =====
    function addLog(message, type = 'info') {
        const empty = dom.logContainer.querySelector('.log-empty');
        if (empty) empty.remove();
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerHTML = `<span class="log-time">${new Date().toLocaleTimeString()}</span><span class="log-msg">${escapeHtml(message)}</span>`;
        dom.logContainer.appendChild(entry);
        while (dom.logContainer.children.length > 50) dom.logContainer.removeChild(dom.logContainer.firstChild);
        dom.logContainer.scrollTop = dom.logContainer.scrollHeight;
    }

    function escapeHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

    function clearLog() { dom.logContainer.innerHTML = `<div class="log-empty">${t('noLogs')}</div>`; }

    // ===== Status Display =====
    const STATUS_MAP = {
        'sleepWaiting': { label: 'IDLE',      detailKey: 'statusIdle',         cls: 'idle' },
        'loading':      { label: 'LOADING',   detailKey: 'statusLoading',      cls: 'running' },
        'ready':        { label: 'READY',     detailKey: 'statusReady',        cls: 'idle' },
        'waiting':      { label: 'WAITING',   detailKey: 'statusWaitingStart', cls: 'idle' },
        'running':      { label: 'RUNNING',   detailKey: 'statusRunning',      cls: 'running' },
        'passed':       { label: 'PASSED',    detailKey: 'statusPassed',       cls: 'running' },
        'over':         { label: 'GAME OVER', detailKey: 'statusOver',         cls: 'error' },
        'paused':       { label: 'PAUSED',    detailKey: 'statusPaused',       cls: 'idle' },
        'prestart':     { label: 'STARTING',  detailKey: 'statusStarting',     cls: 'running' },
    };

    function updateGameStatus(gameStatus, running) {
        isRunning = running;
        lastGameStatus = gameStatus;
        const info = STATUS_MAP[gameStatus] || { label: gameStatus || 'IDLE', detailKey: 'statusIdle', cls: 'idle' };
        dom.statusIndicator.className = 'status-indicator ' + info.cls;
        dom.statusLabel.textContent = info.label;
        dom.statusDetail.textContent = t(info.detailKey);
        dom.btnStart.disabled = running || !dom.gameSelect.value;
        dom.btnStop.disabled = !running;
    }

    function updateServiceStatus(data) {
        dom.serviceVersion.textContent = data.version || '--';
        dom.serviceState.textContent = (data.state || '--').toUpperCase();
        const issues = data.issues || [];
        const count = issues.length;
        dom.serviceIssues.textContent = count === 0 ? 'None' : `${count} issue(s)`;
        dom.serviceIssues.style.color = count === 0 ? 'var(--accent-green)' : 'var(--accent-amber)';
        // Toggle clickable state
        if (count > 0) {
            dom.serviceIssues.classList.add('has-issues');
            dom.issuesRow.classList.add('has-issues');
        } else {
            dom.serviceIssues.classList.remove('has-issues', 'expanded');
            dom.issuesRow.classList.remove('has-issues');
            dom.issuesPanel.classList.remove('open');
        }
        // Render issue items
        dom.issuesPanel.innerHTML = '';
        issues.forEach(issue => {
            const item = document.createElement('div');
            item.className = 'issue-item';
            if (typeof issue === 'object' && issue !== null) {
                const level = issue.level ? `[${issue.level.toUpperCase()}]` : '';
                const code = issue.code || '';
                const msg = issue.message || '';
                item.textContent = `${level} ${code}: ${msg}`.trim();
                if (issue.level === 'error') item.style.color = 'var(--accent-red)';
            } else {
                item.textContent = String(issue);
            }
            dom.issuesPanel.appendChild(item);
        });
    }

    function toggleIssuesPanel() {
        const isOpen = dom.issuesPanel.classList.toggle('open');
        dom.serviceIssues.classList.toggle('expanded', isOpen);
    }

    function resetStatusDisplay() {
        dom.statusIndicator.className = 'status-indicator';
        dom.statusLabel.textContent = '--';
        dom.statusDetail.textContent = t('statusWaiting');
        dom.serviceVersion.textContent = '--';
        dom.serviceState.textContent = '--';
        dom.serviceIssues.textContent = '--';
        dom.serviceIssues.style.color = '';
        dom.btnStart.disabled = true;
        dom.btnStop.disabled = true;
        lastGameStatus = undefined;
    }

    // ===== API Calls =====
    async function fetchGameConfig() {
        const base = getBaseUrl();
        if (!base) return;
        try {
            const res = await fetchWithTimeout(`${base}/api/game/config`);
            const data = await res.json();
            if (data.code === 0 && data.config) {
                gamesConfig = data.config.games || {};
                populateGameSelect();
                addLog(t('configLoaded'), 'success');
            } else {
                addLog(t('configFailed') + ': ' + (data.msg || ''), 'error');
            }
        } catch (err) {
            addLog(t('configError') + ': ' + err.message, 'error');
        }
    }

    async function pollGameStatus() {
        const base = getBaseUrl();
        if (!base) return;
        try {
            const res = await fetchWithTimeout(`${base}/api/game/status`);
            const data = await res.json();
            if (data.code === 0) {
                setServerOnline(activeServerId, true);
                updateGameStatus(data.gameStatus, data.isRunning);
            }
        } catch {
            setServerOnline(activeServerId, false);
            updateGameStatus(null, false);
        }
    }

    async function pollServiceStatus() {
        const base = getBaseUrl();
        if (!base) return;
        try {
            const res = await fetchWithTimeout(`${base}/api/service/status`);
            const data = await res.json();
            if (data.code === 0) updateServiceStatus(data);
        } catch { /* ignore */ }
    }

    async function startGame() {
        const base = getBaseUrl();
        const gameCode = dom.gameSelect.value;
        const levelIndex = parseInt(dom.levelSelect.value, 10);
        const time = parseInt(dom.timeInput.value, 10) || 300;
        if (!gameCode) { addLog(t('selectFirst'), 'warn'); return; }

        const gameData = {
            deviceId: 'web-control',
            time,
            game: { code: gameCode, index: levelIndex },
            players: [{ id: '0', name: 'Web Control', phone: '', avatar: '' }],
            server: ''
        };

        addLog(`${t('starting')}: ${gameCode}, ${t('level')}: ${levelIndex}`, 'info');
        dom.btnStart.classList.add('loading');
        dom.btnStart.disabled = true;

        try {
            const res = await fetchWithTimeout(`${base}/api/Run/job2`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(gameData)
            }, 10000);
            const data = await res.json();
            addLog(data.code === 0 ? t('startSuccess') : t('startFailed') + ': ' + (data.msg || ''), data.code === 0 ? 'success' : 'error');
        } catch (err) {
            addLog(t('startError') + ': ' + err.message, 'error');
        } finally {
            dom.btnStart.classList.remove('loading');
        }
    }

    async function stopGame() {
        const base = getBaseUrl();
        addLog(t('stopping'), 'info');
        dom.btnStop.classList.add('loading');
        dom.btnStop.disabled = true;
        try {
            const res = await fetchWithTimeout(`${base}/api/Run/job2`, { method: 'DELETE' }, 10000);
            const data = await res.json();
            addLog(data.code === 0 ? t('stopSuccess') : t('stopFailed') + ': ' + (data.msg || ''), data.code === 0 ? 'success' : 'error');
        } catch (err) {
            addLog(t('stopError') + ': ' + err.message, 'error');
        } finally {
            dom.btnStop.classList.remove('loading');
        }
    }

    // ===== Game/Level Select =====
    function populateGameSelect() {
        const sel = dom.gameSelect;
        sel.innerHTML = `<option value="">-- ${t('selectGame')} --</option>`;
        const codes = Object.keys(gamesConfig);
        if (codes.length === 0) {
            sel.innerHTML = `<option value="">${t('noGames')}</option>`;
            sel.disabled = true; return;
        }
        codes.forEach(code => {
            const opt = document.createElement('option');
            opt.value = code;
            opt.textContent = gamesConfig[code].name || code;
            sel.appendChild(opt);
        });
        sel.disabled = false;
    }

    function populateLevelSelect(gameCode) {
        const sel = dom.levelSelect;
        sel.innerHTML = '';
        if (!gameCode || !gamesConfig[gameCode]) {
            sel.innerHTML = `<option value="">${t('selectGameFirst')}</option>`;
            sel.disabled = true; dom.btnStart.disabled = true; return;
        }
        const chapters = gamesConfig[gameCode].chapters || [];
        if (chapters.length === 0) {
            sel.innerHTML = `<option value="">${t('noLevels')}</option>`;
            sel.disabled = true; dom.btnStart.disabled = true; return;
        }
        chapters.forEach((ch, i) => {
            const opt = document.createElement('option');
            opt.value = i + 1;
            opt.textContent = ch.name || `Level ${i + 1}`;
            sel.appendChild(opt);
        });
        sel.disabled = false;
        dom.btnStart.disabled = isRunning;
    }

    // ===== Server Tabs =====
    function setServerOnline(serverId, online) {
        serverOnlineMap[serverId] = online;
        const dot = document.querySelector(`.server-tab[data-id="${serverId}"] .tab-dot`);
        if (dot) dot.className = 'tab-dot ' + (online ? 'online' : 'offline');
    }

    function renderServerTabs() {
        dom.serverTabs.innerHTML = '';
        if (servers.length === 0) {
            dom.emptyState.style.display = '';
            dom.mainContent.style.display = 'none';
            dom.serverTabs.style.display = 'none';
            return;
        }
        dom.serverTabs.style.display = '';
        dom.emptyState.style.display = 'none';
        servers.forEach(srv => {
            const tab = document.createElement('button');
            tab.className = 'server-tab' + (srv.id === activeServerId ? ' active' : '');
            tab.dataset.id = srv.id;
            const onlineClass = serverOnlineMap[srv.id] === true ? 'online' : (serverOnlineMap[srv.id] === false ? 'offline' : '');
            tab.innerHTML = `<span class="tab-dot ${onlineClass}"></span>${escapeHtml(srv.name)}`;
            tab.onclick = () => switchServer(srv.id);
            dom.serverTabs.appendChild(tab);
        });
        if (activeServerId && servers.find(s => s.id === activeServerId)) {
            dom.mainContent.style.display = '';
        } else if (servers.length > 0) {
            switchServer(servers[0].id);
        }
    }

    function switchServer(serverId) {
        if (activeServerId === serverId) return;
        stopPolling();
        activeServerId = serverId;
        gamesConfig = {};
        dom.gameSelect.innerHTML = `<option value="">${t('loading')}</option>`;
        dom.gameSelect.disabled = true;
        dom.levelSelect.innerHTML = `<option value="">${t('selectGameFirst')}</option>`;
        dom.levelSelect.disabled = true;
        resetStatusDisplay();
        clearLog();
        renderServerTabs();
        dom.mainContent.style.display = '';

        const srv = servers.find(s => s.id === serverId);
        addLog(`${t('switchedTo')}: ${srv.name} (${srv.url})`, 'info');
        fetchGameConfig();
        startPolling();
    }

    // ===== Polling =====
    function startPolling() {
        pollGameStatus();
        pollServiceStatus();
        pollTimer = setInterval(() => { pollGameStatus(); pollServiceStatus(); }, POLL_INTERVAL);
    }
    function stopPolling() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }

    // ===== Settings Modal =====
    function openSettings() { dom.settingsModal.classList.add('open'); renderServerList(); }
    function closeSettings() { dom.settingsModal.classList.remove('open'); }

    function renderServerList() {
        dom.serverList.innerHTML = '';
        if (servers.length === 0) {
            dom.serverList.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:0.8rem;padding:12px 0;">${t('noServers')}</div>`;
            return;
        }
        servers.forEach(srv => {
            const item = document.createElement('div');
            item.className = 'server-item';
            item.innerHTML = `
                <div class="server-item-info">
                    <div class="server-item-name">${escapeHtml(srv.name)}</div>
                    <div class="server-item-url">${escapeHtml(srv.url)}</div>
                </div>
                <button class="server-item-del" title="${t('delete')}" data-id="${srv.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>`;
            item.querySelector('.server-item-del').onclick = () => removeServer(srv.id);
            dom.serverList.appendChild(item);
        });
    }

    function addServer() {
        const name = dom.newServerName.value.trim();
        let url = dom.newServerUrl.value.trim();
        if (!name || !url) { alert(t('fillRequired')); return; }
        // Auto-prefix http:// if no protocol
        if (!/^https?:\/\//i.test(url)) url = 'http://' + url;
        // Validate URL
        try {
            const parsed = new URL(url);
            if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error();
        } catch {
            alert(t('invalidUrl'));
            return;
        }
        url = url.replace(/\/+$/, '');
        const srv = { id: genId(), name, url };
        servers.push(srv);
        saveServers();
        dom.newServerName.value = '';
        dom.newServerUrl.value = '';
        renderServerList();
        renderServerTabs();
        if (servers.length === 1) switchServer(srv.id);
    }

    function removeServer(id) {
        servers = servers.filter(s => s.id !== id);
        saveServers();
        if (activeServerId === id) {
            stopPolling();
            activeServerId = null;
            if (servers.length > 0) switchServer(servers[0].id);
            else { resetStatusDisplay(); gamesConfig = {}; }
        }
        renderServerList();
        renderServerTabs();
    }

    // ===== Event Binding =====
    function bindEvents() {
        dom.gameSelect.addEventListener('change', e => populateLevelSelect(e.target.value));
        dom.btnStart.addEventListener('click', startGame);
        dom.btnStop.addEventListener('click', stopGame);
        dom.btnClearLog.addEventListener('click', clearLog);
        dom.issuesRow.addEventListener('click', () => {
            if (dom.issuesRow.classList.contains('has-issues')) toggleIssuesPanel();
        });
        dom.btnSettings.addEventListener('click', openSettings);
        dom.btnCloseModal.addEventListener('click', closeSettings);
        dom.btnAddServer.addEventListener('click', addServer);
        dom.settingsModal.addEventListener('click', e => { if (e.target === dom.settingsModal) closeSettings(); });
        dom.newServerUrl.addEventListener('keydown', e => { if (e.key === 'Enter') addServer(); });
        // Language switcher
        dom.langSwitcher.addEventListener('click', e => {
            const btn = e.target.closest('.lang-btn');
            if (btn && btn.dataset.lang) setLanguage(btn.dataset.lang);
        });
    }

    // ===== Init =====
    function init() {
        loadServers();
        bindEvents();
        applyI18n();
        renderServerTabs();
        if (servers.length > 0) switchServer(servers[0].id);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
