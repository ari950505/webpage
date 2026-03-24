# Vercel Test Site

Vercel 배포를 빠르게 테스트하기 위한 최소 정적 웹사이트입니다.

## 로컬 확인

아래 중 하나로 루트 디렉터리에서 실행하면 됩니다.

```bash
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000` 을 열면 됩니다.

## GitHub 업로드

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Vercel 배포

1. Vercel에서 `Add New Project`를 선택합니다.
2. GitHub 저장소를 연결합니다.
3. Framework Preset은 `Other` 또는 자동 감지된 기본값을 그대로 둡니다.
4. Root Directory를 현재 저장소 루트로 두고 배포합니다.

정적 파일만 있으므로 별도 빌드 설정이 필요 없습니다.
