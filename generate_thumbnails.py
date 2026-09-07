import os
import fitz  # PyMuPDF
import json

pdf_dir = "public/PDF"
thumbnail_dir = "public/images/pdf-thumbnails"
data_file = "src/data/companyProfilesData.js"

# Create thumbnail directory if it doesn't exist
os.makedirs(thumbnail_dir, exist_ok=True)

profiles = []

# Iterate over all PDF files
for filename in os.listdir(pdf_dir):
    if filename.lower().endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        
        # Open the PDF
        doc = fitz.open(pdf_path)
        if doc.page_count > 0:
            page = doc.load_page(0)  # first page
            pix = page.get_pixmap(matrix=fitz.Matrix(0.5, 0.5))  # scale down for thumbnail
            
            # Thumbnail filename
            thumbnail_filename = os.path.splitext(filename)[0] + ".jpg"
            thumbnail_path = os.path.join(thumbnail_dir, thumbnail_filename)
            
            # Save thumbnail
            pix.save(thumbnail_path)
            
            # Clean up title (remove .pdf and some typical prefixes/suffixes if desired, or just use raw filename)
            title = os.path.splitext(filename)[0]
            
            profiles.append({
                "id": len(profiles) + 1,
                "title": title,
                "pdfUrl": f"/PDF/{filename}",
                "thumbnailUrl": f"/images/pdf-thumbnails/{thumbnail_filename}"
            })
            print(f"Generated thumbnail for {filename}")

        doc.close()

# Write data file
js_content = f"export const companyProfiles = {json.dumps(profiles, indent=4)};\n"
with open(data_file, "w") as f:
    f.write(js_content)

print(f"Successfully generated thumbnails and saved data to {data_file}")
