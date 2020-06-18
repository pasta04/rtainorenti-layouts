const fs = require('fs-extra');

const Path = require('path');
const globby = require('globby');

const archiver = require('archiver');
const output = fs.createWriteStream('./rtainorenti-layouts.zip');
const archive = archiver('zip', {zlib: {level: 9}});

fs.mkdirsSync('./rtainorenti-layouts');

fs.copySync('./dashboard', './rtainorenti-layouts/dashboard');
fs.copySync('./docs', './rtainorenti-layouts/docs');
fs.copySync('./extension', './rtainorenti-layouts/extension');
fs.copySync('./graphics', './rtainorenti-layouts/graphics');
fs.copySync('./LICENSE', './rtainorenti-layouts/LICENSE');
fs.copySync('./package.json', './rtainorenti-layouts/package.json');
fs.copySync('./yarn.lock', './rtainorenti-layouts/yarn.lock');
fs.copySync('./README.md', './rtainorenti-layouts/README.md');
fs.copySync('./configschema.json', './rtainorenti-layouts/configschema.json');

archive.pipe(output);

const globs = ['./rtainorenti-layouts/'];
globby(globs).then((paths) => {
	paths.forEach((path) => {
		archive.file(path, {
			name: Path.relative(process.cwd(), path),
		});
	});
	archive.finalize();
});
