import pdfkit
import os

# Ruta donde quieres guardar los PDFs
ruta_salida = "D:/clase/DWEC/angular/APUNTES"

# Crear la carpeta si no existe
if not os.path.exists(ruta_salida):
    os.makedirs(ruta_salida)

# Descargar las páginas del 1 al 71
for i in range(1, 72):
    url = f"https://www.tutorialesprogramacionya.com/angulardevya/detalleconcepto.php?punto={i}&codigo={i}&inicio=0"
    pdfkit.from_url(url, f"{ruta_salida}/pagina_{i}.pdf")

print("¡Descarga completada!")
