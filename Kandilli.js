var elem = document.getElementsByTagName('pre')[0];
var text = elem.innerText;
var index = /\d\d\d\d\.\d\d*/.exec(text).index;
var introduction = text.substring(0, index);
text = text.substring(index);
var lines = text.match(/[^\r\n]+/g);
var lineObjArr = [];
for (var i = 0; i < lines.length; i++)
{
	var lineObj = {};
	lineObj.Magnitude = parseFloat(lines[i].substring(60, 64));
	lineObj.Text = lines[i];
	lineObjArr.push(lineObj);
}
lineObjArr.sort(function(a, b){return b.Magnitude - a.Magnitude;});
var sortedText = '';
for (var i = 0; i < lineObjArr.length; i++)
{
	sortedText += lineObjArr[i].Text + '\r\n';
}
elem.innerText = introduction + sortedText;
