const gitCommands = [
  {
    label: "Getting Started",
    commands: [
      {
        id: 1,
        title: "Initialize a repository",
        command: "git init",
      },
      {
        id: 2,
        title: "Clone a repository",
        command: "git clone &lt;url&gt;",
      },
    ],
  },
  {
    label: "Prepare to Commit",
    commands: [
      {
        id: 1,
        title: "Stage file",
        command: "git add &lt;file&gt;",
      },
      {
        id: 2,
        title: "Stage all changes",
        command: "git add .",
      },
      {
        id: 3,
        title: "Unstage one file",
        command: "git reset &lt;file&gt;",
      },
      {
        id: 4,
        title: "Unstage everything",
        command: "git reset",
      },
      {
        id: 5,
        title: "Check what you added",
        command: "git status",
      },
    ],
  },
  {
    label: "Make Commits",
    commands: [
      {
        id: 1,
        title: "Make a commit",
        command: "git commit -m 'message'",
      },
      {
        id: 2,
        title: "Commit all unstaged changes",
        command: "git commit -am 'message'",
      },
      {
        id: 3,
        title: "Add a file you forgot to last commit",
        command: "git commit --amend",
      },
    ],
  },
  {
    label: "Branches",
    commands: [
      {
        id: 1,
        title: "List branches",
        command: "git branch",
      },
      {
        id: 2,
        title: "Create a branch",
        command: "git branch &lt;name&gt;",
      },
      {
        id: 3,
        title: "Switch branch",
        command: "git switch &lt;name&gt;",
      },
      {
        id: 4,
        title: "Create and switch",
        command: "git switch -c &lt;name&gt;",
      },
      {
        id: 5,
        title: "Delete branch",
        command: "git branch -d &lt;name&gt;",
      },
      {
        id: 6,
        title: "Force delete a branch",
        command: "git branch -D &lt;name&gt;",
      },
    ],
  },
  {
    label: "Merging",
    commands: [
      {
        id: 1,
        title: "Merge main branch with another branch",
        command: "git merge &lt;branch&gt;",
      },
      {
        id: 2,
        title: "Rebase Merge main branch with another branch",
        command: "git rebase &lt;branch&gt;",
      },
    ],
  },
  {
    label: "Diff",
    commands: [
      {
        id: 1,
        title: "Diff all staged and unstaged changes",
        command: "git diff HEAD",
      },
      {
        id: 2,
        title: "Diff just staged changes",
        command: "git diff --staged",
      },
      {
        id: 3,
        title: "Diff just unstaged changes",
        command: "git diff",
      },
      {
        id: 4,
        title: "Show diff between a commit and its parent",
        command: "git show &lt;commitID or branch name or tag&gt;",
      },
      {
        id: 5,
        title: "Diff two commits",
        command: "git diff &lt;commit&gt; &lt;commit&gt;",
      },
      {
        id: 6,
        title: "Diff one file since a commit",
        command: "git diff &lt;commit&gt; &lt;file&gt;",
      },
    ],
  },
  {
    label: "Discard Your Changes",
    commands: [
      {
        id: 1,
        title: "Delete unstaged changes to one file",
        command: "git restore &lt;file&gt;",
      },
      {
        id: 2,
        title: "Delete all staged and unstaged changes to one file",
        command: "git checkout HEAD &lt;file&gt;",
      },
      {
        id: 3,
        title: "Delete untracked files",
        command: "git clean",
      },
    ],
  },
  {
    label: "Code Archaeology",
    commands: [
      {
        id: 1,
        title: "Show every commit that modified a file",
        command: "git log &lt;file&gt;",
      },
      {
        id: 2,
        title: "Look at a branch's history",
        command: "git log",
      },
      {
        id: 3,
        title: "Look at a branch's history (short version)",
        command: "git log --oneline",
      },
      {
        id: 4,
        title: "Look at a branch's history (graph view)",
        command: "git log --graph main",
      },
      {
        id: 5,
        title: "Show who last changed each line of a file",
        command: "git blame &lt;file&gt;",
      },
    ],
  },
  {
    label: "Restore an Old File",
    commands: [
      {
        id: 1,
        title: "Get the version of a file from another commit (detached head)",
        command: "git checkout &lt;commit&gt; &lt;file&gt;",
      },
      {
        id: 2,
        title: "Get the version of a file from another commit",
        command: "git restore &lt;file&gt; --source &lt;commit&gt;",
      },
      {
        id: 3,
        title: "Get the version of files from another commit (detached head)",
        command: "git checkout &lt;commit&gt;",
      },
      {
        id: 4,
        title: "Get the version of files from another commit",
        command: "git restore --source &lt;commit&gt;",
      },
    ],
  },
  {
    label: "Remote",
    commands: [
      {
        id: 1,
        title: "Add a Remote",
        command: "git remote add &lt;name&gt; &lt;url&gt;",
      },
      {
        id: 2,
        title: "List remotes",
        command: "git remote -v",
      },
      {
        id: 3,
        title: "Remove a Remote",
        command: "git remote rm origin",
      },
    ],
  },
  {
    label: "Push Your Changes",
    commands: [
      {
        id: 1,
        title: "Push the branch to the remote",
        command: "git push &lt;remote&gt; &lt;branch&gt;",
      },
      {
        id: 2,
        title:
          "Push a branch that you've never pushed before (after this just use git push)",
        command: "git push -u &lt;remote&gt; &lt;branch&gt;",
      },
      {
        id: 3,
        title: "Push the current branch to its remote (tracking branch)",
        command: "git push",
      },
      {
        id: 4,
        title: "Push tags",
        command: "git push --tags",
      },
    ],
  },
  {
    label: "Pull Changes",
    commands: [
      {
        id: 1,
        title: "Fetch changes (but don't change any of your local branches)",
        command: "git fetch origin main",
      },
      {
        id: 2,
        title: "Fetch changes and then merge them into your current branch",
        command: "git pull &lt;remote&gt; &lt;branch&gt;",
      },
      {
        id: 3,
        title:
          "Fetch changes and then merge them into your current branch (short version)",
        command: "git pull",
      },
    ],
  },
  {
    label: "Configure Git",
    commands: [
      {
        id: 1,
        title: "Set username config option global",
        command: "git config --global user.name 'Your Name'",
      },
      {
        id: 2,
        title: "Set user email config option local",
        command: "git config user.email 'Your email'",
      },
    ],
  },
];

export default gitCommands;
