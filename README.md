# Multi-Repo Multi-Project: v2
Example of managing a front-end app made up of multiple projects which are distributed across multiple git repos


### npm scripts

See all your environment variables (good reference to discover what might be available for use in your npm scripts)
```
npm run env
```


Test
```
npm run test
```



## Working with git subtrees
We leverage the npm package [git-subtree](https://github.com/photusenigma/git-subtree) for managing our subtrees.  _Note We're actually using a customized version located at my fork until a PR gets merged._
    
To get a list of available commands, simply run the following on the commandline:
```
gitsbt
```

If you have need for more advanced usage, please read instructions in the readme which can be found here - [git-subtree on github](https://github.com/photusenigma/git-subtree).
    
Configuration for this project's git subtrees is located at the project root in the file _subtrees.json_.

**important**    
Keep your commits for file changes in a subtree directory separate from file changes in other directories!   

This means you'll want one commit for _subtreeA_, another for _subtreeB_, and yet another for the top level app...even if all the changes are related to each other and might be related. This will help keep pushes up to the subtree remotes nice an clean, and management of these changes relatively easy.

**additional notes:**    
You need to have your top level repo which contains the git subtrees fully committed and in sync with it's remote before you try to push changes back up to any of the subtree remotes.  Make sure there are no uncommitted changes and/or outstanding commits to be pushed up before you try to push changes to the subtree remotes.


You don't need to do a `gitsbt add` or `gitsbt commit` if changes you've made in the files related to a subtree have been committed under the top level repo.  Just do a `gitsbt push <subtreeName>`.

example:
```console
prompt$ gitsbt push app
git status --porcelain --untracked=no
git subtree push --prefix=packages/app app master --squash
git push using:  app master
To https://github.com/photusenigma/multi-repo-multi-project-v2-app.git
   b67c67c..0c89034  0c890349dae3527279184063aa50bf2cc75862e0 -> master
```




## a pre-commit hook auto-formats code
We're using the npm package [prettier](https://github.com/prettier/prettier) to reformat code to match formatting rules as part of a pre-commit hook.  This means the actual committed code may appear formatted differently.  See the readme doc at the linke to prettier above if you wish to have it not auto format on commit and instead throw errors or stop commit for you to review changes first.

Worth noting...    
We're adopting the approach taken by the [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/package.json) project for this autoformatting approach.  Ironically, you might also notice they are also using [lerna](https://github.com/lerna/lerna)!

