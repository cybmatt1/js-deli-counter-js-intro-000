function takeANumber (line, name)
{
  line.push (name)
  var length = line.length
  return "Welcome, " +name+ ". You are number " +length+ " in line.";
}

function nowServing (line)
{
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
  return "Currently serving " +line.shift()+ "."
  }
}


function currentLine(katzDeliLine)
{

    var i = 0
    var length = katzDeliLine.length
       do {
            return "The line is currently: " +(i + 1)+ ". " +katzDeliLine[i]+ ","
            i++
        }
while (i < length)
}


/*
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else
  { 
    var i = 0
       do {
            return "The line is currently: " +(i + 1)+ ". " +katzDeliLine[i]+ ","
            i = i + 1;
        }
while (i > katzDeliLine.length())
}
*/