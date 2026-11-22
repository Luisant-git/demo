Add-Type -AssemblyName System.Drawing

function ExtractLogo($inputPath, $outputPath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
    # Find bounding box of dark pixels (R < 150, G < 150, B < 150)
    $minX = $bmp.Width; $maxX = 0; $minY = $bmp.Height; $maxY = 0
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        for ($y = 0; $y -lt $bmp.Height; $y++) {
            $p = $bmp.GetPixel($x, $y)
            if ($p.R -lt 150 -and $p.G -lt 150 -and $p.B -lt 150) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    if ($maxX -gt $minX -and $maxY -gt $minY) {
        $w = $maxX - $minX + 1
        $h = $maxY - $minY + 1
        $rect = New-Object System.Drawing.Rectangle($minX, $minY, $w, $h)
        $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
        
        # Create transparent canvas with 20px padding
        $pad = 12
        $final = New-Object System.Drawing.Bitmap($w + ($pad * 2), $h + ($pad * 2), [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $g = [System.Drawing.Graphics]::FromImage($final)
        $g.Clear([System.Drawing.Color]::Transparent)
        
        # Copy pixels, converting near-white pixels (R > 230, G > 230, B > 230) to transparent
        for ($cx = 0; $cx -lt $w; $cx++) {
            for ($cy = 0; $cy -lt $h; $cy++) {
                $pix = $cropped.GetPixel($cx, $cy)
                if ($pix.R -lt 220 -or $pix.G -lt 220 -or $pix.B -lt 220) {
                    # Dark pixel -> black with alpha proportional to darkness
                    $alpha = 255 - [int](($pix.R + $pix.G + $pix.B) / 3)
                    if ($alpha -gt 255) { $alpha = 255 }
                    if ($alpha -lt 50) { $alpha = 0 }
                    $final.SetPixel($cx + $pad, $cy + $pad, [System.Drawing.Color]::FromArgb($alpha, 17, 24, 39))
                }
            }
        }
        $g.Dispose()
        $cropped.Dispose()
        $final.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $final.Dispose()
        Write-Host "Extracted $outputPath ($w x $h)"
    } else {
        Write-Host "Failed to find logo in $inputPath"
    }
    $bmp.Dispose()
}

$names = @('hp', 'apple', 'asus', 'lenovo', 'dell', 'acer', 'samsung', 'microsoft')
foreach ($n in $names) {
    ExtractLogo "frontend/public/brands/$n-tile.png" "frontend/public/brands/$n-logo.png"
}
Remove-Item 'frontend/extract_logos.ps1'
Write-Host "All extracted"

