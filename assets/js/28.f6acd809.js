(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{249:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tcp-tls-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-tls-web","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP + TLS + Web")]),t._v(" "),a("p",[t._v("新手建议使用 "),a("a",{attrs:{href:"https://guide.v2fly.org/advanced/tcp_tls_shunt_proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLS 分流器"),a("OutboundLink")],1),t._v(" 方案")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目前 Vmess + WebSocket + TLS （以下简称 wss）方式，因其特征如同 HTTPS 流量，可以隐藏 V2Ray 路径，主动侦测会得到正常 HTTP 网站响应，具有良好的伪装能力，目前被广泛用于反审查。")])]),t._v(" "),a("li",[a("p",[t._v("但是如此强大的伪装能力，需要付出严重的性能代价：TLS 1.3 握手需要消耗 1-rtt，WS 握手也需要消耗 1-rtt，增大了握手延迟。V2Ray 增加了 mux 以减少握手的发生，然而实际使用中 mux 体验并不好，很多用户选择关闭。")])]),t._v(" "),a("li",[a("p",[t._v("最近兴起了一个新的反审查工具——"),a("a",{attrs:{href:"https://github.com/trojan-gfw/trojan",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trojan"),a("OutboundLink")],1),t._v("，这个工具将一个类似 Socks 的协议直接通过 TLS 传输，并将认证失败的流量交由 Web 服务器处理。降低 WS 延迟的同时，提供与 wss 方式一样的伪装能力。但是该工具较为年轻，没有路由功能，各平台图形化客户端也不完善。")])]),t._v(" "),a("li",[a("p",[t._v("因此，本人尝试用 V2Ray 实现类似功能，即 Vmess + TCP + TLS 并网站伪装，省下 WS 的握手延迟。")])])]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("HaProxy 监听 443 端口，处理 TLS 之后，将 HTTP 流量交由 Web 服务器处理，非 HTTP 流量交由 V2Ray 按 Vmess 处理。")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("本次方案使用 HaProxy，Caddy/Nginx（Web 服务器的使用不是本教程的重点，可以用 httpd 等替代），V2Ray，服务器系统为 Debian 10。")]),t._v(" "),a("ol",[a("li",[t._v("安装 HaProxy "),a("code",[t._v("apt install haproxy")])])]),t._v(" "),a("ul",[a("li",[t._v("为了较好的支持 TLS1.3，HaProxy 版本应大于 1.8.15，OpenSSl 版本应大于 1.1.1，如果您使用的发行版仓库自带的版本较低，您可能需要自行编译安装。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("安装 Web 服务器，Caddy 参考"),a("a",{attrs:{href:"https://github.com/caddyserver/caddy/blob/v1/dist/init/linux-systemd/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个教程"),a("OutboundLink")],1),t._v("，Nginx 使用命令 "),a("code",[t._v("apt install nginx")]),t._v("安装。")])]),t._v(" "),a("li",[a("p",[t._v("安装 V2Ray，可以使用官方脚本"),a("a",{attrs:{href:"https://www.v2ray.com/chapter_00/install.html#linuxscript",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方脚本"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("修改 V2Ray 配置文件，以 Vmess + TCP 方式监听 40001 端口。")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f2435e5c-9ad9-4367-836a-8341117d0a5f"')]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("修改 Web 服务器配置文件，部署 HTTP 服务于 8080 端口。")])]),t._v(" "),a("p",[t._v("Caddy 直接替换")]),t._v(" "),a("div",{staticClass:"language-cfg extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://example.com:8080 {\n    root /var/www/html\n}\n")])])]),a("p",[t._v("Nginx 在 http{} 里面添加")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server {\n  listen 8080;\n  server_name example.com;\n  root /var/www/html;\n}\n")])])]),a("ul",[a("li",[a("p",[t._v("注：/var/www/html 是静态网站目录")])]),t._v(" "),a("li",[a("p",[t._v("实际服务请根据需要部署，也可以用 httpd 之类的替代")])]),t._v(" "),a("li",[a("p",[t._v("似乎很多 Trojan 教程直接监听 80 端口，其实很多 HTTPS 网站 80 端口通常是重定向到 HTTPS")])])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("修改 HaProxy 配置文件。")])]),t._v(" "),a("div",{staticClass:"language-cfg extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("global\n    log /dev/log local0\n    log /dev/log local1 notice\n    chroot /var/lib/haproxy\n    stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners\n    stats timeout 30s\n    user haproxy\n    group haproxy\n    daemon\n    ca-base /etc/ssl/certs\n    crt-base /etc/ssl/private\n\n    # 仅使用支持 FS 和 AEAD 的加密套件\n    ssl-default-bind-ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384\n    ssl-default-bind-ciphersuites TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256\n    # 禁用 TLS 1.2 之前的 TLS\n    ssl-default-bind-options no-sslv3 no-tlsv10 no-tlsv11\n\n    tune.ssl.default-dh-param 2048\n\ndefaults\n    log global\n    # 我们需要使用 tcp 模式\n    mode tcp\n    option dontlognull\n    timeout connect 5s\n    # 空闲连接等待时间，这里使用与 V2Ray 默认 connIdle 一致的 300s\n    timeout client  300s\n    timeout server  300s\n\nfrontend tls-in\n    # 监听 443 tls，tfo 根据自身情况决定是否开启，证书放置于 /etc/ssl/private/example.com.pem\n    bind *:443 tfo ssl crt /etc/ssl/private/example.com.pem\n    tcp-request inspect-delay 5s\n    tcp-request content accept if HTTP\n    # 将 HTTP 流量发给 web 后端\n    use_backend web if HTTP\n    # 将其他流量发给 vmess 后端\n    default_backend vmess\n\nbackend web\n    server server1 127.0.0.1:8080\n  \nbackend vmess\n    server server1 127.0.0.1:40001\n")])])]),a("ul",[a("li",[t._v("HaProxy 的证书和密钥放于同一个文件，与 Caddy 和 Nginx 不同，可以使用命令 "),a("code",[t._v("cat example.com.crt example.com.key > example.com.pem")]),t._v(" 合成证书")])]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("重启服务")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("systemctl restart haproxy\nsystemctl restart caddy\nsystemctl restart v2ray\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("客户端连接 "),a("code",[t._v("example.com:443 vmess tls")]),t._v(" 即可")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"socks"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f2435e5c-9ad9-4367-836a-8341117d0a5f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/18/tQyKPD45fmAFl9x.jpg",alt:"延迟对比"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("测试工具为 "),a("a",{attrs:{href:"https://github.com/v2fly/vmessping",target:"_blank",rel:"noopener noreferrer"}},[t._v("vmessping"),a("OutboundLink")],1),t._v("，可见 Vmess + TCP + TLS（左）延迟低于 Vmess + WSS（右）")])]),t._v(" "),a("li",[a("p",[t._v("打开网站域名可以看到正常的网站。")])])]),t._v(" "),a("h2",{attrs:{id:"讨论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讨论","aria-hidden":"true"}},[t._v("#")]),t._v(" 讨论")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HaProxy，V2Ray，Nginx 都是支持 Domain Socket 的，流量较大或数据包较多时使用 ds 可以提高性能，本教程不做展开，可以参考"),a("a",{attrs:{href:"https://gist.github.com/liberal-boy/b2d5597285b4202b6d607faaa1078d27",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("可以使用"),a("a",{attrs:{href:"https://github.com/pierky/haproxy-ocsp-stapling-updater",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个工具"),a("OutboundLink")],1),t._v("开启 "),a("code",[t._v("OCSP Stapling")]),t._v(" 减少客户端验证证书的时间。")])])]),t._v(" "),a("ul",[a("li",[t._v("该方法的隐蔽性是否比 wss 低？\n"),a("ul",[a("li",[t._v("中间人看来，该方法在建立 TLS 连接后，比 wss 少一次握手，即 TLS 建立后直接发送请求并获得响应，该行为是符合正常的 HTTPS 请求的。")]),t._v(" "),a("li",[t._v("主动探测时，如 TLS 建立后发送 HTTP 请求，则被发给 Web 服务器按正常 HTTP 请求处理。如发送非 HTTP 请求，会被发给 V2Ray 处理，如 Vmess 认证失败，连接将被关闭，向 HTTPS 服务器发送非 HTTPS 请求，连接被关闭是正常的行为。")]),t._v(" "),a("li",[t._v("如果您还认为存在被检测的的可能，请提出检测方法。")])])])])])},[],!1,null,null,null);s.default=r.exports}}]);