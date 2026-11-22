Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:/Users/Ragul/.gemini/antigravity/brain/d8483f1d-70e0-4cc3-9612-47a188a9ffe0/.user_uploaded/media_1795177901670_52185b8a.jpg')

# Check y=120 for Row 1
# Check y=260 for Row 2
Write-Host "Analyzing Row 1..."
# Find cards in Row 1: y from 80 to 200
# Find cards in Row 2: y from 210 to 330
$bmp.Dispose()
Remove-Item 'frontend/test_coords.ps1'

