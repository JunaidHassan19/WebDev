<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:22C55E,50:10B981,100:15803D&height=180&section=header&text=Git%20%26%20GitHub%20Learning&fontSize=48&fontColor=FFFFFF&fontAlignY=35&desc=Version%20Control%20%26%20Collaboration%20for%20Developers&descAlignY=55&descSize=18&animation=scaleIn" alt="Git and GitHub Banner" />

  <img src="https://img.shields.io/badge/Git-Version%20Control-brightgreen?style=for-the-badge" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-Remote%20Collaboration-black?style=for-the-badge" alt="GitHub" />
  <img src="https://img.shields.io/badge/Topics-Branches%20%7C%20Commits%20%7C%20Pulls-blue?style=for-the-badge" alt="Topics" />
  <img src="https://img.shields.io/badge/Status-Beginner%20Friendly-success?style=for-the-badge" alt="Beginner Friendly" />

<br><br>

  <blockquote>
    <p><i>"Git helps you track changes; GitHub helps you share and collaborate with the world."</i></p>
  </blockquote>

</div>

---

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Why Git and GitHub Matter](#why-git-and-github-matter)
- [Important Git Terms](#important-git-terms)
- [Basic Git Commands](#basic-git-commands)
- [Configuring Git](#configuring-git)
- [Clone, Status, Add, Commit, Push](#clone-status-add-commit-push)
- [Git Workflow](#git-workflow)
- [Branches and Merging](#branches-and-merging)
- [Pull Command and Merge Conflicts](#pull-command-and-merge-conflicts)
- [Fixing Mistakes](#fixing-mistakes)
- [Forking a Repository](#forking-a-repository)
- [Quick Notes](#quick-notes)

---

## Overview

This folder is a beginner-friendly guide to Git and GitHub. It covers the core concepts and commands used in modern web development, teamwork, and version control.

### What You'll Find Here

| Topic         | Details                                        |
| ------------- | ---------------------------------------------- |
| Git basics    | Repositories, commits, branches, merge, remote |
| GitHub basics | Remote hosting, collaboration, pull requests   |
| Workflow      | Clone, edit, add, commit, push                 |
| Team work     | Branches, pull requests, merge conflicts       |
| Recovery      | Reset, restore, fixing mistakes                |

---

## Folder Structure

```
07-git & github/
│
├── README.md             -> Git and GitHub learning guide
├── gitAndGithub.txt      -> Notes and examples for Git/GitHub
└── practice/             -> Optional folder for Git practice
```

---

## Why Git and GitHub Matter

Git is a version control system that tracks changes in your project over time.

GitHub is an online platform where developers store Git repositories and collaborate with others.

### Benefits of Git and GitHub

- Save versions of your code
- Revert to earlier states
- Work with teammates without destroying each other's work
- Share projects online
- Collaborate with open-source communities
- Maintain project history

---

## Important Git Terms

### 1. Repository (Repo)

A project folder tracked by Git.

### 2. Commit

A saved version of the project with a message describing the update.

### 3. Branch

A separate line of development used for features or fixes.

### 4. Merge

Combining changes from one branch into another.

### 5. Clone

Downloading a repository from GitHub to your local machine.

### 6. Pull

Getting the latest changes from the remote repository.

### 7. Push

Uploading your local changes to GitHub.

### 8. Remote

The online version of your repository hosted on GitHub.

### 9. Working Directory

The project folder you are currently editing.

### 10. Staging Area

Files prepared to be included in the next commit.

### 11. Fork

Your own copy of someone else’s GitHub repository.

---

## Basic Git Commands

### git init

Initializes a new Git repository.

```bash
git init
```

### git status

Shows the current state of files in the repository.

```bash
git status
```

### git add <file>

Stages a specific file.

```bash
git add index.html
```

### git add .

Stages all changed files.

```bash
git add .
```

### git commit -m "message"

Creates a commit with a message.

```bash
git commit -m "Add homepage layout"
```

### git branch

Shows all branches in the repository.

```bash
git branch
```

### git checkout -b branchName

Creates and switches to a new branch.

```bash
git checkout -b feature/login
```

### git merge branchName

Merges a branch into the current branch.

```bash
git merge feature/login
```

### git log

Displays commit history.

```bash
git log
```

### git remote -v

Shows the remote repository URLs.

```bash
git remote -v
```

---

## Configuring Git

Before using Git, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

To check your settings:

```bash
git config --global --list
```

This helps Git attach your name and email to each commit.

---

## Clone, Status, Add, Commit, Push

### Clone

Download a project from GitHub:

```bash
git clone https://github.com/username/repository.git
cd repository
```

### Status

Check what changed:

```bash
git status
```

### Add

Stage files before commit:

```bash
git add fileName.html
git add .
```

### Commit

Save your changes:

```bash
git commit -m "Update project files"
```

### Push

Upload your commits to GitHub:

```bash
git push origin main
```

If it is the first push for a branch:

```bash
git push -u origin main
```

---

## Git Workflow

A common Git workflow looks like this:

1. Create or clone a repository
2. Make changes in your files
3. Check git status
4. Add files using git add .
5. Commit changes with git commit -m "message"
6. Pull the latest updates if needed
7. Push changes to GitHub

Example:

```bash
git status
git add .
git commit -m "Add responsive navbar"
git pull origin main
git push origin main
```

---

## Branches and Merging

Branches let you work on features without affecting the main project.

### Create a branch

```bash
git checkout -b feature/homepage
```

or

```bash
git switch -c feature/homepage
```

### Switch branches

```bash
git checkout main
git checkout feature/homepage
```

### Merge a branch into main

```bash
git checkout main
git merge feature/homepage
```

This combines the changes from the feature branch into the main branch.

---

## Pull Command and Merge Conflicts

### Pull

Get the latest updates from remote:

```bash
git pull origin main
```

### Merge conflict

A merge conflict happens when Git cannot automatically decide which version of a file should be kept.

Example:

```bash
git pull origin main
```

When a conflict appears:

- Open the conflicted file
- Decide which code should remain
- Remove the conflict markers
- Save the file
- Stage it and commit it

```bash
git add <file>
git commit -m "Resolve merge conflict"
```

---

## Fixing Mistakes

Git has commands to undo mistakes.

### Restore a file

```bash
git restore <file>
```

### Restore everything

```bash
git restore .
```

### Undo the last commit but keep changes

```bash
git reset --soft HEAD~1
```

### Undo the last commit and remove changes

```bash
git reset --hard HEAD~1
```

> Use reset --hard carefully because it permanently removes changes.

---

## Forking a Repository

A fork is your own copy of someone else's repository on GitHub.

### Why use a fork?

- You can make changes without affecting the original repo
- Common in open-source development
- Useful for contributing to public projects

### Steps

1. Open the repository on GitHub
2. Click Fork
3. Clone your fork to your machine

```bash
git clone https://github.com/yourusername/repository.git
```

If you want to sync your fork with the original repository:

```bash
git remote add upstream https://github.com/originalowner/repository.git
git fetch upstream
git merge upstream/main
```

---

## Quick Notes

- Git works locally on your machine.
- GitHub stores repos online and supports collaboration.
- Always commit with a clear message.
- Use branches for features and fixes.
- Pull before pushing to reduce conflicts.
- Use forks when working on someone else's project.

---

## Summary

Git helps developers track changes and manage versions of their code, while GitHub provides a platform for hosting repositories, collaborating, and sharing projects. Together, they are essential tools in software development.
