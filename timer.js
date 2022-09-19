var waitTime =3000;
var currentTime =0;
var waitInterval = 500;
var percentWait=0;
// console.log('wait for it.....');
function writeWaitingPercent(p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Waiting......${p}`);
	
}

 var interval=setInterval(function () 
{
currentTime += waitInterval;
percentWait=Math.floor((currentTime/waitTime)*100);
//console.log(`waiting ${currentTime/1000} seconds...`);
writeWaitingPercent(percentWait);
},waitInterval);

setTimeout(function()	{
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log('done');
},waitTime);
process.stdout.write("\n\n\n\n");
writeWaitingPercent(0);