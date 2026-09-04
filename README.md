# Academic Homepage 使用手册

这是一个独立的数学研究者学术主页，线上地址为：

- <https://math-4-anon.top/academic-homepage/>
- GitHub 仓库：<https://github.com/SEML04/academic-homepage>

每次向 GitHub 的 `main` 分支提交修改后，GitHub Actions 会自动重新构建和发布网站。

## 1. 网站文件结构

通常只需要修改以下文件：

```text
app/
├─ page.tsx                 首页内容
├─ cv/page.tsx              个人简历
├─ publications/page.tsx    出版物与预印本
├─ talks/page.tsx           Seminars & Talks
├─ site-header.tsx          姓名、导航栏和主题按钮
├─ page-shell.tsx           分页公共结构和页脚日期
├─ globals.css              颜色、排版和动画
└─ layout.tsx               网页标题、简介和分享信息

public/
├─ favicon.svg              浏览器标签图标
└─ og.png                   社交平台分享封面
```

## 2. 修改首页

打开 `app/page.tsx`。

### 修改姓名

查找：

```tsx
<h1>Lin Wei</h1>
```

把 `Lin Wei` 替换成自己的英文姓名。

### 修改研究方向和个人简介

查找：

```tsx
<p className="eyebrow">Pure Mathematics · Algebraic Geometry</p>
```

以及紧随其后的：

```tsx
<p className="hero-intro">
  ...
</p>
```

直接替换标签中间的文字即可。

### 修改职位、学校和邮箱

在同一文件中修改：

```tsx
<p className="card-title">Assistant Professor</p>
<p className="card-copy">
  Department of Mathematics<br />Eastlake University
</p>
<a href="mailto:lin.wei@example.edu">lin.wei@example.edu</a>
```

`mailto:` 后面和链接显示的邮箱都要替换。

### 修改研究关键词

修改 `research-list` 中的内容：

```tsx
<div className="research-list">
  <span>Moduli spaces</span>
  <span>Derived categories</span>
  <span>Birational geometry</span>
</div>
```

可以增加或删除 `<span>...</span>`。

## 3. 修改个人简历

打开 `app/cv/page.tsx`。

### 工作经历

编辑 `positions` 数组：

```tsx
const positions = [
  {
    years: '2024—present',
    role: 'Assistant Professor',
    place: 'University Name, Department of Mathematics',
  },
];
```

每段经历包含：

- `years`：起止时间；
- `role`：职位；
- `place`：学校或机构。

复制一整组 `{ ... }` 就能增加经历。除最后一组外，每组结尾需要逗号。

### 教育经历

用同样的方法编辑 `education` 数组。

### 奖项和学术服务

在页面下方找到 `Awards` 和 `Service` 两个 section，直接替换其中的年份和文字。增加一条奖项时，可以复制：

```tsx
<p><span>2026</span> Award or Fellowship Name</p>
```

## 4. 添加出版物

打开 `app/publications/page.tsx`，找到 `papers` 数组。

每篇论文使用以下格式：

```tsx
{
  year: '2026',
  number: '01',
  title: 'Paper title',
  authors: 'Your Name, with Coauthor Name',
  venue: 'Journal Name or arXiv:2601.12345',
  tags: ['Preprint', 'Algebraic geometry'],
},
```

添加新论文时，复制完整的 `{ ... },` 并修改内容。建议：

- 最新论文放在数组最上方；
- `number` 不要重复；
- 已发表论文使用 `Published` 标签；
- 预印本使用 `Preprint` 标签。

如果文字中需要英文单引号，在单引号字符串里写成 `\'`，或者把字符串外层改成双引号。

## 5. 添加 Seminar 和 Talk

打开 `app/talks/page.tsx`，找到 `events` 数组。

每场活动使用以下格式：

```tsx
{
  date: '18 Sep 2026',
  kind: 'Seminar',
  title: 'Title of the talk',
  place: 'Seminar Name · University Name',
  note: 'Upcoming',
},
```

`note` 建议使用：

- `Upcoming`：即将进行；
- `Past`：已经结束。

最新或即将进行的活动放在数组最上方。

## 6. 修改导航栏、页脚和网站标题

### 导航栏姓名

打开 `app/site-header.tsx`，替换其中出现的 `Lin Wei`。

### 页脚姓名和更新时间

打开 `app/page-shell.tsx`，修改：

```tsx
<span>Lin Wei · Pure Mathematics</span>
<span>Last updated September 2026</span>
```

### 浏览器标题和分享信息

打开 `app/layout.tsx`，替换其中的：

- `Lin Wei`；
- `Algebraic Geometry` 等研究方向；
- 网站 description。

分享封面文字不会随代码自动改变。如需更换，请制作一张横向 PNG 图片，并覆盖 `public/og.png`。

## 7. 在本地预览

打开 PowerShell，进入项目目录：

```powershell
cd "D:\SEML blog\academic_homepage"
```

第一次使用或依赖有变化时运行：

```powershell
npm.cmd install
```

启动本地网站：

```powershell
npm.cmd run dev
```

看到本地地址后，在浏览器打开：

```text
http://localhost:3000/
```

停止本地网站时，在 PowerShell 中按 `Ctrl+C`。

## 8. 提交并发布到 GitHub

完成修改并确认本地预览正常后，在项目目录依次运行：

```powershell
git status
git add .
git commit -m "Update academic profile"
git push origin main
```

提交说明可以按实际内容修改，例如：

```powershell
git commit -m "Add 2026 publications"
git commit -m "Update CV and upcoming talks"
git commit -m "Change contact information"
```

推送成功后，GitHub Actions 会自动部署。可以在这里查看进度：

<https://github.com/SEML04/academic-homepage/actions>

通常几分钟后线上内容会更新：

<https://math-4-anon.top/academic-homepage/>

## 9. 使用 GitHub 网页直接修改

少量文字也可以不使用本地命令：

1. 打开 GitHub 仓库；
2. 进入需要修改的文件；
3. 点击右上角铅笔图标 **Edit this file**；
4. 修改文字；
5. 点击 **Commit changes**；
6. 保持提交到 `main` 分支。

提交后同样会自动部署。

## 10. 常见问题

### 推送后网页没有立刻变化

先查看 GitHub Actions 是否仍在运行。部署完成后刷新网页；如果浏览器仍显示旧内容，可以按 `Ctrl+F5` 强制刷新。

### 本地命令提示 npm 脚本无法执行

在 Windows PowerShell 中使用 `npm.cmd`，不要只写 `npm`。

### 页面出现语法错误

重点检查：

- 字符串两侧的引号是否成对；
- 数组项目之间是否有逗号；
- `<p>`、`<span>` 等标签是否正确闭合；
- 是否误删了 `{`、`}`、`(` 或 `)`。

提交前可以运行以下命令检查正式构建：

```powershell
$env:GITHUB_ACTIONS='true'
npm.cmd run build:github
Remove-Item Env:GITHUB_ACTIONS
```

构建成功后再执行 `git add`、`git commit` 和 `git push`。
