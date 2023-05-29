const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer'); //命令行用户交互库
const ora = require('ora');
const fs = require('fs-extra');
const download = require('download-git-repo');
const exists = require('fs').existsSync;
const shell = require('shelljs');
const cwd = process.cwd();
const which = require('which');
const child_process = require('child_process');
module.exports = function (args) {
  //创建类型问题模版
  const typeQuestions = [{
    type: 'list',
    name: 'type',
    message: '你需要创建哪种类型的脚手架?',
    choices: [
      {
        name: 'pc (适用于pc端项目)',
        value: 'pc',
      },
      {
        name: 'mobile (适用于移动端、微信、app类型项目)',
        value: 'mobile',
      }
    ],
  }];

  //创建项目信息问题模版
  const infoQuestions = [{
    type: 'input',
    name: 'name',
    message: '请输入项目名称(默认为sddz-frontend-template):',
  }, {
    type: 'input',
    name: 'path',
    message: '请输入构建文件夹路径(默认为当前文件夹 ./):',
  }];

  //是否直接安装依赖包问题模版
  const npmQuestions = [{
    type: 'list',
    name: 'type',
    message: '是否自动安装相应第三方依赖包?',
    choices: [
      {
        name: 'yarn安装 (请确认源已切换至sddz私库源)',
        value: 'yarn',
      },
      {
        name: 'npm安装 (请确认源已切换至sddz私库源)',
        value: 'npm',
      },
      {
        name: '稍后手动安装',
        value: 'no',
      }
    ],
  }];


  inquirer.prompt(typeQuestions).then(function (nt) {
    const projectType = nt.type;

    inquirer.prompt(infoQuestions).then(function (answers) {
      const projectName = answers.name || 'sddz-frontend-template';
      const targetPath = path.join(cwd, answers.path || './');

      if (exists(path.join(targetPath, projectName))) {
        console.log(chalk.red('[错误]: 试图创建的项目文件夹名已存在'));
        console.log(chalk.red('项目构建失败'));
        return;
      }

      const spinner = ora('项目构建中...');
      spinner.start();
      //http://192.168.52.18:13000/hstss/power-pc.git
      download(`direct:https://github.com/yangnuowei88/vue-netease-music`, path.join(targetPath, projectName), {clone: true}, function (err) {
        spinner.stop();
        if (err) {
          console.log(chalk.red(`从远程仓库(gitcoffee私库)获取模版失败:`, err));
        } else {
          //初始化npm
          console.log(chalk.green('正在初始化npm...'));
          // shell.exec(`cd ${path.join(targetPath, projectName)}`);
          //当前shell工具不支持交互式input命令，使用原生库child_process解决
          child_process.execSync('npm init', {stdio: 'inherit', cwd: path.join(targetPath, projectName)});
          // child.stdout.on('data', function () {
          console.log(chalk.green('初始化npm完成'));

          //安装npm依赖
          inquirer.prompt(npmQuestions).then(function (nt) {
            const type = nt.type;
            if (type !== 'no') {
              const spinnerInstall = ora(chalk.hex('#1db0e5')('正在安装依赖库...'));
              spinnerInstall.start();

              try {
                which.sync(type);

              } catch (e) {
                throw new Error(`please install ${type}`);
              }

              console.log(`${path.join(targetPath, projectName)}`)
              shell.exec(`cd ${path.join(targetPath, projectName)} && ${type} install`, function () {
                // console.log(chalk.green(npm + ' install end'));
                spinnerInstall.stop();
                console.log(chalk.green('依赖库安装完成'));
                console.log(chalk.green('项目' + (answers.name || 'sddz-frontend-template') + '构建完成'));
              });
            } else {
              console.log(chalk.green('项目' + (answers.name || 'sddz-frontend-template') + '构建完成'));
            }
          })

          // })
        }
      });
    })
  })
}
