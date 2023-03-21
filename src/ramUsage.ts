import os from 'os';

export const stats = setInterval(() => {
const { platform, arch, totalmem, freemem } = os;
const tRam = totalmem() / 1024 / 1024;
const fRam = freemem() / 1024 / 1024;
const usage = (fRam / tRam) * 100;

const totalRamInMB = `${fRam.toFixed(0)}MB`;
const freeRamInMB = `${tRam.toFixed(0)}MB`;

const stats = {
	OS: platform(),
	Arch: arch(),
	TotalRAM: totalRamInMB,
	FreeRAM: freeRamInMB,
	Usage: `${usage.toFixed(2)}%`
}
console.clear();
console.table(stats);
return stats;
}, 1000)
