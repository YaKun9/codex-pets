# codex-pets

[简体中文](./README.md) | **English**

A public repository for collecting and sharing Codex pet resources.

## Pet Index

| Pet | ID | Sprite Version | Description | Resources |
| --- | --- | ---: | --- | --- |
| Keqing | `keqing` | 2 | A chibi Codex pet based on Keqing's official *Genshin Impact* design, combining poised elegance with a distinctive Electro style. | [View directory](./keqing/) |

## Directory Structure

Each pet lives in its own directory. The directory name must match the `id` in `pet.json`.

```text
codex-pets/
├── README.md
├── README_EN.md
└── <pet-id>/
    ├── pet.json
    └── spritesheet.webp
```

Example `pet.json`:

```json
{
  "id": "pet-id",
  "displayName": "Pet Name",
  "description": "Pet description",
  "spriteVersionNumber": 1,
  "spritesheetPath": "spritesheet.webp"
}
```

## Add a Pet via Pull Request

1. Fork this repository and clone your fork.
2. Create a branch from the latest `main`; the recommended name is `pet/<pet-id>`.
3. Add the pet directory, `pet.json`, and spritesheet.
4. Add the pet to the index in both the Chinese and English README files.
5. Commit and push the branch, then open a Pull Request targeting this repository's `main` branch.

```bash
git clone https://github.com/<your-name>/codex-pets.git
cd codex-pets
git switch -c pet/<pet-id>

git add <pet-id> README.md README_EN.md
git commit -m "Add <pet-name> pet"
git push -u origin pet/<pet-id>
```

Before opening a Pull Request, confirm that:

- The pet directory name matches the `id` in `pet.json`.
- `pet.json` is valid JSON and contains all required fields.
- `spritesheetPath` points to an existing spritesheet in the pet directory.
- The pet indexes in the Chinese and English README files are both up to date.
- The commit contains only files related to the current pet.
