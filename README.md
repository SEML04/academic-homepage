# Academic Homepage

Yunshu Dai's academic homepage:

- Website: <https://math-4-anon.top/academic-homepage/>
- Repository: <https://github.com/SEML04/academic-homepage>

## Edit content

```text
app/page.tsx                 Home page
app/cv/page.tsx              CV and education
app/publications/page.tsx    Publications
app/talks/page.tsx           Seminars and talks
app/site-header.tsx          Name and navigation
app/page-shell.tsx           Footer
app/layout.tsx               Browser and sharing metadata
cv/Yunshu_Dai_CV.tex         LaTeX CV source
public/profile.jpg           Profile photograph
public/cv/Yunshu_Dai_CV.pdf  Downloadable CV
```

Keep the surrounding TSX tags, brackets, quotes and commas intact when editing.

## Preview locally

```powershell
cd "D:\SEML blog\academic_homepage"
npm.cmd install
npm.cmd run dev
```

Open <http://localhost:3000/>. Press `Ctrl+C` to stop.

## Publish

```powershell
git status
git add .
git commit -m "Update academic profile"
git push origin main
```

GitHub Actions automatically deploys each push to `main`. Check progress at
<https://github.com/SEML04/academic-homepage/actions>.

To verify a production build before publishing:

```powershell
$env:GITHUB_ACTIONS='true'
npm.cmd run build:github
Remove-Item Env:GITHUB_ACTIONS
```
