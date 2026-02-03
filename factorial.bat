@echo off
echo.
set resultado=1
set contador=%numero%
set/p numero= Indica un numero:
if %numero% GTR 0 & %numero% LSS 20(
goto bucle
)else goto Salir

:Salir
echo El numero debe ser menor a 20 y mayor a 0
echo.
pause
exit

:bucle

if %contador% LEQ 1 goto resultado

set/a resultado=%resultado%*%contador%
set/a contador=%contador%-1

goto bucle

:resultado

echo El factorial de %numero% es: %resultado%
echo.
pause
exit