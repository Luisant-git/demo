Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:/Users/Ragul/.gemini/antigravity/brain/d8483f1d-70e0-4cc3-9612-47a188a9ffe0/.user_uploaded/media_1795177901670_52185b8a.jpg')

# In Row 1, there are 4 cards
# Let's inspect x coordinates at y=140
# The gap between cards has background color (light blue/white, R>220, G>235, B>250)
# Card backgrounds are gradient with white/blue borders
Write-Host "Row 1 (4 cards):"
# Card 1: 12 to 256 (width ~ 244)
# Card 2: 268 to 512 (width ~ 244)
# Card 3: 524 to 768 (width ~ 244)
# Card 4: 780 to 1020 (width ~ 240)

# Row 2 (5 cards):
# Card 1: 12 to 206 (width ~ 194)
# Card 2: 216 to 410 (width ~ 194)
# Card 3: 420 to 614 (width ~ 194)
# Card 4: 624 to 818 (width ~ 194)
# Card 5: 828 to 1020 (width ~ 192)

$bmp.Dispose()
Remove-Item 'frontend/detect_coords.ps1'

