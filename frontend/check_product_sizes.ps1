Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem "frontend/public/products" -Include *.jpg, *.png -Recurse

foreach ($f in $files) {
    try {
        $img = [System.Drawing.Bitmap]::FromFile($f.FullName)
        
        # Detect bounding box of non-white pixels (where R < 248 or G < 248 or B < 248)
        $minX = $img.Width; $maxX = 0; $minY = $img.Height; $maxY = 0
        $nonWhiteCount = 0
        
        # Sample step 2 to be fast
        for ($x = 0; $x -lt $img.Width; $x += 2) {
            for ($y = 0; $y -lt $img.Height; $y += 2) {
                $p = $img.GetPixel($x, $y)
                # Check if not pure white
                if ($p.A -gt 10 -and ($p.R -lt 245 -or $p.G -lt 245 -or $p.B -lt 245)) {
                    $nonWhiteCount++
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                }
            }
        }
        
        $objW = if ($maxX -gt $minX) { $maxX - $minX } else { 0 }
        $objH = if ($maxY -gt $minY) { $maxY - $minY } else { 0 }
        
        Write-Host "$($f.Name) : Canvas=$($img.Width)x$($img.Height) | Laptop Object: $($objW)x$($objH) | Ratio: $([Math]::Round($objW / [Math]::Max(1, $objH), 2))"
        $img.Dispose()
    } catch {
        Write-Host "Error reading $($f.Name)"
    }
}
Remove-Item 'frontend/check_product_sizes.ps1'

