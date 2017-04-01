<template>
  <div id="app">
     <!-- Grid
    <k-row>
      <div style="height: 40px;background: #ddd"></div>
    </k-row>
    <k-row
      cssStyle="margin-top: 20px;">
      <div style="height: 40px;background: #ddd"></div>
    </k-row>
    <k-row
      cssStyle="margin-top: 20px;">
      <k-col span="1">
        <div style="height: 40px;background: #ddd"></div>
      </k-col>
      <k-col span="2" left="1">
        <div style="height: 40px;background: #ddd"></div>
      </k-col>
      <k-col span="3" left="2">
        <div style="height: 40px;background: #ddd"></div>
      </k-col>
      <k-col span="2" left="1">
        <div style="height: 40px;background: #ddd"></div>
      </k-col>
    </k-row>
    <k-row
      cssStyle="margin-top: 20px;">
      <k-col
        cssStyle="width: 151px; height: 40px;">
        <div style="height: 40px;background: #ddd"></div>
      </k-col>
    </k-row>
    Layout
    <div style="height: 20px;"></div>
    <k-layout></k-layout>
    Button
    <div style="height: 20px;"></div>
    <k-button :disable="true"><i class="fa fa-heart" style="margin-right: 6px;"></i>Search</k-button>
    <k-button
     :bindAttr="{
         id: 'id',
       }">123</k-button>
    <k-button><i class="fa fa-heart"></i></k-button>
    <k-button shape="circle" type="info"><i class="fa fa-heart"></i></k-button>
    <k-button size="mini">Admin</k-button>
    <k-button size="small">Admin</k-button>
    <k-button>Admin</k-button>
    <k-button size="large">Admin</k-button>
    <div style="height: 20px;"></div>
    <k-button>Admin</k-button>
    <k-button type="info">Admin</k-button>
    <k-button type="primary">Admin</k-button>
    <k-button type="success">Admin</k-button>
    <k-button type="warning">Admin</k-button>
    <k-button type="danger">Admin</k-button>
    <k-button type="dashed">Admin</k-button>
    <k-button type="ghost">Admin</k-button>
    <k-button type="text">Admin</k-button>
    <div style="height: 20px;"></div>
    <k-button type="danger" width="200px" size="large" fontSize="13px">测试测试</k-button>
    <div style="height: 20px;"></div>
    <k-button :loading="buttonStat" @click="click">{{buttonLabel}}</k-button>
    <div style="height: 20px;"></div>
    DropDown
    <div style="height: 20px;"></div>
    <k-dropdown>
      <k-dropdown-group
        title="Group-1">
        <k-dropdown-item>
         One___zxcccccccccccccccccccccccccccccccccccccccccccc
        </k-dropdown-item>
        <k-dropdown-item :disable="true">One___</k-dropdown-item>
      </k-dropdown-group>
      <k-dropdown-group
        title="Group-2">
        <k-dropdown-item>Two___</k-dropdown-item>
        <k-dropdown-item>Three___</k-dropdown-item>
        <k-dropdown-item>Four___</k-dropdown-item>
      </k-dropdown-group>
      <k-dropdown-group
        title="Group-3">
        <k-dropdown-item>Five___</k-dropdown-item>
        <k-dropdown-item>Six___</k-dropdown-item>
      </k-dropdown-group>
      <k-dropdown-item>Seven___</k-dropdown-item>
      <k-dropdown-item>Eight___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown
      :oneMenu="false"
      type="success">
      <k-dropdown-item>
       One___zxcccccccccccccccccccccccccccccccccccccccccccc</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown
      eventType="hover"
      buttonName="Hover">
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    <k-dropdown type="text" eventType="hover">
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
      <k-dropdown-item>One___</k-dropdown-item>
    </k-dropdown>
    <div style="height: 20px;"></div>
    ButtonGroup
    <div style="height: 20px;"></div>
    <k-button-group>
      <k-button>Left</k-button>
      <k-button>Middle</k-button>
      <k-button>Middle</k-button>
      <k-button><i class="fa fa-heart"></i></k-button>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group :radius="false">
      <k-button>Left</k-button>
      <k-button>Middle</k-button>
      <k-button>Middle</k-button>
      <k-button><i class="fa fa-heart"></i></k-button>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button>Left</k-button>
      <k-button>Middle</k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button>Middle</k-button>
      <k-button><i class="fa fa-heart"></i></k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
    </k-button-group>
    <div style="height: 20px;"></div>
    <k-button-group :radius="false">
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button>Left</k-button>
      <k-button>Middle</k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
      <k-button>Middle</k-button>
      <k-button><i class="fa fa-heart"></i></k-button>
      <k-dropdown>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
        <k-dropdown-item>One___</k-dropdown-item>
      </k-dropdown>
    </k-button-group>
    <div style="height: 20px;"></div>
    Switch
    <div style="height: 20px;"></div>
    <k-switch
     :status="switchStat"
     @click="toggleSwitch"/>
    <k-switch
     :disable="true"/>
    <div style="height: 20px;"></div>
    Notification
    <div style="height: 20px;"></div>
    <k-button @click="addNotification('default')" type="default">Default Notification</k-button>
    <k-button @click="addNotification('info')" type="info">Info Notification</k-button>
    <k-button @click="addNotification('success')" type="success">Success Notification</k-button>
    <k-button @click="addNotification('warning')" type="warning">Warning Notification</k-button>
    <k-button @click="addNotification('error')" type="danger">Error Notification</k-button>
    <div style="height: 20px;"></div>
    <k-button @click="notificationAutoClose" type="default">Auto Close Notification</k-button>
    <k-button @click="notificationAutoClose(5000)" type="default">Delay 5s</k-button>
    <div style="height: 20px;"></div>
    Message
    <div style="height: 20px;"></div>
    <k-button @click="addMessage('default')" type="default"><i class="fa fa-heart"></i>Default Message</k-button>
    <k-button @click="addMessage('info')" type="info">Info Message</k-button>
    <k-button @click="addMessage('success')" type="success">Success Message</k-button>
    <k-button @click="addMessage('warning')" type="warning">Warning Message</k-button>
    <k-button @click="addMessage('error')" type="danger">Error Message</k-button>
    <div style="height: 20px;"></div>
    <k-button @click="addMessageClose('info')" type="danger">Message with close button</k-button>
    <div style="height: 20px;"></div>
    Dialog
    <div style="height: 20px;"></div>
    <k-button @click="addDialog" type="default">Add Dialog</k-button>
    <div style="height: 20px;"></div>
    <k-button @click="addDialog2" type="default">Add Dialog</k-button>
    <div style="height: 20px;"></div>
    Modal
    <div style="height: 20px;"></div>
    <k-button @click="modalWithClose" type="default">modalWithClose</k-button>
    <k-modal
      :show="modalWithCloseShow"
      :close="modalWithClose"
      title="洛神赋">
      <p style="width: 600px;">黄初三年， 余朝京师， 还济洛川。 古人有言， 斯水之神， 名曰宓妃。 感宋玉对楚王神女之事， 遂作斯赋。 其辞曰：
