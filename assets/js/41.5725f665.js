(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{264:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"挂载-tinc-局域网节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载-tinc-局域网节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 挂载 Tinc 局域网节点")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("本篇配置示例基于 CentOS 8，请酌情修改。")])]),s._v(" "),a("p",[s._v("现在普遍使用 Cloudflare 的 CDN 来防止 GFW 对 IP 屏蔽，但是目前 Cloudflare 已经对这种用途流量转发早已不堪重负，特别是到晚上的时候频繁出现 CDN 节点爆炸的问题，提供个新方式来缓解 Cloudflare 晚上常年缓慢的问题。")]),s._v(" "),a("p",[s._v("这种架构 V2Ray 方案的方式是利用内网穿透软件，把所有手里的 VPS 当作网络节点来选出没有被 GFW 屏蔽的 IP 作为主节点，所有的 V2Ray 数据都请求该主节点来分流到其他 VPS；当 GFW 将主节点的 IP  屏蔽阻断的时候，让其他节点上升为主节点，而原来的主节点则下降为负载节点。")]),s._v(" "),a("blockquote",[a("p",[s._v("这种模式类似于 "),a("code",[s._v("Follwer/Leader")]),s._v(" 模式，"),a("code",[s._v("Leader")]),s._v(" 选取最优 VPS 来代理所有 V2ray 流量从而转发给 "),a("code",[s._v("Follwer")]),s._v("。")])]),s._v(" "),a("p",[s._v("请注意：这个教程提供的思路和手段必须最少对 Linux 系统有一定水平的操作能力，如果没有较清晰的认识请务必不要自行乱来！")]),s._v(" "),a("p",[s._v("这里的方案需求有以下要求:")]),s._v(" "),a("ul",[a("li",[s._v("至少有两台服务器")]),s._v(" "),a("li",[s._v("基于 Nginx 的 upstream")]),s._v(" "),a("li",[s._v("基于 Tinc 的内网穿透节点功能")])]),s._v(" "),a("p",[s._v("这里主要配置用途：\n服务器 IP 被封，直接使用另一个服务器参与节点转发；一般 GFW 封禁 IP 有时限，随便开穿透节点转发等封禁周期过了继续使用原来 IP 轮换着用。")]),s._v(" "),a("h2",{attrs:{id:"tinc-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinc-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Tinc 安装")]),s._v(" "),a("p",[s._v("在配置开始前必须要开启内核的 "),a("code",[s._v("ip_foward")]),s._v(" 功能，如果没有开启请手动开启转发.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl -a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ip_forward "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 ip_forward 转发是否开启 [ net.ipv4.ip_forward=1 ]")]),s._v("\n")])])]),a("p",[s._v("本例之所以使用 Tinc 来作为穿透软件是因为足够简单和基于 C 语言程序的性能依赖，且 Tinc 的 IPv6 支持还算不错，且配置相对简单不是那么复杂，其他 frp、ngrok 等都可以按照个人习惯来选择。")]),s._v(" "),a("p",[s._v("有的发行版的源已经内置了 Tinc，但本篇使用编译安装来部署 Tinc。\nTinc 最新版的下载地址见"),a("a",{attrs:{href:"https://www.tinc-vpn.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("：")]),s._v(" "),a("h3",{attrs:{id:"tinc-编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinc-编译安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Tinc 编译安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我常用惯例是在 /tmp 目录进行下载和编译，防止下载和编译到处散乱在其他目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.tinc-vpn.org/packages/tinc-1.0.36.tar.gz -O tinc.tar.gz "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载获取最新版的源码包")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf tinc.tar.gz --one-top-level --strip-components"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压压缩包")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" tinc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入文件夹")]),s._v("\n")])])]),a("p",[s._v("在开始编译工作之前，需要安装相应的依赖库：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc cmake "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" openssl-devel zlib-devel lzo-devel "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 的安装，其他发行版按照名称搜索安装即可")]),s._v("\n")])])]),a("p",[s._v("依赖库确认安装之后就开始编译安装工作：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./configure\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里需要用到 root 权限安装")]),s._v("\n$ tincd --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装之后测试打印版本号即可")]),s._v("\n")])])]),a("h3",{attrs:{id:"systemd-服务文件修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemd-服务文件修改","aria-hidden":"true"}},[s._v("#")]),s._v(" systemd 服务文件修改")]),s._v(" "),a("p",[s._v("这里下载的压缩包本身带了两个系统服务，实际上修修改改就行:")]),s._v(" "),a("ul",[a("li",[s._v("/tmp/tinc/systemd/tinc.service.in")]),s._v(" "),a("li",[s._v("/tmp/tinc/systemd/tinc@.service.in")])]),s._v(" "),a("p",[a("code",[s._v("tinc.service.in")]),s._v(" 文件配置：")]),s._v(" "),a("p",[s._v("内容修改:")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 屏蔽 `WorkingDirectory=@sysconfdir@/tinc`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增以下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/usr/local/etc/tinc")]),s._v("\n")])])]),a("p",[s._v("复制到 systemd 文件夹：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /tmp/tinc/systemd/tinc.service.in /lib/systemd/system/tinc.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制到系统服务文件夹")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /lib/systemd/system/tinc.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改内容")]),s._v("\n")])])]),a("p",[a("code",[s._v("tinc@.service.in")]),s._v(" 文件配置：")]),s._v(" "),a("p",[s._v("内容修改：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 屏蔽以下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WorkingDirectory=@sysconfdir@/tinc/%i")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ExecStart=@sbindir@/tincd -n %i -D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ExecReload=@sbindir@/tincd -n %i -kHUP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增以下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/usr/local/etc/tinc/%i")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/usr/local/sbin/tincd -n %i -D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/usr/local/sbin/tincd -n %i -kHUP")]),s._v("\n")])])]),a("p",[s._v("复制到 systemd 文件夹：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /tmp/tinc/systemd/tinc@.service.in /lib/systemd/system/tinc@.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制到系统服务文件夹")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /lib/systemd/system/tinc@.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改内容")]),s._v("\n")])])]),a("h3",{attrs:{id:"收尾工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收尾工作","aria-hidden":"true"}},[s._v("#")]),s._v(" 收尾工作")]),s._v(" "),a("p",[s._v("完成配置复制和修改之后没问题就准备最后的系统配置加载流程")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/var/run/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建运行 PID 目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/etc/tinc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建服务配置加载的配置目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/etc/tinc /etc/tinc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 /etc 配置文件的软链接")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl unmask tinc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新刚刚加载的 Systemctl 系统服务")]),s._v("\n")])])]),a("h2",{attrs:{id:"搭建-tinc-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建-tinc-节点","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 Tinc 节点")]),s._v(" "),a("p",[s._v("在这里需要说明需要明确以下规范:")]),s._v(" "),a("ul",[a("li",[s._v("10.0.0.1 是主要接受客户端 V2ray 数据的主节点")]),s._v(" "),a("li",[s._v("10.0.0.2~n 是代理转发过来过来的负载节点")]),s._v(" "),a("li",[s._v("主节点使用 Nginx 来转发数据流量到 10.0.0.2~n 到其他服务器")]),s._v(" "),a("li",[s._v("所有的节点都需要安装 Tinc 和 Nginx")])]),s._v(" "),a("h3",{attrs:{id:"主节点的搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主节点的搭建","aria-hidden":"true"}},[s._v("#")]),s._v(" 主节点的搭建")]),s._v(" "),a("p",[s._v("创建节点的搭建信息：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/tinc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入配置目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/tinc/v2ray/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 V2ray 的穿透节点并且设置允许访问主机配置目录")]),s._v("\n")])])]),a("p",[s._v("编辑配置文件（/etc/tinc/v2ray/tinc.conf）：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 这里Name就是配置文件名称,这个文件节点我一般喜欢起名 `master-slave`/`node_01-node_02` 之类")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 默认端口监听665,这里设置20665,一般我都不喜欢直接使用默认端口,很容易被机器人扫出对应服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 这里路由模式使用交换器模式 [ Switch ] ，其他模式可以参考官网配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" v2ray")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("20065")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Mode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("switch")]),s._v("\n")])])]),a("p",[s._v("编写主节点的详细信息：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/tinc/v2ray/hosts/master\n")])])]),a("p",[s._v("主节点链路信息内容：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 这里 Address 代表了自己地址 IP 和端口开放信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如果服务器 IP 被 Ban ,需要把主节点切换成负载节点记得把该 IP 修改成主节点 IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subnet 代表了内网穿透节点的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Address")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" VPS自己IP 20665")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Subnet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 10.0.0.1/32")]),s._v("\n")])])]),a("p",[s._v("完成之后就需要生成连接密钥,他会在 master 文件最后附上密钥信息")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这里一般格式 tincd -n 节点名称 -K [2048/4096,加密程度不推荐太高,本身 V2Ray 就是带有加密没必要数据再进行太过复杂加密]")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/local/sbin/tincd -n v2ray -K "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n")])])]),a("p",[s._v("编写启动虚拟交换器脚本（/etc/tinc/v2ray/tinc-up），内容如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10.0.0.1 代表了该节点占用的节点地址，必须是唯一性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INTERFACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1 netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n")])])]),a("p",[s._v("编写错误关闭的脚本（/etc/tinc/v2ray/tinc-down）如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INTERFACE")]),s._v(" down\n")])])]),a("p",[s._v("收尾工作,最后赋予脚本执行权限和手动开放端口/服务即可：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/tinc/v2ray/tinc-* "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予脚本启动权限,")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start tinc@v2ray "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动系统服务")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20665")]),s._v("/tcp --permanent "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有防火墙记得开启对外端口")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新防火墙配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" tinc@v2ray "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动服务,这个实际上推荐最后调试没问题再启用")]),s._v("\n")])])]),a("h3",{attrs:{id:"负载点的搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载点的搭建","aria-hidden":"true"}},[s._v("#")]),s._v(" 负载点的搭建")]),s._v(" "),a("p",[s._v("安装和配置方式基本上和主节点一致，这里下面大致理下流程，只对重点配置节点地方注明。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/tinc/v2ray/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认和主节点一致的配置文件目录")]),s._v("\n")])])]),a("p",[s._v("这里配置节点信息（/etc/tinc/v2ray/tinc.conf）稍微不同，参考如下例子：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Name 代表了负载节点的配置文件名称 [ hosts/slave_01 ] ,这个文件后续要放入主节点的 hosts 目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ConnectTo 代表接入穿透的内网节点配置文件 [ hosts/master ] ,这个文件是拷贝主节点的 hosts 的配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   这里需要知道的点:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     * Name 不能和其他节点冲突")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     * ConnectTo 必须是主节点附加带有密钥的配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     * Interface/Mode 必须和主节点配置保持一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" slave_01")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" v2ray")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ConnectTo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Mode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("switch")]),s._v("\n")])])]),a("p",[s._v("配置链路（/etc/tinc/v2ray/hosts/slave_01），内容如下：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意这里必须对应服务端的 10.0.0.2～255")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是作为节点的内网IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Subnet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 10.0.0.2/32")]),s._v("\n")])])]),a("p",[s._v("最后配置完之后生成密钥信息：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/local/sbin/tincd -n v2ray -K\n")])])]),a("p",[s._v("负载节点的启动脚本内容有所不同 [ /etc/tinc/v2ray/tinc-up ]")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 IP 地址改为该节点选择的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INTERFACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.2 netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n")])])]),a("p",[s._v("在启动的时候，请千万记得复制主节点/负载节点下的 hosts 文件到各自目录下保证,保证双方 hosts 目录有以下对应内容：")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ls -l /etc/v2ray/hosts\n  master [主节点文件]\n  slave_01 [负载节点01]\n  slave_02 [负载节点02]\n  ...\n")])])]),a("p",[s._v("这里负载节点不需要开放什么端口，所有连接信息都记录在 master 主节点信息（公网 IP 和端口信息）。\n但是需要手动配置防火墙，所有的负载节点开放内部的 10.0.0.1 的放行（后面章节会提到）。")]),s._v(" "),a("p",[s._v("Tinc 没有日志文件功能，这里推荐个调试连接思路，利用 SSH 连接来测试是否联通：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 负载节点测试 ssh 是否能够通过挂起的 10.0.0.1 接入到主节点")]),s._v("\n")])])]),a("h2",{attrs:{id:"负载节点-v2ray-搭建-10-0-0-2-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载节点-v2ray-搭建-10-0-0-2-n","aria-hidden":"true"}},[s._v("#")]),s._v(" 负载节点 V2Ray 搭建 (10.0.0.2~n)")]),s._v(" "),a("p",[s._v("这里安装的 V2Ray 直接参考其他配置，只需要说明的是不推荐使用任何转发/伪装协议来处理；\n直接用 TCP 转发数据，因为本身 Tinc 就是带有数据安全加密功能，如果选用其他 V2ray 的其他伪装协议，性能会出现大幅降低。\n所有的负载节点都需要安装 V2Ray，同时配置文件基本上没什么大的区别：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/v2ray/access.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/v2ray/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"loglevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warning"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里随便启动个 V2ray 端口,直接按照负载节点请求 10.0.0.2:10000/10.0.0.3:10000")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里开放公网,记得 firewall-cmd 我一般使用 firewal-cmd 管理端口,这里外部是没办法通过公网访问的.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("启动 V2Ray 之后需要对 10.0.0.x 地址进行针对性放行，port 记得改成负载节点下的 V2Ray 服务器端口信息：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-rich-rule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rule family="')]),s._v("ipv4"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" source address="')]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" port protocol="')]),s._v("tcp"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" port="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("V2Ray 的服务器端口"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" accept"')]),s._v("\n")])])]),a("p",[s._v("这样 V2Ray 的负载节点也就完成配置了。")]),s._v(" "),a("h2",{attrs:{id:"主节点反向代理-10-0-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主节点反向代理-10-0-0-1","aria-hidden":"true"}},[s._v("#")]),s._v(" 主节点反向代理 (10.0.0.1)")]),s._v(" "),a("p",[s._v("我这里使用 Nginx 的 upstream 来反向代理到其他负载节点流量 （/etc/nginx/nginx.conf），配置如下：")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("events {\n    # 这个系统会自动选择,可有可无\n    use epoll;\n    # 这个看机器配置的最大连接 [ sudo ulimit -n # 命令查看最大]\n    worker_connections 65535;\n}\n\n//主要是添加配置该选项\nstream{\n  include /etc/nginx/stream.d/*.conf;\n}\n\nhttp{\n  //........\n}\n")])])]),a("p",[s._v("编写 Nginx 反向代理的配置（ /etc/nginx/stream.d/v2ray.conf ），内容如下：")]),s._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream v2ray {\n\n  hash $remote_addr consistent;\n  server 10.0.0.2:10000 weight=5;\n  server 10.0.0.3:10000 weight=5;\n  server 10.0.0.4:10000 weight=5;\n  //.......\n  //主节点按照平均权重不断转发对应的内网穿透节点下\n}\n\n# 挂起 TCP 反向代理服务\nserver {\n  # 设置对外访问 V2ray 端口\n  # v2ray 的客户端全部请求主节点:6666 端口，之后由节点内网穿透转发到指定的内网节点\n  listen 6666;\n\n  # 这里直接转发到上面配置的数据配置\n  proxy_pass v2ray;\n}\n")])])]),a("p",[s._v("完成之后启动主节点，连接 V2ray 查看是否能够正确转发数据数据.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果有防火墙请记得打开允许 Nginx 对应的端口进行访问。")])]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("p",[s._v("Q: 如果主节点的 IP 被封了，怎么将负载节点转化主节点？\nA: 直接复制主节点的 /etc/tinc/v2ray 目录下到可用负载节点（记得备份），将所有节点 /etc/tinc/vpn/hosts/master 文件的公网 IP 修改成新的节点 IP ，复制 Nginx 启动配置即可，同时开放 Tinc 或 Nginx 的端口。")]),s._v(" "),a("p",[s._v("Q: 可以通过中国服务器参与节点吗?\nA: 目前测试如果中国服务器节点参与负载转发会有频繁的超时、卡顿等现象，效率不如直连海外服务器，但是速度比 WSS+CDN 快，稳定性却很差。")]),s._v(" "),a("p",[s._v("Q: 可以不选择 TCP 而使用更加高级的伪装协议吗?\nA: 可以用但是不推荐，本身 Tinc 是附带的安全加密数据功能，大量加密套壳过程会导致性能锐减。")])])},[],!1,null,null,null);t.default=e.exports}}]);