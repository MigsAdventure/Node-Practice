const os = require('os');

let systemInfo = {
  type: os.type(),
  os: os.platform(),
  cpuArch: os.arch(),
  cpu: os.cpus(),
  release: os.release(),
  memory: os.totalmem(),
  uptime: os.uptime(),
}









console.log(systemInfo);