<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:3B82F6,50:60A5FA,100:2563EB&height=180&section=header&text=Terminal%20Learning&fontSize=50&fontColor=FFFFFF&fontAlignY=35&desc=Command%20Line%20Basics%20for%20Developers&descAlignY=55&descSize=18&animation=scaleIn" alt="Terminal Banner" />

  <img src="https://img.shields.io/badge/Terminal-CLI-blue?style=for-the-badge" alt="Terminal CLI" />
  <img src="https://img.shields.io/badge/Topics-Navigation%20%7C%20Files%20%7C%20Git-green?style=for-the-badge" alt="Topics" />
  <img src="https://img.shields.io/badge/Status-Beginner%20Friendly-brightgreen?style=for-the-badge" alt="Beginner friendly" />

<br><br>

  <blockquote>
    <p><i>"The terminal is the fastest way to move through your project and your system."</i></p>
  </blockquote>

</div>

---

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Important Terminal Terms](#important-terminal-terms)
- [Navigation Commands](#navigation-commands)
- [Creating and Managing Files](#creating-and-managing-files)
- [Deleting Files and Folders](#deleting-files-and-folders)
- [What Are Flags?](#what-are-flags)
- [Useful Example Workflow](#useful-example-workflow)
- [Why Terminal Matters](#why-terminal-matters)
- [Quick Notes](#quick-notes)

---

## Overview

This folder is a beginner-friendly guide to using the terminal. It covers the basic commands and concepts used in web development, software setup, Git work, and project management.

### What You'll Find Here

| Topic             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Terminal basics   | Shell, command prompt, working directory, paths  |
| Navigation        | Moving through folders and files                 |
| File handling     | Creating, copying, moving, and removing files    |
| Directory actions | Making and deleting folders                      |
| Developer tools   | Git, Node, package install, and project workflow |

---

## Folder Structure

```
06-terminal/
│
├── README.md               -> Terminal learning guide
├── terminal.txt            -> Notes and examples for terminal commands
└── practice/               -> Optional folder for command practice (if added later)
```

---

## Important Terminal Terms

### 1. Terminal

The app or window where you type commands.

### 2. Shell

A command-line interface that interprets commands. Common examples:

- Bash
- Zsh
- PowerShell
- CMD

### 3. Command

A text instruction that tells the system what to do.

Example:

- ls
- cd
- pwd
- mkdir

### 4. Directory

A folder in the system.

### 5. Working Directory

The current folder in which commands are being executed.

### 6. Path

The location of a file or folder.

Examples:

- Absolute path: /home/user/project
- Windows path: C:\Users\Name\project
- Relative path: ./project or ../folder

### 7. Root Directory

The top-level folder of the system.

- Linux/macOS: /
- Windows: C:\

### 8. Flags / Options

Extra parameters added to commands to change their behavior.

Examples:

- ls -l
- ls -a
- rm -r foldername

---

## Navigation Commands

### pwd

Shows the current working directory.

```bash
pwd
```

### ls

Lists files and folders in the current directory.

```bash
ls
```

### ls -l

Shows more details such as size and permissions.

```bash
ls -l
```

### ls -a

Shows hidden files and folders.

```bash
ls -a
```

### cd

Changes the current directory.

```bash
cd foldername
```

### cd ..

Moves to the parent directory.

```bash
cd ..
```

### cd /

Moves to the root directory.

```bash
cd /
```

### cd ~

Moves to the home directory.

```bash
cd ~
```

### clear

Clears the terminal screen.

```bash
clear
```

---

## Creating and Managing Files

### mkdir

Creates a new folder.

```bash
mkdir myfolder
```

### mkdir -p

Creates nested folders automatically.

```bash
mkdir -p project/frontend/src
```

### touch

Creates a new empty file.

```bash
touch notes.txt
```

### cat

Displays the content of a file.

```bash
cat notes.txt
```

### cp

Copies a file.

```bash
cp source.txt copy.txt
```

### mv

Moves or renames a file.

```bash
mv oldname.txt newname.txt
```

### echo

Prints text in the terminal.

```bash
echo "Hello World"
```

---

## Deleting Files and Folders

### rm

Deletes a file.

```bash
rm file.txt
```

### rmdir

Deletes an empty folder.

```bash
rmdir myfolder
```

### rm -r

Deletes a folder and everything inside it.

```bash
rm -r myfolder
```

### rm -rf

Force deletes a folder or file without confirmation.

```bash
rm -rf myfolder
```

> Use this carefully because it permanently removes data.

### Windows equivalents

```bash
del file.txt
rmdir /s myfolder
```

---

## What Are Flags?

Flags are extra options added to a command to change how it works.

Examples:

```bash
ls -a
ls -l
mkdir -p new/folder
rm -r foldername
```

Common idea:

- `-l` = long format
- `-a` = include hidden files
- `-r` = recursive
- `-p` = create parent directories

Flags help you customize commands to fit your exact needs.

---

## Useful Example Workflow

```bash
pwd
ls
cd project
mkdir practice
cd practice
touch index.html
ls
```

This workflow shows how to:

1. Check your current folder
2. List files
3. Move into a project folder
4. Create a folder
5. Go inside it
6. Create a new file

---

## Why Terminal Matters

The terminal is important because it:

- Helps you navigate files quickly
- Lets you manage projects efficiently
- Is used for Git and version control
- Helps install dependencies with npm or other tools
- Is essential for backend and automation workflows

---

## Quick Notes

- Always be careful with `rm` and `rm -rf`
- Use `pwd` often when unsure where you are
- `cd ..` is a very useful command for moving back up
- `ls` helps you see what is inside a folder
- `mkdir` and `touch` are used often when creating new work

---

## Author

<div align="center">

  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/JunaidHassan19">
          <img src="https://avatars.githubusercontent.com/u/123434178?v=4" width="100" style="border-radius: 50%;" alt="Junaid Hassan"/>
          <br>
          <sub><strong>Junaid Hassan</strong></sub>
        </a>
        <br>
        <sub>🌐 Web Developer in Training</sub>
      </td>
    </tr>
  </table>

  <br>

[![GitHub](https://img.shields.io/badge/GitHub-@JunaidHassan19-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JunaidHassan19)

<sub>⭐ Star this repository if you find it helpful!</sub>

</div>

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:3B82F6,50:60A5FA,100:2563EB&height=100&section=footer" alt="Footer Banner" />

<sub><i>Built with ⚡ and lots of <code>{ }</code></i></sub>

</div>
