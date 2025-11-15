# Automated Logo Management

This project now includes an automated system for managing logo images in the SBC Logo component. Instead of manually updating the component code every time you add or remove logos, you can use the provided script to automatically scan the directories and update the component.

## How It Works

The system automatically scans these directories:

- `public/SBCLogo/Kochi/` - For Kochi Hub logos
- `public/SBCLogo/Malabar/` - For Malabar Hub logos
- `public/SBCLogo/Travancore/` - For Travancore Hub logos

It looks for image files with these extensions: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`

## Usage

### Adding New Logos

1. **Add your image files** to the appropriate directory:

   - For Kochi Hub: `public/SBCLogo/Kochi/`
   - For Malabar Hub: `public/SBCLogo/Malabar/`
   - For Travancore Hub: `public/SBCLogo/Travancore/`

2. **Run the generator script**:

   ```bash
   npm run generate-logos
   ```

   Or directly:

   ```bash
   node scripts/generate-logos.js
   ```

3. **Build your project** as usual:
   ```bash
   npm run build
   ```

The script will automatically update the `src/components/SBCLogo.jsx` file with the new logo lists.

### Removing Logos

1. **Delete the image files** from the appropriate directory
2. **Run the generator script** again:
   ```bash
   npm run generate-logos
   ```

The component will automatically be updated to exclude the removed files.

## What the Script Does

1. **Scans directories** for image files
2. **Generates the logo arrays** with correct paths
3. **Updates the SBCLogo.jsx component** automatically
4. **Preserves all other code** in the component

## Example Output

When you run the script, you'll see output like:

```
🔍 Scanning logo directories...

Found 5 images in kochi: /SBCLogo/Kochi/ieee sahrdaya logo.png, /SBCLogo/Kochi/IMG_1302.PNG, ...
Found 5 images in malabar: /SBCLogo/Malabar/Logo SB40 - Copy (2).png, /SBCLogo/Malabar/MDIT SB WHITE 1.png, ...
Found 6 images in travancore: /SBCLogo/Travancore/ceal-ieee-sb.png, /SBCLogo/Travancore/IEEE LMCST Logo.png, ...

📝 Updating component file...
✅ Successfully updated SBCLogo.jsx with new logo lists

🎉 Logo generation completed successfully!
```

## Benefits

- **No manual coding** required when adding/removing logos
- **Automatic file discovery** - just drop files in the folders
- **Consistent formatting** of the logo arrays
- **Error handling** if directories don't exist
- **Preserves existing code** structure

## File Structure

```
public/
  SBCLogo/
    Kochi/
      *.png, *.jpg, *.gif, etc.
    Malabar/
      *.png, *.jpg, *.gif, etc.
    Travancore/
      *.png, *.jpg, *.gif, etc.

scripts/
  generate-logos.js

src/
  components/
    SBCLogo.jsx (auto-updated)
```

This system makes managing logos much easier and less error-prone!
