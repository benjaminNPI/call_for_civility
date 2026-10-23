// Builds a self-contained deploy folder at ../dist for hosts like XMission (cPanel / Passenger):
//   dist/server.js     - server with express + cors bundled in (no npm install needed)
//   dist/public/       - the built client
//   dist/package.json  - startup info for the host
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const dist = path.join(__dirname, '../dist');
const clientBuild = path.join(__dirname, '../client/build');

if (!fs.existsSync(path.join(clientBuild, 'index.html'))) {
  console.error('client/build not found. Run "npm run build" in client first.');
  process.exit(1);
}

fs.rmSync(dist, { recursive: true, force: true });

esbuild.buildSync({
  entryPoints: [path.join(__dirname, 'server.js')],
  outfile: path.join(dist, 'server.js'),
  bundle: true,
  platform: 'node',
  target: 'node14',
  logLevel: 'warning',
});

fs.cpSync(clientBuild, path.join(dist, 'public'), { recursive: true });

fs.writeFileSync(
  path.join(dist, 'package.json'),
  JSON.stringify(
    {
      name: 'call_for_civility',
      version: '2.0.0',
      private: true,
      main: 'server.js',
      scripts: { start: 'node server.js' },
    },
    null,
    2
  ) + '\n'
);

console.log('Built dist/ (startup file: server.js)');
