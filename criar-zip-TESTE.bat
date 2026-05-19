@echo off
echo ========================================
echo  CRIANDO ZIP DE TESTE - VERSAO SIMPLES
echo ========================================
echo.

REM Criar pasta temporária
mkdir temp-test-upload 2>nul
cd temp-test-upload

REM Copiar arquivos de teste
echo Copiando arquivos de teste...
copy "..\video_overlay-test.html" video_overlay.html >nul
copy "..\config-test.html" config.html >nul
copy "..\panel-test.html" panel.html >nul
copy "..\mobile-test.html" mobile.html >nul

echo Arquivos copiados com sucesso!
echo.

REM Criar o ZIP
echo Criando arquivo ZIP de teste...
powershell Compress-Archive -Path *.html -DestinationPath ..\hardline-TEST.zip -Force

cd ..

REM Limpar pasta temporária
rmdir /s /q temp-test-upload

echo.
echo ========================================
echo  ZIP DE TESTE CRIADO!
echo ========================================
echo.
echo Arquivo: hardline-TEST.zip
echo.
echo PROXIMOS PASSOS:
echo 1. Faca upload deste ZIP na Twitch
echo 2. Aguarde o upload completar
echo 3. Atualize a pagina do seu canal (F5)
echo 4. Abra a extensao
echo 5. Deve aparecer textos de teste
echo.
echo Se funcionar: problema estava nos arquivos originais
echo Se nao funcionar: problema e na configuracao da Twitch
echo.
pause
