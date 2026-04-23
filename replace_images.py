import os
import re

components_dir = "src/components"
for filename in os.listdir(components_dir):
    if filename.endswith(".jsx") and filename != "ImageWithSkeleton.jsx":
        filepath = os.path.join(components_dir, filename)
        with open(filepath, "r") as f:
            content = f.read()
            
        if "<img " in content:
            # Add import if not present
            if "ImageWithSkeleton" not in content:
                # Find the end of the last import statement
                lines = content.split('\n')
                last_import_idx = -1
                for i, line in enumerate(lines):
                    if line.startswith('import '):
                        last_import_idx = i
                
                if last_import_idx != -1:
                    lines.insert(last_import_idx + 1, "import ImageWithSkeleton from './ImageWithSkeleton';")
                else:
                    lines.insert(0, "import ImageWithSkeleton from './ImageWithSkeleton';")
                    
                content = '\n'.join(lines)
            
            # Replace <img with <ImageWithSkeleton
            content = content.replace("<img ", "<ImageWithSkeleton ")
            
            with open(filepath, "w") as f:
                f.write(content)
            print(f"Updated {filename}")
