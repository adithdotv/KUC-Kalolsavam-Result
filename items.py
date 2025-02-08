import json

# Read items from the text file
with open("items.txt", "r", encoding="utf-8") as file:
    lines = [line.strip() for line in file if line.strip()]

# First line is the category
category = lines[0].strip('"')  # Removes extra quotes if present

# Remaining lines are the items
items_list = lines[1:]

# Convert the list into a dictionary format for Firebase
items_dict = {
    "items": {f"item{i+1}": {"name": name, "category": category} for i, name in enumerate(items_list)}
}

# Save as a JSON file (ensuring Unicode encoding)
with open("items.json", "w", encoding="utf-8") as json_file:
    json.dump(items_dict, json_file, ensure_ascii=False, indent=4)

print("✅ JSON file 'items.json' created successfully!")
