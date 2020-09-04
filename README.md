customization jest

1. download npm install --save-dev jest
2. dowlond babel npm i --save-dev babel-jest @babel/core @babel/preset-env
3. create babel.config.js
   module.exports = {
   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
   };

4. mkdir **test**

==========================================>

customization eslint

1. npm install --save-dev eslint
2. npx eslint --init (create .eslintrc.yml)
3. npx eslint (filename) (--fix)

===========================================>

customization git.
to do global setup {
(git config --global user name '....')
(git config --global user.email '....')
}

1. git init
2. create .gitignore => {
   /node_modules/
   \*.log
   dist
   coverage
   }
