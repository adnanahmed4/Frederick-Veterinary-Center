$src = "C:\Users\Blu-Ray\.gemini\antigravity\brain\3434a897-3498-4f93-a27e-4f15820a6a66"
$dst = "C:\Users\Blu-Ray\Desktop\FOE\Sem. 6\Software Engineering\frederick-vet-website\images"

Copy-Item "$src\media__1778193375071.jpg" "$dst\clinic-real.jpg" -Force
Copy-Item "$src\media__1778193448365.png" "$dst\logo.png" -Force

Write-Host "✅ Images copied! You can now delete this script." -ForegroundColor Green
