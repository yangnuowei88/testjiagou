const program = require('commander');

const validateProjectName = require('validate-npm-package-name');
const os = require('os');
const semver = require('semver');
const spawn = require('cross-spawn');
const execSync = require('child_process').execSync;

const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer'); //命令行用户交互库
const fs = require('fs-extra');
module.exports = function (args) {
    //创建项目信息问题模版
    const infoQuestions = [{
        type: 'input',
        name: 'name',
        message: '请输入项目名称:',
    }];


    inquirer.prompt(infoQuestions).then(function (answers) {
        if (typeof answers.name === undefined) {
            throw new Error("项目名称不能为空");
        }
        const projectName = answers.name;



        // These files should be allowed to remain on a failed install,
        // but then silently removed during the next create.
        const errorLogFilePatterns = [
            'npm-debug.log',
            'yarn-error.log',
            'yarn-debug.log',
        ];

        //初始package.json字段
        const packageJson = {
            version: '0.1.0',
            private: true,
        };


        createApp({
            appName: projectName,
            version: program.scriptsVersion,
            useNpm: program.useNpm
        })

        function createApp(param) {
            const { verbose, version, useNpm, template } = param;

            let appName = param.appName;

            // appName = "packages/" + appName

            const projectDirectory = path.resolve("packages/" + appName);
            // const appName = path.basename(root);


            //检测该名称是否符合npm命名规范
            checkAppName(appName);
            //确认该名称命名的目录是否存在，如果不存在则创建该目录
            fs.ensureDirSync("packages/" + appName);
            //如果目录存在，确认该目录下是否有冲突文件
            //todo 如果目录存在，直接提示目录存在，不在进行创建，则不用进行检测
            if (!isSafeToCreateProjectIn(projectDirectory, appName)) {
                process.exit(1);
            }

            console.log(`正在${chalk.green(projectDirectory)}目录下创建一个新的vue组件项目.`);
            console.log();

            packageJson.name = "sddz-rc-" + appName;

            //向目录下写入package.json文件
            fs.writeFileSync(
                path.join(projectDirectory, 'package.json'),
                //os.EOL属性是一个常量，返回当前操作系统的换行符（Windows系统是\r\n，其他系统是\n）
                //JSON.stringify的第三个参数是缩进
                JSON.stringify(packageJson, null, 2) + os.EOL
            );


            const useYarn = shouldUseYarn();
            //process cwd() 方法返回 Node.js 进程当前工作的目录。类似Linux pwd(print working directory)
            //执行安装命令时的目录
            const originalDirectory = process.cwd();
            //process.chdir()方法变更Node.js进程的当前工作目录，如果变更目录失败会抛出异常(例如，如果指定的目录不存在)。
            //切换进程执行目录至脚手架项目目录
            process.chdir(projectDirectory);

            //检测能否正常使用yarn/npm
            if (!useYarn && !checkThatNpmCanReadCwd()) {
                process.exit(1);
            }

            run(projectDirectory, appName, version, verbose, originalDirectory, template, useYarn);
        }


        function shouldUseYarn() {
            try {
                execSync('yarnpkg --version', { stdio: 'ignore' });
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }

        function checkThatNpmCanReadCwd() {
            const cwd = process.cwd();
            let childOutput = null;
            try {
                // Note: intentionally using spawn over exec since
                // the problem doesn't reproduce otherwise.
                // `npm config list` is the only reliable way I could find
                // to reproduce the wrong path. Just printing process.cwd()
                // in a Node process was not enough.
                childOutput = spawn.sync('npm', ['config', 'list']).output.join('');
            } catch (err) {
                // Something went wrong spawning node.
                // Not great, but it means we can't do this check.
                // We might fail later on, but let's continue.
                return true;
            }
            if (typeof childOutput !== 'string') {
                return true;
            }
            const lines = childOutput.split('\n');
            // `npm config list` output includes the following line:
            // "; cwd = C:\path\to\current\dir" (unquoted)
            // I couldn't find an easier way to get it.
            const prefix = '; cwd = ';
            const line = lines.find(line => line.indexOf(prefix) === 0);
            if (typeof line !== 'string') {
                // Fail gracefully. They could remove it.
                return true;
            }
            const npmCWD = line.substring(prefix.length);
            if (npmCWD === cwd) {
                return true;
            }
            console.error(
                chalk.red(
                    `Could not start an npm process in the right directory.\n\n` +
                    `The current directory is: ${chalk.bold(cwd)}\n` +
                    `However, a newly started npm process runs in: ${chalk.bold(
                        npmCWD
                    )}\n\n` +
                    `This is probably caused by a misconfigured system terminal shell.`
                )
            );
            if (process.platform === 'win32') {
                console.error(
                    chalk.red(`On Windows, this can usually be fixed by running:\n\n`) +
                    `  ${chalk.cyan(
                        'reg'
                    )} delete "HKCU\\Software\\Microsoft\\Command Processor" /v AutoRun /f\n` +
                    `  ${chalk.cyan(
                        'reg'
                    )} delete "HKLM\\Software\\Microsoft\\Command Processor" /v AutoRun /f\n\n` +
                    chalk.red(`Try to run the above two lines in the terminal.\n`) +
                    chalk.red(
                        `To learn more about this problem, read: https://blogs.msdn.microsoft.com/oldnewthing/20071121-00/?p=24433/`
                    )
                );
            }
            return false;
        }

        //命名检测
        function checkAppName(appName) {
            const validationResult = validateProjectName(appName);
            if (!validationResult.validForNewPackages) {
                console.error(
                    `不能创建名为 ${chalk.red(
                        `"${appName}"`
                    )}的工程 因为npm的命名规范约束:`
                );
                printValidationResults(validationResult.errors);
                printValidationResults(validationResult.warnings);
                process.exit(1);
            }

        }

        function printValidationResults(results) {
            if (typeof results !== 'undefined') {
                results.forEach(error => {
                    console.error(chalk.red(`  *  ${error}`));
                });
            }
        }

        function isSafeToCreateProjectIn(root, name) {
            const validFiles = [
                '.DS_Store',
                'Thumbs.db',
                '.git',
                '.gitignore',
                '.idea',
                'README.md',
                'LICENSE',
                'web.iml',
                '.hg',
                '.hgignore',
                '.hgcheck',
                '.npmignore',
                'mkdocs.yml',
                'docs',
                '.travis.yml',
                '.gitlab-ci.yml',
                '.gitattributes',
            ];
            console.log();

            const conflicts = fs
                .readdirSync(root)
                .filter(file => !validFiles.includes(file))
                // Don't treat log files from previous installation as conflicts
                .filter(
                    file => !errorLogFilePatterns.some(pattern => file.indexOf(pattern) === 0)
                );

            if (conflicts.length > 0) {
                console.log(
                    `The directory ${chalk.green(name)} contains files that could conflict:`
                );
                console.log();
                for (const file of conflicts) {
                    console.log(`  ${file}`);
                }
                console.log();
                console.log(
                    'Either try using a new directory name, or remove the files listed above.'
                );

                return false;
            }

            // Remove any remnant files from a previous installation
            const currentFiles = fs.readdirSync(path.join(root));
            currentFiles.forEach(file => {
                errorLogFilePatterns.forEach(errorLogFilePattern => {
                    // This will catch `(npm-debug|yarn-error|yarn-debug).log*` files
                    if (file.indexOf(errorLogFilePattern) === 0) {
                        fs.removeSync(path.join(root, file));
                    }
                });
            });
            return true;
        }


        function run(
            root,
            appName,
            version,
            verbose,
            originalDirectory,
            template,
            useYarn
        ) {
            //获取最终的初始化脚本库
            const packageToInstall = getInstallPackage(version, originalDirectory);
            const allDependencies = [packageToInstall];


            console.log('正在安装模块.这可能需要花费几分钟...');
            getPackageName(packageToInstall)
                .then(packageName =>
                    ({
                        isOnline: true,
                        packageName: packageName,
                    })
                )
                .then(info => {
                    const isOnline = info.isOnline;
                    const packageName = info.packageName;
                    console.log(
                        `Installing ${chalk.cyan(packageName)}...`
                    );
                    console.log();

                    //安装依赖
                    return install(root, useYarn, allDependencies, verbose, isOnline).then(
                        () => packageName
                    );
                })
                .then(packageName => {
                    checkNodeVersion(packageName);
                    setCaretRangeForRuntimeDeps(packageName);

                    const scriptsPath = path.resolve(
                        process.cwd(),
                        'node_modules',
                        packageName,
                        'scripts',
                        'init.js'
                    );

                    //获取初始化包中的脚本初始化文件
                    const init = require(scriptsPath);
                    //执行初始化操作
                    init(root, appName, verbose, originalDirectory, template);

                })
                .catch(reason => {
                    console.log();
                    console.log('Aborting installation.');
                    if (reason.command) {
                        console.log(`  ${chalk.cyan(reason.command)} has failed.`);
                    } else {
                        console.log(chalk.red('Unexpected error. Please report it as a bug:'));
                        console.log(reason);
                    }
                    console.log();

                    // On 'exit' we will delete these files from target directory.
                    //退出的时候会删除下面的文件夹和文件
                    const knownGeneratedFiles = ['package.json', 'node_modules'];
                    const currentFiles = fs.readdirSync(path.join(root));
                    currentFiles.forEach(file => {
                        knownGeneratedFiles.forEach(fileToMatch => {
                            // This remove all of knownGeneratedFiles.
                            // if (file === fileToMatch) {
                            //   console.log(`Deleting generated file... ${chalk.cyan(file)}`);
                            //   fs.removeSync(path.join(root, file));
                            // }
                        });
                    });
                    const remainingFiles = fs.readdirSync(path.join(root));
                    if (!remainingFiles.length) {
                        // Delete target folder if empty
                        console.log(
                            `Deleting ${chalk.cyan(`${appName}/`)} from ${chalk.cyan(
                                path.resolve(root, '..')
                            )}`
                        );
                        process.chdir(path.resolve(root, '..'));
                        fs.removeSync(path.join(root));
                    }
                    console.log('Done.');
                    process.exit(1);
                });


            function getInstallPackage(version, originalDirectory) {
                let packageToInstall = 'vue-template-component-init';
                //验证版本号格式是否正确
                const validSemver = semver.valid(version);
                if (validSemver) {
                    packageToInstall += `@${validSemver}`;
                } else if (version) {
                    if (version[0] === '@' && version.indexOf('/') === -1) {
                        packageToInstall += version;
                    } else if (version.match(/^file:/)) {
                        packageToInstall = `file:${path.resolve(
                            originalDirectory,
                            version.match(/^file:(.*)?$/)[1]
                        )}`;
                    } else {
                        // for tar.gz or alternative paths
                        packageToInstall = version;
                    }
                }
                return packageToInstall;
            }


            function install(root, useYarn, dependencies, verbose, isOnline) {
                return new Promise((resolve, reject) => {
                    let command;
                    let args;

                    if (useYarn) {
                        command = 'yarnpkg';
                        args = ['add', '--dev'];
                        if (!isOnline) {
                            args.push('--offline');
                        }
                        [].push.apply(args, dependencies);

                        // Explicitly set cwd() to work around issues like
                        // https://github.com/facebook/create-react-app/issues/3326.
                        // Unfortunately we can only do this for Yarn because npm support for
                        // equivalent --prefix flag doesn't help with this issue.
                        // This is why for npm, we run checkThatNpmCanReadCwd() early instead.
                        args.push('--cwd');
                        args.push(root);

                        if (!isOnline) {
                            console.log(chalk.yellow('You appear to be offline.'));
                            console.log(chalk.yellow('Falling back to the local Yarn cache.'));
                            console.log();
                        }
                    } else {
                        command = 'npm';
                        args = [
                            'install',
                            '--dev-save',
                            '--loglevel',
                            'error',
                        ].concat(dependencies);
                    }

                    if (verbose) {
                        args.push('--verbose');
                    }

                    const child = spawn(command, args, { stdio: 'inherit' });
                    child.on('close', code => {
                        if (code !== 0) {
                            reject({
                                command: `${command} ${args.join(' ')}`,
                            });
                            return;
                        }
                        resolve();
                    });
                });
            }


            // Extract package name from tarball url or path.
            function getPackageName(installPackage) {
                if (installPackage.match(/^.+\.(tgz|tar\.gz)$/)) {
                    return getTemporaryDirectory()
                        .then(obj => {
                            let stream;
                            if (/^http/.test(installPackage)) {
                                stream = hyperquest(installPackage);
                            } else {
                                stream = fs.createReadStream(installPackage);
                            }
                            return extractStream(stream, obj.tmpdir).then(() => obj);
                        })
                        .then(obj => {
                            const packageName = require(path.join(obj.tmpdir, 'package.json')).name;
                            obj.cleanup();
                            return packageName;
                        })
                        .catch(err => {
                            console.log(
                                `Could not extract the package name from the archive: ${err.message}`
                            );
                            const assumedProjectName = installPackage.match(
                                /^.+\/(.+?)(?:-\d+.+)?\.(tgz|tar\.gz)$/
                            )[1];
                            console.log(
                                `Based on the filename, assuming it is "${chalk.cyan(
                                    assumedProjectName
                                )}"`
                            );
                            return Promise.resolve(assumedProjectName);
                        });
                } else if (installPackage.indexOf('git+') === 0) {
                    return Promise.resolve(installPackage.match(/([^/]+)\.git(#.*)?$/)[1]);
                } else if (installPackage.match(/.+@/)) {
                    // Do not match @scope/ when stripping off @version or @tag
                    return Promise.resolve(
                        installPackage.charAt(0) + installPackage.substr(1).split('@')[0]
                    );
                } else if (installPackage.match(/^file:/)) {
                    const installPackagePath = installPackage.match(/^file:(.*)?$/)[1];
                    const installPackageJson = require(path.join(
                        installPackagePath,
                        'package.json'
                    ));
                    return Promise.resolve(installPackageJson.name);
                }
                return Promise.resolve(installPackage);
            }

            function checkNodeVersion(packageName) {
                const packageJsonPath = path.resolve(
                    process.cwd(),
                    'node_modules',
                    packageName,
                    'package.json'
                );
                const packageJson = require(packageJsonPath);
                if (!packageJson.engines || !packageJson.engines.node) {
                    return;
                }

                if (!semver.satisfies(process.version, packageJson.engines.node)) {
                    console.error(
                        chalk.red(
                            'You are running Node %s.\n' +
                            'Create Vue App requires Node %s or higher. \n' +
                            'Please update your version of Node.'
                        ),
                        process.version,
                        packageJson.engines.node
                    );
                    process.exit(1);
                }
            }

            function setCaretRangeForRuntimeDeps(packageName) {
                const packagePath = path.join(process.cwd(), 'package.json');
                const packageJson = require(packagePath);


                fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + os.EOL);
            }

            function makeCaretRange(dependencies, name) {
                const version = dependencies[name];

                if (typeof version === 'undefined') {
                    console.error(chalk.red(`Missing ${name} dependency in package.json`));
                    process.exit(1);
                }

                let patchedVersion = `^${version}`;

                if (!semver.validRange(patchedVersion)) {
                    console.error(
                        `Unable to patch ${name} dependency version because version ${chalk.red(
                            version
                        )} will become invalid ${chalk.red(patchedVersion)}`
                    );
                    patchedVersion = version;
                }
                dependencies[name] = patchedVersion;
            }
        }



    })
}
