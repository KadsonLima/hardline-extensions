@echo off
echo ========================================
echo  CRIANDO ZIP PARA TWITCH EXTENSION
echo ========================================
echo.

REM Criar pasta temporária
mkdir temp-upload 2>nul
cd temp-upload

REM Copiar apenas os arquivos necessários
echo Copiando arquivos HTML...
copy "..\video_overlay.html" . >nul
copy "..\config.html" . >nul
copy "..\panel.html" . >nul
copy "..\mobile.html" . >nul

echo Arquivos copiados com sucesso!
echo.

REM Criar o ZIP
echo Criando arquivo ZIP...
powershell Compress-Archive -Path *.html -DestinationPath ..\hardline-twitch.zip -Force

cd ..

REM Limpar pasta temporária
rmdir /s /q temp-upload

echo.
echo ========================================
echo  ZIP CRIADO COM SUCESSO!
echo ========================================
echo.
echo Arquivo criado: hardline-twitch.zip
echo Localizacao: %CD%
echo.
echo Agora faca upload deste arquivo na Twitch!
echo.
pause
