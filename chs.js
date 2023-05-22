/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Wrapping Paper": "包装纸",
    ". Auto-saving has been enabled. Check the console for more details, and consider sharing it with the developers on discord.": ". 已启用自动保存。 查看控制台以获取更多详细信息，并考虑在 discord 上与开发人员共享。",
    "Advent Incremental": "降临增量",
    "Close": "关闭",
    "Cloth": "衣服",
    "Coal": "煤",
    "Congratulations!": "恭喜你！",
    "Day": "天数",
    "Elf Training": "精灵训练",
    "This game is intended to be played as an advent calendar, but it is currently not December. In order to allow players to still enjoy this game, there is a field in the options menu to ignore the month and/or day. You can also change that setting here:": "这款游戏本打算作为降临节日历进行，但目前还不是12月。为了让玩家仍然可以享受这款游戏，选项菜单中有一个字段可以忽略月份和/或日期。您也可以在此处更改该设置：",
    "Toys": "玩具",
    "Saves Manager": "存档管理",
    "Ribbons": "缎带",
    "Pause game": "暂停游戏",
    "New Game": "新游戏",
    "Trees": "树",
    "Ignore": "忽略",
    "Ignore Month and Day": "忽略月和天",
    "Ignore Month": "忽略月",
    "Ignore Date": "忽略日期",
    "Import Save": "导入存档",
    "It's not December": "现在不是十二月",
    "Letters": "信件",
    "Metal": "金属",
    "The Workshop": "车间",
    "- Advent Incremental -": "- 降临增量 -",
    "Allow playing the game not as an advent calendar": "允许玩游戏而不是作为降临节日历",
    "And last but not least, a massive thanks to everyone who played and provided feedback on the game.": "最后但同样重要的是，非常感谢所有参与游戏并提供游戏反馈的人。",
    "Auto-saving is disabled while between days": "在几天之间禁用自动保存",
    "Autosave": "自动保存",
    "Boxes": "盒子",
    "Create Save": "创建保存",
    "Credits": "鸣谢",
    "Dec": "12",
    "Don't Ignore": "不忽略",
    "Plant up to": "一次性种植",
    "Present Packing": "礼物包装",
    "Oh no! Santa forgot about Christmas and it's only 25 days away! He's asked for your help due to your history getting large quantities of things in short amounts of time. Unfortunately you're really starting from scratch here - let's start with getting wood, which you'll need for everything from building workshops to wrapping paper to many of the toys themselves!": "不好了！ 圣诞老人忘记了圣诞节，离圣诞节只有 25 天了！ 由于您过去曾在短时间内获得大量物品，因此他向您寻求帮助。 不幸的是，你真的是从头开始——让我们从获取木材开始，从建造车间到包装纸再到许多玩具本身，你都需要木材！",
    "at once!": "！",
    "Automated Knives": "自动刀",
    "Automated Spade": "自动铲",
    "Automatically save the game every second or when the game is closed.": "每秒或游戏关闭时自动保存游戏。",
    "Behaviour": "行为",
    "Calendar": "日历",
    "Check Modifiers": "检查概览",
    "Cost:": "成本：",
    "Created by thepaperpilot and friends": "由 thepaperpilot 和朋友创建",
    "Cut down a tree every second": "每秒砍一棵树",
    "Cut down an additional tree per click": "每次点击砍一棵额外的树",
    "Cut down up to": "一次性砍倒",
    "Cut trees": "砍树",
    "Dyes": "染料",
    "Haley": "海莉",
    "Leafy Fingers": "多叶手指",
    "logs": "原木",
    "Modifiers": "概览",
    "NaN value detected!": "检测到 NaN 值！",
    "Nekosity": "恶毒",
    "Oil": "油",
    "Open Saves Manager": "打开保存管理器",
    "Paper": "纸",
    "Plant a tree every second": "每秒种一棵树",
    "Plant an additional tree per click": "每次点击额外种植一棵树",
    "Plant trees": "植树",
    "Plant up to": "植物高达",
    "Plastic": "塑料",
    "Present Packing": "礼物包装",
    "Presents": "礼物",
    "Reach": "达到",
    "Reindeer": "驯鹿",
    "Routing": "路由",
    "saplings": "树苗",
    "Sleigh Repair": "雪橇修理",
    "Special Thanks": "特别感谢",
    "Stop everything from moving.": "停止一切移动。",
    "Thanks for playing!": "感谢参与！",
    "The game is finished!": "游戏结束！",
    "The Modding Tree": "改装树",
    "The Paper Pilot Community": "论文试点社区",
    "Tip: You can hold down on actions to perform them automatically": "提示：您可以按住操作以自动执行它们",
    "to complete the day": "完成这一天",
    "total": "总计",
    "Wooden Fingers": "木手指",
    "trees": "树",
    "tree": "树",
    "/click": "/点击",
    "Base": "基础",
    "Total": "总计",
    "Trees give 25% more logs, and unlock more upgrades": "树木提供 25% 以上的原木，并解锁更多升级",
    "Smart Spades": "智能铲子",
    "Smart Knives": "智能刀具",
    "Sharper Fingers": "更锋利的手指",
    "Manually Plant trees twice as often": "手动植树的频率是原来的两倍",
    "Manually cut trees twice as often": "手动砍树的频率是原来的两倍",
    "Manual Cutting Amount": "手动砍伐数量",
    "Manual Planting Amount": "手动种植数量",
    "Manual Planting Cooldown": "手动种植冷却时间",
    "Manual Cutting Cooldown": "手动砍伐冷却时间",
    "Trees give 25% more logs, and unlock repeatable purchases": "树木提供 25% 以上的原木，并解锁可重复购买",
    "Each time you manually chop trees, gain 1s of automatic tree chopping production": "每次手动砍树，获得 1 秒的自动砍树产量",
    "Each time you manually plant trees, gain 1s of automatic tree planting production": "每次手动植树，获得1秒的自动植树产量",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Logs per Tree": "原木每棵树",
    "Add 10 trees to the forest": "向森林中添加 10 棵树",
    "Amount:": "数量:",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Auto Cutting Amount": "自动砍伐数量",
    "Auto Planting Amount": "自动种植数量",
    "Forest Size": "森林大小",
    "Expand Forest": "扩展森林",
    "Generic Cutters": "通用切割机",
    "Generic Planters": "通用种植机",
    "Generic Fingers": "通用手指",
    "Greener Fingers": "更环保的手指",
    "Each cutter cuts down 1 tree/s": "每个切割机每秒砍伐 1 棵树",
    "Each planter plants 0.5 trees/s": "每个种植机每秒种植 0.5 棵树",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "lock": "lock",
    "": "",
    "": "",
    "P": "P",
    "s": "",
    "O": "O",
    "C": "C",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Factory": "工厂",
    "Management": "管理",
    "Set to ": "设为 ",
    "Research": "研究",
    "Last played ": "最近游戏 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/s average": "/秒 平均",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^TPS(.+)$/,
    /^天数(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Day (.+) Complete$/, '天数 $1 已完成'],
    [/^equilibrium: \+(.+)\/s, limited by cutting speed$/, '平衡：\+$1\/秒，受砍伐速度限制'],
    [/^You've beaten Advent Incremental v(.+): Initial Commit$/, '您已经击败了 Advent Incremental v$1：初始提交'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);