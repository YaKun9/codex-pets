# codex-pets

**简体中文** | [English](./README_EN.md)

一个用于收集和分享 Codex 宠物资源的公开仓库。

## 宠物索引

| 宠物 | ID | 精灵版本 | 介绍 | 资源 |
| --- | --- | ---: | --- | --- |
| 刻晴 | `genshin-impact-keqing` | 2 | 《原神》刻晴的官方设定风 Q 版 Codex 宠物，干练优雅，带有鲜明的雷元素气质。 | [查看目录](./genshin-impact-keqing/) |
| 六道鸣人 | `naruto-six-paths` | 2 | 鸣人六道仙人形态的 Q 版动画宠物，金色查克拉外衣与六道纹样醒目，勇敢而温暖。 | [查看目录](./naruto-six-paths/) |

## 目录结构

每个宠物使用独立目录，目录名应与 `pet.json` 中的 `id` 一致，并采用 `<作品>-<角色或形态>` 的小写 kebab-case 格式，例如 `genshin-impact-keqing`、`naruto-six-paths`。

```text
codex-pets/
├── README.md
├── README_EN.md
└── <pet-id>/
    ├── pet.json
    └── spritesheet.webp
```

`pet.json` 示例：

```json
{
  "id": "series-pet",
  "displayName": "宠物名称",
  "description": "宠物介绍",
  "spriteVersionNumber": 1,
  "spritesheetPath": "spritesheet.webp"
}
```

## 通过 Pull Request 添加宠物

1. Fork 本仓库，并克隆你的 Fork。
2. 从最新的 `main` 创建分支，推荐命名为 `pet/<pet-id>`。
3. 添加宠物目录、`pet.json` 和精灵图。
4. 在中英文 README 的“宠物索引”中增加对应条目。
5. 提交并推送分支，然后向本仓库的 `main` 分支发起 Pull Request。

```bash
git clone https://github.com/<your-name>/codex-pets.git
cd codex-pets
git switch -c pet/<pet-id>

git add <pet-id> README.md README_EN.md
git commit -m "Add <pet-name> pet"
git push -u origin pet/<pet-id>
```

提交 Pull Request 前请确认：

- 宠物目录名与 `pet.json` 的 `id` 一致。
- `pet.json` 是有效 JSON，且字段完整。
- `spritesheetPath` 指向目录中实际存在的精灵图。
- 中英文 README 的宠物索引已经同步更新。
- 本次提交只包含当前宠物相关文件。
