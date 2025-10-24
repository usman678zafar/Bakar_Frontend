import os
from pathlib import Path
from datetime import datetime

class FrontendDocGenerator:
    def __init__(self, root_path):
        self.root_path = Path(root_path)
        self.output = []
        
        # Define important file extensions to include
        self.include_extensions = {'.tsx', '.ts', '.js', '.jsx', '.json', '.css'}
        
        # Define files to include from root
        self.root_files = {
            'package.json', 
            'vite.config.ts', 
            'tsconfig.json',
            'tailwind.config.js',
            '.env.example'
        }
        
        # Define folders to skip entirely
        self.skip_folders = {
            'node_modules', 
            '.git', 
            'dist', 
            'build',
            'coverage',
            '.vscode',
            'public',
            'assets'
        }
        
        # Define files to skip
        self.skip_files = {
            'package-lock.json',
            '.eslintrc.json',
            '.prettierrc',
            'postcss.config.js',
            'tsconfig.node.json',
            'vite-env.d.ts',
            'favicon.ico',
            'logo.svg'
        }
    
    def should_include_file(self, file_path):
        """Determine if a file should be included in documentation"""
        file_name = file_path.name
        
        # Skip if in skip list
        if file_name in self.skip_files:
            return False
        
        # Include root config files
        if file_path.parent == self.root_path and file_name in self.root_files:
            return True
        
        # Include files with relevant extensions
        return file_path.suffix in self.include_extensions
    
    def get_language_from_extension(self, extension):
        """Map file extension to markdown code block language"""
        mapping = {
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.json': 'json',
            '.css': 'css',
            '.html': 'html',
            '.env': 'bash',
            '.example': 'bash'
        }
        return mapping.get(extension, 'plaintext')
    
    def format_path_as_header(self, file_path):
        """Format file path as markdown header"""
        relative_path = file_path.relative_to(self.root_path)
        return f"## 📄 {relative_path}"
    
    def read_file_content(self, file_path):
        """Read file content with error handling"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            return f"// Error reading file: {e}"
    
    def process_directory(self, directory):
        """Recursively process directory and add files to documentation"""
        items = []
        
        # First, get all items and sort them
        for item in directory.iterdir():
            if item.is_dir() and item.name not in self.skip_folders:
                items.append(('dir', item))
            elif item.is_file() and self.should_include_file(item):
                items.append(('file', item))
        
        # Sort items: directories first, then files, alphabetically
        items.sort(key=lambda x: (x[0] != 'dir', x[1].name.lower()))
        
        # Process sorted items
        for item_type, item_path in items:
            if item_type == 'dir':
                self.process_directory(item_path)
            else:
                self.add_file_to_output(item_path)
    
    def add_file_to_output(self, file_path):
        """Add a file's content to the output"""
        # Add file header
        self.output.append(self.format_path_as_header(file_path))
        self.output.append("")
        
        # Add file path as comment
        relative_path = file_path.relative_to(self.root_path)
        self.output.append(f"*Path: `{relative_path}`*")
        self.output.append("")
        
        # Add file content in code block
        content = self.read_file_content(file_path)
        language = self.get_language_from_extension(file_path.suffix)
        
        self.output.append(f"```{language}")
        self.output.append(content)
        self.output.append("```")
        self.output.append("")
        self.output.append("---")
        self.output.append("")
    
    def generate_toc(self):
        """Generate table of contents"""
        toc = ["# Table of Contents", ""]
        
        # Group files by directory
        files_by_dir = {}
        for line in self.output:
            if line.startswith("## 📄"):
                path = line.replace("## 📄 ", "").strip()
                dir_name = str(Path(path).parent) if "/" in path else "root"
                if dir_name not in files_by_dir:
                    files_by_dir[dir_name] = []
                files_by_dir[dir_name].append(path)
        
        # Generate TOC
        for dir_name in sorted(files_by_dir.keys()):
            if dir_name != "root":
                toc.append(f"### 📁 {dir_name}")
            else:
                toc.append("### 📁 Root Files")
            
            for file_path in sorted(files_by_dir[dir_name]):
                anchor = file_path.replace("/", "").replace(".", "").replace(" ", "-").lower()
                file_name = Path(file_path).name
                toc.append(f"- [{file_name}](#{anchor})")
            toc.append("")
        
        return toc
    
    def generate_documentation(self):
        """Generate the complete documentation"""
        print("🚀 Starting documentation generation...")
        
        # Add header
        self.output.append("# Frontend Project Documentation")
        self.output.append("")
        self.output.append(f"*Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*")
        self.output.append("")
        self.output.append("---")
        self.output.append("")
        
        # Process root configuration files first
        print("📋 Processing root configuration files...")
        for file_name in self.root_files:
            file_path = self.root_path / file_name
            if file_path.exists():
                self.add_file_to_output(file_path)
        
        # Process src directory
        src_path = self.root_path / 'src'
        if src_path.exists():
            print("📂 Processing src directory...")
            self.process_directory(src_path)
        
        # Generate final documentation with TOC
        print("📝 Generating table of contents...")
        toc = self.generate_toc()
        
        # Combine TOC with content
        final_output = [
            "# Frontend Project Documentation",
            "",
            f"*Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*",
            "",
            "---",
            ""
        ] + toc + ["---", ""] + self.output[6:]  # Skip the original header
        
        # Write to file
        output_file = self.root_path / 'frontend_documentation.md'
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(final_output))
        
        print(f"✅ Documentation generated successfully!")
        print(f"📄 Output file: {output_file}")
        
        # Print statistics
        total_files = len([line for line in self.output if line.startswith("## 📄")])
        print(f"📊 Total files documented: {total_files}")
        print(f"📏 Documentation size: {len('\\n'.join(final_output))} characters")

def main():
    # Set the path to your frontend directory
    frontend_path = r"D:\NexusNao\CLIENTS\BAKAR\frontend"
    
    # Create documentation generator
    generator = FrontendDocGenerator(frontend_path)
    
    # Generate the documentation
    generator.generate_documentation()

if __name__ == "__main__":
    main()
