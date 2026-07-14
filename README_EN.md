# codex-pets

[简体中文](./README.md) | **English**

A public repository for collecting and sharing Codex pet resources.

## Pet Index

| Name | ID | Version | Description | Contributor | Path |
| --- | --- | ---: | --- | --- | --- |
| Keqing | `genshin-impact-keqing` | 2 | A chibi Codex pet based on Keqing's official *Genshin Impact* design, combining poised elegance with a distinctive Electro style. | [YaKun9](https://github.com/YaKun9) | [View](./genshin-impact-keqing/) |
| Six Paths Naruto | `naruto-six-paths` | 2 | A chibi animated pet of Naruto in Six Paths Sage Mode, featuring a striking golden chakra cloak and Six Paths markings, with a brave and warmhearted presence. | [GitXMING](https://github.com/GitXMING) | [View](./naruto-six-paths/) |
| Yaoguang · Yaoyao | `honkai-star-rail-yaoguang-yaoyao` | 2 | A chibi Codex pet inspired by Yaoguang's Yaoyao-themed shake interaction in *Honkai: Star Rail*, retaining her long silver-white hair, teal-blue peacock-feather ornaments, and ornate Xianzhou attire. | [YaKun9](https://github.com/YaKun9) | [View](./honkai-star-rail-yaoguang-yaoyao/) |
| Acheron | `honkai-star-rail-acheron` | 2 | A polished official-design-inspired chibi Codex pet of Acheron from *Honkai: Star Rail*, featuring her cool composure, long blade, and a red-and-white ultimate draw animation. | [YaKun9](https://github.com/YaKun9) | [View](./honkai-star-rail-acheron/) |
| Iuno | `wuthering-waves-iuno` | 2 | An elegant chibi Codex pet based on Iuno from *Wuthering Waves*, preserving her deep-blue gradient hair, golden headpiece, and moon-ring motif. | [yanhuuo](https://github.com/yanhuuo) | [View](./wuthering-waves-iuno/) |

## Usage

### Manual Installation

1. Clone the repository and enter the project directory:

```bash
git clone https://github.com/YaKun9/codex-pets.git
cd codex-pets
```

2. Choose an ID from the pet index and copy the entire pet directory into Codex's `pets` directory. Use `$CODEX_HOME/pets/` when `CODEX_HOME` is set; otherwise use `~/.codex/pets/`.

Windows PowerShell:

```powershell
$petId = "genshin-impact-keqing"
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME ".codex" }
$petsDir = Join-Path $codexHome "pets"

New-Item -ItemType Directory -Force -Path $petsDir | Out-Null
Copy-Item -Recurse -LiteralPath (Join-Path $PWD $petId) -Destination $petsDir
```

macOS / Linux:

```bash
PET_ID="genshin-impact-keqing"
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"

mkdir -p "$CODEX_HOME/pets"
cp -R "./$PET_ID" "$CODEX_HOME/pets/"
```

3. In the ChatGPT desktop app, open **Settings > Pets**, select **Refresh**, choose the pet, and enter `/pet` to wake it. In Codex CLI, enter `/pets` or `/pet` to open the pet picker.

Custom pets are stored locally and do not automatically sync to ChatGPT Web. See the official [Pets documentation](https://learn.chatgpt.com/docs/pets) for more information.

### Install with AI

Send the prompt below to an AI that can access your local files and the internet. Replace the pet ID with the entry you want to install:

```text
Install the Codex pet `genshin-impact-keqing` for me:

- Get the pet directory from https://github.com/YaKun9/codex-pets.
- Determine the current user's CODEX_HOME; if it is not set, use ~/.codex.
- Copy the entire pet directory into <CODEX_HOME>/pets/. The final directory name must match the id in pet.json.
- Confirm that pet.json and the spritesheet referenced by spritesheetPath both exist. Do not modify the pet assets.
- When finished, report the installed path and explain how to select the pet in the desktop app or Codex CLI.
```

## Directory Structure

Each pet lives in its own directory. The directory name must match the `id` in `pet.json` and use lowercase kebab-case in the form `<series>-<character-or-form>`, such as `genshin-impact-keqing` or `naruto-six-paths`.

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
  "id": "series-pet",
  "displayName": "Pet Name",
  "description": "Pet description",
  "spriteVersionNumber": 2,
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
