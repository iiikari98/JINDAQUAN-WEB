import {
  ArrowUpRight,
  BookOpenText,
  ClipboardList,
  ExternalLink,
  FileText,
  Globe2,
  Home,
  Image as ImageIcon,
  LockKeyhole,
  Mail,
  PackageSearch,
  Phone,
  ShieldCheck,
} from "lucide-react";

const baseUrl = "https://127.0.0.1:3443";

const quickLinks = [
  {
    title: "首页预览",
    description: "查看外贸独立站英文首页首屏、产品矩阵、优势和询盘区。",
    href: "/",
    icon: Home,
  },
  {
    title: "产品模块",
    description: "直接跳到 Product Categories，检查主推产品和补充产品展示。",
    href: "/#products",
    icon: PackageSearch,
  },
  {
    title: "应用场景",
    description: "查看塑料改性厂、注塑/挤出/吹塑、回收造粒等应用场景。",
    href: "/#applications",
    icon: Globe2,
  },
  {
    title: "技术支持",
    description: "查看 TDS/SDS、样品、配方支持等转化模块。",
    href: "/#support",
    icon: FileText,
  },
  {
    title: "询盘表单",
    description: "直接跳到 RFQ，检查 Name、Email、Company、Country 等字段。",
    href: "/#contact",
    icon: ClipboardList,
  },
];

const assetLinks = [
  "transparent-impact-modifier.jpg",
  "flame-retardant.jpg",
  "light-diffusion-agent.jpg",
  "matting-agent.jpg",
  "modified-pvc-plastisol.jpg",
];

export default function LocalBrowsePage() {
  return (
    <main className="local-page">
      <section className="local-hero">
        <div>
          <p className="local-kicker">
            <LockKeyhole size={18} />
            HTTPS Local Preview
          </p>
          <h1>当前项目预览页面</h1>
          <p>
            这里是 ARGIOPE / Jindaquan 外贸独立站当前项目的预览入口。所有预览地址统一使用
            HTTPS，方便你快速查看首页、产品模块、应用场景、询盘表单和已接入素材。
          </p>
        </div>
        <div className="local-command-card">
          <span>推荐启动命令</span>
          <code>npm run dev:https</code>
          <small>打开地址：{baseUrl}/preview</small>
        </div>
      </section>

      <section className="local-section">
        <div className="local-section-heading">
          <span>Site Map</span>
          <h2>快速浏览站点模块</h2>
        </div>
        <div className="local-grid">
          {quickLinks.map((link) => (
            <a className="local-card" href={link.href} key={link.title}>
              <link.icon size={24} />
              <strong>{link.title}</strong>
              <p>{link.description}</p>
              <span>
                {baseUrl}
                {link.href}
                <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="local-section local-two-column">
        <div className="local-panel">
          <div className="local-section-heading compact">
            <span>Assets</span>
            <h2>已接入首页的素材</h2>
          </div>
          <div className="asset-list">
            {assetLinks.map((asset) => (
              <a href={`/assets/${asset}`} key={asset}>
                <ImageIcon size={18} />
                <span>{asset}</span>
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="local-panel">
          <div className="local-section-heading compact">
            <span>Checklist</span>
            <h2>上线前检查项</h2>
          </div>
          <ul className="local-checklist">
            <li>
              <ShieldCheck size={18} />
              首页 H1 唯一，SEO title / meta 已设置。
            </li>
            <li>
              <ShieldCheck size={18} />
              CTA 统一跳转询盘区，表单字段符合填写表。
            </li>
            <li>
              <ShieldCheck size={18} />
              所有本地浏览入口统一使用 HTTPS。
            </li>
            <li>
              <ShieldCheck size={18} />
              不展示虚构客户、虚构认证或未经确认案例。
            </li>
          </ul>
        </div>
      </section>

      <section className="local-contact-strip">
        <div>
          <BookOpenText size={24} />
          <span>当前首页定位：Plastic Additives Manufacturer for Global B2B Buyers</span>
        </div>
        <div>
          <Mail size={18} />
          <a href="mailto:gsq@jindaquan.com">gsq@jindaquan.com</a>
        </div>
        <div>
          <Phone size={18} />
          <a href="https://wa.me/8618926013309">WhatsApp: 0086 18926013309</a>
        </div>
      </section>
    </main>
  );
}
