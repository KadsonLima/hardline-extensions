@echo off
echo ========================================
echo  CRIANDO ZIP PARA TWITCH EXTENSION
echo ========================================
echo.
echo Este script cria um arquivo ZIP com TODOS
echo os arquivos necessarios para a extensao:
echo - Arquivos HTML (interface)
echo - Arquivos JS (logica/codigo)
echo.
echo Arquivos incluidos:
echo   * video_overlay.html + video_overlay.js
echo   * config.html + config.js
echo   * panel.html + panel.js
echo   * mobile.html + mobile.js
echo.
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

echo Copiando arquivos JavaScript...
copy "..\video_overlay.js" . >nul
copy "..\config.js" . >nul
copy "..\panel.js" . >nul
copy "..\mobile.js" . >nul

echo Arquivos copiados com sucesso!
echo.

REM Criar o ZIP
echo Criando arquivo ZIP...
powershell Compress-Archive -Path *.html,*.js -DestinationPath ..\hardline-twitch.zip -Force

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
echo PROXIMOS PASSOS:
echo 1. Acesse: https://dev.twitch.tv/console/extensions
echo 2. Selecione sua extensao
echo 3. Va em "Files" ^> "Upload Assets"
echo 4. Faca upload do arquivo hardline-twitch.zip
echo 5. Aguarde 2-5 minutos para processamento
echo 6. Teste sua extensao!
echo.
echo IMPORTANTE:
echo - O ZIP contem arquivos HTML E JavaScript
echo - Ambos sao necessarios para a extensao funcionar
echo - Nao faca upload apenas dos arquivos .html
echo.
pause
