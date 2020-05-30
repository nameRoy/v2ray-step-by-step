(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{251:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于-nginx-的简单-tls-分流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-nginx-的简单-tls-分流","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于 Nginx 的简单 TLS 分流")]),t._v(" "),a("p",[t._v("本节提供了基于协议数据的统一的代理分流方案，其使用 Nginx 作为前端对基于 TLS 承载的数据进行分流，简化了现有的 TCP+TLS+Web 方案并同时支持分流到 Trojan 或 V2Ray 的 HTTP2。")]),t._v(" "),a("h2",{attrs:{id:"目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的","aria-hidden":"true"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),a("p",[t._v("看到有人根据 Trojan 原理基于 V2Ray 做了个类似功能的定制即 TCP + TLS + Web，就是在 TLS 层上传输 VMess 或者其他比如 http Web 流量。\n本人好奇，遂群里有如下互动：")]),t._v(" "),a("blockquote",[a("p",[t._v("Q: TCP + TLS + Web 为啥需要 Web 前需要 HAProxy 啊，nginx 也有这种功能啊 非要前面 HAProxy，后面再弄个 nginx/httpd。 对于个人使用没必要吧。 当然你搭建商业的除外")]),t._v(" "),a("p",[t._v("A: 不要再问这种问题了，你觉得可以就自己搭，搭成了可以写给教程 pr")]),t._v(" "),a("p",[t._v("Q: nginx 的 stream 块不行吗")]),t._v(" "),a("p",[t._v("A: 不要再问这种问题了，你觉得可以就自己搭，搭成了可以写给教程 pr")])]),t._v(" "),a("p",[t._v("所以目的很简单，就是去掉那个 HAProxy，只用 Nginx 来分流，这样更适用于个人 vps 的搭建。\n另外的一个目的，也作为 Trojan 的前端，即 Nginx 也可以分流到 Trojan 后端。")]),t._v(" "),a("h2",{attrs:{id:"可行性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可行性分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 可行性分析")]),t._v(" "),a("p",[t._v("所有的 TLS 处理在 Nginx 截止，后端代理只进行明文协议的解析。有些域名既可以指向网站，也可以放到我们的代理客户端的 SNI 中处理，故本篇不考虑 SNI 的分流。")]),t._v(" "),a("h2",{attrs:{id:"基于-tls-握手后的数据包分流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-tls-握手后的数据包分流","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于 TLS 握手后的数据包分流")]),t._v(" "),a("p",[t._v("由于原理是根据 TLS 握手后的数据进行分流，对 Nginx 采用 stream 的配置方式，具体如下：")]),t._v(" "),a("ul",[a("li",[t._v("如果是 HTTP/1.1，直接路由到某个正常的网站，这要求我们没有把代理协议承载在 HTTPS/1.1 上；")]),t._v(" "),a("li",[t._v("如果是 HTTP/2，就路由到 HTTP/2 代理后端比如 V2Ray 或 Trojan。尽管 Trojan-Go 支持 HTTP2，但鉴于 Trojan-GFW 项目组对引入 HTTP/2 的反对，所以我们的实现也不考虑 Trojan-Go 的 HTTP/2 实现。这就要求 V2Ray 支持对其他来源的 HTTP/2 网站请求的返回即自动回落，但目前尚没有支持。")]),t._v(" "),a("li",[t._v("如果是纯 VMess 协议数据即常说的 TCP+TLS+VMess+Web，直接转发到 V2Ray，这同样需要 V2Ray 在解析失败的情况下返回一个普通网页以实现伪装，算是另一种自动回落机制。目前 V2Ray 没有相关实现，但有个"),a("a",{attrs:{href:"https://gist.github.com/liberal-boy/04f875b86a5e54cb4e1752d24077f2be",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源实现"),a("OutboundLink")],1),t._v(" 可供参考或使用。")]),t._v(" "),a("li",[t._v("如果是纯 Trojan 协议数据，直接转发到 Trojan 后端，这里 Trojan 实现了协议自动回落。")])]),t._v(" "),a("h2",{attrs:{id:"与-trojan-的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-trojan-的比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 与 Trojan 的比较")]),t._v(" "),a("h3",{attrs:{id:"主动探测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动探测","aria-hidden":"true"}},[t._v("#")]),t._v(" 主动探测")]),t._v(" "),a("p",[t._v("对于 Trojan，所有没有提供正确数据结果或密码的请求都会被转至一个预设的出口，包括普通HTTPS流量或重放、伪造的流量；但是目前 V2Ray 没有这样的功能，即上面所提的 "),a("em",[t._v("协议自动回落")]),t._v(" 功能，不过社区在做了。")]),t._v(" "),a("h3",{attrs:{id:"被动探测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被动探测","aria-hidden":"true"}},[t._v("#")]),t._v(" 被动探测")]),t._v(" "),a("p",[t._v("Trojan 对抗被动探测方法和本篇所描述的方案基本一致，即所有代理流量表现形如 HTTPS 或 WebSocket。本方案中所有 TLS 的功能都被放到了 Nginx 上，其他功能还在后端 Trojan 或 V2Ray 上。")]),t._v(" "),a("h2",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("本节提供的安装示例基于 Debian，请酌情做必要的修改。")])]),t._v(" "),a("h3",{attrs:{id:"安装-openresty-（nginx-分支）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-openresty-（nginx-分支）","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 OpenResty （Nginx 分支）")]),t._v(" "),a("p",[t._v("我们采用 luajit 来实现，OpenResty 安装参考详见"),a("a",{attrs:{href:"https://openresty.org/en/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方指导"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl disable nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-install-recommends "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" gnupg ca-certificates\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O - https://openresty.org/package/pubkey.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add this to /etc/apt/sources.list")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("codename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Po "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VERSION=\"[0-9]+ \\(\\K[^)]+'")]),t._v(" /etc/os-release"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb http://openresty.org/package/debian '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$codename")]),t._v(' openresty"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/openresty.list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openresty\n")])])]),a("h3",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx 配置")]),t._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\nworker_processes  auto;\nerror_log  logs/error.log  info;\nevents {\n    worker_connections  1024;\n    use epoll;\n    multi_accept on;\n}\nstream {\n    resolver 127.0.0.1;\n    lua_add_variable $VMess;\n\n    server {\n        listen  443 ssl reuseport backlog=4096;\n        listen [::]:443 ssl reuseport;\n\n        ssl_certificate_key   /privatekey.pem;\n        ssl_certificate       /fullchain.pem;\n\n\n        ssl_session_timeout 1d;\n        ssl_session_cache shared:SSL:20m;\n        ssl_protocols TLSv1.1 TLSv1 TLSv1.2;\n        ssl_ciphers ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv3:+EXP;\n        ssl_prefer_server_ciphers on;\n\n        # 16k\n        proxy_buffer_size 256k;\n        # 16k\n        # preread_buffer_size 4k;\n        preread_buffer_size 58;\n\n        preread_by_lua_block {\n            local sock, err = ngx.req.socket()\n            if sock then\n               -- ngx.say("got the request socket")\n            else\n                ngx.say("failed to get the request socket: ", err)\n            end\n\n            local data, err = sock:peek(16)\n            local datal, err = sock:peek(58)\n            if string.match(data, "HTTP/2.0") then\n                -- maybe faked http2 to detect us ,so need parse the body to 协议自动回落 to normal url\n                -- or by VMess\n                -- maybe we use Trojan-go http2,but now giveup\n\n        -- for V2Ray\'s tcp +TLS +h2c\n                ngx.var.VMess = "10008"\n            elseif string.match(data, "HTTP") then\n            -- for normal http req\n                ngx.var.VMess = "8080"\n            elseif string.byte(datal:sub(57), 1, 2) == 13 then\n            -- for Trojan\n                ngx.var.VMess = "453"\n            else\n            -- for V2Ray\'s tcp+TLS +web\n                ngx.var.VMess = "10007"\n            end\n        }\n         proxy_pass 127.0.0.1:$VMess;\n  }# server block\n}\n\n')])])]),a("h3",{attrs:{id:"创建-nginx-目录-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-nginx-目录-a","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 Nginx 目录 'a'")]),t._v(" "),a("p",[t._v("修改 a 中 "),a("code",[t._v("conf/nginx.conf")]),t._v(" 为如上配置，这样可以不污染 "),a("code",[t._v("/usr/local/openresty/nginx")]),t._v(" 下的内容。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -av /usr/local/openresty/nginx/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("conf,html,logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" a\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" openresty -p "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" openresty -p "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -s reload\n")])])]),a("h3",{attrs:{id:"v2ray-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" V2Ray 配置")]),t._v(" "),a("p",[t._v("可以参考 "),a("a",{attrs:{href:"https://guide.v2fly.org/advanced/h2_tls_web.html#%E7%BC%BA%E9%99%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP2+TLS+Web"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://guide.v2fly.org/advanced/tcp_tls_web.html#%E8%83%8C%E6%99%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP+TLS+Web"),a("OutboundLink")],1),t._v(" 的服务器配置。\n对于 HTTP2+TLS+Web，注意这里 HTTP2 的 TLS 在 Nginx 实现，即 h2c 配置。本篇的改动是采用了 Nginx 作为前端。")]),t._v(" "),a("p",[t._v("对于 TCP+TLS+Web，不同的是去掉 HAProxy，并且基于协议内容分流而不是 SNI。相对 "),a("a",{attrs:{href:"https://guide.v2fly.org/advanced/tcp_tls_shunt_proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP+TLS 分流器"),a("OutboundLink")],1),t._v("，本方案更简洁。")]),t._v(" "),a("h3",{attrs:{id:"trojan-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trojan-go","aria-hidden":"true"}},[t._v("#")]),t._v(" Trojan-Go")]),t._v(" "),a("p",[t._v("关闭了 TLS 处理的 Trojan-Go 版本目前位于 "),a("a",{attrs:{href:"https://github.com/p4gefau1t/Trojan-go/commits/dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev 分支"),a("OutboundLink")],1),t._v("，需要自行编译相应架构的客户端或者服务器端。")]),t._v(" "),a("p",[t._v("Trojan-Go 服务端配置如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"run_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"local_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"local_port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("453")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remote_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remote_port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ssl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve_plain_text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("客户端使用正常的 Trojan 配置即可。")]),t._v(" "),a("h2",{attrs:{id:"性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),a("h3",{attrs:{id:"vmessping-延迟测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmessping-延迟测试","aria-hidden":"true"}},[t._v("#")]),t._v(" vmessping 延迟测试")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TCP+TLS+Web\n--- VMess ping statistics ---\n10 requests made, 10 success, total time 26.515340739s\nrtt min/avg/max = 993/1748/2544 ms\n\nTLS+WebSocket+CDN\n--- VMess ping statistics ---\n10 requests made, 10 success, total time 30.647379082s\nrtt min/avg/max = 1215/2161/7160 ms\n\nTLS+h2c\n--- VMess ping statistics ---\n10 requests made, 10 success, total time 20.977310488s\nrtt min/avg/max = 616/1194/3263 ms\n")])])]),a("p",[t._v("可见延迟表现最佳的是 TLS + h2c。\n按理说 TCP+TLS （即 TCP+TLS+Web，没有 HTTP 开销） 应该比 TLS+h2c 更好，这里为什么性能还弱呢？")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Trojan-gfw/Trojan/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trojan Design discussion #14"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://Trojan-gfw.github.io/Trojan/protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Trojan Protocol"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/liberal-boy/f3db4e413a96fa80719db1414f011325",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMess + TCP + TLS 方式的 HTTP 分流和网站伪装"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/liberal-boy/04f875b86a5e54cb4e1752d24077f2be",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMess Fail-Redirect 简单实现"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=n.exports}}]);