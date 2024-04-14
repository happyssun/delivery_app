# 프로젝트 폴더로 이동할 때마다 .nvmrc 파일이 있는지 확인하고 해당 버전의 Node.js를 사용한다.
cd() {
  builtin cd "$@"
  if [ -f .nvmrc ]; then
    nvm use
  fi
}