余从京域， 言归东藩。 背伊阙， 越轘辕， 经通谷， 陵景山。 日既西倾， 车殆马烦。 尔乃税驾乎蘅皋， 秣驷乎芝田， 容与乎阳林， 流眄乎洛川。 于是精移神骇， 忽焉思散。 俯则末察， 仰以殊观， 睹一丽人， 于岩之畔。 乃援御者而告之曰： “尔有觌于彼者乎？ 彼何人斯？ 若此之艳也！” 御者对曰： “臣闻河洛之神， 名曰宓妃。 然则君王所见， 无乃日乎？ 其状若何？ 臣愿闻之。”
余告之曰： “其形也， 翩若惊鸿， 婉若游龙。 荣曜秋菊， 华茂春松。 仿佛兮若轻云之蔽月， 飘摇兮若流风之回雪。 远而望之， 皎若太阳升朝霞； 迫而察之， 灼若芙蕖出渌波。 秾纤得衷， 修短合度。 肩若削成， 腰如约素。 延颈秀项， 皓质呈露。 芳泽无加， 铅华弗御。 云髻峨峨， 修眉联娟。 丹唇外朗， 皓齿内鲜， 明眸善睐， 靥辅承权。 瑰姿艳逸， 仪静体闲。 柔情绰态， 媚于语言。 奇服旷世， 骨像应图。 披罗衣之璀粲兮， 珥瑶碧之华琚。 戴金翠之首饰， 缀明珠以耀躯。 践远游之文履， 曳雾绡之轻裾。 微幽兰之芳蔼兮， 步踟蹰于山隅。
于是忽焉纵体， 以遨以嬉。 左倚采旄， 右荫桂旗。 壤皓腕于神浒兮， 采湍濑之玄芝。 余情悦其淑美兮， 心振荡而不怡。 无良媒以接欢兮， 托微波而通辞。 愿诚素之先达兮， 解玉佩以要之。 嗟佳人之信修， 羌习礼而明诗。 抗琼［王弟］以和予兮， 指潜渊而为期。 执眷眷之款实兮， 惧斯灵之我欺。 感交甫之弃言兮， 怅犹豫而狐疑。 收和颜而静志兮， 申礼防以自持。
于是洛灵感焉， 徙倚彷徨， 神光离合， 乍阴乍阳。 竦轻躯以鹤立， 若将飞而未翔。 践椒涂之郁烈， 步蘅薄而流芳。 超长吟以永慕兮， 声哀厉而弥长。
尔乃众灵杂遢， 命俦啸侣， 或戏清流， 或翔神渚， 或采明珠， 或拾翠羽。 从南湘之二妃， 携汉滨之游女。 叹匏瓜之无匹兮， 咏牵牛之独处。 扬轻袿之猗靡兮， 翳修袖以延伫。 体迅飞凫， 飘忽若神， 凌波微步， 罗袜生尘。 动无常则， 若危若安。 进止难期， 若往若还。 转眄流精， 光润玉颜。 含辞未吐， 气若幽兰。 华容婀娜， 令我忘餐。
于是屏翳收风， 川后静波。 冯夷鸣鼓， 女娲清歌。 腾文鱼以警乘， 鸣玉鸾以偕逝。 六龙俨其齐首， 载云车之容裔， 鲸鲵踊而夹毂， 水禽翔而为卫。
于是越北沚。 过南冈， 纡素领， 回清阳， 动朱唇以徐言， 陈交接之大纲。 恨人神之道殊兮， 怨盛年之莫当。 抗罗袂以掩涕兮， 泪流襟之浪浪。 悼良会之永绝兮。 哀一逝而异乡。 无微情以效爱兮， 献江南之明。 虽潜处于太阳， 长寄心于君王。 忽不悟其所舍， 怅神宵而蔽光。
于是背下陵高， 足往神留， 遗情想像， 顾望怀愁。 冀灵体之复形， 御轻舟而上溯。 浮长川而忘返， 思绵绵督。 夜耿耿而不寐， 沾繁霜而至曙。 命仆夫而就驾， 吾将归乎东路。 揽騑辔以抗策， 怅盘桓而不能去。</p>
    </k-modal>
    <k-button @click="modalWithoutClose" type="default">modalWithoutClose</k-button>
    <k-modal
      :show="modalWithoutCloseShow"
      :close="modalWithoutClose"
      cssStyle="border-radius: 4px;">
      <p style="width: 600px;">黄初三年， 余朝京师， 还济洛川。 古人有言， 斯水之神， 名曰宓妃。 感宋玉对楚王神女之事， 遂作斯赋。 其辞曰：
余从京域， 言归东藩。 背伊阙， 越轘辕， 经通谷， 陵景山。 日既西倾， 车殆马烦。 尔乃税驾乎蘅皋， 秣驷乎芝田， 容与乎阳林， 流眄乎洛川。 于是精移神骇， 忽焉思散。 俯则末察， 仰以殊观， 睹一丽人， 于岩之畔。 乃援御者而告之曰： “尔有觌于彼者乎？ 彼何人斯？ 若此之艳也！” 御者对曰： “臣闻河洛之神， 名曰宓妃。 然则君王所见， 无乃日乎？ 其状若何？ 臣愿闻之。”
余告之曰： “其形也， 翩若惊鸿， 婉若游龙。 荣曜秋菊， 华茂春松。 仿佛兮若轻云之蔽月， 飘摇兮若流风之回雪。 远而望之， 皎若太阳升朝霞； 迫而察之， 灼若芙蕖出渌波。 秾纤得衷， 修短合度。 肩若削成， 腰如约素。 延颈秀项， 皓质呈露。 芳泽无加， 铅华弗御。 云髻峨峨， 修眉联娟。 丹唇外朗， 皓齿内鲜， 明眸善睐， 靥辅承权。 瑰姿艳逸， 仪静体闲。 柔情绰态， 媚于语言。 奇服旷世， 骨像应图。 披罗衣之璀粲兮， 珥瑶碧之华琚。 戴金翠之首饰， 缀明珠以耀躯。 践远游之文履， 曳雾绡之轻裾。 微幽兰之芳蔼兮， 步踟蹰于山隅。
于是忽焉纵体， 以遨以嬉。 左倚采旄， 右荫桂旗。 壤皓腕于神浒兮， 采湍濑之玄芝。 余情悦其淑美兮， 心振荡而不怡。 无良媒以接欢兮， 托微波而通辞。 愿诚素之先达兮， 解玉佩以要之。 嗟佳人之信修， 羌习礼而明诗。 抗琼［王弟］以和予兮， 指潜渊而为期。 执眷眷之款实兮， 惧斯灵之我欺。 感交甫之弃言兮， 怅犹豫而狐疑。 收和颜而静志兮， 申礼防以自持。
于是洛灵感焉， 徙倚彷徨， 神光离合， 乍阴乍阳。 竦轻躯以鹤立， 若将飞而未翔。 践椒涂之郁烈， 步蘅薄而流芳。 超长吟以永慕兮， 声哀厉而弥长。
尔乃众灵杂遢， 命俦啸侣， 或戏清流， 或翔神渚， 或采明珠， 或拾翠羽。 从南湘之二妃， 携汉滨之游女。 叹匏瓜之无匹兮， 咏牵牛之独处。 扬轻袿之猗靡兮， 翳修袖以延伫。 体迅飞凫， 飘忽若神， 凌波微步， 罗袜生尘。 动无常则， 若危若安。 进止难期， 若往若还。 转眄流精， 光润玉颜。 含辞未吐， 气若幽兰。 华容婀娜， 令我忘餐。
于是屏翳收风， 川后静波。 冯夷鸣鼓， 女娲清歌。 腾文鱼以警乘， 鸣玉鸾以偕逝。 六龙俨其齐首， 载云车之容裔， 鲸鲵踊而夹毂， 水禽翔而为卫。
于是越北沚。 过南冈， 纡素领， 回清阳， 动朱唇以徐言， 陈交接之大纲。 恨人神之道殊兮， 怨盛年之莫当。 抗罗袂以掩涕兮， 泪流襟之浪浪。 悼良会之永绝兮。 哀一逝而异乡。 无微情以效爱兮， 献江南之明。 虽潜处于太阳， 长寄心于君王。 忽不悟其所舍， 怅神宵而蔽光。
于是背下陵高， 足往神留， 遗情想像， 顾望怀愁。 冀灵体之复形， 御轻舟而上溯。 浮长川而忘返， 思绵绵督。 夜耿耿而不寐， 沾繁霜而至曙。 命仆夫而就驾， 吾将归乎东路。 揽騑辔以抗策， 怅盘桓而不能去。</p>
    </k-modal>
    <div style="height: 20px;"></div>
    Popover
    <div style="height: 100px;width:1200px;"></div>
    <k-popover
      direction="top"
      eventType="hover">
      Hover Top
      <span slot="Popover">Hover show Popover</span>
    </k-popover>
    <div style="height: 20px;"></div>
    <k-popover
      direction="bottom"
      eventType="hover">
      Hover Bottom
      <span slot="Popover">Hover show Popover</span>
    </k-popover>
    <div style="height: 20px;"></div>
    <k-popover
      direction="right"
      eventType="hover">
      Hover Right
      <span slot="Popover">Hover show Popover</span>
    </k-popover>
    <div style="height: 20px;"></div>
    <k-popover
      direction="left"
      eventType="hover">
      Hover Left
      <span slot="Popover">Hover show Popover</span>
    </k-popover>
    <div style="height: 20px;"></div>
    <k-popover
      direction="bottom"
      eventType="click"
      cssStyle="border-radius: 4px;">
      <k-button>Click Popover Bottom</k-button>
      <div slot="Popover">Click show Popoverxxxxxxxxxx<div></div>sadasdasdasd<div></div>asdasdasdasd</div>
    </k-popover>
    <div style="height: 20px;"></div>
    BreadCrumb
    <div style="height: 20px;"></div>
    <k-breadcrumb>
      <k-breadcrumb-item><i class="fa fa-chrome"></i>One</k-breadcrumb-item>
      <k-breadcrumb-item>Two</k-breadcrumb-item>
      <k-breadcrumb-item>Three</k-breadcrumb-item>
    </k-breadcrumb>
    <div style="height: 20px;"></div>
    <k-breadcrumb
      fontSize="16px">
      <k-breadcrumb-item>One</k-breadcrumb-item>
      <k-breadcrumb-item>Two</k-breadcrumb-item>
      <k-breadcrumb-item>Three</k-breadcrumb-item>
    </k-breadcrumb>
    <div style="height: 20px;"></div>
    Alert
    <div style="height: 20px;"></div>
    <k-alert size="small">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="info" size="large" :radius="false">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="warning">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="error">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="success" close="true">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    Page
    <div style="height: 20px;"></div>
    <k-page
      type="concise"
      :onChange="turnPage"
      :options="{current: 1, total: 20100, pageSize: 10}"/>
      <div style="height: 20px;"></div>
    <k-page
      type="concise"
      size="small"
      :onChange="turnPage"
      :options="{current: 1, total: 20100, pageSize: 10}"/>
    <div style="height: 20px;"></div>
    <k-page
      :onChange="turnPage"
      :options="{current: 5, total: 81, pageSize: 10}"/>
    <div style="height: 20px;"></div>
    <k-page
      size="small"
      :radius="false"
      :onChange="turnPage"
      :options="{current: 1, total: 59, pageSize: 10}"/>
    <div style="height: 20px;"></div>
    Badge
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" />
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" type="info" />
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" type="primary"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" type="success"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" type="warning"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge size="mini" type="error"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info"
      @click="addBadge">
      Badge 徽标
      <k-badge
        :count="badgeCount"
        :max="99"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge
        :count="99"/>
    </k-button>
    <div style="height: 20px;"></div>
    <k-button
      type="info">
      Badge 徽标
      <k-badge
        :count="199"
        :max="55"/>
    </k-button> -->
    <div style="height: 20px;"></div>
    Menu
    <div style="height: 20px;"></div>
    <k-menu
      :border="false">
      <k-menu-item
        :active="true">
        <i class="fa fa-home" style="margin-right: 6px;font-size:14px"></i>Home
        <k-menu-submenu>
          <k-menu-submenu-group
            title="Group-1">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
          <k-menu-submenu-group
            title="Group-2">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
        </k-menu-submenu>
      </k-menu-item>
      <k-menu-item>
        <i class="fa fa-home" style="margin-right: 6px;font-size:14px"></i>Table
        <k-menu-submenu>
          <k-menu-submenu-group
            title="Group-1">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
          <k-menu-submenu-group
            title="Group-2">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
        </k-menu-submenu>
      </k-menu-item>
      <k-menu-item>
        Pagination
      </k-menu-item>
    </k-menu>
    <div style="height: 20px;"></div>
    <k-menu>
      <k-menu-item
        eventType="click"
        :active="true">
        <i class="fa fa-home" style="margin-right: 6px;font-size:14px"></i>Home
        <k-menu-submenu>
          <k-menu-submenu-group
            title="Group-1">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
          <k-menu-submenu-group
            title="Group-2">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
        </k-menu-submenu>
      </k-menu-item>
      <k-menu-item
        eventType="click">
        <i class="fa fa-home" style="margin-right: 6px;font-size:14px"></i>Table
        <k-menu-submenu>
          <k-menu-submenu-group
            title="Group-1">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
          <k-menu-submenu-group
            title="Group-2">
            <k-menu-submenu-item
              @click="clickMenu">
              Pwanxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              SKTxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
            <k-menu-submenu-item
              @click="clickMenu">
              Impxxxxxxxxxxxxxxxxxxxxxxxxxx
            </k-menu-submenu-item>
          </k-menu-submenu-group>
        </k-menu-submenu>
      </k-menu-item>
      <k-menu-item>
        Pagination
      </k-menu-item>
    </k-menu>
    <div style="height: 20px;"></div>
    <div style="width: 360px;">
      <k-menu
        direction="y">
        <k-menu-item
          @click="clickMenu"
          :active="true">
          <i class="fa fa-heart" style="margin-right: 6px;"></i>Home
          <k-menu-submenu>
            <k-menu-submenu-group
              title="Group-1">
              <k-menu-submenu-item
                @click="clickMenu">
                Pwanxxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                SKTxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                Impxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
            </k-menu-submenu-group>
            <k-menu-submenu-group
              title="Group-2">
              <k-menu-submenu-item
                @click="clickMenu">
                Pwanxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                SKTxxxxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                Impxxxxxxxxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
            </k-menu-submenu-group>
          </k-menu-submenu>
        </k-menu-item>
        <k-menu-item
          @click="clickMenu">
          <i class="fa fa-heart" style="margin-right: 6px;"></i>Table
          <k-menu-submenu>
            <k-menu-submenu-group
              title="Group-1">
              <k-menu-submenu-item
                @click="clickMenu">
                Pwanxxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                SKTxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                Impxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
            </k-menu-submenu-group>
            <k-menu-submenu-group
              title="Group-2">
              <k-menu-submenu-item
                @click="clickMenu">
                Pwanxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                SKTxxxxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
              <k-menu-submenu-item
                @click="clickMenu">
                Impxxxxxxxxxxxxxxxxxxxxxxxxxx
              </k-menu-submenu-item>
            </k-menu-submenu-group>
          </k-menu-submenu>
        </k-menu-item>
        <k-menu-item
          @click="clickMenu">
          Pagination
        </k-menu-item>
      </k-menu>
      <div style="height: 20px;"></div>
      <div style="width: 360px;">
        <k-menu
          direction="y">
          <k-menu-item
            eventType="click"
            @click="clickMenu"
            :active="true">
            <i class="fa fa-heart" style="margin-right: 6px;"></i>Home
            <k-menu-submenu>
              <k-menu-submenu-group
                title="Group-1">
                <k-menu-submenu-item
                  @click="clickMenu">
                  Pwanxxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  SKTxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  Impxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
              </k-menu-submenu-group>
              <k-menu-submenu-group
                title="Group-2">
                <k-menu-submenu-item
                  @click="clickMenu">
                  Pwanxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  SKTxxxxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  Impxxxxxxxxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
              </k-menu-submenu-group>
            </k-menu-submenu>
          </k-menu-item>
          <k-menu-item
            eventType="click"
            @click="clickMenu">
            <i class="fa fa-heart" style="margin-right: 6px;"></i>Table
            <k-menu-submenu>
              <k-menu-submenu-group
                title="Group-1">
                <k-menu-submenu-item
                  @click="clickMenu">
                  Pwanxxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  SKTxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  Impxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
              </k-menu-submenu-group>
              <k-menu-submenu-group
                title="Group-2">
                <k-menu-submenu-item
                  @click="clickMenu">
                  Pwanxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  SKTxxxxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
                <k-menu-submenu-item
                  @click="clickMenu">
                  Impxxxxxxxxxxxxxxxxxxxxxxxxxx
                </k-menu-submenu-item>
              </k-menu-submenu-group>
            </k-menu-submenu>
          </k-menu-item>
          <k-menu-item
            @click="clickMenu">
            Pagination
          </k-menu-item>
        </k-menu>
      </div>
    </div>
    <div style="height: 20px;"></div>
    Tab
    <div style="height: 20px;"></div>
    <k-tab></k-tab>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        buttonStat: false,
        buttonLabel: 'Start Loading',
        switchStat: false,
        sureLoading: false,
        modalWithCloseShow: false,
        modalWithoutCloseShow: false,
        badgeCount: 98
      }
    },
    methods: {
      clickMenu() {
        console.log('clickMenu');
      },
      addBadge() {
        this.badgeCount += 1;
      },
      callBack() {
        console.log('this is callBack');
      },
      click() {
        this.buttonStat = !this.buttonStat;
        if (this.buttonStat) {
          this.buttonLabel = 'Stop Loading';
          return;
        }
        this.buttonLabel = 'Start Loading';
      },
      toggleSwitch() {
        this.switchStat = !this.switchStat;
      },
      addNotification(type) {
        this.$Kui.Notification[type]({title: type, content: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。`});
      },
      notificationAutoClose(delay) {
        if (delay) {
          this.$Kui.Notification.info({delay: 5000, autoClose: true, content: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'});
          return;
        }
        this.$Kui.Notification.info({autoClose: true, content: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'});
      },
      addMessage(type) {
        this.$Kui.Message[type]({content: 'This is Message...', remove: 1800});
      },
      addMessageClose(type) {
        this.$Kui.Message[type]({content: 'This is Message...asdasdasdasdasdasdasd...'});
      },
      addDialog() {
        this.$Kui.Dialog({
          title: '出师表',
          content: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。`,
          sure: this.dialogLoadingCallBack,
          cancel: this.dialogLoadingCallBack2,
          radius: false
        });
      },
      dialogLoadingCallBack2() {
        this.$Kui.DialogEvent({
          type: 'loading',
          button: 'cancel',
          action: 'start'
        });
        setTimeout(() => {
          this.$Kui.DialogEvent({
            type: 'loading',
            button: 'cancel',
            action: 'error',
            close: true,
            error: this.dialogCancelError
          });
          this.$Kui.Message.error({content: 'error', remove: 1800});
        }, 2000);
      },
      dialogCancelError() {
        console.log('error');
      },
      dialogLoadingCallBack() {
        this.$Kui.DialogEvent({
          type: 'loading',
          button: 'sure',
          action: 'start'
        });
        setTimeout(() => {
          this.$Kui.DialogEvent({
            type: 'loading',
            button: 'sure',
            action: 'stop'
          });
          this.$Kui.Message.success({content: 'success', remove: 1800});
        }, 2000);
      },
      addDialog2() {
        this.$Kui.Dialog({
          title: '十一月四日风雨大作',
          content: `僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。`,
        });
      },
      modalWithClose() {
        this.modalWithCloseShow = !this.modalWithCloseShow;
      },
      modalWithoutClose() {
        this.modalWithoutCloseShow = !this.modalWithoutCloseShow;
      },
      turnPage(pageInfo) {
        console.log(pageInfo);
      },
      treeCheckOnchange(data) {
        console.log('treeCheckOnchange', data);
      },
      treeNodeClick(data) {
        console.log('treeNodeClick', data);
      },
      checkBoxChange(data) {
        console.log('checkBoxChange', data);
      }
    }
  }
</script>
<style>
  body{
    font-family:  "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 12px;
    margin: 0px;
    background: #eee;
    /*overflow: hidden;*/
    padding: 20px 20px;
    overflow: auto;
    color: #888;
  }
</style>
